import type { PostgresAddress } from './postgres-address'

export interface PostgresOrganizationProfile {
  addresses?: PostgresAddress[]
  created_at: string
  google_id?: string
  id: string
  logo?: string
  name?: string
  ong_id?: string
  ong_type?: string
  phone?: string
  slug?: string
  token?: string
  updated_at: string
}
