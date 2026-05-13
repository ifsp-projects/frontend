import type { JsonValue } from '@/types/components/json-value'
import type { PostgresColorPalette } from '@/types/postgres/enums/postgres-color-pallete'

export interface PageSections {
  [key: string]: JsonValue
}

export interface PageBuilderState {
  colorPalette: PostgresColorPalette
  getColorPalette: (template: string) => PostgresColorPalette
  getCurrentOrder: () => string[]
  getPageMainColor: (template: string) => string
  getSectionOrder: (template: string) => string[]
  getSections: () => PageSections
  mainColor: string
  order: string[]
  reorderSections: (
    fromIndex: number,
    toIndex: number,
    template: string
  ) => void
  sections: PageSections
  setInitialColorPalette: (colorPalette: PostgresColorPalette) => void
  setInitialMainColor: (mainColor: string) => void
  setInitialSections: (sections: PageSections) => void
  updateField: (path: string, value: unknown) => void
}
