import type { PostgresPagePrimaryTemplate } from './postgres-page-primary-template'
import type { PostgresPageQuarternaryTemplate } from './postgres-page-quarternary-template'
import type { PostgresPageSecondaryTemplate } from './postgres-page-secondary-template'
import type { PostgresPageTertiaryTemplate } from './postgres-page-tertiary-template'

export type PostgresPage = PostgresPagePrimaryTemplate &
  PostgresPageSecondaryTemplate &
  PostgresPageTertiaryTemplate &
  PostgresPageQuarternaryTemplate & {
    id: string
    organization_id: string
    updated_at?: string
  }
