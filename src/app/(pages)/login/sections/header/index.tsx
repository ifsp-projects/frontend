'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { type FC, useState } from 'react'

import { Google } from '@/assets/socials/google'
import Beams from '@/components/ui/beams'

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
    <section className="flex h-screen w-screen lg:justify-between">
      <header className="flex h-full w-full max-w-1/2 items-center justify-center">
        <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-8">
          <figure className="mx-auto flex w-full items-center justify-center">
            <Image
              alt="Project Logo"
              className="ml-2 aspect-video max-h-20 max-w-64 object-cover"
              height={180}
              src="/brands/company-logo.png"
              width={360}
            />
          </figure>
          <article className="-mt-3 flex flex-col items-center gap-1">
            <p className="text=base text-center !text-neutral-500">
              Entre na sua conta para continuar sua jornada{' '}
              <br className="hidden xl:block" /> comentando ou curtindo artigos
            </p>
          </article>
          <button
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm border border-neutral-200 px-4 py-2 transition-all duration-300 hover:bg-neutral-50"
            disabled={isLoadingSubmit.google}
            onClick={() => handleSignInWithGoogle()}
          >
            <figure className="w-auto">
              <Google className="h-5 w-5" />
            </figure>
            <p className="text-sm">Entrar com o Google</p>
          </button>
          <div className="relative w-full">
            <div className="h-[1px] w-full border-b border-neutral-200" />
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-300 px-2 py-1 text-xs !text-neutral-600">
              Ou continuar com
            </span>
          </div>
          <form className="flex w-full flex-col gap-2">
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
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block font-medium text-neutral-700">
                E-mail
              </label>
              <input
                className="w-full rounded-sm border border-neutral-300 px-4 py-2 transition-all duration-300 outline-none focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                defaultValue=""
                name="password"
                placeholder="Digite aqui sua senha"
                type="password"
                required
              />
            </div>
            <button
              className="mt-4 min-w-full cursor-pointer items-center justify-center rounded-sm bg-neutral-900 px-6 py-2 text-center !text-white transition-all duration-150 hover:bg-neutral-800"
              onClick={() => {}}
            >
              Entrar
            </button>
          </form>
          <p className="mx-auto text-sm">
            Ou entre em contato com nosso{' '}
            <span className="text-sm !text-rose-400">suporte</span>
          </p>
        </div>
      </header>
      <figure className="relative w-full max-w-1/2">
        <Beams
          beamHeight={15}
          beamNumber={12}
          beamWidth={2}
          lightColor="#ffffff"
          noiseIntensity={1.75}
          rotation={30}
          scale={0.2}
          speed={2}
        />
      </figure>
    </section>
  )
}
