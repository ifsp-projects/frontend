import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'
import type { PostgresPagePrimaryTemplate } from '@/types/postgres/page/postgres-page-primary-template'
import type { PostgresPageQuarternaryTemplate } from '@/types/postgres/page/postgres-page-quarternary-template'
import type { PostgresPageSecondaryTemplate } from '@/types/postgres/page/postgres-page-secondary-template'
import type { PostgresPageTertiaryTemplate } from '@/types/postgres/page/postgres-page-tertiary-template'

export interface FaqProps {
  copy: PostgresPagePrimaryTemplate['faq'] &
    PostgresPageSecondaryTemplate['faq'] &
    PostgresPageTertiaryTemplate['faq'] &
    PostgresPageQuarternaryTemplate['faq']
  palette: PostgresColorPalette
}
