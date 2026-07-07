import { z } from 'zod'

export const addressSchema = z.object({
  postal_code: z.string().min(8, 'CEP inválido').optional(),
  state: z.string().min(1, 'O campo estado obrigatório'),
  city: z.string().min(1, 'O campo cidade obrigatória'),
  street: z.string().min(1, 'O campo rua obrigatória'),
  number: z.union([z.string(), z.number()]).transform(val => Number(val)),
  complement: z.string().optional().optional(),
  phone: z.string().optional()
})

export type AddressFormInput = z.input<typeof addressSchema>
export type AddressFormOutput = z.output<typeof addressSchema>
