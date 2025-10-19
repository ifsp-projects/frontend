import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <section className="mt-8 px-6 py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-blue-800">
        Projetos Sociais em Capivari
      </h1>
      <p className="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-700">
        Conheça iniciativas locais que promovem solidariedade, educação e apoio
        à comunidade, incluindo ONGs e projects sociais ativos na cidade e
        região.
      </p>
    </section>
  )
}
