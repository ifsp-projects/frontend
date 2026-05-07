import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { formatPhoneToWhatsappLink } from '@/utils/helpers/format-phone-to-whatsapp-link'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ copy }) => {
  return (
    <section className="relative overflow-hidden bg-white px-4 xl:px-0">
      <header className="mx-auto flex w-full max-w-2xl flex-col lg:min-h-[700px] lg:max-w-7xl lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-between gap-10 py-16 pr-0 lg:py-20 lg:pr-16">
          <div className="flex flex-col gap-2">
            <span className="w-fit rounded-none border-l-4 border-rose-600 pl-3 text-xs font-bold tracking-widest text-rose-600 uppercase">
              {copy.label}
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <article className="-mt-4 flex flex-col gap-6 lg:-mt-8">
              <h1 className="max-w-xl text-4xl leading-[1.1] font-black text-neutral-800 lg:text-5xl xl:text-6xl">
                {copy.title}{' '}
                <em className="text-rose-600 not-italic">
                  {copy.decoratedTitle}
                </em>
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-base">
                {copy.description}
              </p>
            </article>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={
                  formatPhoneToWhatsappLink({
                    phone: copy?.primaryAnchor?.href
                  }) || '#'
                }
                className="rounded-none bg-rose-600 px-8 py-3.5 text-sm font-black tracking-wider text-white uppercase transition-all duration-300 hover:bg-rose-700"
              >
                {copy.primaryAnchor?.label || 'Texto do botão'}
              </Link>
              <Link
                href={
                  formatPhoneToWhatsappLink({
                    phone: copy?.secondaryAnchor?.href
                  }) || '#'
                }
                className="rounded-none border-2 border-neutral-200 px-8 py-3.5 text-sm font-black tracking-wider text-neutral-600 uppercase transition-all duration-300 hover:border-rose-600 hover:text-rose-600"
              >
                {copy.secondaryAnchor?.label || 'Texto do botão'}
              </Link>
            </div>
          </div>

          <ul className="flex items-center gap-8 border-t border-neutral-100 pt-8">
            {copy.stats.map((stat, index: number) => (
              <li className="flex flex-col gap-0.5" key={`stat-${index}`}>
                <p className="text-2xl font-black text-rose-600">
                  {stat.title}
                </p>
                <p className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
                  {stat.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative z-30 w-full max-w-[500px] rounded-sm lg:pr-24 xl:max-w-[600px]">
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
