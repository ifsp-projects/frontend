import type { SignOptions } from 'jsonwebtoken'
import { sign } from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET

if (!SECRET) {
  throw new Error('JWT_SECRET environment variable is required')
}

interface SsoTokenData {
  [key: string]: unknown
}

export const generateSsoToken = (data: SsoTokenData): string => {
  const ssoToken = sign(data, SECRET, {
    expiresIn: '2h'
  } as SignOptions)

  return ssoToken
}
