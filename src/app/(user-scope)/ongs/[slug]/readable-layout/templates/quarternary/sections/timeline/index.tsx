import Link from 'next/link'
import type { FC } from 'react'

import { formatPhoneToWhatsappLink } from '@/utils/helpers/format-phone-to-whatsapp-link'

import type { TimelineProps } from './types'

export const Timeline: FC<TimelineProps> = ({ copy, palette }) => {
  return (
    <section className="bg-neutral-50 px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <article className="mb-16 flex flex-col gap-3">
          <p
            style={{
              borderLeft: `4px solid ${palette.original}`,
              color: palette.original
            }}
            className="w-fit pl-3 text-xs font-bold tracking-widest uppercase"
          >
            {copy.label}
          </p>
          <h2 className="max-w-lg text-3xl leading-tight font-black text-neutral-800 lg:text-4xl">
            {copy.title}
          </h2>
        </article>

        <div className="relative flex flex-col lg:flex-row lg:gap-0">
          <div
            className="absolute top-0 left-[19px] h-full w-px lg:top-[19px] lg:left-0 lg:h-px lg:w-full"
            style={{ backgroundColor: palette.shade }}
          />

          {copy.cards.map((card, index: number) => (
            <div
              className="relative flex gap-6 pb-12 last:pb-0 lg:flex-1 lg:flex-col lg:gap-6 lg:pt-12 lg:pr-8 lg:pb-0 last:lg:pr-0"
              key={`${card.title}-${index}`}
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center lg:absolute lg:top-[-19px] lg:left-0">
                <span
                  className="text-[10px] font-black text-white"
                  style={{ backgroundColor: palette.original }}
                >
                  {index + 1}
                </span>
              </div>

              <article className="flex flex-col gap-3 lg:pt-0">
                <span
                  className="text-xs font-black tracking-widest uppercase"
                  style={{ color: palette.original }}
                >
                  {card.span}
                </span>
                <h3 className="text-base font-black text-neutral-800">
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {card.description}
                </p>
                <p
                  style={{
                    backgroundColor: palette.tint,
                    color: palette.original
                  }}
                  className="mt-1 w-fit px-3 py-1 text-xs font-black"
                >
                  {card.label}
                </p>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-neutral-200 pt-12 text-center">
          <p className="text-lg font-black text-neutral-700">
            {copy.anchorTitle}
          </p>
          <Link
            href={
              formatPhoneToWhatsappLink({ phone: copy?.anchor?.href }) || '#'
            }
            className="rounded-none bg-rose-600 px-8 py-3.5 text-sm font-black tracking-wider text-white uppercase transition-all duration-300 hover:bg-rose-700"
            target="_blank"
          >
            {copy.anchor?.label || 'Texto do botão'}
          </Link>
        </div>
      </div>
    </section>
  )
}
