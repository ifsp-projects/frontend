import { OngCategory } from 'capivara-solidaria-ts-sdk'
import { z } from 'zod'

import { isValidCityForState } from '@/domain/location/cities'
import { BRAZILIAN_STATE_UFS } from '@/domain/location/states'

export const onboardingProfileSchema = z
  .object({
    name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
    phone: z.string().min(10, 'Número de telefone inválido'),
    description: z.string().max(500, 'Máximo de 500 caracteres').optional(),
    street: z.string().min(1, 'Rua é obrigatória'),
    number: z.string().optional(),
    state: z.enum(BRAZILIAN_STATE_UFS),
    city: z.string().min(1, 'Selecione uma cidade'),
    ong_type: z.enum(OngCategory).optional(),
    design_template: z.string().nonempty('Este campo é obrigatório')
  })
  .superRefine((data, ctx) => {
    if (
      data.state &&
      data.city &&
      !isValidCityForState(data.state, data.city)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Selecione uma cidade válida para o estado escolhido',
        path: ['city']
      })
    }
  })

export type OnboardingProfileData = z.infer<typeof onboardingProfileSchema>
