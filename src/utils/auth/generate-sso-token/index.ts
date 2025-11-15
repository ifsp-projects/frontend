import type { SignOptions } from 'jsonwebtoken'
import { sign } from 'jsonwebtoken'

const SECRET = process.env.SECRET_KEY_SSO_TOKEN

if (!SECRET) {
  throw new Error('SECRET_KEY_SSO_TOKEN environment variable is required')
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
