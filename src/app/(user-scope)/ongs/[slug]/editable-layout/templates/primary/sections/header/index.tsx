'use client'

import type { FC } from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'
import { EditableImageField } from '@/components/shared/template-fields/editable-image-field'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ copy }) => {
  return (
    <section className="relative z-30 overflow-hidden bg-linear-to-r from-neutral-50/10 to-white px-4 xl:px-0">
      <header className="relative z-40 mx-auto flex w-full max-w-2xl flex-col gap-8 py-12 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-20">
        <div className="flex w-full flex-col gap-6 lg:gap-8">
          <article
            className="flex w-full flex-col gap-4 lg:max-w-[560px]"
            id="header"
          >
            <EditableCopyField
              as="span"
              className="w-fit rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-medium text-neutral-500 backdrop-blur-[10px] transition duration-200 lg:px-4 lg:py-1.5 lg:text-xs"
              defaultValue={copy.span}
              path="header.span"
            />
            <EditableCopyField
              as="h1"
              className="text-2xl font-bold text-neutral-700 lg:text-4xl xl:text-5xl"
              defaultValue={copy.title}
              path="header.title"
            />
            <EditableCopyField
              as="p"
              className="text-sm text-neutral-500 lg:text-base"
              defaultValue={copy.description}
              path="header.description"
            />
          </article>
          <EditableCopyField
            as="span"
            className="flex max-w-fit items-center justify-center rounded-md bg-emerald-600 px-6 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:brightness-105"
            defaultValue={copy.anchor}
            path="header.anchor"
          />
          <article className="flex items-center gap-1">
            <p className="text-xs text-neutral-500">Com apoio de</p>
            <p className="text-sm font-semibold text-neutral-600">
              Capivara Solidária
            </p>
          </article>
        </div>
        <figure className="relative z-30 w-full rounded-sm lg:max-w-[500px] lg:pr-24">
          <EditableImageField
            alt="Hero Image"
            className="h-full w-full"
            defaultValue={copy.heroImage}
            height={800}
            path="header.heroImage"
            width={800}
          />
        </figure>
      </header>
    </section>
  )
}
