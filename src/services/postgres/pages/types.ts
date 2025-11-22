import type { PostgresPage } from '@/types/postgres/page/postgres-page'

export interface GetPageBySlugData {
  slug: string
}

export interface UpdatePageData {
  payload: Omit<PostgresPage, 'organization_id'>
  token: string
}

export interface GetPageBySlugResponse {
  page: PostgresPage
}

export interface UpdatePageResponse {
  page: PostgresPage
}
