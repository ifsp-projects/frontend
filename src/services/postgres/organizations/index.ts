import { apiPostgres } from '@/instances/postgres'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

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
  GetOrganizationBySlugData,
  GetOrganizationBySlugResponse,
  UpdateOrganizationData,
  UpdateOrganizationResponse
} from './types'

/**
 * Service class responsible for handling organization-related API requests.
 * Provides methods for CRUD operations and fetching organizations by various identifiers (ID, Email, Slug).
 */
export class Organizations {
  /**
   * Creates a new organization.
   * * @async
   * @param {CreateOrganizationData} params - The data required to create the organization.
   * @param {Object} params.payload - The organization details to be created.
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<CreateOrganizationResponse | { status: string, data: { organization: PostgresOrganization } }>}
   * A promise that resolves to the API response, or a fallback object containing the error message as status and an empty organization on failure.
   */
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

      return {
        status: error.message,
        data: { organization: {} as PostgresOrganization }
      }
    }
  }

  /**
   * Retrieves all organizations.
   * TODO: Implement pagination in the future.
   * * @async
   * @returns {Promise<GetAllOrganizationsResponse | { status: string, data: { organizations: PostgresOrganization[] } }>}
   * A promise that resolves to the list of organizations, or a fallback object on failure.
   */
  getAllOrganizations = async () => {
    try {
      return await apiPostgres.get<GetAllOrganizationsResponse>(
        '/organizations'
      )
    } catch (error) {
      console.error({
        getAllOrganizationsErrorMessage: error.message
      })

      return {
        status: error.message,
        data: { organizations: {} as PostgresOrganization[] }
      }
    }
  }

  /**
   * Retrieves a specific organization by its email address.
   * * @async
   * @param {GetOrganizationByEmailData} params - The data required to fetch the organization.
   * @param {string} params.email - The email associated with the organization.
   * @returns {Promise<GetOrganizationByEmailResponse | undefined>}
   * A promise that resolves to the organization data, or undefined if an error occurs.
   */
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

  /**
   * Retrieves a specific organization by its ID.
   * * @async
   * @param {GetOrganizationByIdData} params - The data required to fetch the organization.
   * @param {string|number} params.id - The unique identifier of the organization.
   * @returns {Promise<GetOrganizationByIdResponse | { status: string, data: { organization: PostgresOrganization } }>}
   * A promise that resolves to the organization data, or a fallback object on failure.
   */
  getOrganizationById = async ({ id }: GetOrganizationByIdData) => {
    try {
      return await apiPostgres.get<GetOrganizationByIdResponse>(
        `/organizations/${id.toString()}`
      )
    } catch (error) {
      console.error({
        getOrganizationByIdErrorMessage: error.message
      })

      return {
        status: error.message,
        data: { organization: {} as PostgresOrganization }
      }
    }
  }

  /**
   * Retrieves a specific organization by its slug.
   * * @async
   * @param {GetOrganizationBySlugData} params - The data required to fetch the organization.
   * @param {string} params.slug - The URL-friendly slug of the organization.
   * @returns {Promise<GetOrganizationBySlugResponse | { status: string, data: { organization: PostgresOrganization } }>}
   * A promise that resolves to the organization data, or a fallback object on failure.
   */
  getOrganizationBySlug = async ({ slug }: GetOrganizationBySlugData) => {
    try {
      return await apiPostgres.get<GetOrganizationBySlugResponse>(
        `/organizations/slug/${slug.toString()}`
      )
    } catch (error) {
      console.error({
        getOrganizationByIdErrorMessage: error.message
      })

      return {
        status: error.message,
        data: { organization: {} as PostgresOrganization }
      }
    }
  }

  /**
   * Updates an existing organization.
   * * @async
   * @param {UpdateOrganizationData} params - The data required to update the organization.
   * @param {Object} params.payload - The organization details to update (must include the organization `id`).
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<UpdateOrganizationResponse | { status: string, data: { organization: PostgresOrganization } }>}
   * A promise that resolves to the updated organization response, or a fallback object on failure.
   */
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

      return {
        status: error.message,
        data: { organization: {} as PostgresOrganization }
      }
    }
  }

  /**
   * Deletes a specific organization by its ID.
   * * @async
   * @param {DeleteOrganizationData} params - The data required to delete the organization.
   * @param {string|number} params.id - The unique identifier of the organization to delete.
   * @param {string} params.token - The authorization bearer token.
   * @returns {Promise<DeleteOrganizationResponse | { status: string, data: { organization: PostgresOrganization } }>}
   * A promise that resolves to the deletion confirmation, or a fallback object on failure.
   */
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

      return {
        status: error.message,
        data: { organization: {} as PostgresOrganization }
      }
    }
  }
}
