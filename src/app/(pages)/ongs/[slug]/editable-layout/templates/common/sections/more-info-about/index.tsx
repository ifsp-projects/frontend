'use client'

import Image from 'next/image'
import type { FC } from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'

import type { MoreInfoAboutProps } from './types'

export const MoreInfoAbout: FC<MoreInfoAboutProps> = ({ copy }) => {
  return (
    <section className="border-y border-slate-200 bg-slate-100 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-8">
        <div className="mx-auto flex w-full max-w-2xl flex-col-reverse py-8 last:border-transparent lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-8">
          <article className={`flex w-full flex-col gap-4 lg:order-2 lg:gap-6`}>
            <EditableCopyField
              as="h2"
              className="text-2xl font-bold lg:text-3xl"
              defaultValue={copy.title}
              path="moreInfoAbout.title"
            />
            <EditableCopyField
              as="p"
              className="text-sm lg:text-base"
              defaultValue={copy.description}
              path="moreInfoAbout.description"
            />
          </article>
          <figure className={`h-[320px] w-full rounded-sm lg:order-1`}>
            <Image
              alt="Section Image"
              className="h-[320px] w-full rounded-sm object-cover"
              height={1080}
              src="https://images.ctfassets.net/kftzwdyauwt9/IPgFYDUMeUtWcg2ze2IsP/118ea87d54734ef3f49b432ee2a35b56/DALL_E_2024-07-17_16.25.57_-_Close-up_of_soft_pink_flower_petals_with_a_gentle_motion_blur_on_a_light_lavender_background__c.png?w=3840&q=90&fm=webp"
              width={1920}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
