import type { FC } from 'react'
import React from 'react'

import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'
import { EditableIconField } from '@/components/page-builder/template-fields/editable-icon-field'
import { EditableLinkField } from '@/components/page-builder/template-fields/editable-link-field'

import type { GetInvolvedProps } from './types'

export const GetInvolved: FC<GetInvolvedProps> = ({ copy, palette }) => {
  return (
    <section className="bg-white px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
          <div className="flex flex-col gap-4">
            <EditableCopyField
              style={{
                borderLeft: `4px solid ${palette.original}`,
                color: palette.original
              }}
              as="span"
              className="w-fit pl-3 text-xs font-bold tracking-widest uppercase"
              defaultValue={copy.label}
              path="getInvolved.label"
            />
            <EditableCopyField
              as="h2"
              className="text-3xl leading-tight font-black text-neutral-800 lg:text-4xl xl:text-5xl"
              defaultValue={copy.title}
              path="getInvolved.title"
            />
          </div>
          <EditableCopyField
            as="p"
            className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-base"
            defaultValue={copy.description}
            path="getInvolved.description"
          />
        </div>

        <div className="grid grid-cols-1 gap-px border border-neutral-100 bg-neutral-100 md:grid-cols-2">
          {copy.cards.map(({ icon, title, description }, index: number) => (
            <div
              className="group relative flex flex-col gap-6 p-8"
              key={title}
              style={{ backgroundColor: palette.tint }}
            >
              <div
                style={{
                  borderColor: palette.tint,
                  backgroundColor: palette.ultra_light
                }}
                className="flex h-12 w-12 items-center justify-center border-2 transition-all duration-300"
              >
                <EditableIconField
                  defaultValue={icon}
                  path={`getInvolved.cards[${index}].icon`}
                  style={{ color: palette.original }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <EditableCopyField
                  as="h3"
                  className="text-base font-black text-neutral-800"
                  defaultValue={title}
                  path={`getInvolved.cards[${index}].title`}
                />
                <EditableCopyField
                  as="p"
                  className="text-xs leading-relaxed text-neutral-500"
                  defaultValue={description}
                  path={`getInvolved.cards[${index}].description`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-px flex flex-col gap-4 border border-t-0 border-neutral-100 bg-neutral-50 px-8 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ backgroundColor: palette.original }}
            />
            <EditableCopyField
              as="p"
              className="text-sm font-bold text-neutral-700"
              defaultValue={copy.anchorText}
              path="getInvolved.anchorText"
            />
          </div>
          <EditableLinkField
            defaultValue={{
              href: copy.anchor?.href || '#',
              label: copy.anchor?.label || 'Texto do link'
            }}
            className="shrink-0 rounded-none px-7 py-3 text-xs font-black tracking-wider text-white uppercase"
            path="getInvolved.anchor"
            style={{ backgroundColor: palette.original }}
          />
        </div>
      </div>
    </section>
  )
}
