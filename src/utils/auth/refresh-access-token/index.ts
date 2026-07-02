import { ACCESS_TOKEN_EXPIRES_MILLISECONDS } from 'capivara-solidaria-ts-sdk'
import type { JWT } from 'next-auth'

import { apiPostgres } from '@/instances/postgres'

/**
 * Refreshes the current access token using the stored refresh token.
 *
 * Updates the access token, refresh token, and expiration timestamp.
 *
 * @param token - Current JWT containing the refresh token.
 * @returns Updated token object or null if the refresh operation fails.
 */
export async function refreshAccessToken(token: JWT) {
  try {
    const response = await apiPostgres.post(
      '/auth/social/refresh-token',
      {},
      {
        headers: {
          Authorization: `Bearer ${token.refreshToken}`
        }
      }
    )

    const accessToken = response.data.token
    const refreshToken = response.data.refreshToken

    if (!accessToken || !refreshToken) {
      throw new Error('No access token')
    }

    const newToken = {
      ...token,
      accessToken,
      refreshToken,
      accessTokenExpires: Date.now() + ACCESS_TOKEN_EXPIRES_MILLISECONDS,
      error: null
    }

    return newToken
  } catch (error) {
    console.error({
      'Error refreshing access token': error.message
    })

    return null
  }
}
