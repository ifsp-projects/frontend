import type {
  VisitorsRequest,
  VisitorsResponse
} from 'capivara-solidaria-ts-sdk'

export type GetVisitorsData = VisitorsRequest & {
  token: string
  signal?: AbortSignal
}

export type GetVisitorsResponse = {
  status: string
  data: {
    visitors: VisitorsResponse
  }
}
