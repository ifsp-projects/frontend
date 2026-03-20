import type { UseFormRegister } from 'react-hook-form'

import type { PostgresAddress } from '@/types/postgres/postgres-address'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

import type { ProfileFormSchemaType } from '../../schema'

export interface AddressSectionProps {
  address?: PostgresAddress
  control: any
  onAddressCreated?: (address: unknown) => void
  organization: PostgresOrganization
  organizationProfileId: string
  register: UseFormRegister<ProfileFormSchemaType>
  setValue: (field: keyof ProfileFormSchemaType, value: string) => void
  token: string
}
