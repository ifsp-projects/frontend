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
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json(
        { message: 'Prompt is required' },
        { status: 400 }
      )
    }

    const moderation = await openai.moderations.create({
      input: prompt,
      model: 'omni-moderation-latest'
    })

    const result = moderation.results[0]

    if (result.flagged) {
      const triggeredCategories = Object.keys(result.categories).filter(
        category =>
          result.categories[category as keyof typeof result.categories]
      )

      console.warn('Blocked content:', triggeredCategories)

      return NextResponse.json(
        {
          message: 'Your input violates our content policy.',
          details: triggeredCategories
        },
        { status: 400 }
      )
    }

    const streamResult = streamText({
      model: openaiProvider('gpt-4o-mini'),
      messages: [{ role: 'user', content: prompt }]
    })

    return streamResult.toTextStreamResponse()
  } catch (error) {
    console.error({
      'POST/api/openai/continous-chat': error.message
    })

    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    )
  }
}
