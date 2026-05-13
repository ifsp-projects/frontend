import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'
import type { PostgresPageSecondaryTemplate } from '@/types/postgres/page/postgres-page-secondary-template'

export interface AboutUsProps {
  copy: PostgresPageSecondaryTemplate['aboutUs']
  palette: PostgresColorPalette
}
