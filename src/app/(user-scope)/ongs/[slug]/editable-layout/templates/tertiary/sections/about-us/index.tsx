import type { FC } from 'react'
import React from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'
import { EditableIconField } from '@/components/shared/template-fields/editable-icon-field'

import type { AboutUsProps } from './types'

const highlightLastWord = (text: string) => {
  const words = text.split(' ')
  const last = words.pop()
  return (
    <>
      {words.join(' ')}{' '}
      <span className="relative inline-block">
        <span className="relative z-10">{last}</span>
        <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-amber-300/60" />
      </span>
    </>
  )
}

export const AboutUs: FC<AboutUsProps> = ({ copy }) => {
  return (
    <section className="bg-neutral-50 px-4 py-20 xl:px-0 xl:py-28">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-8 bg-amber-400" />
          <EditableCopyField
            as="span"
            className="text-xs font-bold tracking-widest text-amber-500 uppercase"
            defaultValue={copy.span}
            path="aboutUs.span"
          />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-between gap-10">
            <article className="flex flex-col gap-6">
              <EditableCopyField
                as="h2"
                className="text-3xl leading-tight font-black text-neutral-700 lg:text-4xl xl:text-5xl"
                defaultValue={highlightLastWord(copy.title)}
                path="aboutUs.title"
              />
              <EditableCopyField
                as="p"
                className="text-sm leading-relaxed text-neutral-500 lg:text-base"
                defaultValue={copy.firstDescriptionParagraph}
                path="aboutUs.firstDescriptionParagraph"
              />
              <EditableCopyField
                as="p"
                className="text-sm leading-relaxed text-neutral-500 lg:text-base"
                defaultValue={copy.secondDescriptionParagraph}
                path="aboutUs.secondDescriptionParagraph"
              />
            </article>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {copy.stats.map(({ icon, value, label }, index: number) => (
              <div
                className="group flex flex-col gap-4 rounded-sm border border-neutral-300 bg-white p-6"
                key={label}
              >
                <figure className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-400/20">
                  <EditableIconField
                    className="h-6 w-6 text-amber-500 lg:h-7 lg:w-7"
                    defaultValue={icon}
                    path={`aboutUs.stats[${index}].icon`}
                  />
                </figure>
                <article className="flex flex-col gap-1">
                  <EditableCopyField
                    as="span"
                    className="text-3xl font-black text-neutral-700"
                    defaultValue={copy.secondDescriptionParagraph}
                    path={`aboutUs.stats[${index}].value`}
                  />
                  <EditableCopyField
                    as="span"
                    className="text-xs font-medium text-neutral-400"
                    defaultValue={copy.secondDescriptionParagraph}
                    path={`aboutUs.stats[${index}].label`}
                  />
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
