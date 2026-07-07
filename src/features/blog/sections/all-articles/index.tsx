import { blog } from '@/instances/blog'

import { ArticleCard } from './article-card'

export const AllArticles = async () => {
  const { data: articlesFound } = await blog.articles.getAllArticles({
    shouldRemoveFeaturedArticles: true
  })

  return (
    <section className="w-full px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 lg:max-w-6xl lg:gap-8">
        <p className="text-lg font-medium lg:font-normal">Últimos artigos</p>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
          {articlesFound.map((article, index: number) => (
            <ArticleCard copy={article} key={`article-${index}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
