import type { UseFormRegister } from 'react-hook-form'

import type { AddressProps } from '@/domain/entities/address'
import type { OrganizationProps } from '@/domain/entities/organization'
import type { ProfileFormSchemaType } from '@/features/admin/containers/profile/schema'

export interface AddressTabProps {
  address?: AddressProps
  control: any
  isSubmitting: boolean
  onAddressCreated?: (address: unknown) => void
  organization: OrganizationProps
  organizationProfileId: string
  register: UseFormRegister<ProfileFormSchemaType>
  setValue: (field: keyof ProfileFormSchemaType, value: string) => void
  token: string
}
