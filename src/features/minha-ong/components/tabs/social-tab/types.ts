import type { UseFormRegister } from 'react-hook-form'

import type { ProfileFormSchemaType } from '@/features/minha-ong/containers/profile/schema'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

export interface SocialTabProps {
  control: any
  isSubmitting: boolean
  organization: PostgresOrganization
  register: UseFormRegister<ProfileFormSchemaType>
}
