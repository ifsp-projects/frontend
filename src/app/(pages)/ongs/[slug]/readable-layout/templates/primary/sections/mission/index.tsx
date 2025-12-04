import type { FC } from 'react'

import type { MissionProps } from './types'

export const Mission: FC<MissionProps> = async ({ copy }) => {
  return (
    <section className="px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-12">
        <article className="flex flex-col gap-4 lg:items-center">
          <p className="text-sm text-emerald-600 uppercase lg:text-center">
            {copy.subtitle}
          </p>
          <h2 className="text-2 w-full max-w-[400px] text-center text-2xl font-bold lg:text-center lg:text-4xl">
            {copy.title}
          </h2>
          <p className="max-w-[360px] text-sm text-slate-500 lg:text-center lg:text-base">
            {copy.description}
          </p>
        </article>
        <ul className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          {copy.tabs.map((tab, index: number) => (
            <li
              className="flex w-full flex-col items-center gap-3"
              key={`tab-${index}`}
            >
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text text-2xl font-semibold text-transparent lg:text-5xl">
                {tab.title}
              </span>
              <p className="text-sm lg:text-base">{tab.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
