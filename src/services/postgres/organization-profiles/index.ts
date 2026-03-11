import { apiPostgres } from '@/instances/postgres'
import type { PostgresOrganizationProfile } from '@/types/postgres/postgres-organization-profile'

import type {
  CreateOrganizationProfileData,
  CreateOrganizationProfileResponse,
  UpdateOrganizationProfileData
} from './types'

/**
 * Service class responsible for handling organization profile-related API requests.
 * Provides methods to create and update organization profiles.
 */
export class OrganizationProfiles {
  /**
   * Creates a new organization profile.
   * * @async
   * @param {CreateOrganizationProfileData} params - The data required to create the organization profile.
   * @param {Object} params.payload - The profile details to be created.
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<CreateOrganizationProfileResponse | { status: number, data: { organizationProfile: PostgresOrganizationProfile } }>}
   * A promise that resolves to the API response, or a fallback object containing the error status and an empty profile on failure.
   */
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

  /**
   * Updates an existing organization profile.
   * * @async
   * @param {UpdateOrganizationProfileData} params - The data required to update the organization profile.
   * @param {Object} params.payload - The profile details to be updated.
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<UpdateOrganizationProfileResponse | { status: number, data: { organizationProfile: PostgresOrganizationProfile } }>}
   * A promise that resolves to the updated profile response, or a fallback object containing a 500 status code and an empty profile on failure.
   */
  updateOrganizationProfile = async ({
    payload,
    token
  }: UpdateOrganizationProfileData) => {
    try {
      return await apiPostgres.patch(
        `/organizations-profiles/${payload.ong_id.toString()}`,
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
