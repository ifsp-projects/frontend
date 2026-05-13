import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'

export interface StepProps {
  cards: {
    title: string
    description: string
    icon: string
  }[]
  palette: PostgresColorPalette
}
