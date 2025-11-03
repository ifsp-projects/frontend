import type { User } from '../../../types/models/user'

export interface SendEmailPayload {
  email: string
  locale: string
}

export interface ValidateCodePayload {
  code: string
  email: string
}

export interface ValidateCodeResponse {
  refreshToken: string
  token: string
  user: User
}

export interface SocialLoginPayload {
  email: string
  socialToken: string
  socialType: 'google'
}

export interface SocialLoginResponse {
  refreshToken: string
  token: string
  user: User
}

export interface AppAuthPayload {
  email: string
  name: string
  token: string
}

export interface AppAuthResponse {
  code: string
}
