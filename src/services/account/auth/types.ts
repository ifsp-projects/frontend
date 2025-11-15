import type { PostgresOrganization } from '../../../types/postgres/postgres-organization'

export interface SendEmailPayload {
  email: string
  locale: string
}

export interface SocialLoginPayload {
  email: string
  socialToken: string
  socialType: 'google'
}

export interface SocialLoginResponse {
  organization: PostgresOrganization
  refreshToken: string
  token: string
}

export interface AppAuthPayload {
  email: string
  name: string
  token: string
}

export interface AppAuthResponse {
  code: string
}
