import type { TemplateType } from '@/types/postgres/page/psotgres-page-template-types'

const PRIMARY_TEMPLATE_DEFAULT_ORDER: string[] = [
  'header',
  'details',
  'moreInfoAbout',
  'ourMission',
  'depoiments',
  'faq'
]

const SECONDARY_TEMPLATE_DEFAULT_ORDER: string[] = [
  'header',
  'howItWorks',
  'moreInfoAbout',
  'aboutUs',
  'faq'
]

const TERTIARY_TEMPLATE_DEFAULT_ORDER: string[] = [
  'header',
  'howItWorks',
  'testimonials',
  'moreInfoAbout',
  'initiatives',
  'aboutUs',
  'faq'
]

const QUATERNARY_TEMPLATE_DEFAULT_ORDER: string[] = [
  'header',
  'causes',
  'timeline',
  'getInvolved',
  'faq'
]
export const DEFAULT_TEMPLATES_ORDER = {
  primary: PRIMARY_TEMPLATE_DEFAULT_ORDER,
  secondary: SECONDARY_TEMPLATE_DEFAULT_ORDER,
  tertiary: TERTIARY_TEMPLATE_DEFAULT_ORDER,
  quarternary: QUATERNARY_TEMPLATE_DEFAULT_ORDER
} as const

export const DEFAULT_TEMPLATE_COLORS: Record<TemplateType, string> = {
  primary: '#10b981',
  secondary: '#3b82f6',
  tertiary: '#eab308',
  quarternary: '#f43f5e'
} as const
