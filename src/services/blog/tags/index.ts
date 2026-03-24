import { apiWordpress } from '@/instances/wordpress'
import type { WordPressTag } from '@/types/wordpress/wordpress-tag'

import type { GetAllTagsReturn, GetTagBySlugReturn } from './types'

export class Tags {
  async getAllTags(): Promise<GetAllTagsReturn> {
    try {
      const tags = await apiWordpress<WordPressTag[]>('/tags', {
        revalidate: 5 * 60
      })

      return {
        data: tags
      }
    } catch (getAllTagsErr) {
      console.error('Cannot find Articles:', getAllTagsErr)
      return { data: [] }
    }
  }

  async getTagBySlug(slug: string): Promise<GetTagBySlugReturn> {
    try {
      const tags = await apiWordpress<WordPressTag[]>(`/tags?slug=${slug}`, {
        revalidate: 5 * 60
      })
      return {
        data: tags.length > 0 ? tags[0] : null
      }
    } catch (getTagBySlugErr) {
      console.error('Cannot Find this Tag:', getTagBySlugErr)
      return { data: null }
    }
  }
}
