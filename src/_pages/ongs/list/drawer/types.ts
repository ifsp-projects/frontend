import type { OrganizationProps } from '@/domain/entities/organization'

export interface OngDrawerProps {
  onClose: () => void
  ong: OrganizationProps | null
  open: boolean
}
