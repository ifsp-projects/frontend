import type { FC } from 'react'

import type { MissionProps } from './types'

export const Mission: FC<MissionProps> = ({ copy, palette }) => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-12">
        <article className="flex flex-col gap-4 lg:items-center">
          <p
            className="text-left text-sm uppercase lg:text-center"
            style={{ color: palette.original }}
          >
            {copy.subtitle}
          </p>
          <h2 className="w-full max-w-[400px] text-left text-2xl font-bold lg:text-center lg:text-4xl">
            {copy.title}
          </h2>
          <p className="max-w-[360px] text-left text-sm text-neutral-500 lg:text-center lg:text-base">
            {copy.description}
          </p>
        </article>
        <ul className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          {copy.tabs.map((tab, index: number) => (
            <li
              className="flex w-full flex-col items-center gap-1.5 rounded-sm border border-neutral-300 px-2 py-3 lg:gap-3 lg:border-transparent lg:bg-transparent lg:p-0"
              key={`tab-${index}`}
            >
              <span
                style={{
                  backgroundImage: `linear-gradient(to right, ${palette.shade}, ${palette.deep})`
                }}
                className="bg-clip-text text-2xl font-semibold text-transparent lg:text-5xl"
              >
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
