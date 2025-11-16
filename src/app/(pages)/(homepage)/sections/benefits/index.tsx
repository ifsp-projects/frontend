import type { FC } from 'react'

import { BENEFITS_CARDS } from './data'

export const Benefits: FC = () => {
  return (
    <section className="bg-neutral-800 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <h2 className="text-2xl font-bold text-white lg:text-4xl">
          Benefícios de ter sua página
        </h2>
        <ul className="grid w-full grid-cols-3 gap-4">
          {BENEFITS_CARDS.map((benefit, index: number) => (
            <li
              className="flex w-full flex-col gap-4 rounded-sm border border-neutral-400 p-4"
              key={`benefit-card-${index}`}
            >
              <h3 className="text-xl font-bold text-neutral-300">
                {benefit.name}
              </h3>
              <p className="text-sm text-neutral-400">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
