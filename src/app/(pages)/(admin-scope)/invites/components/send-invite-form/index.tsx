'use client'

import { useActionState } from 'react'

import { Spin } from '@/components/ui/spin'

import { sendInviteAction } from '../../actions'

const initialState = { success: false as const, errors: {} }

const inputClass = (hasError?: boolean) =>
  `w-full rounded-sm border bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-300 outline-none transition-colors focus:border-rose-300 focus:ring-2 focus:ring-rose-100 ${
    hasError ? 'border-rose-300 ring-2 ring-rose-100' : 'border-neutral-200'
  }`

export function SendInviteForm() {
  const [state, formAction, isPending] = useActionState(
    sendInviteAction,
    initialState
  )

  if (state.success) {
    return (
      <div className="flex flex-col items-center gap-3 py-4 text-center">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-rose-100 bg-rose-50">
          <svg
            className="h-4 w-4 text-rose-400"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              d="M3 8l4 4 6-7"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-800">Invite sent!</p>
          <p className="mt-0.5 text-xs text-neutral-500">
            The user will receive an email shortly.
          </p>
        </div>
        <button
          className="mt-1 cursor-pointer text-xs font-semibold text-rose-400 transition-colors hover:text-rose-500"
          onClick={() => window.location.reload()}
        >
          Send another →
        </button>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label
          className="text-xs font-semibold tracking-wide text-neutral-600 uppercase"
          htmlFor="email"
        >
          Email address <span className="text-rose-400">*</span>
        </label>
        <input
          autoComplete="off"
          className={inputClass()}
          id="email"
          name="email"
          placeholder="org@example.com"
          type="email"
        />
      </div>

      <button
        className="mt-1 flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-neutral-800 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isPending}
        type="submit"
      >
        {isPending ? (
          <>
            <Spin />
            Sending…
          </>
        ) : (
          'Send invite'
        )}
      </button>
    </form>
  )
}
