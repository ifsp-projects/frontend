import type { UseFormRegister } from 'react-hook-form'

import type { OrganizationProps } from '@/domain/entities/organization'
import type { ProfileFormSchemaType } from '@/features/admin/containers/profile/schema'

export interface SocialTabProps {
  control: any
  isSubmitting: boolean
  organization: OrganizationProps
  register: UseFormRegister<ProfileFormSchemaType>
}
