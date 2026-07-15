import { type FC } from 'react'

import { DrawEffect } from '../../icons/draw-effect'
import { AnimatedImage } from './animated-image'
import { CustomAnchor } from './custom-anchor'

export const MoreInfoAbout: FC = () => {
  return (
    <section className="bg-neutral-100 px-4 py-12 lg:py-8 xl:px-0">
      <div className="relative z-40 mx-auto flex w-full max-w-2xl flex-col gap-6 lg:max-w-7xl lg:gap-8">
        <div className="mx-auto flex w-full max-w-2xl flex-col-reverse gap-10 border-b border-neutral-200 pb-4 last:border-transparent md:gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:py-8 2xl:gap-12">
          <AnimatedImage />
          <article className={`flex w-full flex-col gap-2 md:gap-4 lg:gap-6`}>
            <h2 className="text-xl font-bold md:text-3xl lg:text-4xl">
              Se increva no nosso <br className="hidden xl:block" /> formulário
              de contato para <br className="hidden xl:block" /> fazer parte da
              iniciativa.
              <DrawEffect />
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-neutral-600 lg:text-base">
                Cadastre sua organização de forma simples e gratuita. Adicione
                informações <br className="hidden xl:block" /> sobre sua missão,
                história e projetos para que mais pessoas conheçam{' '}
                <br className="hidden xl:block" /> e confiem no seu trabalho
                social.
              </p>
            </div>
            <div className="mt-4 flex w-fit justify-start lg:mt-0">
              <CustomAnchor />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
