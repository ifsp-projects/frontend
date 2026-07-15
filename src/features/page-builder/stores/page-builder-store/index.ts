import {
  DEFAULT_TEMPLATES_ORDER,
  DEFAULT_TEMPLATE_COLORS,
  DEFAULT_TEMPLATE_COLOR_PALLETES
} from 'capivara-solidaria-ts-sdk'
import type { ColorPalette } from 'capivara-solidaria-ts-sdk'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { setPath } from '@/shared/utils/helpers/set-path'

import type { PageBuilderState } from './types'

/**
 * Zustand store for managing the state of the page builder.
 * Utilizes the `immer` middleware for immutable state updates.
 */
export const usePageBuilderStore = create<PageBuilderState>()(
  immer((set, get) => ({
    /**
     * Content for all page sections.
     *
     * Structure varies by template but generally contains
     * all editable copy, images, links and configuration
     * used to render the page.
     */
    sections: {},
    /**
     * Current visual ordering of sections.
     *
     * When empty, the builder falls back to the template's
     * default ordering configuration.
     */
    order: [],
    /**
     * Active theme palette selected for the page.
     *
     * Overrides template defaults when customized by users.
     */
    colorPalette: null as unknown as ColorPalette,
    /**
     * Primary brand color used throughout the page.
     *
     * Overrides the template default color when configured.
     */
    mainColor: null as unknown as string,

    /**
     * Initializes or replaces the entire sections state.
     * * @param {Object} sections - The complete sections object to populate the store.
     */
    setInitialSections: sections => set({ sections }),

    /**
     * Initializes the page's primary color.
     */
    setInitialMainColor: mainColor => set({ mainColor }),

    /**
     * Initializes the page's color palette.
     */
    setInitialColorPalette: colorPalette => set({ colorPalette }),

    /**
     * Updates a specific nested field within the sections state.
     * Uses `setPath` to deeply update the value based on the provided path.
     * @param {string | string[]} path - The path to the field to update (e.g., 'header.title').
     * @param {any} value - The new value to assign to the specified path.
     */
    updateField: (path, value) =>
      set((state: any) => {
        // Note: Since 'immer' is being used, deep cloning via JSON is generally not required,
        // but it is preserved here as originally implemented.
        const clonedSections = JSON.parse(JSON.stringify(state.sections))

        setPath(clonedSections, path, value)

        state.sections = clonedSections
      }),

    /**
     * Moves a section from one position to another.
     *
     * Triggered by drag-and-drop interactions inside the
     * page builder editor.
     *
     * If no custom ordering exists yet, the template's
     * default ordering is used as the initial source.
     */
    reorderSections: (fromIndex, toIndex, template: string) =>
      set((state: any) => {
        /**
         * Uses persisted ordering when available.
         * Otherwise falls back to template defaults.
         */
        const order: string[] = state.order.length
          ? state.order
          : DEFAULT_TEMPLATES_ORDER[template]
        const updated = [...order]
        const [moved] = updated.splice(fromIndex, 1)
        updated.splice(toIndex, 0, moved)
        state.order = updated
      }),

    /**
     * Retrieves the current sections state from the store.
     * * @returns {Object} The current sections state.
     */
    getSections: () => get().sections,

    /**
     * Returns the current custom section ordering.
     */
    getCurrentOrder: () => get().order,

    /**
     * Resolves the effective section order.
     *
     * Priority:
     * 1. User-defined order
     * 2. Template default order
     */
    getSectionOrder: (template: string) =>
      get().order ?? DEFAULT_TEMPLATES_ORDER[template],

    /**
     * Resolves the active primary color.
     *
     * Priority:
     * 1. Builder customization
     * 2. Template default color
     */
    getPageMainColor: (template: string) =>
      get().mainColor ?? DEFAULT_TEMPLATE_COLORS[template],

    /**
     * Resolves the active color palette.
     *
     * Priority:
     * 1. Builder customization
     * 2. Template default palette
     */
    getColorPalette: (template: string) =>
      get().colorPalette ?? DEFAULT_TEMPLATE_COLOR_PALLETES[template]
  }))
)
