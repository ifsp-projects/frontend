import { z } from 'zod'

export const profileFormSchema = z.object({
  ong_type: z.string().nonempty('Esse campo é obrigatório'),
  phone: z.string().nonempty('Esse campo é obrigatório'),
  street: z.string().optional(),
  number: z.coerce
    .number()
    .min(0, 'O endereço deve ser maior que 0')
    .max(99999, 'Esse número parece ser alto demais')
    .default(0)
    .optional(),
  city: z.string().optional(),
  state: z.string().nonempty('Esse campo é obrigatório'),
  postal_code: z.string().optional(),
  complement: z.string().optional(),
  design_template: z.string().optional(),
  description: z.string().max(280, 'Descrição muito longa!').optional()
})

export type ProfileFormSchemaType = z.infer<typeof profileFormSchema>
