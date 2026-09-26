import type { VisitorsProps } from '@/domain/entities/visitor'
import { apiPostgres } from '@/services/postgres'

import type { GetVisitorsData, GetVisitorsResponse } from './types'

/**
 * Service class responsible for handling visitor analytics API requests.
 * Provides a method for retrieving visitor data for a page, filtered by
 * a date range and an optional specific date.
 */
export class Visitors {
  /**
   * Retrieves visitor analytics for a given page slug.
   * *
   * @async
   * @param {GetVisitorsData} params - The data required to fetch visitor analytics.
   * @param {string} params.slug - The URL-friendly slug of the page.
   * @param {string} params.range - The date range to fetch analytics for.
   * @param {string} [params.date] - An optional specific date to filter analytics.
   * @param {string} params.token - The authorization bearer token.
   * @param {AbortSignal} [params.signal] - An optional signal used to cancel the request.
   * @returns {Promise<GetVisitorsResponse | { status: string, data: { visitors: VisitorsProps } }>}
   * A promise that resolves to the visitors data, or a fallback object containing the error message as status and a mocked empty visitors object on failure.
   */
  getVisitors = async ({
    slug,
    range,
    date,
    token,
    signal
  }: GetVisitorsData) => {
    try {
      return await apiPostgres.get<GetVisitorsResponse>('/analytics/visitors', {
        params: {
          slug,
          range,
          ...(date ? { date } : {})
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
        signal
      })
    } catch (error) {
      console.error({
        getVisitorsErrorMessage: error.message
      })

      return {
        status: error.message,
        data: {
          visitors: {
            total: 0,
            unique: 0,
            series: []
          } as unknown as VisitorsProps
        }
      }
    }
  }
}
