import lodashSet from 'lodash.set'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { PageBuilderState } from './types'

export const usePageBuilderStore = create<PageBuilderState>()(
  immer((set, get) => ({
    sections: {},

    setInitialSections: sections => set({ sections }),

    updateField: (path, value) =>
      set((state: any) => {
        const clonedSections = JSON.parse(JSON.stringify(state.sections))

        lodashSet(clonedSections, path, value)

        state.sections = clonedSections
      }),

    getSections: () => get().sections
  }))
)
