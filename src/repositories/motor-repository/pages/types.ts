import type { PageProps } from '@/domain/entities/page'

export interface GetPageBySlugData {
  slug: string
}

export interface UpdatePageData {
  payload: Omit<PageProps, 'organization_id'>
  token: string
}

export interface GetPageBySlugResponse {
  page: PageProps
}

export interface UpdatePageResponse {
  page: PageProps
}
