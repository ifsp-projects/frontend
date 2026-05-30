import type { NextRequest } from 'next/server'
import { userAgent } from 'next/server'

/**
 * Determines whether the request originated from a mobile or desktop device.
 *
 * Uses Next.js user-agent parsing to classify the device type.
 *
 * @param request - Incoming Next.js request.
 * @returns The detected device category.
 */
export const getUserAgentMiddleware = (request: NextRequest) => {
  const { device } = userAgent(request)

  return device.type === 'mobile' ? 'mobile' : 'desktop'
}
