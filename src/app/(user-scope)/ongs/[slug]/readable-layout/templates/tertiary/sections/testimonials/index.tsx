import { Quote } from 'lucide-react'
import Image from 'next/image'
import type { FC } from 'react'

import type { TestimonialsProps } from './types'

const highlightLastWord = (text: string) => {
  const words = text.split(' ')
  const last = words.pop()
  return (
    <>
      {words.join(' ')}{' '}
      <span className="relative inline-block">
        <span className="relative z-10">{last}</span>
        <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-amber-300/60" />
      </span>
    </>
  )
}

export const Testimonials: FC<TestimonialsProps> = ({ copy }) => {
  return (
    <section className="bg-white px-4 pb-28 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <article className="mb-12 flex items-center gap-3">
          <span className="h-px w-8 bg-amber-400" />
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
            {copy.label}
          </span>
        </article>

        <article className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-lg text-3xl leading-tight font-black text-neutral-700 lg:text-4xl xl:text-5xl">
            {highlightLastWord(copy.title)}
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-500 lg:text-right">
            {copy.description}
          </p>
        </article>

        <div className="relative mb-6 overflow-hidden rounded-3xl bg-amber-400 p-8 lg:p-12">
          <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-amber-300/40" />
          <div className="absolute -bottom-10 -left-6 h-52 w-52 rounded-full bg-amber-500/30" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:gap-16">
            <Quote
              className="hidden h-16 w-16 shrink-0 text-amber-900 lg:block"
              strokeWidth={1}
            />
            <div className="flex flex-col gap-6">
              <p className="text-xl leading-relaxed font-semibold text-amber-950 lg:text-2xl">
                "{copy.testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <Image
                  alt={copy.testimonial.author.name}
                  className="h-12 w-12 rounded-full border-2 border-amber-950/20 object-cover"
                  height={48}
                  src={copy.testimonial.author.image}
                  width={48}
                />
                <article>
                  <p className="text-sm font-black text-amber-950">
                    {copy.testimonial.author.name}
                  </p>
                  <p className="text-xs text-amber-800">
                    {copy.testimonial.author.role}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {copy.cards.map(({ content, author }) => (
            <div
              className="group flex flex-col justify-between gap-8 rounded-sm border border-neutral-300 bg-neutral-50 px-4 py-5"
              key={author.name}
            >
              <div className="flex flex-col gap-4">
                <figure className="flex w-fit items-center justify-center rounded-md bg-amber-100 p-2">
                  <Quote className="h-5 w-5 text-amber-900" strokeWidth={1.5} />
                </figure>
                <p className="text-sm leading-relaxed text-neutral-500">
                  "{content}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  alt={author.name}
                  className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                  height={40}
                  src={author.image}
                  width={40}
                />
                <div>
                  <p className="text-xs font-bold text-neutral-700">
                    {author.name}
                  </p>
                  <p className="text-xs text-neutral-400">{author.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
