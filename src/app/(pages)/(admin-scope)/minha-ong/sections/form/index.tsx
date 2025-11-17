'use client'

import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { Stepper } from '../stepper'
import { StepperContextProvider } from '../stepper-context'
import { BasicInfo } from '../stepper/steps/basic-info'
import type { ComplementFormSchemaType } from './schema'
import { complementInfoFormSchema } from './schema'
import { Address } from '../stepper/steps/address'
import { DesiredTemplate } from '../stepper/steps/desired-template'

export const Form: FC = () => {
  const formMethods = useForm<ComplementFormSchemaType>({
    resolver: zodResolver(complementInfoFormSchema)
  })

  const onSubmit = () => {}

  return (
    <StepperContextProvider formMethods={formMethods} onSubmit={onSubmit}>
      <section className="min-h-[62dvh] bg-white px-4 py-12 lg:py-16 xl:px-0">
        <div className="mx-auto w-full max-w-2xl lg:max-w-5xl">
          <Stepper
            customSteps={['basic-info', 'template', 'disired-template']}
            initialStep="basic-info"
          >
            {({ currentStep, nextStep, prevStep, setActiveStep }) => (
              <>
                <BasicInfo
                  currentStep={currentStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  setActiveStep={setActiveStep}
                />
                <Address
                  currentStep={currentStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  setActiveStep={setActiveStep}
                />
                <DesiredTemplate
                  currentStep={currentStep}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  setActiveStep={setActiveStep}
                />
              </>
            )}
          </Stepper>
        </div>
      </section>
    </StepperContextProvider>
  )
}
