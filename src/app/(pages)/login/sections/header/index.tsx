'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { type FC, useState } from 'react'

import { Google } from '@/assets/socials/google'

export const Header: FC = () => {
  const [isLoadingSubmit, setIsLoadingSubmit] = useState({
    google: false
  })

  const handleSignInWithGoogle = async () => {
    setIsLoadingSubmit(prev => ({
      ...prev,
      google: true
    }))

    await signIn('google', { callbackUrl: '/minha-ong' })
  }

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-neutral-50 px-4 py-8 sm:px-6 lg:min-h-0 lg:max-w-1/2 lg:bg-transparent lg:px-0 lg:py-0">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-8">
        <figure className="mx-auto flex w-full items-center justify-center">
          <Image
            alt="Project Logo"
            className="ml-2 aspect-video max-h-16 max-w-52 object-cover sm:max-h-20 sm:max-w-64"
            fetchPriority="high"
            height={180}
            loading="eager"
            src="/brands/company-logo.png"
            width={360}
          />
        </figure>
        <article className="-mt-3 flex flex-col items-center gap-1">
          <p className="text-center text-sm text-neutral-500! sm:text-base">
            Entre na sua conta para continuar sua jornada{' '}
            <br className="hidden xl:block" /> comentando ou curtindo artigos
          </p>
        </article>
        <button
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm border border-neutral-200 bg-white px-4 py-2.5 transition-all duration-300 hover:bg-neutral-50 sm:py-2"
          disabled={isLoadingSubmit.google}
          onClick={() => handleSignInWithGoogle()}
        >
          <figure className="w-auto">
            <Google className="h-5 w-5" />
          </figure>
          <p className="text-sm">Entrar com o Google</p>
        </button>
        <div className="relative w-full">
          <div className="h-px w-full border-b border-neutral-200" />
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-50 px-2 py-1 text-xs text-neutral-600! lg:bg-neutral-100">
            Ou continuar com
          </span>
        </div>
        <form className="flex w-full flex-col gap-3 sm:gap-2">
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-neutral-700 sm:text-base">
              E-mail
            </label>
            <input
              className="w-full rounded-sm border border-neutral-300 px-4 py-2.5 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none sm:py-2 sm:text-base"
              name="email"
              placeholder="seuemail@exemplo.com"
              type="email"
              required
            />
          </div>
          <div className="w-full">
            <label className="mb-2 block text-sm font-medium text-neutral-700 sm:text-base">
              Senha
            </label>
            <input
              className="w-full rounded-sm border border-neutral-300 px-4 py-2.5 text-sm transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none sm:py-2 sm:text-base"
              defaultValue=""
              name="password"
              placeholder="Digite aqui sua senha"
              type="password"
              required
            />
          </div>
          <button
            className="mt-4 min-w-full cursor-pointer items-center justify-center rounded-sm bg-neutral-900 px-6 py-2.5 text-center text-sm text-white! transition-all duration-150 hover:bg-neutral-800 sm:py-2 sm:text-base"
            onClick={() => { }}
          >
            Entrar
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