import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { formatPhoneToWhatsappLink } from '@/utils/helpers/format-phone-to-whatsapp-link'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ copy, palette }) => {
  return (
    <section className="relative overflow-hidden bg-white px-4 xl:px-0">
      <header className="mx-auto flex w-full max-w-2xl flex-col lg:min-h-[700px] lg:max-w-7xl lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-between gap-10 py-16 pr-0 lg:py-20 lg:pr-16">
          <div className="flex flex-col gap-2">
            <span
              style={{
                borderLeft: `4px solid ${palette.original}`,
                color: palette.original
              }}
              className="mx-auto w-fit rounded-none pl-3 text-xs font-bold tracking-widest uppercase md:mx-0"
            >
              {copy.label}
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <article className="-mt-4 flex flex-col gap-6 lg:-mt-8">
              <h1 className="max-w-xl text-center text-4xl leading-[1.1] font-black text-neutral-800 md:text-left lg:text-5xl xl:text-6xl">
                {copy.title}{' '}
                <em className="not-italic" style={{ color: palette.original }}>
                  {copy.decoratedTitle}
                </em>
              </h1>
              <p className="max-w-md text-center text-sm leading-relaxed text-neutral-500 md:text-left lg:text-base">
                {copy.description}
              </p>
            </article>

            <div className="flex flex-col flex-wrap items-center gap-3 md:flex-row">
              <Link
                href={
                  formatPhoneToWhatsappLink({
                    phone: copy?.primaryAnchor?.href
                  }) || '#'
                }
                className="flex min-w-full items-center justify-center rounded-none px-4 py-2 text-sm font-black text-white transition-all duration-300 hover:brightness-110 md:min-w-0 lg:px-8 lg:py-3.5 lg:tracking-wider lg:uppercase"
                style={{ backgroundColor: palette.original }}
              >
                {copy.primaryAnchor?.label || 'Texto do botão'}
              </Link>
              <Link
                href={
                  formatPhoneToWhatsappLink({
                    phone: copy?.secondaryAnchor?.href
                  }) || '#'
                }
                className="flex min-w-full items-center justify-center rounded-none border-2 border-neutral-200 px-4 py-2 text-sm font-black text-neutral-600 transition-all duration-300 md:min-w-0 lg:px-8 lg:py-3.5 lg:tracking-wider lg:uppercase"
              >
                {copy.secondaryAnchor?.label || 'Texto do botão'}
              </Link>
            </div>
          </div>

          <ul className="hidden items-center gap-8 border-t border-neutral-100 pt-8 md:flex">
            {copy.stats.map((stat, index: number) => (
              <li className="flex flex-col gap-0.5" key={`stat-${index}`}>
                <p
                  className="text-2xl font-black"
                  style={{ color: palette.original }}
                >
                  {stat.title}
                </p>
                <p className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
                  {stat.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative z-30 w-full rounded-sm lg:max-w-[500px] lg:pr-24 xl:max-w-[600px]">
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
