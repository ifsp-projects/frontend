import { z } from 'zod'

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Mínimo de 8 caracteres')
      .regex(/[A-Z]/, 'Pelo menos uma letra maiúscula (A-Z)')
      .regex(/[0-9]/, 'Pelo menos um número (0-9)')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Pelo menos um caractere especial (!@#...)'
      ),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas estão diferentes...',
    path: ['confirmPassword']
  })

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
