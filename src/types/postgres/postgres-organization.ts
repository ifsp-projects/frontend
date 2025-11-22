import type { PostgresOrganizationProfile } from './postgres-organization-profile'

export interface PostgresOrganization {
  created_at: string
  email: string
  id: string
  is_user_new: boolean
  organization_profile?: PostgresOrganizationProfile
  updated_at?: string
}
