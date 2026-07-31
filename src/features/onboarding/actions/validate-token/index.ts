'use server'

import { admin } from '@/services/admin'

export const validateTokenAction = async (
  token: string
): Promise<
  | { valid: true; email: string; organizationId: string; reason?: string }
  | { valid: false; reason: 'not_found' | 'used' | 'cancelled' | 'expired' }
> => {
  const { data: invite } = await admin.validateInviteToken({
    inviteToken: token
  })

  if (!invite) return { valid: false, reason: 'not_found' }

  return {
    valid: true,
    email: invite.email,
    organizationId: invite.organizationId
  }
}
