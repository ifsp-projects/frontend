import type { FC } from 'react'

import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'
import { EditableImageField } from '@/components/page-builder/template-fields/editable-image-field'
import { EditableLinkField } from '@/components/page-builder/template-fields/editable-link-field'

import type { HeaderProps } from './types'

export const Header: FC<HeaderProps> = ({ copy }) => {
  return (
    <section className="relative overflow-hidden bg-white px-4 xl:px-0">
      <header className="mx-auto flex w-full max-w-2xl flex-col lg:min-h-[700px] lg:max-w-7xl lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-between gap-10 py-16 pr-0 lg:py-20 lg:pr-16">
          <div className="flex flex-col gap-2">
            <EditableCopyField
              as="span"
              className="w-fit rounded-none border-l-4 border-rose-600 pl-3 text-xs font-bold tracking-widest text-rose-600 uppercase"
              defaultValue={copy.label}
              path="header.label"
            />
          </div>

          <div className="flex flex-col gap-8">
            <article className="-mt-8 flex flex-col gap-6 lg:-mt-12">
              <div className="flex flex-col">
                <EditableCopyField
                  as="h1"
                  className="max-w-xl text-4xl leading-[1.1] font-black text-neutral-800 lg:text-5xl xl:text-6xl"
                  defaultValue={copy.title}
                  path="header.title"
                />
                <EditableCopyField
                  as="span"
                  className="max-w-xl text-4xl leading-[1.1] font-black text-rose-600 not-italic lg:text-5xl xl:text-6xl"
                  defaultValue={copy.decoratedTitle}
                  path="header.decoratedTitle"
                />
              </div>
              <EditableCopyField
                as="p"
                className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-base"
                defaultValue={copy.description}
                path="header.description"
              />
            </article>

            <div className="flex flex-wrap items-center gap-3">
              <EditableLinkField
                defaultValue={{
                  href: copy.primaryAnchor?.href || '#',
                  label: copy.primaryAnchor?.label || 'Texto do link'
                }}
                className="rounded-none bg-rose-600 px-8 py-3.5 text-sm font-black tracking-wider text-white uppercase transition-all duration-300 hover:bg-rose-700"
                path="header.primaryAnchor"
              />
              <EditableLinkField
                defaultValue={{
                  href: copy.secondaryAnchor?.href || '#',
                  label: copy.secondaryAnchor?.label || 'Texto do link'
                }}
                className="rounded-none border-2 border-neutral-200 px-8 py-3.5 text-sm font-black tracking-wider text-neutral-600 uppercase transition-all duration-300 hover:border-rose-600 hover:text-rose-600"
                path="header.secondaryAnchor"
              />
            </div>
          </div>

          <div className="flex items-center gap-8 border-t border-neutral-100 pt-8">
            {copy.stats.map((stat, index: number) => (
              <div className="flex flex-col gap-0.5" key={`stat-${index}`}>
                <EditableCopyField
                  as="p"
                  className="text-2xl font-black text-rose-600"
                  defaultValue={stat.title}
                  path={`header.stats[${index}].title`}
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
