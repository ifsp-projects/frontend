import type { PostgresDesignTemplates } from '@/types/postgres/enums/postgres-design-template'

export const TEMPLATE_PREVIEWS: Record<PostgresDesignTemplates, string> = {
  primary: 'ongs/templates/primary',
  secondary: 'ongs/templates/secondary',
  tertiary: 'ongs/templates/tertiary',
  quarternary: 'ongs/templates/quarternary'
} as const
