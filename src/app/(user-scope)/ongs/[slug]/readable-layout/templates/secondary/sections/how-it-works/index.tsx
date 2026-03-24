import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { HowItWorksProps } from './types'

export const HowItWorks: FC<HowItWorksProps> = async ({ copy }) => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <figure className="w-full">
          <Image
            alt={copy.title}
            className="h-[320px] w-full rounded-sm object-cover"
            height={1080}
            src={copy.heroImage}
            width={1920}
          />
        </figure>
        <div className="flex w-full flex-col gap-8">
          <article className="flex w-full flex-col gap-2">
            <span className="mb-2 w-fit rounded-full bg-blue-50 px-4 py-1 text-xs text-blue-500">
              {copy.span}
            </span>
            <h2 className="text-2xl font-bold lg:text-5xl">{copy.title}</h2>
            <p className="text-sm lg:text-base">{copy.description}</p>
          </article>
          <Link
            className="flex max-w-fit cursor-pointer items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:brightness-105"
            href={copy.anchor?.href || '#'}
          >
            {copy.anchor?.label || 'Texto do botão'}
          </Link>
        </div>
      </div>
    </section>
  )
}
