import Image from 'next/image'
import type { FC } from 'react'

import type { MoreInfoAboutProps } from './types'

export const MoreInfoAbout: FC<MoreInfoAboutProps> = ({ copy }) => {
  return (
    <section className="px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-8">
        {copy.cards.map((section, index: number) => (
          <div
            className="mx-auto flex w-full max-w-2xl flex-col-reverse border-b border-neutral-200 py-8 last:border-transparent lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-8"
            key={`${section.title}-${index}`}
          >
            <article
              className={`flex w-full flex-col gap-4 lg:gap-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <h2 className="text-2xl font-bold lg:text-3xl">
                {section.title}
              </h2>
              <p
                className="text-sm text-neutral-600 lg:text-base"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            </article>
            <figure
              className={`h-[320px] w-full rounded-sm ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
            >
              <Image
                alt={section.title}
                className="h-[320px] w-full rounded-sm object-cover"
                height={1080}
                src={section.image}
                width={1920}
              />
            </figure>
          </div>
        ))}
      </div>
    </section>
  )
}
