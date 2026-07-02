import { ACCESS_TOKEN_EXPIRES_SECONDS } from 'capivara-solidaria-ts-sdk'

import { account } from '@/instances/account'

export const credentialsOptions = {
  name: 'Credentials',
  credentials: {
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' }
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) return null

    const response = await account.auth.ssoLogin({
      email: credentials.email,
      password: credentials.password
    })

    if (!response?.data) return null

    const { data } = response

    return {
      ...data.organization,
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: ACCESS_TOKEN_EXPIRES_SECONDS
    }
  }
}
