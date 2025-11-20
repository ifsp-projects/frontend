'use client'

import type { FC } from 'react'
import { Controller } from 'react-hook-form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { HUBSPOT_ONG_VALUES } from '@/constants/hubspot/hubspot-ong-types'
import { formatPhone } from '@/utils/helpers/format-phone'

import { useStepperContext } from '../../../stepper-context'
import type { ChildrenProps } from '../../types'

export const BasicInfo: FC<ChildrenProps> = ({ nextStep, prevStep }) => {
  const { formMethods } = useStepperContext()

  const { control, register } = formMethods

  return (
    <div className="flex w-full flex-col gap-8">
      <h2 className="text-2xl font-bold lg:text-3xl">
        Precisamos de mais algumas informações sobre sua ONG
      </h2>
      <div className="flex w-full flex-col gap-4">
        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            Nome da sua ONG<span className="ml-2 text-rose-500">*</span>
          </label>
          <input
            className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
            name="text"
            placeholder="Ex: ONG Feliz"
            type="text"
            required
            {...register('ong_name')}
          />
        </div>
        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            Número de telefone<span className="ml-2 text-rose-500">*</span>
          </label>
          <Controller
            render={({ field }) => (
              <input
                {...field}
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                maxLength={15}
                onChange={e => field.onChange(formatPhone(e.target.value))}
                placeholder="Seu telefone"
                type="text"
                value={field.value || ''}
              />
            )}
            control={control}
            name="phone"
          />
        </div>
        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            Área de atuação da ONG<span className="ml-2 text-rose-500">*</span>
          </label>

          <Controller
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Qual a área de atuação da sua ONG?" />
                </SelectTrigger>
                <SelectContent>
                  {HUBSPOT_ONG_VALUES.map((value: string, index: number) => (
                    <SelectItem key={`option-${index}`} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            control={control}
            name="ong_type"
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-4 lg:justify-between">
        <div className="item-center flex w-full justify-start">
          <button
            className="cursor-not-allowed rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 disabled:opacity-75 lg:text-base"
            onClick={prevStep}
            disabled
          >
            Voltar
          </button>
        </div>
        <div className="item-center flex w-full justify-end">
          <button
            className="cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:text-base"
            onClick={nextStep}
          >
            Avançar
          </button>
        </div>
      </div>
    </div>
  )
}
