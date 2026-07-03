import type {
  ColorPalette,
  PrimaryTemplate,
  QuarternaryTemplate,
  SecondaryTemplate,
  TertiaryTemplate
} from 'capivara-solidaria-ts-sdk'

export interface FaqProps {
  copy: PrimaryTemplate['faq'] &
    SecondaryTemplate['faq'] &
    TertiaryTemplate['faq'] &
    QuarternaryTemplate['faq']
  palette: ColorPalette
}
