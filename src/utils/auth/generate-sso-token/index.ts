import { sign } from 'jsonwebtoken'

export const generateSsoToken = async data => {
  const ssoToken = await sign(data, process.env.SECRET_KEY_SSO_TOKEN, {
    expiresIn: '2h'
  })

  return ssoToken
}
