'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ copy }) => {
  return (
    <section className="relative z-30 overflow-hidden bg-gradient-to-r from-neutral-50/10 to-white px-4 xl:px-0">
      <Image
        alt="Template Background"
        className="absolute z-20 h-full w-full opacity-15 2xl:opacity-20"
        height={1080}
        src="/templates/template-background-image.svg"
        width={1920}
      />
      <header className="relative z-40 mx-auto flex w-full max-w-2xl flex-col gap-8 py-12 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-20">
        <div className="flex w-full flex-col gap-6 lg:gap-8">
          <article className="flex w-full max-w-[560px] flex-col gap-4">
            <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-500 backdrop-blur-[10px] transition duration-200">
              {copy.span}
            </span>
            <h1 className="text-2xl font-bold text-slate-700 lg:text-4xl xl:text-5xl">
              {copy.title}
            </h1>
            <p className="text-sm text-slate-500 lg:text-base">
              {copy.description}
            </p>
          </article>
          <Link
            className="flex max-w-fit cursor-pointer items-center justify-center rounded-md bg-emerald-600 px-6 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:brightness-105"
            href="#"
          >
            {copy.anchor}
          </Link>
          <div className="flex items-center gap-1">
            <p className="text-xs text-slate-500">Com apoio de</p>
            <p className="text-sm font-semibold text-slate-600">
              Capivara Solidária
            </p>
          </div>
        </div>
        <figure className="relative z-30 w-full max-w-[500px] rounded-sm lg:pr-24">
          <Image
            alt="Hero Image"
            className="w-full object-cover"
            height={800}
            src="/templates/undraw_different-love_58hd.svg"
            width={800}
          />
        </figure>
      </header>
    </section>
  )
}
