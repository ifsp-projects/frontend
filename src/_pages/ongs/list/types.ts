import type { OrganizationProps } from '@/domain/entities/organization'
import type { OrganizationProfileProps } from '@/domain/entities/organization-profile'

export type OrganizationWithProfile = OrganizationProps & {
  organization_profile: OrganizationProfileProps
}

export interface ListProps {
  data:
    | {
        organizations: OrganizationProps[]
      }
    | undefined
}
