'use client'

import type { FC } from 'react'

import { useBlogArticleContext } from '@/context/blog-article-provider'
import { goToIndex } from '@/utils/blog/go-to-index'

import type { ArticleIndexesProps } from './types'

export const ArticleIndexes: FC<ArticleIndexesProps> = ({ article }) => {
  const { indexes, activeIdIndex } = useBlogArticleContext()

  if (!indexes || indexes.length === 0) return null

  return indexes.length ? (
    <article className="flex flex-col">
      <ul className="mt-4 flex w-full flex-col overflow-hidden rounded-sm">
        {indexes.map((text: string, index: number) => {
          const isActive = index === activeIdIndex

          return (
            <li key={`${text}-${index}`}>
              <button
                onClick={() => {
                  goToIndex(text)
                }}
                className={`text-body-sm w-full border-l-2 px-4 py-2 transition-all duration-300 ${isActive ? 'pointer-events-none border-rose-400 text-neutral-700 duration-300' : 'cursor-pointer border-neutral-300 text-neutral-500 hover:bg-neutral-50 hover:text-rose-400'}`}
                disabled={isActive}
                type="button"
              >
                {text}
              </button>
            </li>
          )
        })}
      </ul>
    </article>
  ) : null
}
