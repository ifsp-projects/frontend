'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Spin } from '@/components/ui/spin'
import { HUBSPOT_ONG_VALUES } from '@/constants/hubspot/hubspot-ong-types'
import { zodResolver } from '@hookform/resolvers/zod'

import { completeOnboardingAction } from '../../actions'
import { DESIGN_TEMPLATES } from './data'
import { Field } from './field'
import type { OnboardingProfileData } from './schema'
import { onboardingProfileSchema } from './schema'
import type { OnboardingProfileFormProps } from './types'

const inputClass = (hasError?: boolean) =>
  `w-full rounded-sm border bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-300 outline-none transition-colors focus:border-rose-300 focus:ring-2 focus:ring-rose-100 ${
    hasError ? 'border-rose-300 ring-2 ring-rose-100' : 'border-neutral-200'
  }`

export const OnboardingProfileForm = ({
  token
}: OnboardingProfileFormProps) => {
  const [rootError, setRootError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<OnboardingProfileData>({
    resolver: zodResolver(onboardingProfileSchema)
  })

  const onSubmit = async (data: OnboardingProfileData) => {
    setRootError(null)

    const result = await completeOnboardingAction(token, data)

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

    const email = sessionStorage.getItem('onboarding_email')
    const password = sessionStorage.getItem('onboarding_password')

    sessionStorage.removeItem('onboarding_email')
    sessionStorage.removeItem('onboarding_password')

    if (email && password) {
      signIn('credentials', { email, password, callbackUrl: '/minha-ong' })
    } else {
      window.location.href = '/minha-ong'
    }
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      {rootError && (
        <div className="rounded-sm border border-rose-100 bg-rose-50 px-4 py-3">
          <p className="text-xs text-rose-600">{rootError}</p>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
            Organization
          </span>
          <div className="h-px flex-1 bg-neutral-100" />
        </div>

        <Field error={errors.name?.[0]} label="Organization name" required>
          <input
            {...register('name')}
            className={inputClass(!!errors.name)}
            id="name"
            name="name"
            placeholder="Instituto Esperança"
            type="text"
          />
        </Field>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field error={errors.phone?.[0]} label="Phone" required>
            <input
              {...register('phone')}
              className={inputClass(!!errors.phone)}
              id="phone"
              name="phone"
              placeholder="+55 11 99999-9999"
              type="tel"
            />
          </Field>

          <Field error={errors.ong_type?.[0]} label="Category">
            <select
              {...register('ong_type')}
              className={`${inputClass(!!errors.ong_type)} bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23a3a3a3' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")] cursor-pointer appearance-none bg-position-[right_14px_center] bg-no-repeat pr-9`}
              id="ong_type"
              name="ong_type"
            >
              <option value="">Select a category</option>
              {HUBSPOT_ONG_VALUES.map((value, index: number) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field error={errors.design_template?.[0]} label="Category">
          <select
            {...register('design_template')}
            className={`${inputClass(!!errors.design_template)} bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23a3a3a3' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")] cursor-pointer appearance-none bg-position-[right_14px_center] bg-no-repeat pr-9`}
            id="design_template"
            name="design_template"
          >
            <option value="">Design Template</option>
            {DESIGN_TEMPLATES.map(c => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          error={errors.description?.[0]}
          hint="Max 500 characters. This appears on your public page."
          label="Description"
          optional
        >
          <textarea
            {...register('description')}
            className={`${inputClass(!!errors.description)} resize-none`}
            id="description"
            name="description"
            placeholder="Briefly describe your organization's mission..."
            rows={3}
          />
        </Field>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
            Address
          </span>
          <div className="h-px flex-1 bg-neutral-100" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <Field error={errors.street?.[0]} label="Street" required>
              <input
                {...register('street')}
                className={inputClass(!!errors.street)}
                id="street"
                name="street"
                placeholder="Rua das Flores"
                type="text"
              />
            </Field>
          </div>
          <Field error={errors.number?.[0]} label="Number">
            <input
              {...register('number')}
              className={inputClass(!!errors.number)}
              id="number"
              name="number"
              placeholder="123"
              type="text"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <Field error={errors.city?.[0]} label="City" required>
              <input
                {...register('city')}
                className={inputClass(!!errors.city)}
                id="city"
                name="city"
                placeholder="São Paulo"
                type="text"
              />
            </Field>
          </div>
          <Field error={errors.state?.[0]} label="State" required>
            <input
              {...register('state')}
              className={`${inputClass(!!errors.state)} uppercase`}
              id="state"
              maxLength={2}
              name="state"
              placeholder="SP"
              type="text"
            />
          </Field>
          <Field error={errors.postal_code?.[0]} label="Postal code" required>
            <input
              {...register('postal_code')}
              className={inputClass(!!errors.postal_code)}
              id="postal_code"
              name="postal_code"
              placeholder="00000-000"
              type="text"
            />
          </Field>
        </div>
      </div>

      <button
        className="flex h-10 w-full cursor-pointer items-center justify-center rounded-sm bg-neutral-800 text-sm font-semibold text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? <Spin /> : 'Complete setup'}
      </button>
    </form>
  )
}
