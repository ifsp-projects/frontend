import { z } from 'zod'

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'At least 8 characters')
      .regex(/[A-Z]/, 'One uppercase letter (A-Z)')
      .regex(/[0-9]/, 'One number (0-9)')
      .regex(/[!@#$%^&*(),.?":{}|<>]/, 'One special character (!@#...)'),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
