import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { PROJECTS_DATA } from './data'

export const TopDonatedOngs: FC = async () => {
  return (
    <section className="bg-white px-4 py-16 lg:py-20 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <article className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold lg:text-4xl">ONGs em destaque</h2>
          <p className="text-sm text-neutral-500">
            Conheça algumas das iniciativas que estão fazendo a diferença em
            Capivari e região.
          </p>
        </article>
        <div className="flex grid-cols-3 flex-col gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid lg:gap-8">
          {PROJECTS_DATA.map((project, index: number) => (
            <div
              className="cursor-pointer overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100"
              key={`${project.title}-${index}`}
            >
              <Link className="group" href={`/projetos/${project.id}`}>
                <figure className="relative h-48 w-full overflow-hidden bg-white p-4">
                  <Image
                    alt={project.title}
                    className="h-full w-full object-contain transition-all duration-300"
                    fetchPriority="high"
                    height={720}
                    loading="eager"
                    src={project.image}
                    width={1080}
                  />
                </figure>
                <article className="flex flex-col gap-2 bg-neutral-100 px-4 pt-6 pb-4">
                  <h2 className="text-base font-bold sm:text-lg lg:text-xl lg:font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-sm text-neutral-600 lg:text-base">
                    {project.description}
                  </p>
                  <p className="group flex items-center gap-2 text-sm text-rose-500 transition-all duration-300 hover:brightness-110 lg:text-base">
                    Ler mais sobre{' '}
                    <ArrowRight className="h-3 w-3 text-rose-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:brightness-110 lg:h-4 lg:w-4 lg:group-hover:translate-x-1" />
                  </p>
                </article>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center">
          <Link
            className="mx-auto max-w-fit cursor-pointer rounded-sm border border-neutral-700 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-100 lg:px-6 lg:text-base"
            href="/ongs"
          >
            Ver mais ONGs
          </Link>
        </div>
      </div>
    </section>
  )
}
