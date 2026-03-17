import type { DefaultSession } from 'next-auth'

import type { Object3DNode } from '@react-three/fiber'

import type { PostgresOrganization } from './postgres/postgres-organization'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string
    error?: string
    organization: PostgresOrganization
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

declare module '@react-three/fiber' {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>
  }
}
