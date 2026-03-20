import Image from 'next/image'
import type { FC } from 'react'

import type { InitiativesProps } from './types'

const highlightLastWord = (text: string) => {
  const words = text.split(' ')
  const last = words.pop()
  return (
    <>
      {words.join(' ')}{' '}
      <span className="relative inline-block">
        <span className="relative z-10">{last}</span>
        <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-amber-300/60" />
      </span>
    </>
  )
}

export const Initiatives: FC<InitiativesProps> = ({ copy }) => {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto w-full max-w-2xl px-4 py-12 lg:max-w-7xl lg:py-16 xl:px-0">
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-8 bg-amber-400" />
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
            {copy.label}
          </span>
        </div>

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-lg text-3xl leading-tight font-black text-neutral-700 lg:text-4xl xl:text-5xl">
            {highlightLastWord(copy.title)}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {copy.projects.map(
            ({ tag, title, description, metric, status, image }) => (
              <div
                className="group flex flex-col overflow-hidden rounded-sm border border-neutral-300 bg-white"
                key={title}
              >
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <Image
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    height={400}
                    src={image}
                    width={600}
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black tracking-widest text-amber-950 uppercase">
                    {tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-black text-neutral-700">
                      {title}
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      {description}
                    </p>
                  </div>

                  <div className="h-px w-full bg-neutral-200" />

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-neutral-400">Impacto</span>
                      <span className="text-sm font-black text-neutral-700">
                        {metric}
                      </span>
                    </div>
                    <span
                      className={`rounded-sm border border-amber-200 px-3 py-1 text-[10px] font-bold text-amber-600`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
