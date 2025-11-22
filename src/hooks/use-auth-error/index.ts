import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

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
