import { createContext, useContext } from 'react'

import type { StepperContextProps, StepperProviderProps } from './types'

const StepperContext = createContext<StepperContextProps>(null)

export const StepperContextProvider: React.FC<StepperProviderProps> = ({
  formMethods,
  onSubmit,
  children
}) => {
  return (
    <StepperContext.Provider value={{ formMethods, onSubmit }}>
      {children}
    </StepperContext.Provider>
  )
}

export const useStepperContext = () => useContext(StepperContext)
