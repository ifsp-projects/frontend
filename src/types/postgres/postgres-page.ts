import type {
  PrimaryTemplate,
  QuarternaryTemplate,
  SecondaryTemplate,
  TertiaryTemplate
} from 'capivara-solidaria-ts-sdk'

export interface PostgresPage {
  color_pallete: {
    ultra_light: string
    tint: string
    original: string
    shade: string
    deep: string
  }
  id: string
  main_color?: string
  order: string[]
  organization_id: string
  sections: PrimaryTemplate &
    SecondaryTemplate &
    TertiaryTemplate &
    QuarternaryTemplate
  updated_at?: string
}
