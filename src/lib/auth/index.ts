import type { AuthOptions, JWT } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { ACCESS_TOKEN_EXPIRES_MILLISECONDS } from '../../constants/auth/access-token-expires-miliseconds'
import type { User } from '../../types/postgres/user'
import { refreshAccessToken } from '../../utils/auth/refresh-access-token'
import { googleOptions } from './google-options'

export const authOptions: AuthOptions = {
  providers: [
    //@ts-ignore
    GoogleProvider(googleOptions)
  ],
  callbacks: {
    async jwt(props) {
      let { token, user, account, trigger, session } = props

      if (trigger === 'update') {
        token = { ...token, ...session }

        return token
      }

      if (account && user) {
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.accessTokenExpires =
          Date.now() + ACCESS_TOKEN_EXPIRES_MILLISECONDS
        token = { ...token, ...user }
        return token
      }

      if (Date.now() < (token.accessTokenExpires as number)) {
        return token
      }

      return await refreshAccessToken(token as JWT)
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.error = token.error as string

      image: token.image as string
      session.user = token as unknown as User
      return session
    }
  },
  pages: {
    signIn: '/?should_authenticate=true'
  },
  secret: process.env.NEXTAUTH_SECRET
}
