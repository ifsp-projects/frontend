'use client'

import { useRef } from 'react'

import { usePageBuilderStore } from '@/stores/page-builder-store'

import type { PageSections } from './types'

export const usePageBuilder = ({ sections }: { sections: PageSections }) => {
  const setInitialSections = usePageBuilderStore(
    state => state.setInitialSections
  )

  const initialized = useRef(false)

  if (!initialized.current) {
    setInitialSections(sections)
    initialized.current = true
  }

  return null
}
