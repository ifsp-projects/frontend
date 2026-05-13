import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'
import type { PostgresPageSecondaryTemplate } from '@/types/postgres/page/postgres-page-secondary-template'

export interface HowItWorksProps {
  copy: PostgresPageSecondaryTemplate['howItWorks']
  palette: PostgresColorPalette
}
