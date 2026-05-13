// sortable-sections-hydrated.tsx
'use client'

import { useEffect } from 'react'

import { usePageBuilderStore } from '@/stores/page-builder-store'

import { SortableSections } from '..'

import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'
import type { TemplateType } from '@/types/postgres/page/psotgres-page-template-types'

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
      isEditable={isEditable}
      sections={sections}
      template={template}
    />
  )
}
