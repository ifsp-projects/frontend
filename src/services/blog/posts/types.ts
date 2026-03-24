import type { WordpressArticle } from '@/types/wordpress/wordpress-article'
import type { WordPressTag } from '@/types/wordpress/wordpress-tag'

export type EnrichedWordpressArticle = WordpressArticle & {
  tagDetails: WordPressTag[]
}

export interface GetAllArticlesPayload {
  shouldRemoveFeaturedArticles?: boolean
}

export interface GetArticleBySlugPayload {
  slug: string
}

export interface GetArticleByIdPayload {
  id: string
}

export interface SearchArticlePayload {
  query: string
}

export interface GetAllArticlesReturn {
  data: WordpressArticle[]
}

export interface GetArticleBySlugReturn {
  data: WordpressArticle
}

export interface GetArticleByIdReturn {
  data: WordpressArticle
}

export interface SearchArticleReturn {
  data: WordpressArticle[]
}
