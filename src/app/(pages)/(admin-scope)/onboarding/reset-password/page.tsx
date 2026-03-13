import { notFound } from 'next/navigation'

import { validateTokenAction } from '../actions'
import { ResetPasswordForm } from './components/reset-password-form'

interface PageProps {
  searchParams: Promise<{ token?: string }>
}

export default async function ResetPasswordPage({ searchParams }: PageProps) {
  const { token } = await searchParams

  if (!token) notFound()

  const validation = await validateTokenAction(token)

  if (!validation.valid) {
    return <InvalidTokenScreen reason={validation?.reason || ''} />
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-10 h-6 w-6 rounded-sm bg-rose-400" />

        <div className="mb-8 flex items-center gap-2.5">
          <StepBadge state="active" step={1} />
          <div className="h-px flex-1 bg-neutral-200" />
          <StepBadge state="upcoming" step={2} />
        </div>

        <div className="mb-8">
          <h1 className="mb-1.5 text-2xl font-black tracking-tight text-neutral-800">
            Set your password
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500">
            Welcome,{' '}
            <span className="font-medium text-neutral-700">
              {validation.email}
            </span>
            . Create a secure password to get started.
          </p>
        </div>

        <ResetPasswordForm email={validation.email} token={token} />
      </div>
    </main>
  )
}

function StepBadge({
  step,
  state
}: {
  step: number
  state: 'active' | 'done' | 'upcoming'
}) {
  if (state === 'done') {
    return (
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rose-200 bg-rose-50">
        <svg className="h-3 w-3 text-rose-400" fill="none" viewBox="0 0 12 12">
          <path
            d="M2 6l3 3 5-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    )
  }

  return (
    <div
      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
        state === 'active'
          ? 'bg-rose-400 text-white'
          : 'bg-neutral-100 text-neutral-400'
      }`}
    >
      {step}
    </div>
  )
}

function InvalidTokenScreen({ reason }: { reason: string }) {
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
