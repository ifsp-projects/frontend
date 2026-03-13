export interface CancelPendingInvitePayload {
  id: string
  token: string
}

export interface ListAllInvitesPayload {
  token: string
}

export interface RegenerateInviteTokenPayload {
  id: string
  token: string
}

export interface CreateInviteTokenPayload {
  email: string
  organization_id: string
  token: string
}

export interface UseInviteTokenPayload {
  inviteToken: string
}

export interface ValidateInviteTokenPayload {
  inviteToken: string
}

export interface GetInviteByTokenPayload {
  inviteToken: string
}

export interface InviteTokenValidationResponse {
  email?: string
  organizationId?: string
  reason?: string
  valid: boolean
}
