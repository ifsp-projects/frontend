import type { FC } from 'react'

import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'
import { EditableImageField } from '@/components/page-builder/template-fields/editable-image-field'

import type { MoreInfoAboutProps } from './types'

export const MoreInfoAbout: FC<MoreInfoAboutProps> = ({ copy }) => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-8">
        {copy.cards.map((section, index: number) => (
          <div
            className="mx-auto flex w-full max-w-2xl flex-col-reverse gap-8 border-b border-neutral-200 py-8 last:border-transparent lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-8"
            key={`${section.title}-${index}`}
          >
            <article
              className={`flex w-full flex-col gap-4 lg:gap-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <EditableCopyField
                as="h2"
                className="text-2xl font-bold lg:text-3xl"
                defaultValue={section.title}
                path={`moreInfoAbout.cards[${index}].title`}
              />
              <div className="flex flex-col gap-4">
                <EditableCopyField
                  as="p"
                  className="text-sm text-neutral-600 lg:text-base"
                  defaultValue={section.description}
                  path={`moreInfoAbout.cards[${index}].description`}
                />
              </div>
            </article>
            <figure
              className={`h-[320px] w-full rounded-sm ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <EditableImageField
                alt="Section Image"
                className="h-[320px] w-full rounded-sm object-cover"
                defaultValue={section.image}
                height={1080}
                path={`moreInfoAbout.cards[${index}].image`}
                width={1920}
              />
            </figure>
          </div>
        ))}
      </div>
    </section>
  )
}
