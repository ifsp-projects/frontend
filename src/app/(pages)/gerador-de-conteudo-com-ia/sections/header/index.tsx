import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

import { MockTerminal } from './mock-terminal'

export const Header = async () => {
  return (
    <section className="flex flex-col items-center px-6 py-24 text-center xl:px-12 xl:py-32">
      <div className="flex flex-col items-center gap-6 xl:gap-8">
        <div className="flex items-center gap-2 rounded-sm border border-rose-100 bg-rose-50 px-3 py-1.5">
          <Sparkles className="h-3 w-3 text-rose-400" />
          <span className="text-xs font-semibold text-rose-500">
            Funcionalidade — Gerador de Copy com IA
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl leading-[1.08] font-black tracking-tight text-neutral-800 lg:text-6xl xl:text-7xl">
          Escreva menos. <br className="hidden lg:block" />
          Impacte <span className="text-rose-400">muito mais.</span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-neutral-500 lg:text-lg">
          IA treinada para o universo das ONGs. Gere textos para site, redes
          sociais, e-mails e campanhas em segundos — com o tom certo para cada
          momento.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            className="flex items-center gap-2 rounded-sm bg-neutral-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-700"
            href="#"
          >
            Gerar meu primeiro texto
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            className="flex items-center gap-2 rounded-sm border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-600 transition-all hover:border-neutral-300"
            href="#"
          >
            Ver exemplos de output
          </Link>
        </div>

        <p className="text-xs text-neutral-400">
          50 gerações grátis por mês. Sem cartão de crédito.
        </p>
      </div>

      <div className="relative mt-16 w-full max-w-3xl xl:mt-20">
        <div className="absolute -inset-px rounded-sm bg-linear-to-b from-rose-100/40 to-transparent" />
        <MockTerminal />
      </div>
    </section>
  )
}
