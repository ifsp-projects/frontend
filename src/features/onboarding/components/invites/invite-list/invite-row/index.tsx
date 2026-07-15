import { INVITE_STATUS } from '@/features/onboarding/constants/invite-status'
import { getInviteStatus } from '@/features/onboarding/utils/get-invite-status'
import type { PostgresInviteToken } from '@/types/postgres/postgres-invite-token'

export const InviteRow = ({ invite }: { invite: PostgresInviteToken }) => {
  const status = getInviteStatus(invite)

  const { label, classes } = INVITE_STATUS[status]

  const orgName = invite.organization?.organization_profile?.name

  return (
    <div className="flex items-center justify-between rounded-sm border border-neutral-100 bg-white px-4 py-3 transition-opacity">
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

        {(status === 'expired' || status === 'cancelled') && (
          <p>Invite Expirado!</p>
        )}
      </div>
    </div>
  )
}
