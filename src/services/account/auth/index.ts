import { apiPostgres } from '@/instances/postgres'

import type {
  SSOLoginPayload,
  SSOLoginResponse,
  SSOLogoutPayload,
  SocialLoginPayload,
  SocialLoginResponse
} from './types'

/**
 * Service class responsible for handling authentication-related API requests.
 */
export class Auth {
  /**
   * Refreshes the user's authentication token.
   * * Makes a POST request to the `/refresh-token` endpoint. If the request fails,
   * the error is caught and logged to the console.
   *
   * @async
   * @returns {Promise<any | undefined>} A promise that resolves to the API response if successful, or `undefined` if an error occurs.
   */
  refreshToken = async () => {
    try {
      return await apiPostgres.post('/auth/social/refresh-token', {})
    } catch (error) {
      console.error({ refreshTokenError: error })
    }
  }

  /**
   * Authenticates a user via a social login provider.
   * * Makes a POST request to the `/social-login` endpoint with the provided credentials.
   * If the request fails, the error is caught, logged to the console, and `null` is returned.
   *
   * @async
   * @param {SocialLoginPayload} payload - The data required for social authentication (e.g., token, provider details).
   * @returns {Promise<SocialLoginResponse | null>} A promise that resolves to the social login response data, or `null` if the authentication fails.
   */
  socialLogin = async (payload: SocialLoginPayload) => {
    try {
      return await apiPostgres.post<SocialLoginResponse>(
        '/auth/social',
        payload
      )
    } catch (error) {
      console.error({ socialLoginError: error })
      return null
    }
  }

  changePasswordAndLogin = async ({
    new_password,
    invite_token
  }: {
    new_password: string
    invite_token: string
  }) => {
    try {
      return await apiPostgres.post<SocialLoginResponse>(
        '/auth/sso/reset-password',
        {
          new_password,
          invite_token
        }
      )
    } catch (error) {
      console.error({ changePasswordAndLoginError: error })
      return null
    }
  }

  /**
   * Authenticates a user via SSO credentials (email + password).
   */
  ssoLogin = async (payload: SSOLoginPayload) => {
    try {
      return await apiPostgres.post<SSOLoginResponse>(
        '/auth/sso/login',
        payload
      )
    } catch (error) {
      console.error({ ssoLoginError: error })
      return null
    }
  }

  /**
   * Logs out the current SSO user session.
   */
  ssoLogout = async (payload: SSOLogoutPayload) => {
    try {
      return await apiPostgres.post('/auth/sso/logout', payload)
    } catch (error) {
      console.error({ ssoLogoutError: error })
      return null
    }
  }
}
