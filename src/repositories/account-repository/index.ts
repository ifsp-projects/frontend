import type { OrganizationProps } from '@/domain/entities/organization'
import { apiPostgres } from '@/services/postgres'
import type { ServiceRequestResponse } from '@/shared/types/service-request-response'

import { Auth } from './auth'
import type { GetMyDataPayload } from './types'

export class AccountRepository {
  auth: Auth

  constructor() {
    this.auth = new Auth()
  }

  /**
   * Retrieves my organization profile information.
   * * @async
   * @param {GetOrganizationByEmailData} params - The data required to fetch the organization.
   * @param {string} params.email - The email associated with the organization.
   * @returns {Promise<GetOrganizationByEmailResponse | undefined>}
   * A promise that resolves to the organization data, or undefined if an error occurs.
   */
  me = async ({
    email
  }: GetMyDataPayload): Promise<
    ServiceRequestResponse<{
      organization: OrganizationProps
    }>
  > => {
    try {
      return await apiPostgres.get(`/organizations/email/${email.toString()}`)
    } catch (error) {
      console.error({
        getOrganizationByEmailErrorMessage: error.message
      })
    }
  }
}
