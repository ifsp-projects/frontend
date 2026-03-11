'use client'

import { useRef } from 'react'

import { usePageBuilderStore } from '@/stores/page-builder-store'

import type { PageSections } from './types'

/**
 * A custom React hook that initializes the page builder store.
 * It uses a ref-based initialization pattern to ensure the store is populated
 * synchronously during the very first render, running exactly once.
 *
 * @param {Object} params - The hook parameters.
 * @param {PageSections} params.sections - The initial page sections data to load into the store.
 * @returns {null} This hook is used for its initialization side-effect and returns nothing.
 */
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
