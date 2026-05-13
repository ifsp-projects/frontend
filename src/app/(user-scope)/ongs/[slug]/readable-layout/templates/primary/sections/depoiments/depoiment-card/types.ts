import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'

export interface DepoimentCardProps {
  copy: {
    author: {
      image: string
      name: string
      city: string
    }
    content: string
  }
  palette: PostgresColorPalette
}
