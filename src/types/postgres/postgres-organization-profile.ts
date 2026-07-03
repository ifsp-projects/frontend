import type { OngCategory, TemplateType } from 'capivara-solidaria-ts-sdk'

import type { PostgresAddress } from './postgres-address'

export interface PostgresOrganizationProfile {
  addresses?: PostgresAddress
  created_at: string
  design_template?: TemplateType
  facebook_url?: string
  google_id?: string
  id: string
  instagram_url?: string
  logo?: string
  name?: string
  ong_description?: string
  ong_id?: string
  ong_type?: OngCategory
  phone?: string
  slug?: string
  token?: string
  twitter_url?: string
  updated_at?: string
}
