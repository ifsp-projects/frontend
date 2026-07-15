import type { OrganizationProps } from '@/domain/entities/organization'

export interface MobileNavigationProps {
  closeMenu: VoidFunction
  isMenuOpen: boolean
  organization: OrganizationProps
  pathname: string
}
