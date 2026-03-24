import type { PropsWithChildren } from 'react'

export interface BlogArticleContextProps {
  activeIdIndex: number
  indexes: string[]
}

export interface BlogArticleProviderProps extends PropsWithChildren {
  html: string
}
