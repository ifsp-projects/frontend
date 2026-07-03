import type { ColorPalette } from 'capivara-solidaria-ts-sdk'

export interface StepsProps {
  cards: {
    title: string
    description: string
    icon: string
  }[]
  palette: ColorPalette
}
