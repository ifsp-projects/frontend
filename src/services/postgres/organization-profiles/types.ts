import type { PostgresOrganizationProfile } from '@/types/postgres/postgres-organization-profile'

export interface CreateOrganizationProfileData {
  payload: Omit<PostgresOrganizationProfile, 'id' | 'created_at' | 'updated_at'>
  token: string
}

export interface CreateOrganizationProfileResponse {
  organizationProfile: PostgresOrganizationProfile
}

export interface UpdateOrganizationProfileData
  extends CreateOrganizationProfileData {}

export interface UpdateOrganizationProfileResponse
  extends CreateOrganizationProfileResponse {}
