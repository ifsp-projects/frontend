import type { TemplateType } from 'capivara-solidaria-ts-sdk'

export const TEMPLATE_PREVIEWS: Record<TemplateType, string> = {
  primary: 'ongs/templates/primary',
  secondary: 'ongs/templates/secondary',
  tertiary: 'ongs/templates/tertiary',
  quarternary: 'ongs/templates/quarternary'
} as const
