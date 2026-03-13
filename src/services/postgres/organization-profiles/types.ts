import type { PostgresOrganizationProfile } from '@/types/postgres/postgres-organization-profile'

export interface CreateOrganizationProfileData {
  payload: Omit<
    PostgresOrganizationProfile,
    'id' | 'created_at' | 'updated_at'
  > & {
    inviteToken: string
  }
}

export interface CreateOrganizationProfileResponse {
  organizationProfile: PostgresOrganizationProfile
}

export interface UpdateOrganizationProfileData {
  payload: Omit<
    PostgresOrganizationProfile,
    'id' | 'created_at' | 'updated_at' | 'ong_name'
  >
  token: string
}

export interface UpdateOrganizationProfileResponse {
  data: { organization: PostgresOrganizationProfile }
}
