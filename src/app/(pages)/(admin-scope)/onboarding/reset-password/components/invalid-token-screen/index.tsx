import { MESSAGES } from './data'

export const InvalidTokenScreen = ({ reason }: { reason: string }) => {
  const msg = MESSAGES[reason] ?? MESSAGES['not_found']

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <header className="w-full max-w-sm text-center">
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
      </header>
    </main>
  )
}
