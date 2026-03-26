import type { PostgresOrganizationProfile } from './postgres-organization-profile'

export type AccountStatus = 'active' | 'inactive'

export type Role = 'admin' | 'member'

export interface PostgresOrganization {
  account_status: AccountStatus
  created_at: string
  email: string
  id: string
  is_user_new: boolean
  organization_profile?: PostgresOrganizationProfile
  password: string
  role: Role
  updated_at?: string
}
