import { apiPostgres } from '@/instances/postgres'

import type { SocialLoginPayload, SocialLoginResponse } from './types'

export class Auth {
  refreshToken = async () => {
    try {
      return await apiPostgres.post('/refresh-token', {})
    } catch (error) {
      console.error({ refreshTokenError: error })
    }
  }

  socialLogin = async (payload: SocialLoginPayload) => {
    try {
      return await apiPostgres.post<SocialLoginResponse>(
        '/social-login',
        payload
      )
    } catch (error) {
      console.error({ socialLoginError: error })
      return null
    }
  }
}
