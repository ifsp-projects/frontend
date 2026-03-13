import { z } from 'zod'

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Must contain at least one number')
      .regex(/[^a-zA-Z0-9]/, 'Must contain at least one special character'),
    confirmPassword: z.string()
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })

export const onboardingProfileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Invalid phone number'),
  description: z.string().max(500, 'Max 500 characters').optional(),
  street: z.string().min(1, 'Street is required'),
  number: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(2, 'State is required'),
  postal_code: z.string().min(1, 'Postal code is required'),
  ong_type: z.string().optional(),
  design_template: z.string().nonempty('This field is required')
})

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>
export type OnboardingProfileInput = z.infer<typeof onboardingProfileSchema>
