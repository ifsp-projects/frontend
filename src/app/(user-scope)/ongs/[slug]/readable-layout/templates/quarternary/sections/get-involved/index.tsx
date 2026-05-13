import Link from 'next/link'
import type { CSSProperties, FC } from 'react'
import React from 'react'

import { EDITABLE_ICON_FIELD_ICONS } from '@/components/page-builder/template-fields/editable-icon-field/data'
import { formatPhoneToWhatsappLink } from '@/utils/helpers/format-phone-to-whatsapp-link'

import type { GetInvolvedProps } from './types'

export const GetInvolved: FC<GetInvolvedProps> = ({ copy, palette }) => {
  return (
    <section className="bg-white px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
          <div className="flex flex-col gap-4">
            <span
              style={{
                borderLeft: `4px solid ${palette.original}`,
                color: palette.original
              }}
              className="w-fit pl-3 text-xs font-bold tracking-widest uppercase"
            >
              {copy.label}
            </span>
            <h2 className="text-3xl leading-tight font-black text-neutral-800 lg:text-4xl xl:text-5xl">
              {copy.title}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-base">
            {copy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-neutral-100 bg-neutral-100 md:grid-cols-2">
          {copy.cards.map(({ icon, title, description }) => (
            <div
              className="group relative flex flex-col gap-6 p-8"
              key={title}
              style={{ backgroundColor: palette.tint }}
            >
              <div
                style={{
                  borderColor: palette.tint,
                  backgroundColor: palette.ultra_light
                }}
                className="flex h-12 w-12 items-center justify-center transition-all duration-300"
              >
                {React.cloneElement(
                  EDITABLE_ICON_FIELD_ICONS[icon] as React.ReactElement<{
                    className?: string
                    strokeWidth?: number
                    style: CSSProperties
                  }>,
                  {
                    className: 'h-5 w-5 text-rose-600',
                    strokeWidth: 2,
                    style: { color: palette.original }
                  }
                )}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-black text-neutral-800">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-px flex flex-col gap-4 border border-t-0 border-neutral-100 bg-neutral-50 px-8 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ backgroundColor: palette.original }}
            />
            <p className="text-sm font-bold text-neutral-700">
              {copy.anchorText}
            </p>
          </div>
          <Link
            href={
              formatPhoneToWhatsappLink({ phone: copy?.anchor?.href }) || '#'
            }
            className="shrink-0 rounded-none px-7 py-3 text-xs font-black tracking-wider text-white uppercase"
            style={{ backgroundColor: palette.original }}
            target="_blank"
          >
            {copy.anchor?.label || 'Texto do botão'}
          </Link>
        </div>
      </div>
    </section>
  )
}
