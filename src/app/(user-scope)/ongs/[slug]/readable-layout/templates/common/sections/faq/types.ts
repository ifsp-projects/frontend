import type {
  ColorPalette,
  PrimaryTemplate,
  SecondaryTemplate,
  TertiaryTemplate
} from 'capivara-solidaria-ts-sdk'

export interface FaqProps {
  copy: PrimaryTemplate['faq'] &
    SecondaryTemplate['faq'] &
    TertiaryTemplate['faq'] &
    TertiaryTemplate['faq']
  palette: ColorPalette
}
