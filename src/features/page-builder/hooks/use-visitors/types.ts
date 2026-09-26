import type { VisitorsResponse } from 'capivara-solidaria-ts-sdk'

export type CacheEntry = {
  data: VisitorsResponse
  cachedAt: number
  brasiliaDay: string
}
