import type { JsonValue } from '@/types/components/json-value'

export interface PageSections {
  [key: string]: JsonValue
}

export interface PageBuilderState {
  getSections: () => PageSections
  sections: PageSections
  setInitialSections: (sections: PageSections) => void
  updateField: (path: string, value: string) => void
}
