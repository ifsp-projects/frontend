import type { Control, UseFormRegister } from 'react-hook-form'

export interface AddressFormFieldsProps<T extends Record<string, any>> {
  control: Control<T>
  defaultPhone?: string
  register: UseFormRegister<T>
  showPhone?: boolean
}
