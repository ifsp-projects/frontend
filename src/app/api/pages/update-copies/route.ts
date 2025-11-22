import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { instanceMotor } from '@/instances/motor'

export const POST = async (req: NextRequest) => {
  try {
    const { id, token, sections } = await req.json()

    const { status } = await instanceMotor.pages.updatePage({
      payload: {
        id,
        sections
      },
      token
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: 'Cannot update this Page.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ status: 200 })
  } catch (error) {
    console.error({
      'PUT/api/pages/update-copies': error.message
    })

    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    )
  }
}
