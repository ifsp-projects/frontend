import Image from 'next/image'
import type { FC } from 'react'

import { CircleButton } from '@/components/ui/circle-button'

export const MoreInfoAbout: FC = () => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 lg:max-w-7xl lg:gap-8">
        <div className="mx-auto flex w-full max-w-2xl flex-col-reverse gap-4 border-b border-neutral-200 pb-4 last:border-transparent md:gap-6 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-8 2xl:gap-12">
          <figure className={`h-[380px] w-full rounded-sm`}>
            <Image
              alt="Section Image"
              className="h-[380px] w-full rounded-sm object-cover"
              height={1080}
              src="/images/campanha.webp"
              width={1920}
            />
          </figure>
          <article
            className={`flex w-full max-w-[500px] flex-col gap-2 md:gap-4 lg:gap-6`}
          >
            <h2 className="text-2xl font-bold lg:text-3xl">
              Crie o perfil da sua ONG
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-neutral-600 lg:text-base">
                Cadastre sua organização de forma simples e gratuita. Adicione
                informações sobre sua missão, história e projetos para que mais
                pessoas conheçam e confiem no seu trabalho social.
              </p>
            </div>
            <div className="flex w-fit justify-start">
              <CircleButton href="/login" label="Quero criar minha conta" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
