import type { FC } from 'react'

import { Steps } from './steps'

export const AboutUs: FC = async () => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <h2 className="text-center text-2xl font-bold lg:text-4xl">
          Como funciona?
        </h2>
        <Steps />
      </div>
    </section>
  )
}
