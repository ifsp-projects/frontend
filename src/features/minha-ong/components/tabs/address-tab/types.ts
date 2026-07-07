import type { UseFormRegister } from 'react-hook-form'

import type { ProfileFormSchemaType } from '@/features/minha-ong/containers/profile/schema'
import type { PostgresAddress } from '@/types/postgres/postgres-address'
import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

export interface AddressTabProps {
  address?: PostgresAddress
  control: any
  isSubmitting: boolean
  onAddressCreated?: (address: unknown) => void
  organization: PostgresOrganization
  organizationProfileId: string
  register: UseFormRegister<ProfileFormSchemaType>
  setValue: (field: keyof ProfileFormSchemaType, value: string) => void
  token: string
}
