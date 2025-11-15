import { apiPostgres } from '@/instances/postgres'

import type {
  CreateOrganizationData,
  CreateOrganizationResponse,
  DeleteOrganizationData,
  DeleteOrganizationResponse,
  GetAllOrganizationsResponse,
  GetOrganizationByEmailData,
  GetOrganizationByEmailResponse,
  GetOrganizationByIdData,
  GetOrganizationByIdResponse,
  UpdateOrganizationData,
  UpdateOrganizationResponse
} from './types'

export class Organizations {
  createOrganization = async ({ payload, token }: CreateOrganizationData) => {
    try {
      return await apiPostgres.post<CreateOrganizationResponse>(
        '/organizations',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        createOrganizationErrorMessage: error.message
      })
    }
  }

  // TODO: Implement pagination in the future.
  getAllOrganizations = async () => {
    try {
      return await apiPostgres.get<GetAllOrganizationsResponse>(
        '/organizations'
      )
    } catch (error) {
      console.error({
        getAllOrganizationsErrorMessage: error.message
      })
    }
  }

  getOrganizationByEmail = async ({ email }: GetOrganizationByEmailData) => {
    try {
      return await apiPostgres.get<GetOrganizationByEmailResponse>(
        `/organizations/email/${email.toString()}`
      )
    } catch (error) {
      console.error({
        getOrganizationByEmailErrorMessage: error.message
      })
    }
  }

  getOrganizationById = async ({ id }: GetOrganizationByIdData) => {
    try {
      return await apiPostgres.get<GetOrganizationByIdResponse>(
        `/organizations/${id.toString()}`
      )
    } catch (error) {
      console.error({
        getOrganizationByIdErrorMessage: error.message
      })
    }
  }

  updateOrganization = async ({ payload, token }: UpdateOrganizationData) => {
    try {
      return await apiPostgres.patch<UpdateOrganizationResponse>(
        `/organizations/${payload?.id?.toString()}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        updateOrganizationErrorMessage: error.message
      })
    }
  }

  deleteOrganization = async ({ id, token }: DeleteOrganizationData) => {
    try {
      return await apiPostgres.delete<DeleteOrganizationResponse>(
        `/organizations/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        deleteOrganizationErrorMessage: error.message
      })
    }
  }
}
