import { NoInviteIcon } from '@/assets/icons/no-invite'

import { MESSAGES } from './data'

export const InvalidTokenScreen = ({ reason }: { reason: string }) => {
  const msg = MESSAGES[reason] ?? MESSAGES['not_found']

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <header className="w-full max-w-sm text-center">
        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-rose-100 bg-rose-50">
          <NoInviteIcon />
        </div>
        <h1 className="text-xl font-bold text-neutral-600">{msg.title}</h1>
        <p className="text-sm text-neutral-500">{msg.body}</p>
      </header>
    </main>
  )
}
