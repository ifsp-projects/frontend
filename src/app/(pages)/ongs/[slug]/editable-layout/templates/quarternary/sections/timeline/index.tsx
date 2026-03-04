import type { FC } from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'

import type { TimelineProps } from './types'

export const Timeline: FC<TimelineProps> = ({ copy }) => {
  return (
    <section className="bg-neutral-50 px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-16 flex flex-col gap-3">
          <EditableCopyField
            as="p"
            className="w-fit border-l-4 border-rose-600 pl-3 text-xs font-bold tracking-widest text-rose-600 uppercase"
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
          <div className="absolute top-0 left-[19px] h-full w-px bg-rose-200 lg:top-[19px] lg:left-0 lg:h-px lg:w-full" />

          {copy.cards.map((card, index: number) => (
            <div
              className="relative flex gap-6 pb-12 last:pb-0 lg:flex-1 lg:flex-col lg:gap-6 lg:pt-12 lg:pr-8 lg:pb-0 last:lg:pr-0"
              key={`${card.title}-${index}`}
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center bg-rose-600 lg:absolute lg:-top-[19px] lg:left-0">
                <span className="text-[10px] font-black text-white">
                  {index + 1}
                </span>
              </div>

              <div className="flex flex-col gap-3 lg:pt-0">
                <EditableCopyField
                  as="span"
                  className="text-xs font-black tracking-widest text-rose-600 uppercase"
                  defaultValue={card.span}
                  path={`timeline.cards[${index}].span`}
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
                  className="mt-1 w-fit bg-rose-100 px-3 py-1 text-xs font-black text-rose-700"
                  defaultValue={card.label}
                  path={`timeline.cards[${index}].label`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-neutral-200 pt-12 text-center">
          <EditableCopyField
            as="p"
            className="text-lg font-black text-neutral-700"
            defaultValue={copy.anchorTitle}
            path="timeline.anchorTitle"
          />
          <EditableCopyField
            as="p"
            className="rounded-none bg-rose-600 px-8 py-3.5 text-sm font-black tracking-wider text-white uppercase transition-all duration-300 hover:bg-rose-700"
            defaultValue={copy.anchor}
            path="timeline.anchor"
          />
        </div>
      </div>
    </section>
  )
}
