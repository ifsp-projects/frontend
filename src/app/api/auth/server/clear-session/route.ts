// app/api/auth/clear-session/route.ts (App Router)
// ou pages/api/auth/clear-session.ts (Pages Router)

import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookiesToDelete = [
    'next-auth.session-token',
    '__Secure-next-auth.session-token',
    'next-auth.csrf-token',
    '__Host-next-auth.csrf-token',
    'next-auth.callback-url',
    '__Secure-next-auth.callback-url'
  ]

  const cookieStore = await cookies()

  cookiesToDelete.forEach(cookieName => {
    cookieStore.delete(cookieName)
  })

  return NextResponse.redirect(
    new URL('/?should_authenticate=true', process.env.NEXTAUTH_URL)
  )
}
