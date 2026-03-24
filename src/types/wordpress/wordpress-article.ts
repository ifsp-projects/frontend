import type { WordpressArticleMeta } from './wordpress-article-meta'
import type { WordPressTag } from './wordpress-tag'

export interface WordpressArticle {
  author: number
  categories: number[]
  class_list: string[]
  comment_status: 'open' | 'closed'
  content: ProtectedContent
  date: string
  date_gmt: string
  excerpt: ProtectedContent
  featured_media: number
  format:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio'
  guid: RenderedField
  id: number
  jetpack_featured_media_url: string
  jetpack_likes_enabled: boolean | null
  jetpack_sharing_enabled: boolean
  jetpack_shortlink: string
  link: string
  meta: WordpressArticleMeta
  modified: string
  modified_gmt: string
  ping_status: 'open' | 'closed'
  slug: string
  status: 'publish' | 'draft' | 'pending' | 'private'
  sticky: boolean
  tagDetails?: WordPressTag[]
  tags: number[]
  template: string
  title: RenderedField
  type: 'post'
}

interface RenderedField {
  rendered: string
}

interface ProtectedContent extends RenderedField {
  protected: boolean
}
