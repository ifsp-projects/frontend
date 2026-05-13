import { type NextRequest, NextResponse } from 'next/server'
import { RateLimiterMemory } from 'rate-limiter-flexible'

import { instanceMotor } from '@/instances/motor'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'
import { getIpAdress } from '@/utils/helpers/get-ip-address'

const rateLimiter = new RateLimiterMemory({
  points: 10,
  duration: 60
})

export const PATCH = async (
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const ip = getIpAdress(req)

  const { slug } = await params

  try {
    await rateLimiter.consume(ip)

    const {
      token,
      ...rest
    }: Partial<
      Omit<PostgresOrganization, 'id' | 'created_at' | 'updated_at'>
    > & {
      token: string
    } = await req.json()

    if (!rest.email || !slug) {
      return NextResponse.json(
        {
          message:
            'Não foi possível atualizar a sua ONG pois faltam informações!'
        },
        { status: 400 }
      )
    }

    const response = await instanceMotor.organizations.updateOrganization({
      payload: {
        ...rest
      },
      token
    })

    if (response.status === 500) {
      return NextResponse.json(
        { message: 'Erro! Não foi possível atualizar sua ONG.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Finalizado! Sua ONG está atualizado.',
        organizationProfile: response?.data?.organization
      },
      { status: 201 }
    )
  } catch (error) {
    console.error({
      'PATCH/api/organizations/[slug]': error.message
    })

    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    )
  }
}
