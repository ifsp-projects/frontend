import type { PostgresOrganizationProfile } from '@/types/postgres/postgres-organization-profile'

export interface CreateOrganizationProfileData {
  payload: Omit<PostgresOrganizationProfile, 'id' | 'created_at' | 'updated_at'>
  token: string
}

export interface CreateOrganizationProfileResponse {
  organizationProfile: PostgresOrganizationProfile
}

export interface UpdateOrganizationProfileData {
  payload: Omit<
    PostgresOrganizationProfile,
    'id' | 'created_at' | 'updated_at' | 'ong_name' | 'slug'
  >
  token: string
}

export interface UpdateOrganizationProfileResponse {
  data: { organization: PostgresOrganizationProfile }
}
