'use client'

import type { FC } from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

import { getHtmlContentIndexes } from '@/utils/blog/get-html-content-indexes'

import type { BlogArticleContextProps, BlogArticleProviderProps } from './types'

const BlogArticleContext = createContext<BlogArticleContextProps>({
  activeIdIndex: 0,
  indexes: []
})

export const BlogArticleProvider: FC<BlogArticleProviderProps> = ({
  children,
  html
}) => {
  const [indexes, setIndexes] = useState<string[]>([])
  const [activeIdIndex, setActiveIdIndex] = useState<number>(0)
  const [ids, setIds] = useState<string[]>([])
  const [windowScroll, setWindowScroll] = useState<number | null>(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setWindowScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <BlogArticleContext.Provider value={{ indexes, activeIdIndex }}>
      {children}
    </BlogArticleContext.Provider>
  )
}

export const useBlogArticleContext = () => useContext(BlogArticleContext)
