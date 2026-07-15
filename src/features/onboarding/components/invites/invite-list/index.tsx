'use client'

import { InviteRow } from './invite-row'
import type { InviteListProps } from './types'

export const InviteList = ({ invites }: InviteListProps) => {
  if (invites?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-neutral-100 bg-neutral-50 px-6 py-16 text-center">
        <p className="text-sm font-semibold text-neutral-400">
          Ainda não há convites
        </p>
        <p className="mt-1 text-xs text-neutral-400">
          Envie seu primeiro convite usando o formulário.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          Últimos invites
        </span>
        <span className="text-xs text-neutral-400">{invites.length} total</span>
      </div>

      {invites?.map(invite => (
        <InviteRow invite={invite} key={invite.id} />
      ))}
    </div>
  )
}
