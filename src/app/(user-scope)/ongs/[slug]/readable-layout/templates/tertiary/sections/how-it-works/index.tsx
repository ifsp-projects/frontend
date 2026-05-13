import type { CSSProperties, FC } from 'react'
import React from 'react'

import { EDITABLE_ICON_FIELD_ICONS } from '@/components/page-builder/template-fields/editable-icon-field/data'

import type { HowItWorksProps } from './types'

export const HowItWorks: FC<HowItWorksProps> = ({ copy, palette }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-2xl px-4 py-12 lg:max-w-7xl lg:py-16 xl:px-0">
        <div className="mb-8 flex items-center gap-4 lg:mb-16">
          <div className="h-px flex-1 bg-neutral-100" />
          <span
            style={{
              border: `1px solid ${palette.tint}`,
              backgroundColor: palette.ultra_light,
              color: palette.original
            }}
            className="rounded-full border px-5 py-1.5 text-[10px] font-bold tracking-widest uppercase"
          >
            {copy?.span || ''}
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
          <div
            className="absolute top-10 left-[12.5%] hidden h-px w-3/4 lg:block"
            style={{ backgroundColor: palette.tint }}
          />

          {copy.cards.map(({ icon, title, description }, i) => (
            <div className="relative flex flex-col gap-5 lg:px-6" key={i}>
              <div className="relative flex items-start gap-4 lg:flex-col lg:gap-5">
                <figure
                  style={{
                    backgroundColor: palette.original,
                    outline: `1px solid ${palette.original}`
                  }}
                  className="relative z-10 mx-auto flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-md border-4 border-white"
                >
                  {React.cloneElement(
                    EDITABLE_ICON_FIELD_ICONS[icon] as React.ReactElement<{
                      className?: string
                      strokeWidth?: number
                      style: CSSProperties
                    }>,
                    {
                      className: 'h-6 w-6 lg:h-7 lg:w-7',
                      strokeWidth: 1.8,
                      style: { color: palette.deep }
                    }
                  )}
                  <span
                    className="text-[10px] font-black"
                    style={{ color: `${palette.deep}B3` }}
                  >
                    {i + 1}
                  </span>
                </figure>
                <article className="flex flex-col items-center gap-1.5 lg:mt-6">
                  <h3 className="text-center text-base font-black text-neutral-700">
                    {title}
                  </h3>
                  <p className="text-center text-xs text-neutral-500 md:text-sm">
                    {description}
                  </p>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-14 flex justify-center">
          <Link
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 transition-all duration-300 hover:border-amber-400 hover:text-amber-600"
            href={copy.anchor?.href || '#'}
          >
            {copy.anchor?.label || 'Texto do botão'}
          </Link>
        </div> */}
      </div>
    </section>
  )
}
