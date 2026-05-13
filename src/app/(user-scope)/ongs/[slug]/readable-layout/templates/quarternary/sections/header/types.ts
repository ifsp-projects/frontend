import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'
import type { PostgresPageQuarternaryTemplate } from '@/types/postgres/page/postgres-page-quarternary-template'

export interface HeaderProps {
  copy: PostgresPageQuarternaryTemplate['header']
  palette: PostgresColorPalette
}
