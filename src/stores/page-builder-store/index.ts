import lodashSet from 'lodash.set'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { PageBuilderState } from './types'

/**
 * Zustand store for managing the state of the page builder.
 * Utilizes the `immer` middleware for immutable state updates.
 */
export const usePageBuilderStore = create<PageBuilderState>()(
  immer((set, get) => ({
    /**
     * The current state of the page sections.
     */
    sections: {},

    /**
     * Initializes or replaces the entire sections state.
     * * @param {Object} sections - The complete sections object to populate the store.
     */
    setInitialSections: sections => set({ sections }),

    /**
     * Updates a specific nested field within the sections state.
     * Uses `lodash.set` to deeply update the value based on the provided path.
     * * @param {string | string[]} path - The path to the field to update (e.g., 'header.title').
     * @param {any} value - The new value to assign to the specified path.
     */
    updateField: (path, value) =>
      set((state: any) => {
        // Note: Since 'immer' is being used, deep cloning via JSON is generally not required,
        // but it is preserved here as originally implemented.
        const clonedSections = JSON.parse(JSON.stringify(state.sections))

        lodashSet(clonedSections, path, value)

        state.sections = clonedSections
      }),

    /**
     * Retrieves the current sections state from the store.
     * * @returns {Object} The current sections state.
     */
    getSections: () => get().sections
  }))
)
