import type { FC } from 'react'

import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'

import type { MissionProps } from './types'

export const Mission: FC<MissionProps> = ({ copy }) => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-12">
        <article className="flex flex-col items-center gap-4">
          <EditableCopyField
            as="span"
            className="text-center text-sm text-emerald-600 uppercase lg:text-center"
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
            className="max-w-[360px] text-center text-sm text-neutral-500 lg:text-center lg:text-base"
            defaultValue={copy.description}
            path="ourMission.description"
          />
        </article>
        <ul className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12">
          {copy.tabs.map((tab, index: number) => (
            <li
              className="flex w-full flex-col items-center gap-1.5 border border-emerald-500 bg-emerald-50 px-2 py-3 lg:gap-3 lg:border-transparent lg:bg-transparent lg:p-0"
              key={`${tab?.title}-${index}`}
            >
              <EditableCopyField
                as="p"
                className="bg-linear-to-r from-emerald-400 to-emerald-700 bg-clip-text text-2xl font-semibold text-transparent lg:text-5xl"
                defaultValue={tab?.title || ''}
                path={`ourMission.tabs[${index}].title`}
              />
              <EditableCopyField
                as="h3"
                className="text-sm lg:text-base"
                defaultValue={tab?.description || ''}
                path={`ourMission.tabs[${index}].description`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
