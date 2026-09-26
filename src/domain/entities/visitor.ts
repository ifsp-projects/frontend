/**
 * Represents visitor analytics data for a page.
 *
 * NOTE: these fields are placeholders. Replace them with the actual shape
 * that was previously provided by `VisitorsResponse` from
 * `capivara-solidaria-ts-sdk`.
 */
export type VisitorsProps = {
  total: number
  unique: number
  series: Array<{
    date: string
    count: number
  }>
}
