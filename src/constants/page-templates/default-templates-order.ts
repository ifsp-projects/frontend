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

export const DEFAULT_TEMPLATE_COLOR_PALLETES: Record<TemplateType, any> = {
  primary: {
    deep: '#14532d',
    original: '#22c55e',
    shade: '#16a34a',
    tint: '#a7f3d0',
    ultra_light: '#dcfce7'
  },
  secondary: {
    deep: '#1e3a8a',
    original: '#3b82f6',
    shade: '#2563eb',
    tint: '#bfdbfe',
    ultra_light: '#eff6ff'
  },
  tertiary: {
    deep: '#422006',
    original: '#f59e0b',
    shade: '#d97706',
    tint: '#fef08a',
    ultra_light: '#fefce8'
  },
  quarternary: {
    deep: '#881337',
    original: '#f43f5e',
    shade: '#e11d48',
    tint: '#fda4af',
    ultra_light: '#ffe4e6'
  }
} as const
