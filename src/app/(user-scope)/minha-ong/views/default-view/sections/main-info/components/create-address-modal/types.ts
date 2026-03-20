import type {
  Control,
  FieldValues,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form'

import type { AddressFormInput } from './schema'

export interface CreateAddressModalProps {
  isOpen: boolean
  onSuccess?: (address: unknown) => void
  organizationProfileId: string
  setIsOpen: (value: boolean) => void
  token: string
}

export interface AddressFormFieldsProps<
  T extends FieldValues & AddressFormInput
> {
  control: Control<T, any>
  defaultPhone?: string
  register: UseFormRegister<T>
  setValue: UseFormSetValue<T>
  showPhone?: boolean
}
