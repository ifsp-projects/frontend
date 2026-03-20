import './globals.css'

import { getServerSession } from 'next-auth'
import { Toaster } from 'sonner'

import ToastMessage from '@/components/shared/toast-message'
import { font } from '@/constants/font'
import NextAuthProvider from '@/context/next-auth-provider'
import { authOptions } from '@/lib/auth'
import { PostHogProvider } from '@/providers/PosthogProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${font.className} text-neutral-700 selection:bg-rose-50 selection:text-neutral-700`}
      >
        <SpeedInsights />
        <PostHogProvider>
          <NextAuthProvider session={session}>
            <ToastMessage />
            {children}
            <Toaster />
          </NextAuthProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}
