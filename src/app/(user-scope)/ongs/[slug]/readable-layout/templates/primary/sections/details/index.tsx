import type { CSSProperties, FC } from 'react'
import React from 'react'

import { EDITABLE_ICON_FIELD_ICONS } from '@/components/page-builder/template-fields/editable-icon-field/data'

import type { DetailsProps } from './types'

export const Details: FC<DetailsProps> = ({ copy, palette }) => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl">
        <article className="flex flex-col gap-2 lg:items-center">
          <p
            className="text-sm uppercase lg:text-center"
            style={{ color: palette.original }}
          >
            {copy.feature}
          </p>
          <h2 className="text-2xl font-bold lg:text-center lg:text-4xl">
            {copy.title}
          </h2>
        </article>
        <ul className="flex h-auto w-full flex-col items-stretch gap-8 lg:flex-row">
          {copy.tabs.map((tab, index: number) => (
            <li
              className="flex h-auto w-full flex-col gap-3 rounded-sm border border-neutral-300 bg-white p-4"
              key={`${tab.title}-${index}`}
            >
              <figure className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                {React.cloneElement(
                  EDITABLE_ICON_FIELD_ICONS[tab.icon] as React.ReactElement<{
                    className?: string
                    style?: CSSProperties
                  }>,
                  {
                    className: 'h-4 w-4',
                    style: { color: palette.original }
                  }
                )}
              </figure>
              <article className="flex w-full flex-col gap-1">
                <h3 className="text-xl font-bold">{tab.title}</h3>
                <p className="text-sm text-neutral-500">{tab.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
