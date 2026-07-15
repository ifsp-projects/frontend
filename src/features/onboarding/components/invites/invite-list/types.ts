import type { PostgresInviteToken } from '@/types/postgres/postgres-invite-token'

export type InviteStatus = 'pending' | 'used' | 'cancelled' | 'expired'

export interface InviteListProps {
  invites: PostgresInviteToken[]
}
