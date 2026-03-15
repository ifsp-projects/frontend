import Image from 'next/image'
import type { FC } from 'react'

import { CircleButton } from '@/components/ui/circle-button'

import { DrawEffect } from '../../icons/draw-effect'

export const MoreInfoAbout: FC = () => {
  return (
    <section className="bg-neutral-100 px-4 py-12 lg:py-8 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 lg:max-w-7xl lg:gap-8">
        <div className="mx-auto flex w-full max-w-2xl flex-col-reverse gap-10 border-b border-neutral-200 pb-4 last:border-transparent md:gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:py-8 2xl:gap-12">
          <figure className="h-auto max-h-full w-full max-w-full rounded-sm bg-[#fdd7d9] lg:aspect-square lg:max-h-[520px] lg:max-w-[400px]">
            <Image
              alt="Section Image"
              className="h-auto max-h-full rounded-sm object-cover lg:aspect-square lg:max-h-[520px]"
              fetchPriority="high"
              height={1080}
              loading="eager"
              src="https://www-cdn.anthropic.com/images/4zrzovbb/website/1576ae23eaf481f33bd36ab468171cc69d12361a-1000x1000.svg"
              width={1920}
            />
          </figure>
          <article className={`flex w-full flex-col gap-2 md:gap-4 lg:gap-6`}>
            <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
              Crie o perfil da sua ONG
              <DrawEffect />
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-neutral-600 lg:text-base">
                Cadastre sua organização de forma simples e gratuita. Adicione
                informações sobre sua missão, história e projetos para que mais
                pessoas conheçam e confiem no seu trabalho social.
              </p>
            </div>
            <div className="mt-4 flex w-fit justify-start lg:mt-0">
              <CircleButton href="/login" label="Quero criar minha conta" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
