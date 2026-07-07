import type { TemplateType } from 'capivara-solidaria-ts-sdk'

export const TEMPLATE_PREVIEWS: Record<TemplateType, string> = {
  primary: 'ongs/preview/primary',
  secondary: 'ongs/preview/secondary',
  tertiary: 'ongs/preview/tertiary',
  quarternary: 'ongs/preview/quarternary'
} as const
