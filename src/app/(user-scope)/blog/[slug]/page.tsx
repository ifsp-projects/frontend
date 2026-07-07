import he from 'he'
import type { NextPage } from 'next'
import Script from 'next/script'

import { ArticleBody } from '@/features/blog/components/article/article-body'
import { ArticleHeader } from '@/features/blog/components/article/article-header'
import { Contact } from '@/features/pages/homepage/sections/contact'
import { blog } from '@/instances/blog'
import { blogArticleStructuredData } from '@/utils/seo/dts-schemas/blog-article'
import { getMetaData } from '@/utils/seo/get-metadata'

type BlogArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

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
      <main>
        <ArticleHeader article={article} />
        <ArticleBody article={article} />
        <Contact />
      </main>
    </>
  )
}

export default Page
