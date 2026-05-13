'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { formatPhoneToWhatsappLink } from '@/utils/helpers/format-phone-to-whatsapp-link'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ copy, palette }) => {
  return (
    <section
      style={{
        background: `linear-gradient(to right, ${palette.ultra_light}1a, ${palette.tint}33)`
      }}
      className="relative z-30 overflow-hidden px-4 xl:px-0"
    >
      <header className="relative z-40 mx-auto flex w-full max-w-2xl flex-col gap-8 py-12 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-20">
        <div className="flex w-full flex-col gap-6 lg:gap-8">
          <article className="flex w-full max-w-[560px] flex-col gap-4">
            <span
              style={{
                backgroundColor: palette.ultra_light,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: palette.tint
              }}
              className="w-fit rounded-full px-4 py-1.5 text-xs font-medium text-neutral-500 backdrop-blur-[10px] transition duration-200"
            >
              {copy.span}
            </span>
            <h1 className="text-2xl font-bold text-neutral-700 lg:text-4xl xl:text-5xl">
              {copy.title}
            </h1>
            <p className="text-sm text-neutral-500 lg:text-base">
              {copy.description}
            </p>
          </article>
          <Link
            href={
              formatPhoneToWhatsappLink({ phone: copy?.anchor?.href }) || '#'
            }
            className="flex max-w-fit cursor-pointer items-center justify-center rounded-md px-6 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:brightness-105"
            style={{ backgroundColor: palette.original }}
            target="_blank"
          >
            {copy.anchor.label}
          </Link>
          <article className="flex items-center gap-1">
            <p className="text-xs text-neutral-500">Com apoio de</p>
            <p className="text-sm font-semibold text-neutral-600">
              Capivara Solidária
            </p>
          </article>
        </div>
        <figure className="relative z-30 w-full max-w-[500px] rounded-sm lg:pr-24 xl:max-w-[700px]">
          <Image
            alt="Hero Image"
            className="w-full rounded-sm object-cover"
            height={800}
            src={copy?.heroImage || '/templates/undraw_different-love_58hd.svg'}
            width={800}
          />
        </figure>
      </header>
    </section>
  )
}
