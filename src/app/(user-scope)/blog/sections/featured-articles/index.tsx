import Image from 'next/image'

import { blog } from '@/instances/blog'

export const FeaturedArticles = async () => {
  const { data: featuredArticle } = await blog.articles.getFeaturedArticle()

  const formattedPublishedDate = new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long'
  }).format(new Date(`${featuredArticle.date}Z`))

  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-20 xl:px-0">
      <a
        className="group mx-auto flex w-full max-w-2xl cursor-pointer flex-col gap-8 lg:max-w-6xl lg:flex-row lg:items-center lg:justify-between"
        href={`/blog/${featuredArticle.slug}`}
      >
        <figure className="flex aspect-video w-full max-w-full items-center justify-center overflow-hidden rounded-sm bg-[#fdd7d9] lg:max-w-[480px]">
          <Image
            alt="Section Image"
            className="aspect-video max-w-[480px] rounded-sm object-contain transition-all duration-300 group-hover:scale-[1.01]"
            fetchPriority="high"
            height={1080}
            loading="eager"
            src="https://www-cdn.anthropic.com/images/4zrzovbb/website/1576ae23eaf481f33bd36ab468171cc69d12361a-1000x1000.svg"
            width={1920}
          />
        </figure>
        <article className="flex w-full flex-col gap-3">
          <h2
            dangerouslySetInnerHTML={{
              __html: featuredArticle?.title?.rendered
            }}
            className="text-xl font-bold md:text-2xl lg:text-4xl"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: featuredArticle.excerpt.rendered
            }}
            className="line-clamp-3 text-sm text-neutral-600"
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
              · {formattedPublishedDate} · 3 min. leitura
            </p>
          </div>
        </article>
      </a>
    </section>
  )
}
