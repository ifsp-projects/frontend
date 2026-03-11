import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

/**
 * A background listener hook that monitors the NextAuth session for authentication errors.
 * Specifically, it checks if the session encounters a `'RefreshAccessTokenError'` (usually
 * indicating that the refresh token has expired or is invalid). If triggered, it automatically
 * signs the user out and redirects them to the root route to re-authenticate.
 *
 * @returns {void}
 *
 * @example
 * ```tsx
 * // Best placed high up in your component tree, such as in a layout or global provider
 * export const AuthGuard = ({ children }) => {
 * useAuthError() // Silently watches for token refresh failures
 * * return <>{children}</>
 * }
 * ```
 */
export const useAuthError = () => {
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signOut({
        callbackUrl: '/?should_authenticate=true',
        redirect: true
      })
    }
  }, [session])
}
