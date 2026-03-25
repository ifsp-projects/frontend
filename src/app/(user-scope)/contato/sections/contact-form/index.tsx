'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { Controller } from 'react-hook-form'
import { toast } from 'sonner'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Spin } from '@/components/ui/spin'
import { HUBSPOT_ONG_VALUES } from '@/constants/hubspot/hubspot-ong-types'
import { formatPhone } from '@/utils/helpers/format-phone'
import { hubspotFormSubmit } from '@/utils/helpers/hubspot-form-submit'
import { zodResolver } from '@hookform/resolvers/zod'

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
        toast.error('Houve um erro ao enviar o formulário!')

        return
      }

      reset()
      toast.success('Formulário enviado com sucesso!')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className="w-full bg-white px-4 py-12 lg:py-16">
      <div className="mx-auto flex h-auto w-full max-w-2xl flex-col items-stretch lg:max-w-7xl lg:flex-row">
        <figure className="hidden h-auto w-full flex-1 lg:flex">
          {/* <Image
            alt="Form Image"
            className="h-full w-full object-cover"
            height={800}
            src="https://images.ctfassets.net/kftzwdyauwt9/7Ip6gGvJygc8OYFijNvKUX/53a1dfc167449ef3aeafa19becb9edd6/people-first-ai-fund-grantees-1_1.png?w=3840&q=90&fm=webp"
            width={800}
          /> */}
          <Image
            alt="Login Background Image"
            className="h-full w-full object-cover"
            height={1414}
            src="https://cdn.prod.website-files.com/6618114bae6895cc12d3dc1d/665f1765f1432b0533fb7524_iStock-1498170916.webp"
            width={2120}
          />
        </figure>
        <div className="h-auto w-full max-w-2xl">
          <form
            className="flex h-full flex-col justify-center space-y-6 rounded-r-sm border border-neutral-200 bg-neutral-50 p-4 lg:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <label className="mb-2 block font-medium text-neutral-700">
                Nome
              </label>
              <input
                className="w-full rounded-sm border border-neutral-300 bg-white px-4 py-2 text-sm transition-all duration-300 focus:ring-1 focus:ring-neutral-500 focus:outline-none lg:text-base"
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
                className="w-full rounded-sm border border-neutral-300 bg-white px-4 py-2 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none lg:text-base"
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
                    className="w-full rounded-sm border border-neutral-300 bg-white px-4 py-2 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none lg:text-base"
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
                className="w-full rounded-sm border border-neutral-300 bg-white px-4 py-2 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none lg:text-base"
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
                      {HUBSPOT_ONG_VALUES.map(
                        (value: string, index: number) => (
                          <SelectItem
                            className="bg-white"
                            key={`option-${index}`}
                            value={value}
                          >
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

            <button
              className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm bg-neutral-800 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-700 lg:text-base"
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
        </div>
      </div>
    </section>
  )
}
