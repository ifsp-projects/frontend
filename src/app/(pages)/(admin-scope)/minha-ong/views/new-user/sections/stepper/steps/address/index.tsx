'use client'

import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import { toast } from 'react-toastify'

import { tryCatch } from '@/utils/helpers/try-catch'

import { useStepperContext } from '../../../stepper-context'
import type { ChildrenProps } from '../../types'

export const Address: FC<ChildrenProps> = ({ nextStep, prevStep }) => {
  const { formMethods } = useStepperContext()

  const { register, control, setValue } = formMethods

  const getMarketAddress = async (cep: string) => {
    const request = await tryCatch(
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
    )

    if (request.error) {
      console.error(request.error)
      toast.error(
        'Houve um erro ao encontrar as informações referentes ao endereço do estabelecimento'
      )
      return
    }

    const requestData = await request.data.json()

    const newAddressData = {
      city: requestData.localidade,
      state: requestData.estado,
      street: `${requestData.bairro}, ${requestData.logradouro}`
    }

    setValue('state', newAddressData.state)
    setValue('city', newAddressData.city)
    setValue('street', newAddressData.street)
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <h2 className="text-2xl font-bold lg:text-3xl">
        Aonde fica / atua a sua ONG?
      </h2>
      <div className="flex w-full flex-col gap-4">
        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            Digite o CEP de onde a sua ONG está localizada
          </label>
          <Controller
            render={({ field }) => (
              <input
                {...field}
                onChange={e => {
                  field.onChange(e)
                  console.log(e)
                  if (e.target.value.length === 8) {
                    getMarketAddress(e.target.value)
                  }
                }}
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                placeholder="Ex:. 15041-050"
                type="text"
                value={field.value || ''}
                required
              />
            )}
            control={control}
            name="postal_code"
          />
        </div>
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="w-full">
            <label className="mb-2 block font-medium text-neutral-700">
              Estado
            </label>
            <Controller
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                  id="state"
                  placeholder="Ex: São Paulo"
                  type="text"
                  value={field.value || ''}
                  required
                />
              )}
              control={control}
              name="state"
            />
          </div>
          <div className="w-full">
            <label className="mb-2 block font-medium text-neutral-700">
              Cidade
            </label>
            <Controller
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                  id="city"
                  placeholder="Ex: Capivari"
                  type="text"
                  value={field.value || ''}
                  required
                />
              )}
              control={control}
              name="city"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="w-full">
            <label className="mb-2 block font-medium text-neutral-700">
              Rua
            </label>
            <Controller
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                  id="street"
                  placeholder="Ex: Rua dos Sashimis"
                  type="text"
                  value={field.value || ''}
                  required
                />
              )}
              control={control}
              name="street"
            />
          </div>
          <div className="w-full">
            <label className="mb-2 block font-medium text-neutral-700">
              Número
            </label>
            <Controller
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                  id="number"
                  placeholder="Ex: 1230"
                  type="number"
                  value={field.value || ''}
                  required
                />
              )}
              control={control}
              name="number"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            Complemento
          </label>
          <input
            className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
            id="complement"
            maxLength={999}
            minLength={1}
            name="complement"
            placeholder="Ex: Perto do pé de Jambo"
            type="text"
            {...register('complement')}
            required
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-4 lg:justify-between">
        <div className="item-center flex w-full justify-start">
          <button
            className="cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:text-base"
            onClick={prevStep}
            type="button"
          >
            Voltar
          </button>
        </div>
        <div className="item-center flex w-full justify-end">
          <button
            className="cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:text-base"
            onClick={nextStep}
            type="button"
          >
            Avançar
          </button>
        </div>
      </div>
    </div>
  )
}
