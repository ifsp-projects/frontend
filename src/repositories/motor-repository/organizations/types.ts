import type { OrganizationProps } from '@/domain/entities/organization'
import type { OrganizationProfileProps } from '@/domain/entities/organization-profile'

export interface CreateOrganizationData {
  payload: Omit<OrganizationProps, 'id' | 'created_at'>
  token: string
}

export interface GetOrganizationByEmailData {
  email: string
}

export interface GetOrganizationByIdData {
  id: string
}

export interface GetOrganizationBySlugData {
  slug: string
}

export interface UpdateOrganizationData {
  payload: Partial<OrganizationProps>
  token: string
}

export interface DeleteOrganizationData {
  id: string
  token: string
}

export interface CreateOrganizationResponse {
  organization: OrganizationProps
}

export interface GetAllOrganizationsData {
  name?: string
  ong_type?: string
}

export interface GetAllOrganizationsResponse {
  organizations: (OrganizationProps & {
    organization_profile: OrganizationProfileProps
  })[]
}

export interface GetOrganizationByIdResponse {
  organization: OrganizationProps & {
    organization_profile: OrganizationProfileProps
  }
}

export interface GetOrganizationBySlugResponse {
  organization: OrganizationProps & {
    organization_profile: OrganizationProfileProps
  }
}

export interface GetOrganizationByEmailResponse {
  organization: OrganizationProps & {
    organization_profile: OrganizationProfileProps
  }
}

export interface UpdateOrganizationResponse {
  organizations: OrganizationProps & {
    organization_profile: OrganizationProfileProps
  }
}

export interface DeleteOrganizationResponse {
  organization: OrganizationProps
}
