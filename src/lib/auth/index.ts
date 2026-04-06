import type { AuthOptions, JWT } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

import { ACCESS_TOKEN_EXPIRES_MILLISECONDS } from '@/constants/auth/access-token-expires-milliseconds'
import { instanceMotor } from '@/instances/motor'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'
import { refreshAccessToken } from '@/utils/auth/refresh-access-token'

import { ALLOWED_EMAILS_FOR_ADMIN_LOGIN } from './constants/allowed-admin-emails'
import { credentialsOptions } from './credentials-options'
import { googleOptions } from './google-options'

export const authOptions: AuthOptions = {
  providers: [
    //@ts-ignore
    GoogleProvider(googleOptions),
    //@ts-ignore
    CredentialsProvider(credentialsOptions)
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        return ALLOWED_EMAILS_FOR_ADMIN_LOGIN.includes(user.email ?? '')
      }
      return true
    },
    async jwt(props) {
      let { token, user, account, trigger } = props

      if (trigger === 'update') {
        try {
          const response =
            await instanceMotor.organizations.getOrganizationByEmail({
              email: token.email as string
            })
          if (response?.data?.organization) {
            token = { ...token, ...response.data.organization }
          }
        } catch (error) {
          console.error({ jwtUpdateError: error })
        }
        return token
      }

      if (account && user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.accessTokenExpires =
          Date.now() + ACCESS_TOKEN_EXPIRES_MILLISECONDS
        token.provider = account.provider
        token = { ...token, ...user }
      }

      if (account?.provider === 'credentials') {
        return token
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token
      }

      const refreshedToken = await refreshAccessToken(token as JWT)

      if (!refreshedToken) {
        return {
          ...token,
          accessToken: null,
          refreshToken: null,
          error: 'RefreshAccessTokenError'
        }
      }

      return refreshedToken
    },

    async session({ session, token }) {
      if (!token.accessToken || token.error === 'RefreshAccessTokenError') {
        return {
          expires: new Date(0).toISOString(),
          user: undefined,
          error: 'RefreshAccessTokenError'
        } as any
      }

      session.accessToken = token.accessToken as string
      session.error = token.error as string

      const { refreshToken: _refreshToken, ...safeToken } = token as JWT
      session.organization = safeToken as unknown as PostgresOrganization
      return session
    }
  },
  pages: {
    signIn: '/?should_authenticate=true'
  },
  secret: process.env.NEXTAUTH_SECRET
}
