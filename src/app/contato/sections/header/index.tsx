import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <section className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 px-6 py-16 text-center">
      <h1 className="mb-4 text-4xl font-bold text-blue-800">
        Entre em Contato
      </h1>

      <p className="mx-auto max-w-2xl text-lg">
        Conhece uma ONG, projeto social ou iniciativa solidária em Capivari e
        região? Envie sua sugestão — nossa equipe vai analisar e incluir novas
        iniciativas no site.
      </p>
    </section>
  )
}
