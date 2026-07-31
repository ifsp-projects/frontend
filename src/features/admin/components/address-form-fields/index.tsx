'use client'

import { Controller } from 'react-hook-form'
import type { FieldValues, Path, PathValue } from 'react-hook-form'

import { formatPhone } from '@/shared/utils/helpers/format-phone'

import type { AddressFormFieldsProps } from './types'

export const AddressFormFields = <T extends FieldValues>({
  control,
  register,
  showPhone = false,
  defaultPhone = ''
}: AddressFormFieldsProps<T>) => {
  return (
    <div className="flex flex-col gap-4">
      {showPhone && (
        <div className="w-full">
          <p className="mb-1 w-full text-left text-sm font-medium text-neutral-700">
            Telefone
          </p>
          <Controller
            render={({ field }) => (
              <input
                {...field}
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
                maxLength={15}
                onChange={e => field.onChange(formatPhone(e.target.value))}
                placeholder="Seu telefone"
                type="text"
                value={field.value ?? ''}
              />
            )}
            control={control}
            defaultValue={defaultPhone as PathValue<T, Path<T>>}
            name={'phone' as Path<T>}
          />
        </div>
      )}

      <div className="flex w-full flex-col gap-4 md:flex-row lg:justify-between">
        <div className="w-full">
          <p className="mb-1 text-left text-sm font-medium text-neutral-700">
            Estado
          </p>
          <Controller
            render={({ field }) => (
              <input
                {...field}
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
                placeholder="Ex.: SP"
                type="text"
                value={field.value || ''}
                required
              />
            )}
            control={control}
            name={'state' as Path<T>}
          />
        </div>
        <div className="w-full">
          <p className="mb-1 text-left text-sm font-medium text-neutral-700">
            Cidade
          </p>
          <Controller
            render={({ field }) => (
              <input
                {...field}
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
                placeholder="Ex.: Capivari"
                type="text"
                value={field.value || ''}
                required
              />
            )}
            control={control}
            name={'city' as Path<T>}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row lg:justify-between">
        <div className="w-full">
          <p className="mb-1 text-left text-sm font-medium text-neutral-700">
            Rua
          </p>
          <Controller
            render={({ field }) => (
              <input
                {...field}
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
                placeholder="Ex.: Rua das Flores"
                type="text"
                value={field.value || ''}
                required
              />
            )}
            control={control}
            name={'street' as Path<T>}
          />
        </div>
        <div className="w-full">
          <p className="mb-1 text-left text-sm font-medium text-neutral-700">
            Número
          </p>
          <Controller
            render={({ field }) => (
              <input
                {...field}
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
                placeholder="Ex.: 123"
                type="number"
                value={field?.value || ''}
              />
            )}
            control={control}
            name={'number' as Path<T>}
          />
        </div>
      </div>

      <div className="w-full">
        <p className="mb-1 text-left text-sm font-medium text-neutral-700">
          Complemento
        </p>
        <input
          className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
          maxLength={999}
          placeholder="Ex.: Perto do pé de Jambo"
          type="text"
          {...register('complement' as Parameters<typeof register>[0])}
        />
      </div>
    </div>
  )
}
