import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { UserStoreState } from './types'

/**
 * Zustand store for managing the authenticated user's session state.
 * Utilizes the `immer` middleware to allow direct, mutable-style updates to the state.
 */
export const useUserStore = create<UserStoreState>()(
  immer((set, get) => ({
    /**
     * The user's authentication token.
     * @type {string | null}
     */
    token: null,

    /**
     * The user's profile description or session details.
     * @type {any | null} // Replace 'any' with the specific type from UserStoreState if applicable
     */
    description: null,

    /**
     * Replaces the current user description with a new one.
     * * @param {any} description - The new user description/session data to set.
     */
    setUserSession: description => set({ description }),

    /**
     * Partially updates the user's state.
     * Because this uses `immer`, we can mutate the `state` draft directly.
     * * @param {Object} params - The properties to update.
     * @param {any} [params.description] - The new description to apply, if provided.
     */
    update: ({ description }) =>
      set(state => {
        if (description !== undefined) {
          state.description = description
        }
      }),

    /**
     * Retrieves the current user description from the store.
     * * @returns {any | null} The current user description.
     */
    getDescription: () => get().description
  }))
)
