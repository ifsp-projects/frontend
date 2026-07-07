'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Spin } from '@/components/ui/spin'
import { zodResolver } from '@hookform/resolvers/zod'

import type { SignInFormData } from './schema'
import { signInSchema } from './schema'

export const Header: FC = () => {
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema)
  })

  const onSubmit = async (data: SignInFormData) => {
    setServerError(null)

    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/minha-ong',
      redirect: false
    })

    if (result?.error) {
      setServerError('E-mail ou senha inválidos.')
      return
    }

    if (result?.url) {
      window.location.href = result.url
    }
  }

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-neutral-50 px-4 py-8 sm:px-6 lg:min-h-0 lg:max-w-1/2 lg:bg-transparent lg:px-0 lg:py-0">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-8">
        <figure className="mx-auto flex w-full items-center justify-center">
          <Image
            alt="Project Logo"
            className="ml-2 aspect-video max-h-20 max-w-52 object-cover sm:max-h-24 sm:max-w-64"
            fetchPriority="high"
            height={210}
            loading="eager"
            src="/capivara-solidaria-logo.png"
            width={360}
          />
        </figure>
        <article className="-mt-3 flex flex-col items-center gap-1">
          <p className="text-center text-sm text-neutral-500! sm:text-base">
            Entre na sua conta para continuar sua jornada{' '}
            <br className="hidden xl:block" /> comentando ou curtindo artigos
          </p>
        </article>
        <form
          className="flex w-full flex-col gap-3 sm:gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          {serverError && (
            <p className="rounded-sm bg-rose-50 px-4 py-2 text-sm text-rose-500">
              {serverError}
            </p>
          )}
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-neutral-700 sm:text-base">
              E-mail
            </label>
            <input
              {...register('email')}
              className="w-full rounded-sm border border-neutral-300 px-4 py-2.5 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none sm:py-2 sm:text-base"
              placeholder="seuemail@exemplo.com"
              type="email"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-neutral-700 sm:text-base">
              Senha
            </label>
            <input
              {...register('password')}
              className="w-full rounded-sm border border-neutral-300 px-4 py-2.5 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none sm:py-2 sm:text-base"
              placeholder="Digite aqui sua senha"
              type="password"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            className="mt-4 flex min-w-full cursor-pointer items-center justify-center rounded-sm bg-neutral-900 px-6 py-2.5 text-center text-sm text-white! transition-all duration-150 hover:bg-neutral-800 disabled:opacity-60 sm:py-2 sm:text-base"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? <Spin /> : 'Entrar'}
          </button>
        </form>
        <p className="mx-auto text-sm">
          Ou entre em contato com nosso{' '}
          <Link
            className="text-sm text-rose-400! underline-offset-2 hover:underline"
            href="/contato"
          >
            suporte
          </Link>
        </p>
      </div>
    </section>
  )
}
