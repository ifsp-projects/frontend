'use client'

import type { Session } from 'next-auth'
import { SessionProvider, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

function AuthSessionGuard() {
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signOut({ callbackUrl: '/?should_authenticate=true' })
    }
  }, [session?.error])

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
    <SessionProvider session={session}>
      <AuthSessionGuard />
      {children}
    </SessionProvider>
  )
}
