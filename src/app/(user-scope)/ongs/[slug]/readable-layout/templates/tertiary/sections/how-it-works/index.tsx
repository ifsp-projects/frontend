import Link from 'next/link'
import type { FC } from 'react'
import React from 'react'

import { EDITABLE_ICON_FIELD_ICONS } from '@/components/shared/template-fields/editable-icon-field/data'

import type { HowItWorksProps } from './types'

export const HowItWorks: FC<HowItWorksProps> = ({ copy }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-2xl px-4 py-12 lg:max-w-7xl lg:py-16 xl:px-0">
        <div className="mb-8 flex items-center gap-4 lg:mb-16">
          <div className="h-px flex-1 bg-neutral-100" />
          <span className="rounded-full border border-amber-200 bg-amber-50 px-5 py-1.5 text-[10px] font-bold tracking-widest text-amber-600 uppercase">
            {copy.span}
          </span>
          <div className="h-px flex-1 bg-neutral-100" />
        </div>

        <article className="mb-14 flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-xl text-3xl font-black text-neutral-700 lg:text-4xl">
            {copy.title}
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-neutral-500 lg:text-base">
            {copy.description}
          </p>
        </article>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="absolute top-10 left-[12.5%] hidden h-px w-3/4 bg-amber-100 lg:block" />

          {copy.cards.map(({ icon, title, description }, i) => (
            <div className="relative flex flex-col gap-5 lg:px-6" key={i}>
              <div className="relative flex items-start gap-4 lg:flex-col lg:gap-5">
                <figure className="relative z-10 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-md border-4 border-white bg-amber-400 ring ring-amber-400">
                  {React.cloneElement(
                    EDITABLE_ICON_FIELD_ICONS[icon] as React.ReactElement<{
                      className?: string
                      strokeWidth?: number
                    }>,
                    {
                      className: 'h-6 w-6 text-blue-400 lg:h-7 lg:w-7',
                      strokeWidth: 1.8
                    }
                  )}
                  <span className="text-[10px] font-black text-amber-800/70">
                    {i + 1}
                  </span>
                </figure>
                <article className="flex flex-col gap-1.5 lg:mt-6">
                  <h3 className="text-base font-black text-neutral-700">
                    {title}
                  </h3>
                  <p className="text-xs text-neutral-500 md:text-sm">
                    {description}
                  </p>
                </article>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 transition-all duration-300 hover:border-amber-400 hover:text-amber-600"
            href={copy.anchor?.href || '#'}
          >
            {copy.anchor?.label || 'Texto do botão'}
          </Link>
        </div>
      </div>
    </section>
  )
}
