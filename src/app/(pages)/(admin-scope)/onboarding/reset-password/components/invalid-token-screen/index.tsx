export const InvalidTokenScreen = ({ reason }: { reason: string }) => {
  const messages: Record<string, { title: string; body: string }> = {
    not_found: {
      title: 'Link not found',
      body: 'This invite link does not exist. Please contact us to get a new one.'
    },
    used: {
      title: 'Already activated',
      body: 'This link has already been used. Try signing in to your account.'
    },
    cancelled: {
      title: 'Invite cancelled',
      body: 'This invite was cancelled by your organization. Please request a new one.'
    },
    expired: {
      title: 'Link expired',
      body: 'This invite link has expired after 72 hours. Please request a new one.'
    }
  }

  const msg = messages[reason] ?? messages['not_found']

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-rose-50">
          <svg
            className="h-4 w-4 text-rose-400"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <h1 className="mb-2 text-lg font-black tracking-tight text-neutral-800">
          {msg.title}
        </h1>
        <p className="text-sm leading-relaxed text-neutral-500">{msg.body}</p>
      </div>
    </main>
  )
}
