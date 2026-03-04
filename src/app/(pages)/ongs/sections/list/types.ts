import type { PostgresOrganization } from '@/types/postgres/postgres-organization'
import type { PostgresOrganizationProfile } from '@/types/postgres/postgres-organization-profile'

export type OrganizationWithProfile = PostgresOrganization & {
  organization_profile: PostgresOrganizationProfile
}

export interface ListProps {
  data:
    | {
        organizations: PostgresOrganization[]
      }
    | undefined
}
