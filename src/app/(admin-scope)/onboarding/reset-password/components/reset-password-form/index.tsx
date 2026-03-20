'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Spin } from '@/components/ui/spin'
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
    formState: { errors, isSubmitting }
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema)
  })

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
          Requisitos
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
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? <Spin /> : 'Continuar'}
      </button>
    </form>
  )
}
