import he from 'he'
import type { NextPage } from 'next'
import Script from 'next/script'

import { blog } from '@/instances/blog'
import { blogArticleStructuredData } from '@/utils/seo/dts-schemas/blog-article'
import { getMetaData } from '@/utils/seo/get-metadata'

import { Article } from './sections/article'
import { Contact } from './sections/contact'
import { Header } from './sections/header'
import type { BlogArticlePageProps } from './types'

export async function generateStaticParams() {
  try {
    const params: { slug: string }[] = []

    const { data: articles } = await blog.articles.getAllArticles({
      shouldRemoveFeaturedArticles: false
    })

    articles.forEach(article => {
      params.push({
        slug: article.slug
      })
    })

    return params
  } catch (err) {
    console.error(err)
    return []
  }
}

export const generateMetadata = async ({ params }: BlogArticlePageProps) => {
  const { slug } = await params

  const { data: article } = await blog.articles.getArticleBySlug({ slug })

  return getMetaData({
    title: he.decode(article.title?.rendered),
    description: he.decode(article.excerpt?.rendered),
    image: article.jetpack_featured_media_url,
    url: `/blog/${article.slug}`
  })
}

const Page: NextPage<BlogArticlePageProps> = async ({ params }) => {
  const { slug } = await params

  const { data: article } = await blog.articles.getArticleBySlug({ slug })

  const structuredData = blogArticleStructuredData({ article })

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        id="blog-article-structured-data"
        type="application/ld+json"
      />
      <main className="overflow-hidden">
        <Header article={article} />
        <Article article={article} />
        <Contact />
      </main>
    </>
  )
}

export default Page
