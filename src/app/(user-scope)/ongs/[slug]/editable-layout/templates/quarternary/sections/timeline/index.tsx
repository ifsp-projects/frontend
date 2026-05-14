import type { FC } from 'react'

import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'
import { EditableLinkField } from '@/components/page-builder/template-fields/editable-link-field'

import type { TimelineProps } from './types'

export const Timeline: FC<TimelineProps> = ({ copy, palette }) => {
  return (
    <section className="bg-neutral-50 px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-16 flex flex-col gap-3">
          <EditableCopyField
            style={{
              borderLeft: `4px solid ${palette.original}`,
              color: palette.original
            }}
            as="p"
            className="w-fit pl-3 text-xs font-bold tracking-widest uppercase"
            defaultValue={copy.label}
            path="timeline.label"
          />
          <EditableCopyField
            as="h2"
            className="max-w-lg text-3xl leading-tight font-black text-neutral-800 lg:text-4xl"
            defaultValue={copy.title}
            path="timeline.title"
          />
        </div>

        <div className="relative flex flex-col lg:flex-row lg:gap-0">
          <div
            className="absolute top-0 left-[19px] h-full w-px lg:top-[19px] lg:left-0 lg:h-px lg:w-full"
            style={{ backgroundColor: palette.shade }}
          />

          {copy.cards.map((card, index: number) => (
            <div
              className="relative flex gap-6 pb-12 last:pb-0 lg:flex-1 lg:flex-col lg:gap-6 lg:pt-12 lg:pr-8 lg:pb-0 last:lg:pr-0"
              key={`${card.title}-${index}`}
            >
              <div
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center lg:absolute lg:top-[-20px] lg:left-0"
                style={{ backgroundColor: palette.original }}
              >
                <span className="text-[10px] font-black text-white">
                  {index + 1}
                </span>
              </div>

              <div className="flex flex-col gap-3 lg:pt-0">
                <EditableCopyField
                  as="span"
                  className="text-xs font-black tracking-widest uppercase"
                  defaultValue={card.span}
                  path={`timeline.cards[${index}].span`}
                  style={{ color: palette.original }}
                />
                <EditableCopyField
                  as="h3"
                  className="text-base font-black text-neutral-800"
                  defaultValue={card.title}
                  path={`timeline.cards[${index}].title`}
                />
                <EditableCopyField
                  as="p"
                  className="text-xs leading-relaxed text-neutral-500"
                  defaultValue={card.description}
                  path={`timeline.cards[${index}].description`}
                />
                <EditableCopyField
                  as="p"
                  className="mt-1 w-fit px-3 py-1 text-xs font-black"
                  defaultValue={card.label}
                  path={`timeline.cards[${index}].label`}
                  style={{ backgroundColor: palette.tint, color: palette.deep }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 hidden flex-col items-center gap-4 border-t border-neutral-200 pt-12 text-center md:flex">
          <EditableCopyField
            as="p"
            className="text-lg font-black text-neutral-700"
            defaultValue={copy.anchorTitle}
            path="timeline.anchorTitle"
          />
          <EditableLinkField
            defaultValue={{
              href: copy.anchor?.href || '#',
              label: copy.anchor?.label || 'Texto do link'
            }}
            className="rounded-none px-6 py-2 text-sm font-black text-white transition-all duration-300 hover:brightness-110 lg:px-8 lg:py-3.5 lg:tracking-wider lg:uppercase"
            path="timeline.anchor"
            style={{ backgroundColor: palette.original }}
          />
        </div>
      </div>
    </section>
  )
}
