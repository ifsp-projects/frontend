import type { User as UserType } from './authentication'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string
    error?: string
    user: UserType
  }

  interface User {
    accessToken?: string
    expiresIn?: number
    refreshToken?: string
  }

  interface JWT {
    accessToken?: string
    accessTokenExpires?: number
    error?: string
    refreshToken?: string
  }
}

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}
