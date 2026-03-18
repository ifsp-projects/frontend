'use client'

import { useEffect, useState } from 'react'

import { useScrollProgressContext } from '../../context/scroll-progress-context'
import { sections } from '../../data'

export const ScrollProgress = () => {
  const { setActiveSection } = useScrollProgressContext()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)

      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(section.id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-neutral-100">
      <div
        className="h-full bg-linear-to-r from-rose-300 to-rose-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
