import type { FC } from 'react'

import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'
import { EditableImageField } from '@/components/page-builder/template-fields/editable-image-field'
import { EditableLinkField } from '@/components/page-builder/template-fields/editable-link-field'

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
        <div className="flex w-full flex-col gap-6 lg:gap-8">
          <article className="flex w-full max-w-[580px] flex-col gap-4">
            <EditableCopyField
              style={{
                border: `1px solid ${palette.deep}33`,
                backgroundColor: `${palette.deep}1A`,
                color: palette.deep
              }}
              as="span"
              className="w-fit rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-widest uppercase"
              defaultValue={copy.span}
              path="header.span"
            />
            <div className="flex flex-col">
              <EditableCopyField
                as="h1"
                className="text-3xl leading-tight font-black lg:text-5xl xl:text-6xl"
                defaultValue={copy.title}
                path="header.title"
                style={{ color: palette.deep }}
              />
              <span className="relative inline-block">
                <EditableCopyField
                  as="span"
                  className="text-3xl leading-tight font-black text-neutral-900 lg:text-5xl xl:text-6xl"
                  defaultValue={copy.decoratedText}
                  path="header.decoratedText"
                />
                <svg
                  className="absolute -bottom-6 left-0 w-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 200 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6 Q50 0 100 5 Q150 10 200 4"
                    fill="none"
                    stroke={palette.deep}
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </div>
            <EditableCopyField
              as="p"
              className="mt-6 text-sm leading-relaxed lg:text-base"
              defaultValue={copy.description}
              path="header.description"
              style={{ color: palette.deep }}
            />
          </article>

          <article className="flex flex-wrap items-center gap-3">
            <EditableLinkField
              style={{
                backgroundColor: palette.deep,
                color: palette.original
              }}
              className="cursor-pointer rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 hover:brightness-110"
              defaultValue={{ href: '#', label: copy.button }}
              iconClassName="w-4 h-4 text-white"
              path="header.button"
            />
            <EditableLinkField
              defaultValue={{
                href: copy.anchor?.href || '#',
                label: copy.anchor?.label || 'Texto do link'
              }}
              style={{
                border: `2px solid ${palette.deep}`
              }}
              className="cursor-pointer rounded-full bg-transparent px-5 py-2 text-sm font-bold text-neutral-900 transition-all duration-300"
              iconClassName="w-4 h-4 text-neutral-900"
              path="header.anchor"
            />
          </article>
        </div>

        <figure className="relative z-30 w-full max-w-[500px] rounded-sm lg:pr-24">
          <EditableImageField
            alt="Hero Image"
            className="w-full object-cover"
            defaultValue={copy.heroImage}
            height={800}
            path="header.heroImage"
            width={800}
          />
        </figure>
      </header>
    </section>
  )
}
