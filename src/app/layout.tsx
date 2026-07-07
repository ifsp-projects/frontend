import './globals.css'

import type { Metadata, Viewport } from 'next'
import { getServerSession } from 'next-auth'
import { Albert_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import NextAuthProvider from '@/context/next-auth-provider'
import { PostHogProvider } from '@/context/posthog-provider'
import { authOptions } from '@/lib/auth'

import 'lenis/dist/lenis.css'

const font = Albert_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

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
      <head>
        <link
          crossOrigin="use-credentials"
          href="https://us-assets.i.posthog.com"
          rel="preconnect"
        />
      </head>
      <body
        className={`${font.className} text-neutral-700 selection:bg-rose-50 selection:text-neutral-700`}
      >
        <PostHogProvider>
          <NextAuthProvider session={session}>
            {children}
            <Toaster />
          </NextAuthProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}
