// sortable-sections-hydrated.tsx
'use client'

import { useEffect } from 'react'

import { usePageBuilderStore } from '@/stores/page-builder-store'

import { SortableSections } from '..'

import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'
import type { TemplateType } from '@/types/postgres/page/psotgres-page-template-types'

/**
 * The page builder relies on Zustand as its client-side source
 * of truth. However, the initial page configuration originates
 * from server-rendered data.
 *
 * This component is responsible for synchronizing that initial
 * server state into the client store during hydration.
 *
 * By isolating hydration logic here, the underlying builder
 * components remain focused on rendering and interaction
 * concerns instead of initialization details.
 */
export function SortableSectionsHydrated({
  sections,
  template,
  isEditable = false,
  order,
  mainColor,
  colorPalette
}: {
  sections: any
  template: TemplateType
  isEditable?: boolean
  order: string[]
  mainColor: string
  colorPalette: PostgresColorPalette
}) {
  const setInitialSections = usePageBuilderStore(s => s.setInitialSections)
  const setInitialMainColor = usePageBuilderStore(s => s.setInitialMainColor)
  const setInitialColorPalette = usePageBuilderStore(
    s => s.setInitialColorPalette
  )

  useEffect(() => {
    setInitialSections(sections)
    setInitialMainColor(mainColor)
    setInitialColorPalette(colorPalette)

    usePageBuilderStore.setState({
      order
    })
  }, [])

  return (
    <SortableSections
      initialColorPalette={colorPalette}
      initialMainColor={mainColor}
      isEditable={isEditable}
      sections={sections}
      template={template}
    />
  )
}
