import type { JsonValue } from '@/types/components/json-value'

export interface PageSections {
  [key: string]: JsonValue
}

export interface PageBuilderState {
  getCurrentOrder: () => string[]
  getSectionOrder: (template: string) => string[]
  getSections: () => PageSections
  order: string[]
  reorderSections: (
    fromIndex: number,
    toIndex: number,
    template: string
  ) => void
  sections: PageSections
  setInitialSections: (sections: PageSections) => void
  updateField: (path: string, value: unknown) => void
}
