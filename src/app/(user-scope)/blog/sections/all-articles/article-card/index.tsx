import Image from 'next/image'
import React from 'react'

import type { ArticleCardProps } from './types'

export const ArticleCard: React.FC<ArticleCardProps> = async ({ copy }) => {
  const formattedPublishedDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long'
  }).format(new Date(`${copy.date}Z`))

  return (
    <a
      aria-label="Go to Article"
      className="group flex w-full cursor-pointer flex-col gap-4"
      href={`/blog/${copy.slug}`}
    >
      <figure className="aspect-video w-full overflow-hidden rounded-sm">
        <Image
          alt="Article Thumb"
          className="aspect-video w-full rounded-sm transition-all duration-300 group-hover:brightness-95"
          height={1080}
          src={copy?.jetpack_featured_media_url}
          width={1920}
        />
      </figure>
      <article className="flex w-full flex-col gap-3">
        <h3
          className="text-xl font-semibold"
          dangerouslySetInnerHTML={{ __html: copy.title.rendered }}
        />
        <div
          className="line-clamp-2 text-sm text-neutral-600"
          dangerouslySetInnerHTML={{ __html: copy.excerpt?.rendered }}
        />
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2">
            <Image
              alt="Gabriel Ortona"
              className="h-6 w-6 rounded-full object-cover"
              height={40}
              src="https://avatars.githubusercontent.com/u/111311744?v=4"
              width={40}
            />
            <p className="text-xs text-neutral-500">por Gabriel Ortona</p>
          </div>
          <p className="text-xs text-neutral-500">
            · {formattedPublishedDate} · 2. min leitura
          </p>
        </div>
      </article>
    </a>
  )
}
