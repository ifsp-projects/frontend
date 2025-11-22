import type { PostgresPagePrimaryTemplate } from './postgres-page-primary-template'
import type { PostgresPageQuarternaryTemplate } from './postgres-page-quarternary-template'
import type { PostgresPageSecondaryTemplate } from './postgres-page-secondary-template'
import type { PostgresPageTertiaryTemplate } from './postgres-page-tertiary-template'

export interface PostgresPage {
  id: string
  organization_id: string
  sections: PostgresPagePrimaryTemplate &
    PostgresPageSecondaryTemplate &
    PostgresPageTertiaryTemplate &
    PostgresPageQuarternaryTemplate
  updated_at?: string
}
