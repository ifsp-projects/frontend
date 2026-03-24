import type { FC } from 'react'

import { BlogArticleProvider } from '@/context/blog-article-provider'

import { Sidebar } from '../../components/sidebar'
import { ArticleContent } from './article-content'
import type { ArticleProps } from './types'

export const Article: FC<ArticleProps> = async ({ article }) => {
  return (
    <BlogArticleProvider html={article.content.rendered}>
      <div className="mx-auto flex w-full max-w-2xl gap-12 lg:max-w-5xl">
        <ArticleContent article={article} />
        <Sidebar article={article} />
      </div>
    </BlogArticleProvider>
  )
}
