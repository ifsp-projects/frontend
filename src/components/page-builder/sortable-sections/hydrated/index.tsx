// sortable-sections-hydrated.tsx
'use client'

import { useEffect } from 'react'

import { usePageBuilderStore } from '@/stores/page-builder-store'

import { SortableSections } from '..'

import type { TemplateType } from '@/types/postgres/page/psotgres-page-template-types'

export function SortableSectionsHydrated({
  sections,
  template,
  isEditable = false,
  order
}: {
  sections: any
  template: TemplateType
  isEditable?: boolean
  order: string[]
}) {
  const setInitialSections = usePageBuilderStore(s => s.setInitialSections)

  useEffect(() => {
    setInitialSections(sections)

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
