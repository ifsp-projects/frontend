import type { InviteTokenProps } from '@/domain/entities/invite-token'
import { apiPostgres } from '@/services/postgres'
import type { ServiceRequestResponse } from '@/shared/types/service-request-response'

import type {
  CreateInviteTokenPayload,
  GetInviteByTokenPayload,
  InviteTokenValidationResponse,
  ListAllInvitesPayload,
  UseInviteTokenPayload,
  ValidateInviteTokenPayload
} from './types'

export class AdminRepository {
  listAllInvites = async ({
    token
  }: ListAllInvitesPayload): Promise<
    ServiceRequestResponse<{
      invites: InviteTokenProps[]
    }>
  > => {
    try {
      return await apiPostgres.get(`/admin/invites`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.error({
        listAllInvitesError: error.message
      })

      return {
        error: error.message
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
      inviteToken: InviteTokenProps
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
