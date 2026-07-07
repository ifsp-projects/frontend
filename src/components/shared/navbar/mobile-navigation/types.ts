import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

export interface MobileNavigationProps {
  closeMenu: VoidFunction
  isMenuOpen: boolean
  organization: PostgresOrganization
  pathname: string
}
