import type {
  VisitorsErrorResponse,
  VisitorsRequest,
  VisitorsResponse
} from 'capivara-solidaria-ts-sdk'

class VisitorsApiError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message)
  }
}

export const fetchVisitors = async (
  request: VisitorsRequest,
  token: string,
  signal?: AbortSignal
): Promise<VisitorsResponse> => {
  const params = new URLSearchParams({
    slug: request.slug,
    range: request.range
  })
  if (request.date) params.set('date', request.date)

  const response = await fetch(`/api/analytics/visitors?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
    signal
  })
  if (!response.ok) {
    const body: VisitorsErrorResponse | null = await response
      .json()
      .catch(() => null)
    throw new VisitorsApiError(
      typeof body?.error === 'string'
        ? body.error
        : 'Não foi possível carregar os visitantes',
      response.status
    )
  }
  return (await response.json()) as VisitorsResponse
}
