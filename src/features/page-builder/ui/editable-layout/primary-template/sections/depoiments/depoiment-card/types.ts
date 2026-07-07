import type { ColorPalette } from 'capivara-solidaria-ts-sdk'

export interface DepoimentCardProps {
  copy: {
    author: {
      image: string
      name: string
      city: string
    }
    content: string
  }
  index: number
  palette: ColorPalette
}
