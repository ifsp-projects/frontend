import type { VisitorsRange } from 'capivara-solidaria-ts-sdk'

export const getPosthogQueryKey = (range: VisitorsRange, date: string | null) =>
  `${range}:${date ?? 'period'}`
