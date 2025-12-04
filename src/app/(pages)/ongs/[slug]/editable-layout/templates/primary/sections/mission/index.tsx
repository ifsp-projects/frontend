import type { FC } from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'

import type { MissionProps } from './types'

export const Mission: FC<MissionProps> = async ({ copy }) => {
  return (
    <section className="px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-12">
        <article className="flex flex-col gap-4 lg:items-center">
          <EditableCopyField
            as="span"
            className="text-sm text-emerald-600 uppercase lg:text-center"
            defaultValue={copy.subtitle}
            path="ourMission.subtitle"
          />
          <EditableCopyField
            as="h2"
            className="w-full max-w-[400px] text-center text-2xl font-bold lg:text-center lg:text-4xl"
            defaultValue={copy.title}
            path="ourMission.title"
          />
          <EditableCopyField
            as="p"
            className="max-w-[360px] text-sm text-neutral-500 lg:text-center lg:text-base"
            defaultValue={copy.description}
            path="ourMission.description"
          />
        </article>
        <ul className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          {copy.tabs.map((tab, index: number) => (
            <li
              className="flex w-full flex-col items-center gap-3"
              key={`${tab?.title}-${index}`}
            >
              <EditableCopyField
                as="p"
                className="bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text text-2xl font-semibold text-transparent lg:text-5xl"
                defaultValue={tab?.title || ''}
                path={`ourMission?.tabs[${index}]?.title`}
              />
              <EditableCopyField
                as="h3"
                className="text-sm lg:text-base"
                defaultValue={tab?.description || ''}
                path={`ourMission?.tabs[${index}]?.description`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
