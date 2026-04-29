import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { RateLimiterMemory } from 'rate-limiter-flexible'

import { instanceMotor } from '@/instances/motor'
import { getIpAdress } from '@/utils/helpers/get-ip-address'

const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60
})

export const POST = async (req: NextRequest) => {
  const ip = getIpAdress(req)

  try {
    await rateLimiter.consume(ip)

    const { id, token, sections, order } = await req.json()

    const { status } = await instanceMotor.pages.updatePage({
      payload: {
        id,
        sections,
        order
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
