'use client'

import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

export const HighlightStripe = () => {
  const pathname = usePathname()

  const ALLOWED_PATHS: string[] = [
    '/',
    '/faq',
    '/sobre',
    '/contato',
    '/ongs',
    '/blog',
    '/changelog',
    '/termos-de-uso'
  ] as const

  return ALLOWED_PATHS.includes(pathname) ? (
    <div className="relative z-30 bg-linear-to-r from-rose-500 to-rose-400 px-4 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5">
        <p className="text-xs text-white">Cadastre sua ONG agora</p>
        <p className="text-xs text-white">•</p>
        <a
          className="group flex items-center gap-1 text-xs text-white underline underline-offset-2 transition-all duration-300 hover:brightness-105"
          href="/contato"
        >
          Entrar em contato
          <ArrowRight className="h-3 w-3 text-white transition-all duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  ) : null
}
