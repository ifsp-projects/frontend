import type { WordPressTag } from '@/features/blog/types/wordpress/wordpress-tag'

export interface GetTagBySlugPayload {
  slug: string
}

export interface GetAllTagsReturn {
  data: WordPressTag[]
}

export interface GetTagBySlugReturn {
  data: WordPressTag | null
}
