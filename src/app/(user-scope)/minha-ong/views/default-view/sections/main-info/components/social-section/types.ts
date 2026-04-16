import type { UseFormRegister } from 'react-hook-form'

import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

import type { ProfileFormSchemaType } from '../../schema'

export interface SocialSectionProps {
  control: any
  isSubmitting: boolean
  organization: PostgresOrganization
  register: UseFormRegister<ProfileFormSchemaType>
}
