'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { toast } from 'sonner'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { HUBSPOT_ONG_VALUES } from '@/constants/hubspot/hubspot-ong-types'
import { useUserSession } from '@/hooks/use-user-session'
import { formatPhone } from '@/utils/helpers/format-phone'
import { formatPostalCode } from '@/utils/helpers/format-postal-code'
import { tryCatch } from '@/utils/helpers/try-catch'
import { zodResolver } from '@hookform/resolvers/zod'

import { complementInfoFormSchema } from '../../../new-user/sections/form/schema'
import type { ProfileFormSchemaType } from './types'

export const MainInfo = () => {
  const { organization } = useUserSession()

  if (!organization) {
    return null
  }

  const formMethods = useForm<ProfileFormSchemaType>({
    //@ts-ignore
    resolver: zodResolver(complementInfoFormSchema),
    defaultValues: {
      phone: organization?.organization_profile?.phone || '',
      postal_code:
        organization?.organization_profile?.addresses?.postal_code || '',
      state: organization?.organization_profile?.addresses?.state || '',
      city: organization?.organization_profile?.addresses?.city || '',
      street: organization?.organization_profile?.addresses?.street || '',
      number:
        Number(organization?.organization_profile?.addresses?.number) || 0,
      complement:
        organization?.organization_profile?.addresses?.complement || '',
      ong_type: organization?.organization_profile?.ong_type || ''
    }
  })

  const { register, control, setValue } = formMethods

  const getMarketAddress = async (cep: string) => {
    const request = await tryCatch(
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
    )

    if (request.error) {
      console.error(request.error)
      toast.error(
        'Houve um erro ao encontrar as informações referentes ao endereço',
        {
          position: 'top-center'
        }
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

  useEffect(() => {
    console.log(organization.organization_profile)
  }, [])

  return (
    <section className="flex flex-col gap-8 px-4 py-12 lg:py-16 xl:px-0">
      <div className="max-w-2-xl mx-auto flex w-full flex-col gap-4 rounded-sm border border-neutral-200 bg-neutral-100 p-4 lg:max-w-4xl lg:flex-row lg:justify-between">
        <article className="flex w-full flex-1 flex-col gap-1">
          <h2 className="text-xl font-bold lg:text-2xl">
            A sua LP está pronta!
          </h2>
          <p className="text-sm text-neutral-600">
            Clique parar ver como ela ficou, você pode alterar o que{' '}
            <br className="hidden lg:block" /> desejar. Desde texto, imagens e
            ícones.
          </p>
        </article>
        <div className="flex w-auto items-end justify-end">
          <Link
            className="cursor-pointer rounded-sm bg-neutral-700 px-4 py-1.5 text-sm font-semibold text-white transition-all duration-150"
            href={`/ongs/${organization?.organization_profile?.slug}`}
          >
            Acessar minha página
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-sm border border-neutral-200 bg-white p-4 lg:max-w-4xl lg:gap-6 lg:p-6">
        <article>
          <h1 className="text-2xl font-bold">Meus dados</h1>
          <p className="text-sm text-neutral-500 lg:text-base">
            Utilize informações reais, elas serão as informações de contato da
            sua ONG
          </p>
        </article>
        <div className="flex w-full items-start gap-4 lg:justify-between">
          <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
            <Image
              alt={organization?.organization_profile?.name}
              className="h-26 w-26 rounded-md border border-neutral-200 object-cover"
              height={120}
              src={organization?.organization_profile?.logo}
              width={120}
            />
            <div className="flex w-full flex-1 flex-col gap-4">
              <div className="w-full">
                <input
                  className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                  defaultValue={organization?.organization_profile?.name}
                  name="ong_name"
                  placeholder="Nome da sua ONG"
                  type="text"
                  required
                  {...register('ong_name')}
                />
              </div>
              <div className="w-full">
                <Controller
                  defaultValue={
                    organization?.organization_profile?.ong_type || ''
                  }
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Qual a área de atuação da sua ONG?" />
                      </SelectTrigger>
                      <SelectContent>
                        {HUBSPOT_ONG_VALUES.map(
                          (value: string, index: number) => (
                            <SelectItem key={`option-${index}`} value={value}>
                              {value}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                  )}
                  control={control}
                  name="ong_type"
                />
              </div>
            </div>
          </div>
        </div>
        <article>
          <p className="text-2xl font-bold">Mais informações</p>
          <p className="text-sm text-neutral-500 lg:text-base">
            Aqui estão localizadas algumas informações de contato da sua ONG
            como email, telefone e endereço
          </p>
        </article>
        <div className="flex w-full flex-1 flex-col gap-4">
          <div className="w-full">
            <input
              className="w-full cursor-not-allowed rounded-sm border border-neutral-300 bg-neutral-100 px-4 py-2 opacity-80 transition-all duration-300 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
              defaultValue={organization?.email}
              name="email"
              placeholder="Email"
              type="email"
              disabled
              required
            />
          </div>
          <div className="w-full">
            <Controller
              render={({ field }) => (
                <input
                  {...field}
                  className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                  maxLength={15}
                  onChange={e => field.onChange(formatPhone(e.target.value))}
                  placeholder="Seu telefone"
                  type="text"
                />
              )}
              control={control}
              defaultValue={organization?.organization_profile?.phone || ''}
              name="phone"
            />
          </div>
          <div className="w-full">
            <Controller
              defaultValue={
                organization?.organization_profile?.addresses?.postal_code || ''
              }
              render={({ field }) => (
                <input
                  {...field}
                  onChange={e => {
                    const formatted = formatPostalCode(e.target.value)
                    field.onChange(formatted)

                    const cleanValue = formatted.replace(/\D/g, '')
                    if (cleanValue.length === 8) {
                      getMarketAddress(cleanValue)
                    }
                  }}
                  className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                  maxLength={9}
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
        <button className="cursor-pointer rounded-sm border bg-neutral-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:px-6 lg:text-base">
          Salvar informações
        </button>
      </div>
      {/* <Link
        className="group mt-3 flex cursor-pointer items-center gap-2"
        href={`/ongs/${organization?.organization_profile?.slug}`}
      >
        <p className="text-rose-400 transition-all duration-300 group-hover:brightness-105">
          Ver página da ONG
        </p>
        <ExportArrowUpRight className="h-4 w-4 text-rose-400 transition-all duration-300 group-hover:brightness-105" />
      </Link> */}
    </section>
  )
}
