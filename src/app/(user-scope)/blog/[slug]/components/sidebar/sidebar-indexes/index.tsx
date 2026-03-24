'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { useBlogArticleContext } from '@/context/blog-article-provider'
import { goToIndex } from '@/utils/blog/go-to-index'

import type { ArticleIndexesProps } from './types'

export const ArticleIndexes: FC<ArticleIndexesProps> = ({ article }) => {
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState<number>(0)

  const { indexes, activeIdIndex } = useBlogArticleContext()

  useEffect(() => {
    setCurrentSelectedIndex(activeIdIndex)
  }, [activeIdIndex])

  return indexes.length ? (
    <article className="flex flex-col">
      <ul className="mt-4 flex w-full flex-col overflow-hidden rounded-sm">
        {indexes.map((text: string, index: number) => (
          <li
            onClick={() => {
              setCurrentSelectedIndex(index)
              goToIndex(text)
            }}
            className={`text-body-sm w-full border-l-2 px-4 py-2 transition-all duration-300 ${index === currentSelectedIndex ? 'pointer-events-none border-rose-400 text-neutral-700 duration-300' : 'cursor-pointer border-neutral-300 text-neutral-500 hover:bg-neutral-50 hover:text-rose-400'}`}
            key={`${text}-${index}`}
          >
            {text}
          </li>
        ))}
      </ul>
    </article>
  ) : null
}
