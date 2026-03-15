import { apiPostgres } from '@/instances/postgres'
import type { PostgresInviteToken } from '@/types/postgres/postgres-invite-token'
import type { ServiceRequestResponse } from '@/types/services/service-request-response'

import type {
  CancelPendingInvitePayload,
  CreateInviteTokenPayload,
  GetInviteByTokenPayload,
  InviteTokenValidationResponse,
  RegenerateInviteTokenPayload,
  UseInviteTokenPayload,
  ValidateInviteTokenPayload
} from './types'

export class Admin {
  cancelPendingInvite = async ({ token, id }: CancelPendingInvitePayload) => {
    try {
      return await apiPostgres.delete(`/admin/invites/${id.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        cancelPendingInviteError: error.message
      })

      return {
        message: error.message,
        status: 500
      }
    }
  }

  listAllInvites = async (): Promise<
    ServiceRequestResponse<{
      invites: PostgresInviteToken[]
    }>
  > => {
    try {
      return await apiPostgres.get(`/admin/invites`)
    } catch (error) {
      console.error({
        listAllInvitesError: error.message
      })

      return {
        error: error.message
      }
    }
  }

  regenerateAndResendInviteToken = async ({
    token,
    id
  }: RegenerateInviteTokenPayload): Promise<
    ServiceRequestResponse<PostgresInviteToken>
  > => {
    try {
      return await apiPostgres.post(`/admin/invites/${id.toString()}/resend`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        regenerateAndResendInviteToken: error.message
      })

      return {
        message: error.message
      }
    }
  }

  createAndSendInviteToken = async ({
    token,
    email,
    organization_id
  }: CreateInviteTokenPayload) => {
    try {
      return await apiPostgres.post(
        `/admin/invites`,
        {
          email,
          organization_id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
    } catch (error) {
      console.error({
        createAndSendInviteTokenError: error.message
      })

      return {
        message: error.message,
        status: 500
      }
    }
  }

  useInviteToken = async ({ inviteToken }: UseInviteTokenPayload) => {
    try {
      return await apiPostgres.post('/admin/invites/token', {
        token: inviteToken
      })
    } catch (error) {
      console.error({
        useInviteTokenError: error.message
      })

      return {
        message: error.message,
        status: 500
      }
    }
  }

  getInviteByToken = async ({
    inviteToken
  }: GetInviteByTokenPayload): Promise<
    ServiceRequestResponse<{
      inviteToken: PostgresInviteToken
    }>
  > => {
    try {
      return await apiPostgres.get(
        `/admin/invites/${inviteToken.toString()}/token`
      )
    } catch (error) {
      console.error({
        getInviteByTokenError: error.message
      })

      return {
        error: error.message
      }
    }
  }

  validateInviteToken = async ({
    inviteToken
  }: ValidateInviteTokenPayload): Promise<
    ServiceRequestResponse<InviteTokenValidationResponse>
  > => {
    try {
      return await apiPostgres.get(
        `/admin/invites/validate/${inviteToken.toString()}`
      )
    } catch (error) {
      console.error({
        validateInviteTokenError: error.message
      })

      return {
        error: error.message
      }
    }
  }
}
