import type { PostgresOrganizationProfile } from './postgres-organization-profile'

export interface PostgresOrganization {
  created_at: string
  email: string
  id: string
  organization_profile?: PostgresOrganizationProfile
  updated_at: string
}
