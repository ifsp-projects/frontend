'use client'

import { createContext, useContext, useState } from 'react'

import { sections } from '../data'

interface ScrollProgressContextProps {
  activeSection: string
  setActiveSection: (e: string) => void
}

export const ScrollProgressContext =
  createContext<ScrollProgressContextProps>(null)

export const ScrollProgressProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id)

  return (
    <ScrollProgressContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollProgressContext.Provider>
  )
}

export const useScrollProgressContext = () => useContext(ScrollProgressContext)
