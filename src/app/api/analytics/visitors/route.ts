import type {
  VisitorsErrorResponse,
  VisitorsRange
} from 'capivara-solidaria-ts-sdk'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { instanceMotor } from '@/services/motor'

export async function GET(request: NextRequest) {
  const authorization = request.headers.get('authorization')

  if (!authorization?.startsWith('Bearer ')) {
    return NextResponse.json<VisitorsErrorResponse>(
      { error: 'Sessão inválida' },
      { status: 401 }
    )
  }

  const token = authorization.replace('Bearer ', '')

  const slug = request.nextUrl.searchParams.get('slug')
  const range = request.nextUrl.searchParams.get(
    'range'
  ) as VisitorsRange | null
  const date = request.nextUrl.searchParams.get('date')

  if (!slug || !range) {
    return NextResponse.json<VisitorsErrorResponse>(
      { error: 'Parâmetros inválidos' },
      { status: 400 }
    )
  }

  try {
    const response = await instanceMotor.visitors.getVisitors({
      slug,
      range,
      ...(date ? { date } : {}),
      token
    })

    console.log('VISITORS RESPONSE:', response.data)

    return NextResponse.json(response.data)
  } catch {
    return NextResponse.json<VisitorsErrorResponse>(
      { error: 'Não foi possível carregar os visitantes' },
      { status: 502 }
    )
  }
}
