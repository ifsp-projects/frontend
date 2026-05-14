'use client'

import { CheckCircle2, XCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Spin } from '@/components/ui/spin'
import { posthogEventDispatch } from '@/instances/posthog/dispatch'
import { zodResolver } from '@hookform/resolvers/zod'

import { resetPasswordAction } from '../../../actions'
import { PASSWORD_RULES } from './data'
import type { ResetPasswordFormData } from './schema'
import { resetPasswordSchema } from './schema'
import type { ResetPasswordFormProps } from './types'

export function ResetPasswordForm({ token, email }: ResetPasswordFormProps) {
  const router = useRouter()
  const [rootError, setRootError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onChange'
  })

  const passwordValue = watch('password', '')
  const hasInteracted = passwordValue.length > 0

  const onSubmit = async (data: ResetPasswordFormData) => {
    setRootError(null)

    const result = await resetPasswordAction(token, {
      email,
      password: data.password,
      confirmPassword: data.confirmPassword
    })

    if (!result.success) {
      const failResult = result as {
        success: false
        errors: Record<string, unknown>
      }
      if ('_root' in (failResult.errors ?? {})) {
        setRootError((failResult.errors as { _root: string })._root)
      }
      return
    }

    posthogEventDispatch.account.startSignup({ referralSource: 'invite' })
    sessionStorage.setItem('onboarding_email', email)
    sessionStorage.setItem('onboarding_password', data.password)
    router.push(`/onboarding?token=${token}`)
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
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
          Nova senha
        </label>
        <input
          className={`w-full rounded-sm border bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-300 transition-colors outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 ${
            errors.password
              ? 'border-rose-300 ring-2 ring-rose-100'
              : 'border-neutral-200'
          }`}
          {...register('password')}
          autoComplete="new-password"
          disabled={isSubmitting}
          id="password"
          placeholder="••••••••"
          type="password"
        />

        {hasInteracted && (
          <ul className="mt-1 flex flex-col gap-1">
            {PASSWORD_RULES.map(({ label, test }) => {
              const passed = test(passwordValue)
              return (
                <li
                  className={`flex items-center gap-2 text-xs transition-colors ${
                    passed ? 'text-emerald-600' : 'text-rose-500'
                  }`}
                  key={label}
                >
                  {passed ? (
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  ) : (
                    <XCircle className="h-3.5 w-3.5 shrink-0" />
                  )}
                  {label}
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          className="text-xs font-semibold tracking-wide text-neutral-600 uppercase"
          htmlFor="confirmPassword"
        >
          Confirmar senha
        </label>
        <input
          className={`w-full rounded-sm border bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-300 transition-colors outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 ${
            errors.confirmPassword
              ? 'border-rose-300 ring-2 ring-rose-100'
              : 'border-neutral-200'
          }`}
          {...register('confirmPassword')}
          autoComplete="new-password"
          disabled={isSubmitting}
          id="confirmPassword"
          placeholder="••••••••"
          type="password"
        />
        {errors.confirmPassword && (
          <p className="text-xs text-rose-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        className="mt-1 flex h-10 w-full cursor-pointer items-center justify-center rounded-sm bg-neutral-800 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? <Spin /> : 'Continuar'}
      </button>
    </form>
  )
}
