import Image from 'next/image'
import type { FC } from 'react'

export const Header: FC = async () => {
  return (
    <section className="bg-neutral-50 px-4 py-12 text-center lg:py-16">
      <header className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:gap-16">
        <article className="flex w-full flex-col gap-4">
          <span className="mx-auto w-fit border-b-2 border-b-rose-300 pb-0.5 text-center text-sm font-semibold text-neutral-600 lg:mx-0 lg:text-left">
            Catálogo de ONGs
          </span>
          <h1 className="text-center text-2xl font-bold lg:text-left lg:text-4xl xl:text-5xl">
            Descubra organizações que fazem a diferença no Brasil.
          </h1>
          <p className="text-center text-sm text-neutral-500 lg:text-left lg:text-base xl:text-lg">
            Apoie causas importantes e conecte-se com organizações que
            transformam comunidades em todo o Brasil. Explore o catálogo e
            encontre uma causa que toca o seu coração.
          </p>
        </article>

        <figure className="flex h-56 w-full shrink-0 items-center justify-center overflow-hidden rounded-sm lg:h-80 lg:max-w-[380px]">
          <Image
            alt="ONGs Banner"
            className="h-50 w-50 object-cover lg:h-86 lg:w-86"
            fetchPriority="high"
            height={1080}
            loading="eager"
            src="/images/globo.svg"
            width={1920}
          />
        </figure>
      </header>
    </section>
  )
}
