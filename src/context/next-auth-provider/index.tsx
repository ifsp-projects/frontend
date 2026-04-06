'use client'

import type { Session } from 'next-auth'
import { SessionProvider, signOut, useSession } from 'next-auth/react'
import { useCallback, useEffect } from 'react'

function AuthSessionGuard() {
  const { data: session, update } = useSession()

  // Re-sync session with DB on window focus (tab switch, refresh, etc.)
  const syncSession = useCallback(async () => {
    await update({ refreshedAt: Date.now() }) // triggers next-auth to re-fetch from /api/auth/session
  }, [update])

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signOut({ callbackUrl: '/?should_authenticate=true' })
    }
  }, [session?.error])

  useEffect(() => {
    if (session) {
      syncSession()
    }
  }, [])

  return null
}

export default function NextAuthProvider({
  children,
  session
}: Readonly<{
  children: React.ReactNode
  session: Session | null
}>): React.ReactNode {
  return (
    <SessionProvider
      refetchInterval={60 * 5}
      session={session}
      refetchOnWindowFocus
    >
      <AuthSessionGuard />
      {children}
    </SessionProvider>
  )
}
