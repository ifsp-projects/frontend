import { z } from 'zod'

export const profileFormSchema = z.object({
  ong_type: z.string().optional(),
  phone: z.string().optional(),
  street: z.string().optional(),
  number: z.coerce
    .number()
    .min(0, 'O endereço deve ser maior que 0')
    .max(99999, 'Esse número parece ser alto demais')
    .default(0)
    .optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postal_code: z.string().optional(),
  complement: z.string().optional(),
  design_template: z.string().optional(),
  description: z.string().max(500, 'Descrição muito longa!').optional(),
  logo: z.string().optional(),
  instagram_url: z.string().optional(),
  facebook_url: z.string().optional(),
  twitter_url: z.string().optional()
})

export type ProfileFormSchemaType = z.infer<typeof profileFormSchema>
