import type { InviteTokenProps } from '@/domain/entities/invite-token'

export type InviteStatus = 'pending' | 'used' | 'cancelled' | 'expired'

export interface InviteListProps {
  invites: InviteTokenProps[]
}
