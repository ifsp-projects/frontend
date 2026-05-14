import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { formatPhoneToWhatsappLink } from '@/utils/helpers/format-phone-to-whatsapp-link'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ copy, palette }) => {
  return (
    <section
      className="relative overflow-hidden px-4 xl:px-0"
      style={{ backgroundColor: palette.original }}
    >
      <div
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full"
        style={{ backgroundColor: `${palette.tint}80` }}
      />
      <div
        className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full"
        style={{ backgroundColor: `${palette.shade}66` }}
      />
      <div
        className="absolute top-1/2 right-1/4 h-40 w-40 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: `${palette.ultra_light}4D` }}
      />

      <header className="relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-8 py-12 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-20">
        <div className="flex w-full flex-col items-center gap-6 lg:items-start lg:gap-8">
          <article className="flex w-full max-w-[580px] flex-col items-center gap-4 lg:items-start">
            <span
              style={{
                border: `1px solid ${palette.deep}33`,
                backgroundColor: `${palette.deep}1A`,
                color: palette.deep
              }}
              className="w-fit rounded-full border px-4 py-1.5 text-[10px] font-semibold tracking-widest uppercase"
            >
              {copy.span}
            </span>
            <h1
              className="text-center text-3xl leading-tight font-black lg:text-left lg:text-5xl xl:text-6xl"
              style={{ color: palette.deep }}
            >
              {copy.title}
              <span className="relative inline-block">
                {copy.decoratedText}
                <svg
                  className="absolute -bottom-6 left-0 w-full"
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
            <p
              className="mt-6 text-center text-sm leading-relaxed lg:text-left lg:text-base"
              style={{ color: palette.deep }}
            >
              {copy.description}
            </p>
          </article>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={
                formatPhoneToWhatsappLink({ phone: copy?.anchor?.href }) || '#'
              }
              style={{
                backgroundColor: palette.deep,
                color: palette.original
              }}
              className="cursor-pointer rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 hover:brightness-110"
              target="_blank"
            >
              {copy.button}
            </Link>
            <Link
              href={
                formatPhoneToWhatsappLink({ phone: copy?.anchor?.href }) || '#'
              }
              style={{
                border: `2px solid ${palette.deep}`
              }}
              className="cursor-pointer rounded-full border-2 bg-transparent px-5 py-2 text-sm font-bold text-neutral-900 transition-all duration-300"
              target="_blank"
            >
              {copy.anchor?.label || 'Texto do botão'}
            </Link>
          </div>
        </div>

        <figure className="relative z-30 w-full rounded-sm lg:max-w-[500px] lg:pr-24 xl:max-w-[650px] 2xl:max-w-[700px]">
          <Image
            src={
              copy?.heroImage || '"/templates/undraw_different-love_58hd.svg"'
            }
            alt="Hero Image"
            className="w-full rounded-sm object-cover"
            height={800}
            width={800}
          />
        </figure>
      </header>
    </section>
  )
}
