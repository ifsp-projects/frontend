import type { PostgresInviteToken } from '@/types/postgres/postgres-invite-token'

import type { InviteStatus } from '../../components/invites/invite-list/types'

export const getInviteStatus = (invite: PostgresInviteToken): InviteStatus => {
  if (invite.used_at) return 'used'
  if (invite.cancelled_at) return 'cancelled'
  if (new Date(invite.expires_at) < new Date()) return 'expired'
  return 'pending'
}
