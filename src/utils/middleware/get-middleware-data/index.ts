import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

import type { CookiesUserAgent, GetMiddlewareDataReturn } from './types'

/**
 * Safely extracts and casts a cookie value.
 *
 * @param cookie - Cookie object retrieved from the cookie store.
 * @returns The typed cookie value or null if the cookie does not exist.
 */
const getCookieValue = <CookieValue>(
  cookie: RequestCookie
): CookieValue | null => {
  return (cookie?.value as CookieValue) ?? null
}

/**
 * Retrieves and parses data stored by middleware cookies.
 *
 * Returns the detected user agent, search parameters,
 * and stored UTM data when available.
 *
 * @returns Parsed middleware-related cookie data.
 */
export const getMiddlewareData = async (): Promise<GetMiddlewareDataReturn> => {
  const cookieStore = await cookies()

  const cookiesUserAgent = getCookieValue<CookiesUserAgent>(
    cookieStore.get('userAgent')
  )

  const cookiesSearchParams =
    JSON.parse(getCookieValue<string>(cookieStore.get('searchParams'))) ?? null
  const cookiesUtmStoredData =
    JSON.parse(getCookieValue<string>(cookieStore.get('utmStaticData'))) ?? null

  return {
    cookiesUserAgent,
    cookiesSearchParams,
    cookiesUtmStoredData
  }
}
