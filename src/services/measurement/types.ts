import type { HUBSPOT_ONG_VALUES } from '@/constants/hubspot/hubspot-ong-types'
import type { ExtractArrayType } from '@/types/utils/extract-array-type'

export interface MeasurementUserData {
  email: string
  fullname: string
  phone?: string
}

export interface MeasurementFormattedUserData extends MeasurementUserData {
  firstname: string
  lastname: string
}

export type MeasurementOngTypes = ExtractArrayType<typeof HUBSPOT_ONG_VALUES>

export type MeasurementDeviceType = 'mobile' | 'tablet' | 'desktop'

export type MeasurementLeadFormType = 'custom' | 'contact'

export type MeasurementTrafficSource =
  | 'organic'
  | 'direct'
  | 'paid'
  | 'social'
  | 'email'
  | 'referral'
  | 'invite'

export type MeasurementShareChannel =
  | 'whatsapp'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'copy_link'
  | 'other'

export type MeasurementPageType =
  | 'homepage'
  | 'hub_search'
  | 'org_profile'
  | 'landing_page'
  | 'editor'
  | 'onboarding'

export type MeasurementBlockType =
  | 'icon'
  | 'text'
  | 'image'
  | 'video'
  | 'cta_button'

export type MeasurementAiIntentType =
  | 'write_content'
  | 'edit_content'
  | 'copy_suggestion'
  | 'seo_help'
  | 'fundraising_advice'
  | 'general_question'
  | 'other'

export type MeasurementSourcePage =
  | 'hub'
  | 'lp'
  | 'profile'
  | 'external'
  | 'homepage'
