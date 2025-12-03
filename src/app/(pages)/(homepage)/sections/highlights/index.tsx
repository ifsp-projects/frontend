import Image from 'next/image'
import type { FC } from 'react'

import { PROJECTS } from './data'

export const Highlights: FC = () => {
  return (
    <section className="px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <article className="flex w-full flex-col gap-2">
          <h2 className="text-2xl font-bold lg:text-4xl">
            Projetos em Destaque
          </h2>
          <p className="text-sm text-neutral-500 lg:text-base">
            Conheça algumas das iniciativas que estão fazendo a diferença em
            Capivari e região.
          </p>
        </article>
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10">
          {PROJECTS.map((project, index: number) => (
            <div
              className="flex w-full flex-col gap-4 rounded-sm"
              key={`${project.name}-${index}`}
            >
              <Image
                alt={project.alt}
                className="aspect-video w-full rounded-sm object-cover"
                height={1080}
                src={project.image}
                width={1920}
              />
              <article className="flex w-full flex-col">
                <span className="mb-2 w-fit rounded-sm bg-rose-50 px-3 py-1 text-[10px] text-rose-400 uppercase">
                  projeto social
                </span>
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm text-neutral-500">
                  {project.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
