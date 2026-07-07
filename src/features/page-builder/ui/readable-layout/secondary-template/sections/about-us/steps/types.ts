import type { ColorPalette } from 'capivara-solidaria-ts-sdk'

export interface StepProps {
  cards: {
    title: string
    description: string
    icon: string
  }[]
  palette: ColorPalette
}
