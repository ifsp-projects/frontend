import Image from 'next/image'
import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <section className="bg-neutral-100 px-4 py-12 text-center lg:py-16">
      {/* <h1 className="mb-2 text-2xl font-bold lg:text-4xl">
        Quer conversar com a gente?
      </h1>

      <p className="mx-auto max-w-2xl text-center text-sm text-neutral-500 lg:text-base">
        Conhece uma ONG, projeto social ou iniciativa solidária em Capivari e
        região? Envie sua sugestão — nossa equipe vai analisar e incluir novas
        iniciativas no site.
      </p> */}
      <header className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:gap-16">
        <article className="flex w-full flex-col gap-4">
          <h2 className="text-left text-2xl font-bold lg:text-4xl xl:text-5xl">
            Quer falar com a gente?
            <br />
            Preencha o formulário abaixo
            <br />e te retornaremos em breve.
          </h2>
          <p className="text-left text-sm text-neutral-500 lg:text-base xl:text-lg">
            Conhece uma ONG, projeto social ou iniciativa solidária em Capivari
            e região? Envie sua sugestão — nossa equipe vai analisar e incluir
            novas iniciativas no site.
          </p>
        </article>
        <figure className="flex h-60 w-full max-w-[450px] items-center justify-center lg:h-auto">
          <Image
            alt="Header Image"
            className="h-60 w-auto object-contain lg:h-auto"
            height={800}
            src="/images/contact-header-image.png"
            width={800}
          />
        </figure>
      </header>
    </section>
  )
}
