import he from 'he'
import type { Article, WithContext } from 'schema-dts'

import { BASE_URL } from '@/constants/environments/base-url'

import type { BlogArticleStructuredDataPayload } from './types'

export const blogArticleStructuredData = async ({
  article
}: BlogArticleStructuredDataPayload): Promise<WithContext<Article>> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: he.decode(article.title?.rendered),
    datePublished: article.date,
    inLanguage: 'pt-BR',
    isPartOf: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${article.slug}`,
      url: `${BASE_URL}/blog/${article.slug}`,
      name: `${article.title} - Capivara Solidária Blog`,
      inLanguage: 'pt-BR',
      thumbnailUrl: [article.jetpack_featured_media_url],
      description: he.decode(article.excerpt?.rendered)
    },
    publisher: {
      '@type': 'Organization',
      name: 'Capivara Solidária'
    },
    keywords: article?.tagDetails?.map(tag => tag.name).join(', ') || []
  }
}
