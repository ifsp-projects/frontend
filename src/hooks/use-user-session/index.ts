'use client'

import { useSession } from 'next-auth/react'

import type { UseUserSessionReturn } from './types'

/**
 * A custom wrapper around NextAuth's `useSession` hook.
 * It conveniently extracts and types the active user's organization data and access token
 * from the session object, alongside standard NextAuth session properties.
 *
 * @returns {UseUserSessionReturn} An object containing the current session details:
 * - `organization`: The PostgresOrganization data attached to the current user (if logged in).
 * - `status`: The session's loading state (`"loading"`, `"authenticated"`, or `"unauthenticated"`).
 * - `token`: The user's active JWT access token.
 * - `update`: The NextAuth function used to manually trigger a session refresh.
 *
 * @example
 * ```tsx
 * const { organization, token, status, update } = useUserSession()
 * * if (status === "loading") return <LoadingSpinner />
 * if (status === "unauthenticated") return <Redirect to="/login" />
 * * return <div>Welcome to {organization?.name}!</div>
 * ```
 */
export const useUserSession = (): UseUserSessionReturn => {
  const { data, update, status } = useSession() ?? {}

  return {
    organization: data?.organization,
    token: data?.accessToken,
    status,
    update
  }
}
