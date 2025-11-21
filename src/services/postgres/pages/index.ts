import { apiPostgres } from '@/instances/postgres'
import type { PostgresPage } from '@/types/postgres/page/postgres-page'

import type {
  GetPageBySlugData,
  GetPageBySlugResponse,
  UpdatePageData,
  UpdatePageResponse
} from './types'

export class Pages {
  getPageBySlug = async ({ slug }: GetPageBySlugData) => {
    try {
      return await apiPostgres.get<GetPageBySlugResponse>(
        `/pages/slug/${slug.toString()}`
      )
    } catch (error) {
      console.error({
        getPageBySlugErrorMessage: error.message
      })

      return {
        status: error.message,
        data: { page: {} as PostgresPage }
      }
    }
  }

  updatePage = async ({ payload, token }: UpdatePageData) => {
    try {
      return await apiPostgres.patch<UpdatePageResponse>(
        `/pages/${payload.id.toString()}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        updatePageErrorMessage: error.message
      })

      return {
        status: error.message,
        data: { page: {} as PostgresPage }
      }
    }
  }
}
