'use client'

import type { FC } from 'react'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

import { getHtmlContentIndexes } from '@/features/blog/utils/get-html-content-indexes'

import type { BlogArticleContextProps, BlogArticleProviderProps } from './types'

/**
 * Shared article navigation state.
 *
 * Exposes:
 * - indexes: article section titles
 * - activeIdIndex: currently visible section index
 */
const BlogArticleIndexesContext = createContext<string[]>([])
const BlogArticleActiveIndexContext = createContext<number>(0)

/**
 * Provides article navigation state for blog pages.
 *
 * The provider is responsible for:
 *
 * - Extracting article headings (<h3>)
 * - Building the table of contents structure
 * - Tracking the currently visible section
 * - Synchronizing scroll position with navigation UI
 *
 * Consumers can use this context to render features such as:
 *
 * - Table of contents
 * - Reading progress indicators
 * - Active section highlighting
 * - In-page navigation menus
 */
export const BlogArticleProvider: FC<BlogArticleProviderProps> = ({
  children,
  html
}) => {
  /**
   * Human-readable section titles extracted from article headings.
   *
   * Used for rendering the table of contents.
   */
  const [indexes, setIndexes] = useState<string[]>([])

  /**
   * Index of the section currently visible in the viewport.
   *
   * Used to highlight the active entry in the table of contents.
   */
  const [activeIdIndex, setActiveIdIndex] = useState<number>(0)

  /**
   * Internal heading identifiers corresponding to article sections.
   *
   * Used by the IntersectionObserver to track visibility changes.
   */
  const [ids, setIds] = useState<string[]>([])

  /**
   * Tracks window scroll position.
   *
   * Scroll updates trigger observer recalculation and help keep
   * section visibility state synchronized with the viewport.
   */
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const [contentIndexes, contentIds] = getHtmlContentIndexes(html)
    if (contentIndexes) setIndexes(contentIndexes)
    if (contentIds) setIds(contentIds)
  }, [html])

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const visible = entries.filter(entry => entry.isIntersecting)
      if (!visible.length) return

      const topMost = visible.reduce((closest, entry) =>
        entry.boundingClientRect.top < closest.boundingClientRect.top
          ? entry
          : closest
      )

      const nextIndex = ids.indexOf(topMost.target.id)

      setActiveIdIndex(prev =>
        nextIndex === -1 || nextIndex === prev ? prev : nextIndex
      )
    },
    [ids]
  )

  useEffect(() => {
    if (!ids.length) return

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px 0px -70% 0px',
      threshold: 0
    })

    observerRef.current = observer

    ids.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [ids, handleIntersection])

  return (
    <BlogArticleIndexesContext.Provider value={indexes}>
      <BlogArticleActiveIndexContext.Provider value={activeIdIndex}>
        {children}
      </BlogArticleActiveIndexContext.Provider>
    </BlogArticleIndexesContext.Provider>
  )
}

export const useBlogArticleIndexes = () => useContext(BlogArticleIndexesContext)
export const useBlogArticleActiveIndex = () =>
  useContext(BlogArticleActiveIndexContext)

export const useBlogArticleContext = (): BlogArticleContextProps => ({
  indexes: useBlogArticleIndexes(),
  activeIdIndex: useBlogArticleActiveIndex()
})
