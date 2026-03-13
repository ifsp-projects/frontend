import type { PostgresOrganizationProfile } from './postgres-organization-profile'

export type AccountStatus = 'active' | 'inactive'

export interface PostgresOrganization {
  account_status: AccountStatus
  created_at: string
  email: string
  id: string
  is_user_new: boolean
  organization_profile?: PostgresOrganizationProfile
  password: string
  updated_at?: string
}
