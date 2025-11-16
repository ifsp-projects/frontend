import { z } from 'zod'

export const contactFormSchema = z.object({
  fullname: z.string().nonempty('Esse campo é obrigatório'),
  email: z.string().nonempty('Esse campo é obrigatório'),
  ong_name: z.string().nonempty('Esse campo é obrigatório'),
  ong_type: z.string().nonempty('Esse campo é obrigatório'),
  phone: z.string().nonempty('Esse campo é obrigatório')
})

export type ContacFormInputs = z.infer<typeof contactFormSchema>
