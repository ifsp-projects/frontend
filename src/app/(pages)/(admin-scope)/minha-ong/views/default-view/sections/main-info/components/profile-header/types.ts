import type { UseFormSetValue } from 'react-hook-form'

import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

import type { ProfileFormSchemaType } from '../../schema'

export type ProfileHeaderProps = {
  organization: PostgresOrganization
  setValue: UseFormSetValue<ProfileFormSchemaType>
}
