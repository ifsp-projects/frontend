import type { PostgresOrganizationProfile } from '@/types/postgres/postgres-organization-profile'

export interface CreateOrganizationProfileData {
  payload: Omit<PostgresOrganizationProfile, 'id'>
  token: string
}

export interface CreateOrganizationProfileResponse {
  organizationProfile: PostgresOrganizationProfile
}

export interface UpdateOrganizationProfileData
  extends CreateOrganizationProfileData {}

export interface UpdateOrganizationProfileResponse
  extends CreateOrganizationProfileResponse {}
