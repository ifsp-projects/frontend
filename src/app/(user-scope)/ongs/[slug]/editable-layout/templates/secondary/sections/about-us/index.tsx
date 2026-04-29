import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'

import { Steps } from './steps'
import type { AboutUsProps } from './types'

export const AboutUs: React.FC<AboutUsProps> = async ({ copy }) => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <EditableCopyField
          as="h2"
          className="text-center text-2xl font-bold lg:text-4xl"
          defaultValue={copy.title}
          path="aboutUs.title"
        />
        <Steps cards={copy.cards} />
      </div>
    </section>
  )
}
