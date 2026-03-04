'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { toast } from 'sonner'

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
        organization?.organization_profile?.addresses?.complement || ''
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

  return (
    <section className="bg-neutral-50 px-4 pt-4 pb-12 lg:pt-6 lg:pb-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 lg:max-w-6xl lg:gap-8 xl:max-w-7xl">
        <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white">
          <div className="relative z-0 h-24 w-full overflow-hidden lg:h-28">
            <Image
              alt="Pattern do banner"
              className="object-cover"
              fill
              src="/images/profile-banner-pattern.svg"
            />
          </div>

          <div className="relative z-10 px-4 pb-6 lg:px-6 lg:pb-8">
            <div className="-mt-10 flex flex-col gap-4 lg:-mt-12 lg:gap-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex items-end gap-4">
                  <Image
                    alt={organization?.organization_profile?.name}
                    className="h-24 w-24 rounded-sm border-4 border-white bg-neutral-50 object-cover shadow-sm lg:h-28 lg:w-28"
                    height={120}
                    src={organization?.organization_profile?.logo}
                    width={120}
                  />

                  <div className="flex flex-col gap-1 pb-1">
                    <h1 className="text-2xl font-bold text-neutral-800 lg:text-3xl">
                      {organization?.organization_profile?.name}
                    </h1>
                    <p className="text-sm text-neutral-500">{organization?.email}</p>
                  </div>
                </div>

                <Link
                  className="w-full cursor-pointer rounded-sm border border-neutral-700 bg-white px-4 py-2 text-center text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-100 lg:w-auto lg:px-6"
                  href={`/ongs/${organization?.organization_profile?.slug}`}
                >
                  Acessar minha página
                </Link>
              </div>

              
            </div>
          </div>
        </div>

        <div className="rounded-sm border border-neutral-200 bg-white p-4 lg:p-6">
          <article>
            <p className="text-xl font-bold text-neutral-800 lg:text-2xl">Informações de Contato</p>
          </article>

          <div className="mt-4 flex w-full flex-1 flex-col gap-4">

            <div className="w-full">
              <p className="mb-1 text-sm font-medium text-neutral-700">Telefone</p>
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
                defaultValue={organization?.organization_profile?.phone || ''}
                name="phone"
              />
            </div>
            <div className="w-full">
              <p className="mb-1 text-sm font-medium text-neutral-700">CEP</p>
              <Controller
                defaultValue={organization?.organization_profile?.addresses?.postal_code || ''}
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
                    className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
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
                <p className="mb-1 text-sm font-medium text-neutral-700">Estado</p>
                <Controller
                  render={({ field }) => (
                    <input
                      {...field}
                      className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
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
                <p className="mb-1 text-sm font-medium text-neutral-700">Cidade</p>
                <Controller
                  render={({ field }) => (
                    <input
                      {...field}
                      className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
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
                <p className="mb-1 text-sm font-medium text-neutral-700">Rua</p>
                <Controller
                  render={({ field }) => (
                    <input
                      {...field}
                      className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
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
                <p className="mb-1 text-sm font-medium text-neutral-700">Número</p>
                <Controller
                  render={({ field }) => (
                    <input
                      {...field}
                      className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
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
              <p className="mb-1 text-sm font-medium text-neutral-700">Complemento</p>
              <input
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500"
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
            <button className="mt-6 self-start cursor-pointer rounded-sm bg-neutral-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800 lg:px-6 lg:text-base">
              Salvar alterações
            </button>
          </div>
        </div>
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
