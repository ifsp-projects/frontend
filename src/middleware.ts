import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  })

  if (!token || token.error === 'RefreshAccessTokenError') {
    const response = NextResponse.redirect(
      new URL('/login?should_authenticate=true', request.url)
    )

    response.cookies.set('next-auth.session-token', '', {
      maxAge: 0,
      path: '/'
    })
    response.cookies.set('__Secure-next-auth.session-token', '', {
      maxAge: 0,
      path: '/'
    })

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/minha-ong', '/minha-ong/:path*']
}
