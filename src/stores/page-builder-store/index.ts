import lodashSet from 'lodash.set' // 1. Renomeie para evitar conflito com o 'set' do Zustand
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { PageBuilderState } from './types'

export const usePageBuilderStore = create<PageBuilderState>()(
  immer((set, get) => ({
    sections: {},

    setInitialSections: sections => set({ sections }),

    updateField: (path, value) =>
      set((state: any) => {
        lodashSet(state.sections, path, value)
      }),

    getSections: () => get().sections
  }))
)
