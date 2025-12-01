import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <section className="bg-neutral-50 px-4 py-12 text-center lg:py-16 xl:px-0">
      <h1 className="mb-2 text-2xl font-bold lg:text-4xl">
        Quer conversar com a gente?
      </h1>

      <p className="mx-auto max-w-2xl text-center text-sm text-neutral-500 lg:text-base">
        Conhece uma ONG, projeto social ou iniciativa solidária em Capivari e
        região? Envie sua sugestão — nossa equipe vai analisar e incluir novas
        iniciativas no site.
      </p>
    </section>
  )
}
