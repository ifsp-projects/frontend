import type { NextRequest } from 'next/server'
import { userAgent } from 'next/server'

export const getUserAgentMiddleware = (request: NextRequest) => {
  const { device } = userAgent(request)

  return device.type === 'mobile' ? 'mobile' : 'desktop'
}
