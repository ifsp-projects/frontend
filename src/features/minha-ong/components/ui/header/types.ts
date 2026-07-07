import type { UseFormSetValue } from 'react-hook-form'

import type { ProfileFormSchemaType } from '@/features/minha-ong/containers/profile/schema'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

export type ProfileHeaderProps = {
  organization: PostgresOrganization
  setValue: UseFormSetValue<ProfileFormSchemaType>
}
