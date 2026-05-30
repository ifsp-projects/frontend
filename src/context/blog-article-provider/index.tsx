'use client'

import type { FC } from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

import { getHtmlContentIndexes } from '@/utils/blog/get-html-content-indexes'

import type { BlogArticleContextProps, BlogArticleProviderProps } from './types'

/**
 * Shared article navigation state.
 *
 * Exposes:
 * - indexes: article section titles
 * - activeIdIndex: currently visible section index
 */
const BlogArticleContext = createContext<BlogArticleContextProps>({
  activeIdIndex: 0,
  indexes: []
})

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
  const [windowScroll, setWindowScroll] = useState<number | null>(null)
  const observerRef = useRef(null)

  /**
   * Extracts heading titles and IDs from the article HTML.
   *
   * This allows the table of contents structure to be generated
   * automatically from the article content.
   */
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setWindowScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * Updates the active section whenever an observed heading
   * enters the viewport.
   */
  useEffect(() => {
    const [contentIndexes, contentIds] = getHtmlContentIndexes(html)
    if (contentIndexes) setIndexes(contentIndexes)
    if (contentIds) setIds(contentIds)
  }, [html])

  useEffect(() => {
    if (!ids.length) return

    //@ts-ignore
    const handleIntersection = entries => {
      //@ts-ignore
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveIdIndex(ids.indexOf(entry.target.id))
        }
      })
    }

    //@ts-ignore
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 1
    })

    ids.forEach(id => {
      const element = document.getElementById(id)
      //@ts-ignore
      if (element) observerRef.current?.observe(element)
    })

    //@ts-ignore
    return () => observerRef.current?.disconnect()
  }, [ids, windowScroll])

  return (
    /**
     * Exposes article navigation state to descendant components.
     */
    <BlogArticleContext.Provider value={{ indexes, activeIdIndex }}>
      {children}
    </BlogArticleContext.Provider>
  )
}

/**
 * Provides access to article navigation state.
 *
 * Common use cases:
 * - Table of contents
 * - Active heading indicators
 * - Reading progress navigation
 */
export const useBlogArticleContext = () => useContext(BlogArticleContext)
