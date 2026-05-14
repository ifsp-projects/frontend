import type { FC } from 'react'

import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'
import { EditableImageField } from '@/components/page-builder/template-fields/editable-image-field'
import { EditableLinkField } from '@/components/page-builder/template-fields/editable-link-field'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ copy, palette }) => {
  return (
    <section className="relative overflow-hidden bg-white px-4 xl:px-0">
      <header className="mx-auto flex w-full max-w-2xl flex-col lg:min-h-[700px] lg:max-w-7xl lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-between gap-10 py-16 pr-0 lg:py-20 lg:pr-16">
          <div className="flex flex-col gap-2">
            <EditableCopyField
              style={{
                borderLeft: `4px solid ${palette.original}`,
                color: palette.original
              }}
              as="span"
              className="mx-auto w-fit rounded-none pl-3 text-xs font-bold tracking-widest uppercase md:mx-0"
              defaultValue={copy.label}
              path="header.label"
            />
          </div>

          <div className="flex flex-col gap-8">
            <article className="-mt-8 flex flex-col gap-6 lg:-mt-12">
              <div className="flex flex-col">
                <EditableCopyField
                  as="h1"
                  className="max-w-xl text-center text-4xl leading-[1.1] font-black text-neutral-800 md:text-left lg:text-5xl xl:text-6xl"
                  defaultValue={copy.title}
                  path="header.title"
                />
                <EditableCopyField
                  as="span"
                  className="max-w-xl text-4xl leading-[1.1] font-black not-italic lg:text-5xl xl:text-6xl"
                  defaultValue={copy.decoratedTitle}
                  path="header.decoratedTitle"
                  style={{ color: palette.original }}
                />
              </div>
              <EditableCopyField
                as="p"
                className="max-w-md text-center text-sm leading-relaxed text-neutral-500 md:text-left lg:text-base"
                defaultValue={copy.description}
                path="header.description"
              />
            </article>

            <div className="flex flex-col flex-wrap items-center gap-3 md:flex-row">
              <EditableLinkField
                defaultValue={{
                  href: copy.primaryAnchor?.href || '#',
                  label: copy.primaryAnchor?.label || 'Texto do link'
                }}
                className="flex min-w-full items-center justify-center rounded-none px-4 py-2 text-sm font-black text-white transition-all duration-300 hover:brightness-110 md:min-w-0 lg:px-8 lg:py-3.5 lg:tracking-wider lg:uppercase"
                path="header.primaryAnchor"
                style={{ backgroundColor: palette.original }}
              />
              <EditableLinkField
                defaultValue={{
                  href: copy.secondaryAnchor?.href || '#',
                  label: copy.secondaryAnchor?.label || 'Texto do link'
                }}
                className="flex min-w-full items-center justify-center rounded-none border-2 border-neutral-200 px-4 py-2 text-sm font-black text-neutral-600 transition-all duration-300 md:min-w-0 lg:px-8 lg:py-3.5 lg:tracking-wider lg:uppercase"
                path="header.secondaryAnchor"
                style={{ border: `2px solid ${palette.shade}` }}
              />
            </div>
          </div>

          <div className="hidden items-center gap-8 border-t border-neutral-100 pt-8 md:flex">
            {copy.stats.map((stat, index: number) => (
              <div className="flex flex-col gap-0.5" key={`stat-${index}`}>
                <EditableCopyField
                  as="p"
                  className="text-2xl font-black"
                  defaultValue={stat.title}
                  path={`header.stats[${index}].title`}
                  style={{ color: palette.original }}
                />
                <EditableCopyField
                  as="p"
                  className="text-xs font-medium tracking-widest text-neutral-400 uppercase"
                  defaultValue={stat.description}
                  path={`header.stats[${index}].description`}
                />
              </div>
            ))}
          </div>
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
