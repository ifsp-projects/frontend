import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { formatPhoneToWhatsappLink } from '@/utils/helpers/format-phone-to-whatsapp-link'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ copy }) => {
  return (
    <section className="relative overflow-hidden bg-amber-400 px-4 xl:px-0">
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-amber-300/50" />
      <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-amber-500/40" />
      <div className="absolute top-1/2 right-1/4 h-40 w-40 -translate-y-1/2 rounded-full bg-yellow-300/30" />

      <header className="relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-8 py-12 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-20">
        <div className="flex w-full flex-col gap-6 lg:gap-8">
          <article className="flex w-full max-w-[580px] flex-col gap-4">
            <span className="w-fit rounded-full border border-amber-900/20 bg-amber-800/15 px-4 py-1.5 text-[10px] font-semibold tracking-widest text-amber-950 uppercase">
              {copy.span}
            </span>
            <h1 className="text-3xl leading-tight font-black text-amber-950 lg:text-5xl xl:text-6xl">
              {copy.title}
              <span className="relative inline-block">
                {copy.decoratedText}
                <svg
                  className="absolute left-0 w-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 200 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6 Q50 0 100 5 Q150 10 200 4"
                    fill="none"
                    stroke="#92400e"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-amber-900 lg:mt-6 lg:text-base">
              {copy.description}
            </p>
          </article>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={
                formatPhoneToWhatsappLink({ phone: copy?.anchor?.href }) || '#'
              }
              className="cursor-pointer rounded-full bg-amber-950 px-5 py-2 text-sm font-bold text-amber-400 shadow-amber-900/30 transition-all duration-300 hover:brightness-110"
              target="_blank"
            >
              {copy.button}
            </Link>
            <Link
              href={
                formatPhoneToWhatsappLink({ phone: copy?.anchor?.href }) || '#'
              }
              className="cursor-pointer rounded-full border-2 border-amber-900/30 bg-transparent px-5 py-2 text-sm font-bold text-amber-950 transition-all duration-300 hover:bg-amber-900/10"
              target="_blank"
            >
              {copy.anchor?.label || 'Texto do botão'}
            </Link>
          </div>
        </div>

        <figure className="relative z-30 w-full max-w-[500px] rounded-sm lg:max-w-[650px] lg:pr-24 xl:max-w-[700px]">
          <Image
            alt="Hero Image"
            className="w-full rounded-sm object-cover"
            height={800}
            src={copy?.image || '"/templates/undraw_different-love_58hd.svg"'}
            width={800}
          />
        </figure>
      </header>
    </section>
  )
}
