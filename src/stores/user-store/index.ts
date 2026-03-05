import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import type { UserStoreState } from './types'

export const useUserStore = create<UserStoreState>()(
  immer((set, get) => ({
    token: null,
    description: null,

    setUserSession: description => set({ description }),

    update: ({ description }) =>
      set(state => {
        if (description !== undefined) {
          state.description = description
        }
      }),

    getDescription: () => get().description
  }))
)
