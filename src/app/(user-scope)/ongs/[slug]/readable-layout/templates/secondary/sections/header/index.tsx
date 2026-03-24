import Link from 'next/link'
import type { FC } from 'react'

import DarkVeil from '@/components/ui/dark-veil'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = async ({ copy }) => {
  return (
    <section className="relative min-h-[732px] px-4 xl:px-0 2xl:min-h-[780px]">
      <div className="absolute top-0 left-0 z-20 h-full min-h-[732px] w-full 2xl:min-h-[780px]">
        <DarkVeil hueShift={390} speed={1.4} />
      </div>
      <header className="relative z-30 mx-auto flex min-h-[732px] w-full max-w-2xl flex-col items-center justify-center gap-4 lg:max-w-6xl lg:gap-6 2xl:min-h-[780px]">
        <span className="mx-auto rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur-[10px] transition duration-200">
          {copy.span}
        </span>
        <h1 className="text-center text-2xl font-bold text-white lg:text-4xl xl:text-5xl">
          {copy.title}
        </h1>
        <p className="text-center text-sm text-white lg:text-base">
          {copy.description}
        </p>
        <div className="flex w-full items-center justify-center gap-4">
          <Link
            className="cursor-pointer rounded-full border border-white bg-white px-6 py-2 text-sm font-medium text-neutral-700 backdrop-blur-[10px] transition duration-200"
            href="#"
          >
            {copy.button}
          </Link>
          <Link
            className="cursor-pointer rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-medium text-white backdrop-blur-[10px] transition-all duration-300 hover:brightness-110"
            href={copy.anchor?.href || '#'}
          >
            {copy.anchor?.label || 'Texto do botão'}
          </Link>
        </div>
      </header>
    </section>
  )
}
