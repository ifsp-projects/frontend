import type { FC } from 'react'

import { BENEFITS_CARDS } from './data'

export const Benefits: FC = () => {
  return (
    <section className="bg-neutral-800 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <h2 className="text-2xl font-bold text-white lg:text-4xl">
          Benefícios de ter sua página
        </h2>
        <ul className="hidden w-full gap-4 lg:flex lg:justify-between">
          {BENEFITS_CARDS.map((benefit, index: number) => (
            <li
              className="flex w-full flex-col gap-4 border-r border-neutral-500 px-4 py-1 last:border-transparent"
              key={`benefit-card-${index}`}
            >
              <h3 className="text-xl font-bold text-neutral-200">
                {benefit.name}
              </h3>
              <p className="text-sm text-neutral-300">{benefit.description}</p>
            </li>
          ))}
        </ul>
        <ul className="grid w-full grid-cols-1 gap-4 md:hidden md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS_CARDS.slice(0, 3).map((benefit, index: number) => (
            <li
              className="flex w-full flex-col gap-2 rounded-sm border border-neutral-400 p-4"
              key={`benefit-card-${index}`}
            >
              <h3 className="text-xl font-bold text-neutral-200">
                {benefit.name}
              </h3>
              <p className="text-sm text-neutral-300">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
