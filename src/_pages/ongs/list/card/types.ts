import type { OrganizationProps } from '@/domain/entities/organization'
import type { OrganizationProfileProps } from '@/domain/entities/organization-profile'

export interface OngCardProps {
  index: number
  initial: string
  ong: OrganizationProps
  profile: OrganizationProfileProps
  setSelectedOng: (e: OrganizationProps) => void
}
