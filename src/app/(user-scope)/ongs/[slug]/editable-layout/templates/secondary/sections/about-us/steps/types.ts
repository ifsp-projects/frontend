import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'

export interface StepsProps {
  cards: {
    title: string
    description: string
    icon: string
  }[]
  palette: PostgresColorPalette
}
