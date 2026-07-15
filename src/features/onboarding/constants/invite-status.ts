import type { InviteStatus } from '../components/invites/invite-list/types'

export const INVITE_STATUS: Record<
  InviteStatus,
  { label: string; classes: string }
> = {
  pending: {
    label: 'Pending',
    classes: 'bg-amber-50 text-amber-600 border-amber-100'
  },
  used: {
    label: 'Used',
    classes: 'bg-neutral-100 text-neutral-500 border-neutral-200'
  },
  cancelled: {
    label: 'Cancelled',
    classes: 'bg-neutral-100 text-neutral-400 border-neutral-200'
  },
  expired: {
    label: 'Expired',
    classes: 'bg-rose-50 text-rose-400 border-rose-100'
  }
}
