import type { SignOptions } from 'jsonwebtoken'
import { sign } from 'jsonwebtoken'

const SECRET: string = process.env.JWT_SECRET

if (!SECRET) {
  throw new Error('JWT_SECRET environment variable is required')
}

interface SsoTokenData {
  [key: string]: unknown
}

/**
 * Generates a signed JWT token for SSO authentication.
 *
 * The token contains the provided payload and expires after 2 hours.
 *
 * @param data - Data to include in the JWT payload.
 * @returns A signed JWT string.
 */
export const generateSsoToken = (data: SsoTokenData): string => {
  const ssoToken = sign(data, SECRET, {
    expiresIn: '2h'
  } as SignOptions)

  return ssoToken
}
