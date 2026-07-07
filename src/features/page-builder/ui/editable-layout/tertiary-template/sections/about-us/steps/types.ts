import type { ColorPalette } from 'capivara-solidaria-ts-sdk'

export interface StepsProps {
  palette: ColorPalette
  stats: {
    icon: string
    value: string
    label: string
  }[]
}
