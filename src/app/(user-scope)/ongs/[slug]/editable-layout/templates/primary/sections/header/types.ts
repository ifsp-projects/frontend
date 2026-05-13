import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'
import type { PostgresPagePrimaryTemplate } from '@/types/postgres/page/postgres-page-primary-template'

export interface HeaderProps {
  copy: PostgresPagePrimaryTemplate['header']
  palette: PostgresColorPalette
}
