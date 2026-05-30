'use server'

import { cookies } from 'next/headers'

/**
 * Removes all cookies available in the current server request context.
 *
 * Useful for logout flows, session cleanup, or resetting
 * user-related data stored in cookies.
 */
export const clearAllCookies = async () => {
  try {
    const cookie = await cookies()

    const allCookies = cookie.getAll()

    for (const [key] of Object.entries(allCookies)) {
      cookie.delete(key)
    }
  } catch (error) {
    console.error({
      clearAllCookiesErrorMessage: error.message
    })
  }
}
