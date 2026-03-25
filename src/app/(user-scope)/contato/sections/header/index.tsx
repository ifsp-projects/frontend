import Image from 'next/image'
import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <section className="bg-neutral-50 px-4 py-12 text-center lg:py-16">
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
          <h1 className="text-center text-2xl font-bold lg:text-left lg:text-4xl xl:text-5xl">
            Quer que sua ONG faça parte do projeto? Envie uma solicitação pelo
            formulário abaixo.
          </h1>

          <p className="text-center text-sm text-neutral-500 lg:text-left lg:text-base xl:text-lg">
            Este formulário é para organizações que desejam participar da
            plataforma. Após o envio, nossa equipe irá analisar as informações
            da sua ONG. Se estiver tudo certo, enviaremos um convite no seu
            e-mail com os próximos passos para entrar no projeto.
          </p>
        </article>
        <figure className="hidden h-40 w-full max-w-[400px] items-center justify-center lg:flex lg:h-auto">
          <Image
            alt="Header Image"
            className="h-40 w-auto object-contain lg:h-auto"
            height={800}
            src="https://www-cdn.anthropic.com/images/4zrzovbb/website/1576ae23eaf481f33bd36ab468171cc69d12361a-1000x1000.svg"
            width={800}
          />
        </figure>
      </header>
    </section>
  )
}
