'use client'

import { useTransition } from 'react'

import type { PostgresInviteToken } from '@/types/postgres/postgres-invite-token'

import { cancelInviteAction, resendInviteAction } from '../../actions'

type InviteStatus = 'pending' | 'used' | 'cancelled' | 'expired'

interface Props {
  invites: PostgresInviteToken[]
}

function getStatus(invite: PostgresInviteToken): InviteStatus {
  if (invite.used_at) return 'used'
  if (invite.cancelled_at) return 'cancelled'
  if (new Date(invite.expires_at) < new Date()) return 'expired'
  return 'pending'
}

const statusConfig: Record<InviteStatus, { label: string; classes: string }> = {
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

export function InviteList({ invites }: Props) {
  if (invites?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-neutral-100 bg-neutral-50 px-6 py-16 text-center">
        <p className="text-sm font-semibold text-neutral-400">No invites yet</p>
        <p className="mt-1 text-xs text-neutral-400">
          Send your first invite using the form on the left.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          Recent invites
        </span>
        <span className="text-xs text-neutral-400">{invites.length} total</span>
      </div>

      {invites?.map(invite => (
        <InviteRow invite={invite} key={invite.id} />
      ))}
    </div>
  )
}

function InviteRow({ invite }: { invite: PostgresInviteToken }) {
  const [isPending, startTransition] = useTransition()
  const status = getStatus(invite)
  const { label, classes } = statusConfig[status]
  const orgName = invite.organization?.organization_profile?.name

  const handleResend = () => {
    startTransition(async () => {
      await resendInviteAction(invite.id)
    })
  }

  const handleCancel = () => {
    if (!confirm('Cancel this invite?')) return
    startTransition(async () => {
      await cancelInviteAction(invite.id)
    })
  }

  return (
    <div
      className={`flex items-center justify-between rounded-sm border border-neutral-100 bg-white px-4 py-3 transition-opacity ${
        isPending ? 'opacity-50' : ''
      }`}
    >
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-sm font-medium text-neutral-800">
          {invite.email}
        </span>
        <div className="flex items-center gap-2">
          {orgName && (
            <span className="truncate text-xs text-neutral-400">{orgName}</span>
          )}
          {orgName && <span className="text-neutral-200">·</span>}
          <span className="text-xs text-neutral-400">
            {new Date(invite.created_at).toLocaleDateString('pt-BR')}
          </span>
        </div>
      </div>

      <div className="ml-4 flex shrink-0 items-center gap-2">
        <span
          className={`rounded-sm border px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase ${classes}`}
        >
          {label}
        </span>

        {status === 'pending' && (
          <>
            <button
              className="text-xs font-semibold text-neutral-500 transition-colors hover:text-neutral-800 disabled:opacity-40"
              disabled={isPending}
              onClick={handleResend}
            >
              Resend
            </button>
            <button
              className="text-xs font-semibold text-rose-400 transition-colors hover:text-rose-600 disabled:opacity-40"
              disabled={isPending}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </>
        )}

        {(status === 'expired' || status === 'cancelled') && (
          <button
            className="text-xs font-semibold text-neutral-500 transition-colors hover:text-neutral-800 disabled:opacity-40"
            disabled={isPending}
            onClick={handleResend}
          >
            Resend
          </button>
        )}
      </div>
    </div>
  )
}
