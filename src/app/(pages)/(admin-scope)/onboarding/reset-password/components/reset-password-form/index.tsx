'use client'

import { useRouter } from 'next/navigation'
import { useActionState, useEffect } from 'react'

import { resetPasswordAction } from '../../../actions'

interface Props {
  email: string
  token: string
}

const initialState = { success: false as const, errors: {} }

const PASSWORD_RULES = [
  'At least 8 characters',
  'One uppercase letter (A-Z)',
  'One number (0-9)',
  'One special character (!@#...)'
]

export function ResetPasswordForm({ token, email }: Props) {
  const router = useRouter()
  const action = resetPasswordAction.bind(null, token)
  const [state, formAction, isPending] = useActionState(action, initialState)

  const errors =
    !state.success && state.errors && !('_root' in state.errors)
      ? (state.errors as Record<string, string[]>)
      : {}

  const rootError =
    !state.success && state.errors && '_root' in state.errors
      ? (state.errors as { _root: string })._root
      : null

  useEffect(() => {
    if (!state.success) return

    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement
    const password = passwordInput?.value

    if (email && password) {
      sessionStorage.setItem('onboarding_email', email)
      sessionStorage.setItem('onboarding_password', password)
    }

    router.push(`/onboarding?token=${token}`)
  }, [state.success])

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {rootError && (
        <div className="rounded-sm border border-rose-100 bg-rose-50 px-4 py-3">
          <p className="text-xs text-rose-600">{rootError}</p>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label
          className="text-xs font-semibold tracking-wide text-neutral-600 uppercase"
          htmlFor="password"
        >
          New password
        </label>
        <input
          className={`w-full rounded-sm border bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-300 transition-colors outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 ${
            errors.password
              ? 'border-rose-300 ring-2 ring-rose-100'
              : 'border-neutral-200'
          }`}
          autoComplete="new-password"
          id="password"
          name="password"
          placeholder="••••••••"
          type="password"
        />
        {errors.password && (
          <p className="text-xs text-rose-500">{errors.password[0]}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="text-xs font-semibold tracking-wide text-neutral-600 uppercase"
          htmlFor="confirmPassword"
        >
          Confirm password
        </label>
        <input
          className={`w-full rounded-sm border bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-300 transition-colors outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 ${
            errors.confirmPassword
              ? 'border-rose-300 ring-2 ring-rose-100'
              : 'border-neutral-200'
          }`}
          autoComplete="new-password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="••••••••"
          type="password"
        />
        {errors.confirmPassword && (
          <p className="text-xs text-rose-500">{errors.confirmPassword[0]}</p>
        )}
      </div>

      <div className="rounded-sm border border-neutral-100 bg-neutral-50 px-4 py-3">
        <p className="mb-2 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
          Requirements
        </p>
        <ul className="flex flex-col gap-1.5">
          {PASSWORD_RULES.map(rule => (
            <li
              className="flex items-center gap-2 text-xs text-neutral-500"
              key={rule}
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
              {rule}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="mt-1 flex h-10 w-full cursor-pointer items-center justify-center rounded-sm bg-neutral-800 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isPending}
        type="submit"
      >
        {isPending ? (
          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8v8H4z"
              fill="currentColor"
            />
          </svg>
        ) : (
          'Continue →'
        )}
      </button>
    </form>
  )
}
