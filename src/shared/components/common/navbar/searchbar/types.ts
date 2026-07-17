import type { OrganizationProps } from '@/domain/entities/organization'

export interface SearchbarProps {
  isSearchOpen: boolean
  orgs: OrganizationProps[]
}
