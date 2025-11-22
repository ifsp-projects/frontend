import type { FC } from 'react'

import { DepoimentCard } from './depoiment-card'
import type { DepoimentProps } from './types'

export const Depoiments: FC<DepoimentProps> = async ({ copy }) => {
  return (
    <section className="bg-slate-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl">
        <article className="flex w-full flex-col gap-2 lg:items-center">
          <h2 className="text-2xl font-bold lg:text-center lg:text-4xl">
            {copy.title}
          </h2>
          <p className="text-sm text-slate-500 lg:text-center lg:text-base">
            {copy.description}
          </p>
        </article>
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:justify-between">
          {copy.cards.map((card, index: number) => (
            <DepoimentCard copy={card} key={`depoiment-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
