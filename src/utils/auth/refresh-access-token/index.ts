import type { JWT } from 'next-auth'

import { ACCESS_TOKEN_EXPIRES_MILLISECONDS } from '../../../constants/auth/access-token-expires-miliseconds'
import { apiPostgres } from '../../../instances/postgres'

export async function refreshAccessToken(token: JWT) {
  try {
    const { data } = await apiPostgres.post(
      '/refresh-token',
      {},
      {
        headers: {
          Authorization: `Bearer ${token.refreshToken}`
        }
      }
    )

    const accessToken = data.token
    const refreshToken = data.refreshToken

    if (!accessToken || !refreshToken) {
      throw new Error('No access token')
    }

    const newToken = {
      ...token,
      accessToken,
      refreshToken,
      accessTokenExpires: Date.now() + ACCESS_TOKEN_EXPIRES_MILLISECONDS
    }

    return newToken
  } catch (error) {
    console.error({
      'Error refreshing access token': error.message
    })

    return {
      ...token,
      error: 'RefreshAccessTokenError'
    }
  }
}
