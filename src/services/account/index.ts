import { apiPostgres } from '@/instances/postgres'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'
import type { ServiceRequestResponse } from '@/types/services/service-request-response'

import { Auth } from './auth'
import type { GetMyDataPayload } from './types'

export class Account {
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
      organization: PostgresOrganization
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
