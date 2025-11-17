import z from 'zod'

export const complementInfoFormSchema = z.object({
  ong_name: z.string().nonempty('Esse campo é obrigatório'),
  ong_type: z.string().nonempty('Esse campo é obrigatório'),
  phone: z.string().nonempty('Esse campo é obrigatório'),
  street: z.string().nullable(),
  number: z
    .number()
    .positive('Esse campo é obrigatório')
    .min(0, 'O endereço deve ser maior que 0')
    .max(99999, 'Esse número parece ser alto demais')
    .nullable(),
  city: z.string().nullable(),
  state: z.string().nonempty('Esse campo é obrigatório'),
  postal_code: z.string().nullable(),
  complement: z.string().nullable()
})

export type ComplementFormSchemaType = z.infer<typeof complementInfoFormSchema>
