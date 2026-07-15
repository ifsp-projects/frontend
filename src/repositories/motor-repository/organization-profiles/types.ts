import type { OrganizationProfileProps } from '@/domain/entities/organization-profile'

export interface CreateOrganizationProfileData {
  payload: Omit<
    OrganizationProfileProps,
    'id' | 'created_at' | 'updated_at'
  > & {
    inviteToken: string
  }
}

export interface CreateOrganizationProfileResponse {
  organizationProfile: OrganizationProfileProps
}

export interface UpdateOrganizationProfileData {
  payload: Omit<
    OrganizationProfileProps,
    'id' | 'created_at' | 'updated_at' | 'ong_name'
  >
  token: string
}

export interface UpdateOrganizationProfileResponse {
  data: { organization: OrganizationProfileProps }
}
