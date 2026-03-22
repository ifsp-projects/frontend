import { cookies } from 'next/headers'

import { POSTHOG_FALLBACK_COOKIE_NAME } from './constants'

export const getDistinctId = async () => {
  const cookieStore = await cookies()
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY

  if (posthogKey) {
    const posthogCookieName = `ph_${posthogKey}_posthog`
    const posthogCookieValue = cookieStore.get(posthogCookieName)?.value

    if (posthogCookieValue) {
      try {
        const decoded = decodeURIComponent(posthogCookieValue)
        const parsed = JSON.parse(decoded)
        if (parsed.distinct_id) return parsed.distinct_id
      } catch {
        // Fall through to fallback cookie
      }
    }
  }

  const fallbackId = cookieStore.get(POSTHOG_FALLBACK_COOKIE_NAME)?.value
  if (fallbackId) return fallbackId

  return crypto.randomUUID()
}
