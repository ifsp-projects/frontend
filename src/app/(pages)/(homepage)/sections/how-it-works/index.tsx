'use client'

import { type FC, useEffect } from 'react'

import { Steps } from './steps'

export const HowItWorks: FC = () => {
  useEffect(() => {
    import('@dotlottie/player-component')
  }, [])

  return (
    <section className="relative z-40 bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="relative z-30 mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <figure className="mx-auto -mb-10 max-h-16 max-w-16">
          {/* @ts-expect-error */}
          <dotlottie-player
            renderer="svg"
            src="https://cdn.prod.website-files.com/6889473510b50328dbb70ae6/6977b8a4cd4cb19e443fba23_Object-Question.lottie"
            style={{ width: '100%', height: '100%' }}
            autoplay
            loop
          />
        </figure>
        <h2 className="relative z-30 text-center text-2xl font-bold lg:text-4xl">
          Como funciona?
        </h2>
        <Steps />
      </div>
    </section>
  )
}
