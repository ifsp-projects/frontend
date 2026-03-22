import type { FC } from 'react'

import { CircleButton } from '@/components/ui/circle-button'
import { GLOBE_CONFIG } from '@/constants/components/globe/globe-config'
import { SAMPLE_ARCS } from '@/constants/components/globe/sample-arc'

import { DrawEffect } from '../../icons/draw-effect'
import { AnimatedImage } from './animated-image'
import { World } from './world'

export const MoreInfoAbout: FC = () => {
  return (
    <section className="bg-neutral-100 px-4 py-12 lg:py-8 xl:px-0">
      <div className="relative z-40 mx-auto flex w-full max-w-2xl flex-col gap-6 lg:max-w-7xl lg:gap-8">
        <div className="absolute top-[160px] right-[-180px] z-20 hidden h-full w-[525px] items-center justify-center lg:flex">
          <div className="relative mx-auto h-[500px] w-full max-w-7xl overflow-hidden px-4">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full bg-linear-to-b from-transparent to-white select-none dark:to-black" />
            <div className="absolute z-10 h-72 w-full md:h-full">
              <World data={SAMPLE_ARCS} globeConfig={GLOBE_CONFIG} />
            </div>
          </div>
        </div>
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
              <CircleButton href="/contato" label="Quero fazer parte" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
