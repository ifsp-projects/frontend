import type { FC } from 'react'
import React from 'react'

import { EDITABLE_ICON_FIELD_ICONS } from '@/components/shared/template-fields/editable-icon-field/data'

import type { CausesProps } from './types'

export const Causes: FC<CausesProps> = ({ copy }) => {
  return (
    <section className="bg-white px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <article className="flex flex-col gap-3">
            <span className="w-fit border-l-4 border-rose-600 pl-3 text-xs font-bold tracking-widest text-rose-600 uppercase">
              {copy.label}
            </span>
            <h2 className="max-w-lg text-3xl leading-tight font-black text-neutral-800 lg:text-4xl xl:text-5xl">
              {copy.title}
            </h2>
          </article>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400 lg:text-right">
            {copy.description}
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-px border border-neutral-100 bg-neutral-100 md:grid-cols-2 lg:grid-cols-4">
          {copy.cards.map(({ icon, title, description, label }, index) => (
            <li
              className="group relative flex flex-col gap-6 bg-white p-8"
              key={title}
            >
              <span className="absolute top-4 right-4 text-6xl font-black text-neutral-100 select-none">
                {index + 1}
              </span>

              <figure className="flex h-12 w-12 items-center justify-center border-2 border-rose-100 bg-rose-50">
                {React.cloneElement(
                  EDITABLE_ICON_FIELD_ICONS[icon] as React.ReactElement<{
                    className?: string
                    strokeWidth?: number
                  }>,
                  {
                    className: 'h-5 w-5 text-rose-600',
                    strokeWidth: 2
                  }
                )}
              </figure>

              <article className="flex flex-col gap-2">
                <h3 className="text-base font-black text-neutral-800">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {description}
                </p>
              </article>

              <div className="mt-auto border-t border-neutral-100 pt-4">
                <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
                  {label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
