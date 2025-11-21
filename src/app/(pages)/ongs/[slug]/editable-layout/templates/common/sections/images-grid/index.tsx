'use client'

import type { FC } from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'
import Masonry from '@/components/ui/mansory'

import { IMAGES_DATA } from './data'
import type { ImagesGridProps } from './types'

export const ImagesGrid: FC<ImagesGridProps> = ({ copy }) => {
  return (
    <section className="relative px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <article className="flex w-full flex-col gap-2 lg:items-center">
          <EditableCopyField
            as="h2"
            className="text-center text-2xl font-bold lg:text-4xl"
            defaultValue={copy.title}
          />
          <EditableCopyField
            as="p"
            className="text-sm text-slate-500"
            defaultValue={copy.description}
          />
        </article>
        <Masonry
          animateFrom="bottom"
          blurToFocus={true}
          colorShiftOnHover={false}
          duration={0.6}
          ease="power3.out"
          hoverScale={0.95}
          items={IMAGES_DATA}
          scaleOnHover={true}
          stagger={0.05}
        />
      </div>
    </section>
  )
}
