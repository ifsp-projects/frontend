import './globals.css'

import { Footer } from '@/components/shared/footer'
import { Navbar } from '@/components/shared/navbar'
import { font } from '@/constants/font'
import { PostHogProvider } from '@/providers/PosthogProvider'

import BootstrapClient from './BootstrapClient'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${font.className} text-neutral-700 selection:bg-rose-50`}
      >
        <PostHogProvider>
          <BootstrapClient />
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  )
}
