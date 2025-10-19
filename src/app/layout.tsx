//@ts-ignore
import './globals.css'

import { Footer } from '../components/shared/footer'
import { Navbar } from '../components/shared/navbar'
import { cairo } from '../constants/font'
import BootstrapClient from './BootstrapClient'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${cairo.className} text-neutral-700`}>
        <BootstrapClient />
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
