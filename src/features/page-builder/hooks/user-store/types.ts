export type UserStoreState = {
  description: string | null

  setUserSession: (description: string) => void

  update: (data: { description?: string }) => void

  getDescription: () => string | null
}
