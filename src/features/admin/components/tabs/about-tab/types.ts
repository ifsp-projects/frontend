import type { UseFormRegister } from 'react-hook-form'

import type { OrganizationProps } from '@/domain/entities/organization'
import type { ProfileFormSchemaType } from '@/features/admin/containers/profile/schema'

export interface AboutTabProps {
  control: any
  defaultDescription?: string
  isSubmitting: boolean
  organization: OrganizationProps
  register: UseFormRegister<ProfileFormSchemaType>
}
