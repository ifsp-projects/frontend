import type { JWT } from 'next-auth'

import { ACCESS_TOKEN_EXPIRES_MILLISECONDS } from '@/constants/auth/access-token-expires-milliseconds'
import { apiPostgres } from '@/instances/postgres'

export async function refreshAccessToken(token: JWT) {
  try {
    const response = await apiPostgres.post(
      '/refresh-token',
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
