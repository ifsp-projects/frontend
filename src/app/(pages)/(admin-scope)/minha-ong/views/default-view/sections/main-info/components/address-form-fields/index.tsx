'use client'

import { Controller } from 'react-hook-form'
import type { FieldValues, Path, PathValue } from 'react-hook-form'

import { useCepLookup } from '@/hooks/use-cep-lookup'
import { formatPhone } from '@/utils/helpers/format-phone'
import { formatPostalCode } from '@/utils/helpers/format-postal-code'

import type { AddressFormFieldsProps } from './types'

export const AddressFormFields = <T extends FieldValues>({
  control,
  register,
  setValue,
  showPhone = false,
  defaultPhone = ''
}: AddressFormFieldsProps<T>) => {
  const { lookupCep } = useCepLookup()

  const handleCepChange = async (
    formatted: string,
    fieldOnChange: (v: string) => void
  ) => {
    fieldOnChange(formatted)
    const clean = formatted.replace(/\D/g, '')
    if (clean.length === 8) {
      const result = await lookupCep(clean)
      if (result) {
        setValue('state' as keyof T, result.state)
        setValue('city' as keyof T, result.city)
        setValue('street' as keyof T, result.street)
      }
    }
  }

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
              />
            )}
            control={control}
            defaultValue={defaultPhone as PathValue<T, Path<T>>}
            name={'phone' as Path<T>}
          />
        </div>
      )}

      <div className="w-full">
        <p className="mb-1 text-left text-sm font-medium text-neutral-700">
          CEP
        </p>
        <Controller
          render={({ field }) => (
            <input
              {...field}
              onChange={e =>
                handleCepChange(
                  formatPostalCode(e.target.value),
                  field.onChange
                )
              }
              className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
              maxLength={9}
              placeholder="Ex: 15041-050"
              type="text"
              value={field.value || ''}
              required
            />
          )}
          control={control}
          name={'postal_code' as Path<T>}
        />
      </div>

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
                placeholder="Ex: São Paulo"
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
                placeholder="Ex: Capivari"
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
                placeholder="Ex: Rua dos Sashimis"
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
                placeholder="Ex: 1230"
                type="number"
                value={field.value || ''}
                required
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
          placeholder="Ex: Perto do pé de Jambo"
          type="text"
          {...register('complement' as Parameters<typeof register>[0])}
        />
      </div>
    </div>
  )
}
