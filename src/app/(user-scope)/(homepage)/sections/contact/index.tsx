import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

export const Contact: FC = () => {
  return (
    <section className="relative z-40 w-full bg-white px-4 pt-8 pb-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 lg:max-w-7xl">
        <h2 className="text-2xl font-bold lg:text-4xl">Tem alguma sugestão?</h2>
        <p className="text-center text-sm text-neutral-500 lg:text-base">
          Se conhece alguma ONG, projeto social ou iniciativa solidária, envie{' '}
          <br className="hidden xl:block" /> sua sugestão e ajude a ampliar o
          alcance dessas ações.
        </p>
        <Link
          className="mt-2 flex cursor-pointer items-center gap-3 rounded-full bg-neutral-700 py-2.5 pr-4 pl-5 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800"
          href="/contato"
        >
          Enviar sugestão
          <figure className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
            <ArrowRight className="h-3 w-3 text-neutral-700" />
          </figure>
        </Link>
      </div>
    </section>
  )
}
