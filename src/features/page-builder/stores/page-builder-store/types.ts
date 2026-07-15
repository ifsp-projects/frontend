import type { ColorPalette } from 'capivara-solidaria-ts-sdk'

import type { JsonValue } from '@/shared/types/json-value'

export interface PageSections {
  [key: string]: JsonValue
}

export interface PageBuilderState {
  colorPalette: ColorPalette
  getColorPalette: (template: string) => ColorPalette
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
  setInitialColorPalette: (colorPalette: ColorPalette) => void
  setInitialMainColor: (mainColor: string) => void
  setInitialSections: (sections: PageSections) => void
  updateField: (path: string, value: unknown) => void
}
