import type { UseFormSetValue } from 'react-hook-form'

import type { OrganizationProps } from '@/domain/entities/organization'
import type { ProfileFormSchemaType } from '@/features/admin/containers/profile/schema'

export type ProfileHeaderProps = {
  organization: OrganizationProps
  setValue: UseFormSetValue<ProfileFormSchemaType>
}
