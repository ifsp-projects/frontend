import type { UseFormRegister } from 'react-hook-form'

import type { PostgresAddress } from '@/types/postgres/postgres-address'

import type { ProfileFormSchemaType } from '../../types'

export interface AddressSectionProps {
  address?: PostgresAddress
  control: any
  onAddressCreated?: (address: unknown) => void
  organizationProfileId: string
  register: UseFormRegister<ProfileFormSchemaType>
  setValue: (field: keyof ProfileFormSchemaType, value: string) => void
  token: string
}
