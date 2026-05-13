import { Quote } from 'lucide-react'
import Image from 'next/image'
import type { FC } from 'react'

import type { TestimonialsProps } from './types'

export const Testimonials: FC<TestimonialsProps> = ({ copy, palette }) => {
  return (
    <section className="bg-white px-4 pb-28 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <article className="mb-12 flex items-center gap-3">
          <span
            className="h-px w-8"
            style={{ backgroundColor: palette.original }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: palette.original }}
          >
            {copy.label}
          </span>
        </article>

        <article className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-lg text-3xl leading-tight font-black text-neutral-700 lg:text-4xl xl:text-5xl">
            {copy.title}
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-500 lg:text-right">
            {copy.description}
          </p>
        </article>

        <div
          className="relative mb-6 overflow-hidden rounded-3xl p-8 lg:p-12"
          style={{ backgroundColor: palette.original }}
        >
          <div
            className="absolute -top-6 -right-6 h-40 w-40 rounded-full"
            style={{ backgroundColor: `${palette.tint}66` }}
          />
          <div
            className="absolute -bottom-10 -left-6 h-52 w-52 rounded-full"
            style={{ backgroundColor: `${palette.shade}4D` }}
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:gap-16">
            <Quote
              className="hidden h-16 w-16 shrink-0 lg:block"
              strokeWidth={1}
              style={{ color: palette.deep }}
            />
            <div className="flex flex-col gap-6">
              <p
                className="text-xl leading-relaxed font-semibold lg:text-2xl"
                style={{ color: palette.deep }}
              >
                "{copy.testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <Image
                  alt={copy.testimonial.author.name}
                  className="h-12 w-12 rounded-full object-cover"
                  height={48}
                  src={copy.testimonial.author.image}
                  style={{ border: `2px solid ${palette.deep}33` }}
                  width={48}
                />
                <article>
                  <p
                    className="text-sm font-black"
                    style={{ color: palette.deep }}
                  >
                    {copy.testimonial.author.name}
                  </p>
                  <p className="text-xs" style={{ color: `${palette.deep}CC` }}>
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
                <figure
                  className="flex w-fit items-center justify-center rounded-md p-2"
                  style={{ backgroundColor: palette.ultra_light }}
                >
                  <Quote
                    className="h-5 w-5"
                    strokeWidth={1.5}
                    style={{ color: palette.deep }}
                  />
                </figure>
                <p className="text-sm leading-relaxed text-neutral-500">
                  "{content}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  alt={author.name}
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
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
