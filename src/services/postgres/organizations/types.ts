import type { PostgresOrganization } from '@/types/postgres/postgres-organization'
import type { PostgresOrganizationProfile } from '@/types/postgres/postgres-organization-profile'

export interface CreateOrganizationData {
  payload: Omit<PostgresOrganization, 'id'>
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
  payload: PostgresOrganization
  token: string
}

export interface DeleteOrganizationData {
  id: string
  token: string
}

export interface CreateOrganizationResponse {
  organization: PostgresOrganization
}

export interface GetAllOrganizationsResponse {
  organizations: (PostgresOrganization & {
    organization_profile: PostgresOrganizationProfile
  })[]
}

export interface GetOrganizationByIdResponse {
  organization: PostgresOrganization & {
    organization_profile: PostgresOrganizationProfile
  }
}

export interface GetOrganizationBySlugResponse {
  organization: PostgresOrganization & {
    organization_profile: PostgresOrganizationProfile
  }
}

export interface GetOrganizationByEmailResponse {
  organization: PostgresOrganization & {
    organization_profile: PostgresOrganizationProfile
  }
}

export interface UpdateOrganizationResponse {
  organizations: PostgresOrganization & {
    organization_profile: PostgresOrganizationProfile
  }
}

export interface DeleteOrganizationResponse {
  organization: PostgresOrganization
}
