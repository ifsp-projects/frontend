import type { PostgresPage } from '@/types/postgres/page/postgres-page'

export interface GetPageBySlugData {
  slug: string
}

export interface UpdatePageData {
  payload: PostgresPage
  token: string
}

export interface GetPageBySlugResponse {
  page: PostgresPage
}

export interface UpdatePageResponse {
  page: PostgresPage
}
