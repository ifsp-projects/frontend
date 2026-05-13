import type { PostgresPagePrimaryTemplate } from './page/postgres-page-primary-template'
import type { PostgresPageQuarternaryTemplate } from './page/postgres-page-quarternary-template'
import type { PostgresPageSecondaryTemplate } from './page/postgres-page-secondary-template'
import type { PostgresPageTertiaryTemplate } from './page/postgres-page-tertiary-template'

export interface PostgresPage {
  color_pallete: {
    ultra_light: string
    tint: string
    original: string
    shade: string
    deep: string
  }
  id: string
  main_color?: string
  order: string[]
  organization_id: string
  sections: PostgresPagePrimaryTemplate &
    PostgresPageSecondaryTemplate &
    PostgresPageTertiaryTemplate &
    PostgresPageQuarternaryTemplate
  updated_at?: string
}
