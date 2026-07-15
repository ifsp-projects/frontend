import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const TryNow = async () => {
  return (
    <section className="flex flex-col items-center border-t border-neutral-100 bg-white px-6 py-24 xl:px-12">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <figure className="flex h-14 w-14 items-center justify-center rounded-sm bg-rose-50">
          <Sparkles className="h-6 w-6 text-rose-400" />
        </figure>
        <h2 className="text-3xl font-black tracking-tight text-neutral-800 lg:text-4xl">
          Seu próximo texto está a um clique.
        </h2>
        <p className="text-sm leading-relaxed text-neutral-500">
          50 gerações grátis todo mês. Sem cadastro de cartão, sem compromisso.
          Só começa a usar.
        </p>
        <Link
          className="flex items-center gap-2 rounded-sm bg-neutral-800 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-700"
          href="/contato"
        >
          Gerar meu primeiro texto
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="text-xs text-neutral-400">
          Já usado por 900+ comunicadores de ONGs no Brasil.
        </p>
      </div>
    </section>
  )
}
