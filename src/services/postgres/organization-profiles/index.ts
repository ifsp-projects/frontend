import { apiPostgres } from '@/instances/postgres'
import type { PostgresOrganizationProfile } from '@/types/postgres/postgres-organization-profile'

import type {
  CreateOrganizationProfileData,
  CreateOrganizationProfileResponse,
  UpdateOrganizationProfileData,
  UpdateOrganizationProfileResponse
} from './types'

export class OrganizationProfiles {
  createOrganizationProfile = async ({
    payload,
    token
  }: CreateOrganizationProfileData) => {
    try {
      return await apiPostgres.post<CreateOrganizationProfileResponse>(
        '/organizations-profiles',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ createOrganizationProfileErrorMessage: error.message })

      return {
        status: error.status,
        data: { organizationProfile: {} as PostgresOrganizationProfile }
      }
    }
  }

  updateOrganizationProfile = async ({
    payload,
    token
  }: UpdateOrganizationProfileData) => {
    try {
      return await apiPostgres.patch<UpdateOrganizationProfileResponse>(
        '/organizations-profiles',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({ updateOrganizationProfileErrorMessage: error.message })

      return {
        status: 500,
        data: { organizationProfile: {} as PostgresOrganizationProfile }
      }
    }
  }
}
