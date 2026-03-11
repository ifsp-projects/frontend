import type { UseFormRegister } from 'react-hook-form'

import type { ProfileFormSchemaType } from '../../types'

export interface AboutSectionProps {
  control: any
  defaultDescription?: string
  register: UseFormRegister<ProfileFormSchemaType>
}
