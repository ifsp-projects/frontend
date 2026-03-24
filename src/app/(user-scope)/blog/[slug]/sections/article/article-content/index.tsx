import type { FC } from 'react'

import { formatBlogArticle } from '@/utils/blog/format-html-content'

import type { ArticleContentProps } from './types'

export const ArticleContent: FC<ArticleContentProps> = ({ article }) => {
  const formattedHtml = formatBlogArticle(article.content.rendered)

  return (
    <section className="px-4 pb-12 lg:pb-16 xl:px-0">
      <div
        className="article-content mx-auto w-full max-w-2xl lg:max-w-4xl"
        dangerouslySetInnerHTML={{ __html: formattedHtml }}
      />
    </section>
  )
}
