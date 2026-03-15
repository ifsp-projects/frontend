import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

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

export interface SSOLoginPayload {
  email: string
  password: string
}

export interface SSOLoginResponse {
  access_token: string
  access_token_expires_at: Date
  organization: {
    name: string
    email: string
  }
  refresh_token: string
  refresh_token_expires_at: Date
  session_id: string
}

export interface SSOLogoutPayload {
  session_id: string
}
