import type { PropsWithChildren } from 'react'
import type { UseFormReturn } from 'react-hook-form'

import type { ComplementFormSchemaType } from '../form/schema'

export interface StepperProviderProps extends PropsWithChildren {
  formMethods: UseFormReturn<ComplementFormSchemaType>
  onSubmit: (e) => void
}

export interface StepperContextProps {
  formMethods: UseFormReturn<ComplementFormSchemaType>
  onSubmit: (e) => void
}
