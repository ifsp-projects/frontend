import Link from 'next/link'
import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <section className="relative bg-neutral-50 px-4 xl:px-0">
      {/* <div className="absolute top-0 left-0 z-20 h-full min-h-[600px] w-full 2xl:min-h-[780px]">
        <Iridescence
          amplitude={0.1}
          color={[0.5, 0.45, 0.7]}
          mouseReact={false}
          speed={0.5}
        />
      </div> */}
      <header className="relative z-30 mx-auto flex w-full max-w-2xl flex-col items-center gap-4 py-12 lg:max-w-7xl lg:flex-row lg:justify-between lg:gap-6 lg:py-20">
        <div className="flex w-full flex-col gap-6 lg:gap-8">
          <article className="flex flex-col gap-4">
            <span className="g-[#f5f5f7c2] bg-opacity-10 w-fit rounded-full border border-neutral-400 bg-clip-padding px-2 py-1.5 text-[10px] font-semibold uppercase backdrop-blur-sm backdrop-filter">
              Projeto de Extensão
            </span>
            <h1 className="text-2xl font-bold lg:text-4xl xl:text-5xl">
              Crie páginas profissionais e conquiste
              <br /> mais apoio para sua causa.
            </h1>
            <p className="text-sm lg:text-base">
              Com o Capivara Solidária, sua ONG pode gerar landing pages
              completas, editar textos, imagens e ícones e{' '}
              <br className="hidden lg:block" /> se destacar entre as demais —
              em poucos minutos.
            </p>
          </article>
          <div className="flex w-fit items-center gap-4">
            <Link
              className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-700 px-6 py-2 text-sm font-medium text-white backdrop-blur-[10px] transition-all duration-300 hover:bg-neutral-800"
              href="/minha-ong"
            >
              Quero participar
            </Link>
            <Link
              className="cursor-pointer rounded-full border border-neutral-700 px-6 py-2 text-sm font-medium backdrop-blur-[10px] transition-all duration-300 hover:bg-white"
              href="/ongs"
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </header>
    </section>
  )
}
