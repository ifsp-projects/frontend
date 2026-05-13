import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { RateLimiterMemory } from 'rate-limiter-flexible'

import { instanceMotor } from '@/instances/motor'
import { getIpAdress } from '@/utils/helpers/get-ip-address'

const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60
})

export const PATCH = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params

  const ip = getIpAdress(req)

  try {
    await rateLimiter.consume(ip)

    const { token, ...rest } = await req.json()

    const { data, status } = await instanceMotor.pages.updatePage({
      payload: {
        id,
        ...rest
      },
      token
    })

    if (status !== 200) {
      return NextResponse.json(
        { message: 'Cannot update this Page.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ...data, status: 200 })
  } catch (error) {
    console.error({
      'PATCH/api/pages/update-copies': error.message
    })

    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    )
  }
}
