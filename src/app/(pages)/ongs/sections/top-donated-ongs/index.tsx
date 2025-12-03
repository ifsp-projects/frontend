import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { PROJECTS_DATA } from './data'

export const TopDonatedOngs: FC = async () => {
  return (
    <section className="bg-neutral-50 px-4 py-16 lg:py-20 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <h2 className="text-center text-2xl font-bold lg:text-4xl">
          ONGs em destaque
        </h2>
        <div className="mb-5 grid-cols-3 gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid">
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
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-neutral-600">{project.description}</p>
                  <p className="group flex items-center gap-2 text-rose-500 transition-all duration-300 hover:brightness-110">
                    Ler mais sobre{' '}
                    <ArrowRight className="h-4 w-4 text-rose-500 transition-all duration-300 group-hover:translate-x-1 group-hover:brightness-110" />
                  </p>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
