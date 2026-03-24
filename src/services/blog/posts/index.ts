import { FEATURED_ARTICLES_TAGS_IDS } from '@/constants/wordpress/featured-articles-tags-id'
import { apiWordpress } from '@/instances/wordpress'
import type { WordpressArticle } from '@/types/wordpress/wordpress-article'
import type { WordPressTag } from '@/types/wordpress/wordpress-tag'

import type {
  EnrichedWordpressArticle,
  GetAllArticlesPayload,
  GetAllArticlesReturn,
  GetArticleByIdPayload,
  GetArticleByIdReturn,
  GetArticleBySlugPayload,
  GetArticleBySlugReturn,
  SearchArticlePayload,
  SearchArticleReturn
} from './types'

export class Articles {
  private async enrichPostWithTagDetails(articles: WordpressArticle[]) {
    const allTagIds = Array.from(
      new Set(articles.flatMap(article => article.tags))
    )

    const allTags = await apiWordpress<
      Array<{ id: number; name: string; slug: string }>
    >(`/tags?include=${allTagIds.join(',')}`, { revalidate: 60 * 60 })

    const tagMap = new Map(allTags.map(tag => [tag.id, tag]))

    return articles.map(article => ({
      ...article,
      tagDetails: article.tags
        .filter(id => !FEATURED_ARTICLES_TAGS_IDS.includes(String(id)))
        .map(id => tagMap.get(id))
        .filter(Boolean) as WordPressTag[]
    }))
  }

  private removeFeaturedArticles(
    articles: EnrichedWordpressArticle[]
  ): EnrichedWordpressArticle[] {
    return articles.filter(
      article =>
        !article.tags.some(tag =>
          FEATURED_ARTICLES_TAGS_IDS.includes(tag.toString())
        )
    )
  }

  async getAllArticles({
    shouldRemoveFeaturedArticles = false
  }: GetAllArticlesPayload): Promise<GetAllArticlesReturn> {
    try {
      const articles = await apiWordpress<WordpressArticle[]>(
        '/posts?page=1&per_page=99',
        {
          revalidate: 5 * 60 // 5 Minutes
        }
      )

      let formattedArticles = await this.enrichPostWithTagDetails(articles)

      if (shouldRemoveFeaturedArticles) {
        formattedArticles = this.removeFeaturedArticles(formattedArticles)
      }

      return { data: formattedArticles }
    } catch (getAllArticlesErr) {
      console.error('Cannot find Articles:', getAllArticlesErr)
      return { data: [] }
    }
  }

  async getArticleBySlug({
    slug
  }: GetArticleBySlugPayload): Promise<GetArticleBySlugReturn> {
    try {
      const articles = await apiWordpress<WordpressArticle[]>(
        `/posts?slug=${slug}`,
        {
          revalidate: 5 * 60 // 5 Minutes
        }
      )

      return {
        data: articles.length > 0 ? articles[0] : ({} as WordpressArticle)
      }
    } catch (getArticleBySlugErr) {
      console.error('Cannot Find this Article:', getArticleBySlugErr)
      return { data: {} as WordpressArticle }
    }
  }

  async getArticleById({
    id
  }: GetArticleByIdPayload): Promise<GetArticleByIdReturn> {
    try {
      const articles = await apiWordpress<WordpressArticle>(`/posts/${id}`, {
        revalidate: 5 * 60 // 5 Minutes
      })

      return {
        data: articles
      }
    } catch (getArticleByIdErr) {
      console.error('Cannot Find this Article:', getArticleByIdErr)
      return { data: {} as WordpressArticle }
    }
  }

  async searchArticle({
    query
  }: SearchArticlePayload): Promise<SearchArticleReturn> {
    try {
      const result = await apiWordpress<WordpressArticle[]>(
        `/posts?search=${encodeURIComponent(query)}`,
        {
          revalidate: 0
        }
      )

      let formattedArticles = await this.enrichPostWithTagDetails(result)

      return { data: formattedArticles }
    } catch (searchArticleErr) {
      console.error('Any results for this search:', searchArticleErr)
      return { data: [] }
    }
  }

  async getFeaturedArticle(): Promise<GetArticleByIdReturn> {
    try {
      const tags = await apiWordpress<{ id: number; slug: string }[]>(
        '/tags?slug=featured-post',
        {
          revalidate: 60 * 60 // Cache for 1 hour because I think tags don't will change often
        }
      )

      if (!tags || tags.length === 0) {
        console.warn('Tag "featured-post" not found')
        return { data: {} as WordpressArticle }
      }

      const tagId = tags[0].id

      const articles = await apiWordpress<WordpressArticle[]>(
        `/posts?tags=${tagId}&_embed`,
        {
          revalidate: 5 * 60 // 5 Minutes
        }
      )

      let formattedArticles = await this.enrichPostWithTagDetails(articles)

      return {
        data:
          formattedArticles.length > 0
            ? formattedArticles[0]
            : ({} as WordpressArticle)
      }
    } catch (getFeaturedPostsErr) {
      console.error('Cannot find Featured Articles:', getFeaturedPostsErr)
      return { data: {} as WordpressArticle }
    }
  }

  async getSubFeaturedArticles(): Promise<GetAllArticlesReturn> {
    try {
      const tags = await apiWordpress<{ id: number; slug: string }[]>(
        '/tags?slug=sub-featured-post',
        {
          revalidate: 60 * 60 // Cache for 1 hour because I think tags don't will change often
        }
      )

      if (!tags || tags.length === 0) {
        console.warn('Tag "sub-featured-post" not found')
        return { data: [] }
      }

      const tagId = tags[0].id

      const articles = await apiWordpress<WordpressArticle[]>(
        `/posts?tags=${tagId}&_embed`,
        {
          revalidate: 5 * 60 // 5 Minutes
        }
      )

      let formattedArticles = await this.enrichPostWithTagDetails(articles)

      return { data: formattedArticles }
    } catch (getSubFeaturedPostsErr) {
      console.error(
        'Cannot find Sub-Featured Articles:',
        getSubFeaturedPostsErr
      )
      return { data: [] }
    }
  }
}
