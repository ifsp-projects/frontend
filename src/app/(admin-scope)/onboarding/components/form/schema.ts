import { z } from 'zod'

export const onboardingProfileSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  phone: z.string().min(10, 'Número de telefone inválido'),
  description: z.string().max(500, 'Máximo de 500 caracteres').optional(),
  street: z.string().min(1, 'Rua é obrigatória'),
  number: z.string().optional(),
  city: z.string().min(1, 'Cidade é obrigatória'),
  state: z.string().min(2, 'Estado é obrigatório'),
  postal_code: z.string().min(1, 'CEP é obrigatório'),
  ong_type: z.string().optional(),
  design_template: z.string().nonempty('Este campo é obrigatório')
})

export type OnboardingProfileData = z.infer<typeof onboardingProfileSchema>
