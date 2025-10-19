import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

import type { CookiesUserAgent, GetMiddlewareDataReturn } from './types'

const getCookieValue = <CookieValue>(
  cookie: RequestCookie
): CookieValue | null => {
  return (cookie?.value as CookieValue) ?? null
}

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
