'use client'

import { useEffect, useState } from 'react'

export const CookiesConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = sessionStorage.getItem('cookieConsent')
    if (!consent) setVisible(true)
  }, [])

  const handleConsent = (type: 'manage' | 'reject' | 'accept') => {
    sessionStorage.setItem('cookieConsent', type)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-52 flex flex-col gap-4 px-4 pt-4 pb-6 backdrop-blur-3xl md:flex-row md:items-center md:justify-between lg:pt-8 lg:pb-8">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 lg:max-w-7xl lg:flex-row lg:gap-6">
        <div className="flex max-w-[840px] flex-col gap-2.5">
          <p
            className="text-sm font-semibold lg:text-base 2xl:text-lg"
            id="cookieConsentTitle"
          >
            Nós usamos cookies
          </p>
          <p className="text-xs lg:text-sm" id="cookieConsentDesc">
            Utilizamos cookies para ajudar este site a funcionar, compreender a
            utilização do serviço e promover esforços de marketing e trazer
            features exclusivas para nossos usuários. Leia nossos{' '}
            <a
              className="underline underline-offset-2 transition duration-250"
              href="/termos-de-uso"
            >
              Termos de uso
            </a>{' '}
            para saber mais.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2.5 md:flex-row lg:items-center">
          <button
            className="flex h-8 w-full cursor-pointer items-center justify-center gap-[0.3em] rounded-[2.5rem] border border-white/20 bg-white/40 px-6 py-1 text-sm text-nowrap outline-offset-2 backdrop-blur-md transition duration-300 hover:border-white/50 hover:bg-white/55 focus:border-neutral-600 md:w-auto lg:h-10 lg:py-2 lg:text-base"
            onClick={() => handleConsent('manage')}
            type="button"
          >
            Rejeitar tudo
          </button>
          <button
            className="flex h-8 w-full cursor-pointer items-center justify-center gap-[0.3em] rounded-[2.5rem] border border-white/20 bg-white/40 px-6 py-1 text-sm text-nowrap outline-offset-2 backdrop-blur-md transition duration-300 hover:border-white/50 hover:bg-white/55 focus:border-neutral-600 md:w-auto lg:h-10 lg:py-2 lg:text-base"
            onClick={() => handleConsent('reject')}
            type="button"
          >
            Rejeitar cookies não essenciais
          </button>
          <button
            className="flex h-8 w-full cursor-pointer items-center justify-center gap-[0.3em] rounded-[2.5rem] border border-white/20 bg-white/40 px-6 py-1 text-sm text-nowrap outline-offset-2 backdrop-blur-md transition duration-300 hover:border-white/50 hover:bg-white/55 focus:border-neutral-600 md:w-auto lg:h-10 lg:py-2 lg:text-base"
            onClick={() => handleConsent('accept')}
            type="button"
          >
            Aceitar tudo
          </button>
        </div>
      </div>
    </div>
  )
}
