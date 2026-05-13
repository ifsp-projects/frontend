import type { CSSProperties, FC } from 'react'
import React from 'react'

import { EDITABLE_ICON_FIELD_ICONS } from '@/components/page-builder/template-fields/editable-icon-field/data'

import type { AboutUsProps } from './types'

const highlightLastWord = (text: string, color: string) => {
  const words = text.split(' ')
  const last = words.pop()
  return (
    <>
      {words.join(' ')}{' '}
      <span className="relative inline-block">
        <span className="relative z-10">{last}</span>
        <span
          className="absolute bottom-1 left-0 z-0 h-3 w-full"
          style={{ backgroundColor: `${color}99` }}
        />
      </span>
    </>
  )
}

export const AboutUs: FC<AboutUsProps> = ({ copy, palette }) => {
  return (
    <section className="bg-neutral-50 px-4 py-20 xl:px-0 xl:py-28">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <span
            className="h-px w-8"
            style={{ backgroundColor: palette.original }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: palette.shade }}
          >
            {copy.span}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-between gap-10">
            <article className="flex flex-col gap-6">
              <h2 className="text-3xl leading-tight font-black text-neutral-700 lg:text-4xl xl:text-5xl">
                {highlightLastWord(copy.title, palette.tint)}
              </h2>
              <p className="text-sm leading-relaxed text-neutral-500 lg:text-base">
                {copy.firstDescriptionParagraph}
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 lg:text-base">
                {copy.secondDescriptionParagraph}
              </p>
            </article>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {copy.stats.map(({ icon, value, label }) => (
              <li
                className="group flex flex-col gap-4 rounded-sm border border-neutral-300 bg-white p-6"
                key={label}
              >
                <figure
                  className="flex h-10 w-10 items-center justify-center rounded-md"
                  style={{ backgroundColor: `${palette.original}33` }}
                >
                  {React.cloneElement(
                    EDITABLE_ICON_FIELD_ICONS[icon] as React.ReactElement<{
                      className?: string
                      strokeWidth?: number
                      style: CSSProperties
                    }>,
                    {
                      className: 'h-6 w-6 lg:h-7 lg:w-7',
                      strokeWidth: 2,
                      style: { color: palette.shade }
                    }
                  )}
                </figure>
                <article className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-neutral-700">
                    {value}
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    {label}
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
