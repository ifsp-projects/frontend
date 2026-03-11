import { z } from 'zod'

export const addressSchema = z.object({
  postal_code: z.string().min(8, 'CEP inválido'),
  state: z.string().min(1, 'Estado obrigatório'),
  city: z.string().min(1, 'Cidade obrigatória'),
  street: z.string().min(1, 'Rua obrigatória'),
  number: z
    .union([z.string(), z.number()])
    .transform(val => Number(val))
    .pipe(z.number().min(1, 'Número obrigatório')),

  complement: z.string().optional(),
  phone: z.string().optional()
})

export type AddressFormInput = z.input<typeof addressSchema>
export type AddressFormOutput = z.output<typeof addressSchema>
