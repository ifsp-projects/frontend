import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { ShareArticle } from '../../components/share-article'
import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = async ({ article }) => {
  const formattedPublishedDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long'
  }).format(new Date(`${article.date}Z`))

  return (
    <section className="w-full bg-white px-4 py-12 lg:py-16 xl:px-0">
      <header className="mx-auto flex w-full flex-col items-center gap-8">
        <div className="flex w-full max-w-2xl flex-col gap-8 lg:max-w-5xl">
          <Link className="flex items-center gap-2" href="/blog">
            <ArrowLeft className="h-3 w-3 text-neutral-500" />
            <p className="text-sm text-neutral-500">Voltar</p>
          </Link>
          <article className="flex w-full flex-col gap-0.5">
            <p className="text-sm font-medium text-neutral-600 uppercase">
              Capivara Solidaria
            </p>
            <p className="text-sm text-neutral-500">
              {formattedPublishedDate}, 2026
            </p>
          </article>

          <h1
            className="text-2xl font-bold lg:text-4xl"
            dangerouslySetInnerHTML={{ __html: article.title.rendered }}
          />

          <ShareArticle />
        </div>

        <figure className="aspect-video max-h-[540px] w-full max-w-2xl rounded-md lg:max-w-5xl">
          <Image
            alt="Article Header Image"
            className="aspect-video max-h-[540px] w-full rounded-md object-cover"
            height={1080}
            loading="eager"
            src={article.jetpack_featured_media_url}
            width={1920}
            priority
          />
        </figure>
      </header>
    </section>
  )
}
