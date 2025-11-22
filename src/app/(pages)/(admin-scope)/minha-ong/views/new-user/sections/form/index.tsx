'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useUserSession } from '@/hooks/use-user-session'
import { zodResolver } from '@hookform/resolvers/zod'

import { Stepper } from '../stepper'
import { StepperContextProvider } from '../stepper-context'
import { Address } from '../stepper/steps/address'
import { BasicInfo } from '../stepper/steps/basic-info'
import { DesiredTemplate } from '../stepper/steps/desired-template'
import type { ComplementFormSchemaType } from './schema'
import { complementInfoFormSchema } from './schema'

export const Form: FC = () => {
  const { token, organization, update } = useUserSession()

  if (!organization?.id) {
    return null
  }

  const ong_id = organization?.id

  const router = useRouter()

  const formMethods = useForm<ComplementFormSchemaType>({
    //@ts-ignore
    resolver: zodResolver(complementInfoFormSchema)
  })

  const onSubmit = async values => {
    try {
      const response = await axios.post(
        '/api/organization-profiles/create-organization-profile',
        {
          ...values,
          ong_id,
          token,
          logo: 'https://static.vecteezy.com/ti/vetor-gratis/p1/19869277-ong-carta-logotipo-projeto-em-branco-fundo-ong-criativo-circulo-carta-logotipo-conceito-ong-carta-projeto-vetor.jpg'
        }
      )

      const responseData = await response.data

      if (response.status !== 201) {
        toast.error(responseData.message)
        return
      }

      toast.success(responseData.message)
      console.log(responseData)
      await update({
        organization_profile: responseData.organizationProfile,
        is_user_new: false
      })
      router.refresh()
    } catch (error) {
      console.error(`Error trying to update organization profile: ${error}`)
      toast.error(
        'Ocorreu um erro ao criar o perfil da organização. Por favor, tente novamente.'
      )
    }
  }

  return (
    //@ts-ignore
    <StepperContextProvider formMethods={formMethods} onSubmit={onSubmit}>
      <section className="min-h-[62dvh] bg-white px-4 py-12 lg:py-16 xl:px-0">
        <div className="mx-auto w-full max-w-2xl lg:max-w-5xl">
          <Stepper
            customSteps={['basic-info', 'template', 'design-template']}
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
