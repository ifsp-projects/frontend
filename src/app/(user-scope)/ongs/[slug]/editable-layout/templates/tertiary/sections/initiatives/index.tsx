import type { FC } from 'react'

import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'
import { EditableImageField } from '@/components/page-builder/template-fields/editable-image-field'

import type { InitiativesProps } from './types'

export const Initiatives: FC<InitiativesProps> = ({ copy, palette }) => {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto w-full max-w-2xl px-4 py-12 lg:max-w-7xl lg:py-16 xl:px-0">
        <div className="mb-12 flex items-center gap-3">
          <span
            className="h-px w-8"
            style={{ backgroundColor: palette.original }}
          />
          <EditableCopyField
            as="span"
            className="text-xs font-bold tracking-widest uppercase"
            defaultValue={copy.label}
            path="initiatives.label"
            style={{ color: palette.original }}
          />
        </div>

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <EditableCopyField
            as="h2"
            className="max-w-lg text-3xl leading-tight font-black text-neutral-700 lg:text-4xl xl:text-5xl"
            defaultValue={copy.title}
            path="initiatives.title"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {copy.projects.map(
            ({ tag, title, description, metric, status, image }, i: number) => (
              <div
                className="group flex flex-col overflow-hidden rounded-sm border border-neutral-300 bg-white"
                key={title}
              >
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <EditableImageField
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    defaultValue={image}
                    height={400}
                    path={`initiatives.cards[${i}].image`}
                    width={600}
                  />
                  <EditableCopyField
                    style={{
                      backgroundColor: palette.original,
                      color: palette.deep
                    }}
                    as="span"
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-black tracking-widest uppercase"
                    defaultValue={tag}
                    path={`initiatives.cards[${i}].tag`}
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex flex-col gap-2">
                    <EditableCopyField
                      as="h3"
                      className="text-lg font-black text-neutral-700"
                      defaultValue={title}
                      path={`initiatives.cards[${i}].title`}
                    />
                    <EditableCopyField
                      as="p"
                      className="text-xs leading-relaxed text-neutral-400"
                      defaultValue={description}
                      path={`initiatives.cards[${i}].description`}
                    />
                  </div>

                  <div className="h-px w-full bg-neutral-200" />

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-neutral-400">Impacto</span>
                      <EditableCopyField
                        as="span"
                        className="text-sm font-black text-neutral-700"
                        defaultValue={metric}
                        path={`initiatives.cards[${i}].metric`}
                      />
                    </div>
                    <EditableCopyField
                      style={{
                        border: `1px solid ${palette.tint}`,
                        color: palette.shade
                      }}
                      as="span"
                      className="rounded-sm px-3 py-1 text-[10px] font-bold"
                      defaultValue={status}
                      path={`initiatives.cards[${i}].status`}
                    />
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
