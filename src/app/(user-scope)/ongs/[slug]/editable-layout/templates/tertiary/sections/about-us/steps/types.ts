import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'

export interface StepsProps {
  palette: PostgresColorPalette
  stats: {
    icon: string
    value: string
    label: string
  }[]
}
