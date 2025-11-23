import { streamText } from 'ai'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

import { openAiApk } from '@/constants/environments/openai-api-key'
import { organizationID } from '@/constants/environments/openai-organization-id'
import { projectID } from '@/constants/environments/openai-project-id'
import { openai as openaiProvider } from '@ai-sdk/openai'

const openai = new OpenAI({
  apiKey: openAiApk,
  organization: organizationID,
  project: projectID
})

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()

    const { messages } = body

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { message: 'Messages are required and must be a non-empty array' },
        { status: 400 }
      )
    }

    const lastMessage = messages[messages.length - 1]
    const promptContent =
      typeof lastMessage.content === 'string' ? lastMessage.content : ''

    if (!promptContent || promptContent.trim() === '') {
      return NextResponse.json(
        { message: 'Message content is empty' },
        { status: 400 }
      )
    }

    const moderation = await openai.moderations.create({
      input: promptContent,
      model: 'omni-moderation-latest'
    })

    const result = moderation.results[0]

    if (result.flagged) {
      const triggeredCategories = Object.keys(result.categories).filter(
        category =>
          result.categories[category as keyof typeof result.categories]
      )

      return NextResponse.json(
        {
          message: 'Your input violates our content policy.',
          details: triggeredCategories
        },
        { status: 400 }
      )
    }

    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }))

    const streamResult = await streamText({
      model: openaiProvider('gpt-4o-mini'),
      messages: formattedMessages
    })

    return streamResult.toTextStreamResponse()
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: error?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
