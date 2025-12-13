import Link from 'next/link'
import type { FC } from 'react'

import Iridescence from '@/components/ui/iridescence'

export const Header: FC = () => {
  return (
    <section className="relative min-h-[600px] px-4 xl:px-0 2xl:min-h-[780px]">
      <div className="absolute top-0 left-0 z-20 h-full min-h-[600px] w-full 2xl:min-h-[780px]">
        <Iridescence
          amplitude={0.1}
          color={[0.5, 0.45, 0.7]}
          mouseReact={false}
          speed={0.5}
        />
      </div>
      <header className="relative z-30 mx-auto flex min-h-[600px] w-full max-w-2xl flex-col items-center justify-center gap-4 lg:max-w-6xl lg:gap-6 2xl:min-h-[780px]">
        <span className="mx-auto text-center text-sm font-semibold text-white uppercase">
          Projeto de Extensão
        </span>
        <h1 className="text-center text-2xl font-bold text-white lg:text-4xl xl:text-5xl">
          Crie páginas profissionais e conquiste
          <br /> mais apoio para sua causa.
        </h1>
        <p className="text-center text-sm text-white lg:text-base">
          Com o Capivara Solidária, sua ONG pode gerar landing pages completas,
          editar textos, imagens e ícones e <br className="hidden lg:block" />{' '}
          se destacar entre as demais — em poucos minutos.
        </p>
        <div className="flex w-full items-center justify-center gap-4">
          <Link
            className="cursor-pointer rounded-full border border-white bg-white px-6 py-2 text-sm font-medium text-neutral-700 backdrop-blur-[10px] transition duration-200"
            href="/minha-ong"
          >
            Quero participar
          </Link>
          <Link
            className="cursor-pointer rounded-full border border-white bg-white/5 px-6 py-2 text-sm font-medium text-white backdrop-blur-[10px] transition-all duration-300 hover:brightness-110"
            href="/ongs"
          >
            Ver projetos
          </Link>
        </div>
      </header>
    </section>
  )
}
