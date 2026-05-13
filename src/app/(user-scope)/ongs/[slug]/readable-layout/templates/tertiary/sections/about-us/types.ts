import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'
import type { PostgresPageTertiaryTemplate } from '@/types/postgres/page/postgres-page-tertiary-template'

export interface AboutUsProps {
  copy: PostgresPageTertiaryTemplate['aboutUs']
  palette: PostgresColorPalette
}
