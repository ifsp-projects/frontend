import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'
import { EditableImageField } from '@/components/shared/template-fields/editable-image-field'

import type { HowItWorksProps } from './types'

export const HowItWorks: React.FC<HowItWorksProps> = async ({ copy }) => {
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
              as="span"
              className="mb-2 w-fit rounded-full border border-blue-500 px-4 py-1 text-xs text-blue-500"
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
          <EditableCopyField
            as="div"
            className="flex max-w-fit cursor-pointer items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:brightness-105"
            defaultValue={copy.anchor}
            path="howItWorks.anchor"
          />
        </div>
      </div>
    </section>
  )
}
