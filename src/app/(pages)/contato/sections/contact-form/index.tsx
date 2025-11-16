'use client'

import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../../../../components/ui/select'
import { Spin } from '../../../../../components/ui/spin'
import { HUBSPOT_ONG_VALUES } from '../../../../../constants/hubspot/hubspot-ong-types'
import { formatPhone } from '../../../../../utils/helpers/format-phone'
import { hubspotFormSubmit } from '../../../../../utils/helpers/hubspot-form-submit'
import type { ContacFormInputs } from './schema'
import { contactFormSchema } from './schema'

export const ContactForm: FC = () => {
  const pathName = usePathname()

  const formMethods = useForm<ContacFormInputs>({
    resolver: zodResolver(contactFormSchema)
  })

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { isSubmitting, isSubmitSuccessful }
  } = formMethods

  const onSubmit: SubmitHandler<ContacFormInputs> = async payload => {
    try {
      const isHubspotFormSubmittedSuccessfull = await hubspotFormSubmit({
        formVariant: 'conversion_form',
        data: payload,
        url: pathName
      })

      if (!isHubspotFormSubmittedSuccessfull) {
        console.log('adicionar toast message aqui dps')

        return
      }

      reset()
      console.log('Formulário enviado com sucesso! Add toast dps')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 lg:py-16 xl:px-0">
      <form
        className="space-y-6 rounded-sm border border-neutral-200 bg-white p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            Nome
          </label>
          <input
            className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 focus:ring-1 focus:ring-neutral-500 focus:outline-none"
            name="nome"
            placeholder="Seu nome"
            type="text"
            required
            {...register('fullname')}
          />
        </div>

        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            E-mail
          </label>
          <input
            className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
            name="email"
            placeholder="seuemail@exemplo.com"
            type="email"
            required
            {...register('email')}
          />
        </div>

        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            Número de telefone
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
              />
            )}
            control={control}
            name="phone"
          />
        </div>

        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            Nome da ONG
          </label>
          <input
            className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
            name="nome"
            placeholder="Nome da sua ONG"
            type="text"
            required
            {...register('ong_name')}
          />
        </div>

        <div className="w-full">
          <label className="mb-2 block font-medium text-neutral-700">
            Área de atuação da ONG
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

        {/*<div>
          <label className="mb-2 block font-medium text-neutral-700">
            Sugestão de projeto ou ONG
          </label>
          <textarea
            className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-neutral-500 focus:outline-none"
            name="mensagem"
            placeholder="Conte um pouco sobre o projeto, o nome da ONG e onde ela atua"
            rows={5}
            required
          ></textarea>
        </div>*/}

        <button
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-600 py-2 font-semibold text-white transition hover:bg-neutral-700"
          type="submit"
        >
          Enviar
          {isSubmitting ? <Spin /> : null}
        </button>

        {isSubmitSuccessful && (
          <p className="mt-4 text-center font-medium text-green-600">
            Sua mensagem foi enviada com sucesso!
          </p>
        )}
      </form>
    </section>
  )
}
