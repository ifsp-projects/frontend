import type { Control, UseFormRegister } from 'react-hook-form'

import type { PostgresOrganization } from '@/types/postgres/postgres-organization'

export interface AddressFormFieldsProps<T extends Record<string, any>> {
  control: Control<T>
  defaultPhone?: string
  organization?: PostgresOrganization
  register: UseFormRegister<T>
  setValue: (field: keyof T, value: string) => void
  showPhone?: boolean
}
