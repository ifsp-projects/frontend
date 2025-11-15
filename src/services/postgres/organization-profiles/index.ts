import { apiPostgres } from '../../../instances/postgres'
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
    }
  }
}
