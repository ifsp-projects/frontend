import { apiPostgres } from '@/instances/postgres'
import type { PostgresPage } from '@/types/postgres/page/postgres-page'

import type {
  GetPageBySlugData,
  GetPageBySlugResponse,
  UpdatePageData,
  UpdatePageResponse
} from './types'

/**
 * Service class responsible for handling page-related API requests.
 * Provides methods for retrieving pages by their slug and updating existing pages.
 */
export class Pages {
  /**
   * Retrieves a specific page by its slug.
   * * @async
   * @param {GetPageBySlugData} params - The data required to fetch the page.
   * @param {string} params.slug - The URL-friendly slug of the page.
   * @returns {Promise<GetPageBySlugResponse | { status: string, data: { page: PostgresPage } }>}
   * A promise that resolves to the page data, or a fallback object containing the error message as status and a mocked empty page on failure.
   */
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
        data: {
          page: {
            id: '',
            organization_id: '',
            depoiments: { title: '', description: '', cards: [] },
            details: { feature: '', title: '', tabs: [] },
            faq: { anchor: '', questions: [] },
            header: { span: '', title: '', description: '', anchor: '' },
            imagesGrid: { title: '', description: '' },
            moreInfoAbout: { title: '', description: '' }
          } as unknown as PostgresPage
        }
      }
    }
  }

  /**
   * Updates an existing page's data.
   * * @async
   * @param {UpdatePageData} params - The data required to update the page.
   * @param {Object} params.payload - The page details to update (must include the page `id`).
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<UpdatePageResponse | { status: string, data: { page: PostgresPage } }>}
   * A promise that resolves to the updated page response, or a fallback object containing the error message as status and a mocked empty page on failure.
   */
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
        data: {
          page: {
            id: '',
            organization_id: '',
            depoiments: { title: '', description: '', cards: [] },
            details: { feature: '', title: '', tabs: [] },
            faq: { anchor: '', questions: [] },
            header: { span: '', title: '', description: '', anchor: '' },
            imagesGrid: { title: '', description: '' },
            moreInfoAbout: { title: '', description: '' }
          } as unknown as PostgresPage
        }
      }
    }
  }
}
