import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'
import { EditableImageField } from '@/components/page-builder/template-fields/editable-image-field'
import { EditableLinkField } from '@/components/page-builder/template-fields/editable-link-field'

import type { HowItWorksProps } from './types'

export const HowItWorks: React.FC<HowItWorksProps> = ({ copy, palette }) => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <figure className="w-full">
          <EditableImageField
            alt="How It Works Background"
            className="h-full w-full"
            defaultValue={copy.heroImage}
            height={1080}
            path="howItWorks.heroImage"
            width={1920}
          />
        </figure>
        <div className="flex w-full flex-col gap-8">
          <article className="flex w-full flex-col gap-2">
            <EditableCopyField
              style={{
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: palette.original,
                color: palette.original
              }}
              as="span"
              className="mb-2 w-fit rounded-full px-4 py-1 text-xs"
              defaultValue={copy.span}
              path="howItWorks.span"
            />
            <EditableCopyField
              as="h2"
              className="text-2xl font-bold lg:text-5xl"
              defaultValue={copy.title}
              path="howItWorks.title"
            />
            <EditableCopyField
              as="p"
              className="text-sm lg:text-base"
              defaultValue={copy.description}
              path="howItWorks.description"
            />
          </article>
          <EditableLinkField
            defaultValue={{
              href: copy.anchor?.href || '#',
              label: copy.anchor?.label || 'Texto do link'
            }}
            className="flex max-w-fit items-center justify-center rounded-md px-6 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:brightness-105"
            path="howItWorks.anchor"
            style={{ backgroundColor: palette.original }}
          />
        </div>
      </div>
    </section>
  )
}
