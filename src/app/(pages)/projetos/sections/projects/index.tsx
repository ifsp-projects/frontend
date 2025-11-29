import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { ArrowRight } from '@vectoricons/atlas-icons-react'

import { PROJECTS_DATA } from './data'

export const Projects: FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 lg:py-16 xl:px-0">
      <div className="grid-cols-3 gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid">
        {PROJECTS_DATA.map((project, index: number) => (
          <div
            className="cursor-pointer overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100"
            key={`${project.title}-${index}`}
          >
            <Link href={`/projects/${project.id}`}>
              <figure className="relative h-48 w-full bg-white p-4">
                <Image
                  alt={project.title}
                  className="h-full w-full object-contain"
                  height={720}
                  src={project.image}
                  width={1080}
                />
              </figure>
              <article className="flex flex-col gap-2 bg-neutral-100 px-4 pt-6 pb-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-neutral-600">{project.description}</p>
                <p className="flex items-center gap-2 text-rose-500">
                  Ler mais sobre{' '}
                  <ArrowRight className="h-4 w-4 text-rose-500" />
                </p>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
