import type {
  VisitorsErrorResponse,
  VisitorsResponse
} from 'capivara-solidaria-ts-sdk'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { apiBaseUrl } from '@/shared/config/env/api-base-url'

export async function GET(request: NextRequest) {
  const authorization = request.headers.get('authorization')
  if (!authorization?.startsWith('Bearer ')) {
    return NextResponse.json<VisitorsErrorResponse>(
      { error: 'Sessão inválida' },
      { status: 401 }
    )
  }

  if (!apiBaseUrl) {
    return NextResponse.json<VisitorsErrorResponse>(
      { error: 'Serviço indisponível' },
      { status: 503 }
    )
  }

  try {
    const url = new URL('/api/analytics/visitors', apiBaseUrl)
    url.search = request.nextUrl.searchParams.toString()
    const response = await fetch(url, {
      headers: { Authorization: authorization },
      cache: 'no-store'
    })
    const body: unknown = await response.json()

    if (!response.ok) {
      const error =
        typeof body === 'object' &&
        body !== null &&
        'error' in body &&
        typeof body.error === 'string'
          ? body.error
          : 'Não foi possível carregar os visitantes'
      return NextResponse.json<VisitorsErrorResponse>(
        { error },
        { status: response.status }
      )
    }

    return NextResponse.json<VisitorsResponse>(body as VisitorsResponse)
  } catch {
    return NextResponse.json<VisitorsErrorResponse>(
      { error: 'Não foi possível carregar os visitantes' },
      { status: 502 }
    )
  }
}
