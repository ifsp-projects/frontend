import './globals.css'

import type { Metadata, Viewport } from 'next'
import { getServerSession } from 'next-auth'
import { Toaster } from 'sonner'

import ToastMessage from '@/components/shared/toast-message'
import { font } from '@/constants/font'
import NextAuthProvider from '@/context/next-auth-provider'
import { authOptions } from '@/lib/auth'
import { PostHogProvider } from '@/providers/PosthogProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'

import 'lenis/dist/lenis.css'

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
  ),
  title: {
    default: 'Capivara Solidária',
    template: '%s · Capivara Solidária'
  },
  description:
    'Transforme a presença digital da sua ONG com o Capivara Solidária. Gere páginas incríveis, personalize conteúdo e conquiste mais doadores e visibilidade — sem precisar de programador.'
}

export const viewport: Viewport = {
  viewportFit: 'cover'
}

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
