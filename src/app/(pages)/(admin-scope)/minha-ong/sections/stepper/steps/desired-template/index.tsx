import type { FC } from 'react'

import type { ChildrenProps } from '../../types'

export const DesiredTemplate: FC<ChildrenProps> = ({
  currentStep,
  nextStep,
  prevStep,
  setActiveStep
}) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div className="w-full rounded-sm border border-slate-300 bg-white px-4 py-5">
          <figure className="h-[240px] w-full rounded-sm bg-neutral-500" />
          <article className="flex w-full flex-col">
            <h3 className="text-lg font-bold">Template Azul</h3>
            <p className="text-sm text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil id
              delectus cupiditate est repellat necessitatibus provident
              doloremque rem voluptates
            </p>
            <button className="mt-2 cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:text-base">
              Escolher template
            </button>
          </article>
        </div>
        <div className="w-full rounded-sm border border-slate-300 bg-white px-4 py-5">
          <figure className="h-[240px] w-full rounded-sm bg-neutral-500" />
          <article className="flex w-full flex-col">
            <h3 className="text-lg font-bold">Template Azul</h3>
            <p className="text-sm text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil id
              delectus cupiditate est repellat necessitatibus provident
              doloremque rem voluptates
            </p>
            <button className="mt-2 cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:text-base">
              Escolher template
            </button>
          </article>
        </div>
        <div className="w-full rounded-sm border border-slate-300 bg-white px-4 py-5">
          <figure className="h-[240px] w-full rounded-sm bg-neutral-500" />
          <article className="flex w-full flex-col">
            <h3 className="text-lg font-bold">Template Azul</h3>
            <p className="text-sm text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil id
              delectus cupiditate est repellat necessitatibus provident
              doloremque rem voluptates
            </p>
            <button className="mt-2 cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:text-base">
              Escolher template
            </button>
          </article>
        </div>
        <div className="w-full rounded-sm border border-slate-300 bg-white px-4 py-5">
          <figure className="h-[240px] w-full rounded-sm bg-neutral-500" />
          <article className="flex w-full flex-col">
            <h3 className="text-lg font-bold">Template Azul</h3>
            <p className="text-sm text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil id
              delectus cupiditate est repellat necessitatibus provident
              doloremque rem voluptates
            </p>
            <button className="mt-2 cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:text-base">
              Escolher template
            </button>
          </article>
        </div>
      </div>
      <div className="flex w-full items-center gap-4 lg:justify-between">
        <div className="item-center flex w-full justify-start">
          <button
            className="cursor-not-allowed rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 disabled:opacity-75 lg:text-base"
            onClick={prevStep}
            disabled
          >
            Voltar
          </button>
        </div>
        <div className="item-center flex w-full justify-end">
          <button
            className="cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:text-base"
            onClick={nextStep}
          >
            Avançar
          </button>
        </div>
      </div>
    </div>
  )
}
