import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const TryNow = async () => {
  return (
    <section className="flex flex-col items-center px-6 py-24 xl:px-12">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-black tracking-tight text-neutral-800 lg:text-4xl">
          Pronto para colocar sua ONG no mapa?
        </h2>
        <p className="text-sm leading-relaxed text-neutral-500">
          Leva menos de 5 minutos para criar sua primeira página. Sem
          configuração, sem código, sem complicação.
        </p>
        <Link
          className="flex items-center gap-2 rounded-sm bg-neutral-800 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-700"
          href="/contato"
        >
          Criar minha página agora
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="text-xs text-neutral-400">
          Grátis para sempre no plano básico.
        </p>
      </div>
    </section>
  )
}
