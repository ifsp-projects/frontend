import './globals.css'

import { Footer } from '../components/shared/footer'
import { Navbar } from '../components/shared/navbar'
import { font } from '../constants/font'
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
        <BootstrapClient />
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
