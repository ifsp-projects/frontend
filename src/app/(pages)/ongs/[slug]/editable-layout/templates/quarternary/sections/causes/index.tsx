import type { FC } from 'react'
import React from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'
import { EditableIconField } from '@/components/shared/template-fields/editable-icon-field'

import type { CausesProps } from './types'

export const Causes: FC<CausesProps> = ({ copy }) => {
  return (
    <section className="bg-white px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <EditableCopyField
              as="span"
              className="w-fit border-l-4 border-rose-600 pl-3 text-xs font-bold tracking-widest text-rose-600 uppercase"
              defaultValue={copy.label}
              path="causes.label"
            />
            <EditableCopyField
              as="h2"
              className="max-w-lg text-3xl leading-tight font-black text-neutral-800 lg:text-4xl xl:text-5xl"
              defaultValue={copy.title}
              path="causes.title"
            />
          </div>
          <EditableCopyField
            as="p"
            className="max-w-sm text-sm leading-relaxed text-neutral-400 lg:text-right"
            defaultValue={copy.description}
            path="causes.description"
          />
        </div>

        <div className="grid grid-cols-1 gap-px border border-neutral-100 bg-neutral-100 md:grid-cols-2 lg:grid-cols-4">
          {copy.cards.map(({ icon, title, description, label }, index) => (
            <div
              className="group relative flex flex-col gap-6 bg-white p-8"
              key={title}
            >
              <span className="absolute top-4 right-4 text-6xl font-black text-neutral-100 select-none">
                {index + 1}
              </span>

              <div className="flex h-12 w-12 items-center justify-center border-2 border-rose-100 bg-rose-50">
                <EditableIconField
                  defaultValue={icon}
                  path={`causes.cards[${index}].icon`}
                />
              </div>

              <div className="flex flex-col gap-2">
                <EditableCopyField
                  as="h3"
                  className="text-base font-black text-neutral-800"
                  defaultValue={title}
                  path={`causes.cards[${index}].title`}
                />
                <EditableCopyField
                  as="p"
                  className="text-xs leading-relaxed text-neutral-500"
                  defaultValue={description}
                  path={`causes.cards[${index}].description`}
                />
              </div>

              <div className="mt-auto border-t border-neutral-100 pt-4">
                <EditableCopyField
                  as="p"
                  className="text-xs font-bold tracking-widest text-rose-600 uppercase"
                  defaultValue={description}
                  path={`causes.cards[${index}].label`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
