import { z } from 'zod'

export const sendInviteSchema = z.object({
  email: z.string().email('Invalid email address')
})
