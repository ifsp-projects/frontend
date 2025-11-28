import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <section className="px-4 pt-12 text-center lg:pt-16 xl:px-0">
      <header className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-neutral-700 lg:text-4xl">
          Projetos Sociais em Capivari
        </h1>
        <p className="mx-auto max-w-3xl text-sm text-neutral-500 lg:text-base">
          Conheça iniciativas locais que promovem solidariedade, educação e
          apoio à comunidade, incluindo ONGs e projects sociais ativos na cidade
          e região.
        </p>
      </header>
    </section>
  )
}
