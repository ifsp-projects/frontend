import { type FC, useState } from 'react'

import { Spin } from '@/components/ui/spin'

import { useStepperContext } from '../../../stepper-context'
import type { ChildrenProps } from '../../types'

export const DesiredTemplate: FC<ChildrenProps> = ({ prevStep }) => {
  const { onSubmit, formMethods } = useStepperContext()

  const [selectedTemplate, setSelectedTemplate] = useState<string>('')

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors }
  } = formMethods

  return (
    <form
      className="flex w-full flex-col gap-8"
      id="complement-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold lg:text-3xl">
        Escolha o template inicial da sua página
      </h2>
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <div
          className={`w-full rounded-sm border bg-white px-3 py-4 ${selectedTemplate === 'primary' ? 'border-rose-500' : 'border-slate-300'}`}
        >
          <figure className="h-[140px] w-full rounded-sm bg-neutral-500" />
          <article className="flex w-full flex-col">
            <h3 className="mt-3 text-base font-bold">Template Azul</h3>
            <p className="text-sm text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil id
              delectus cupiditate est repellat necessitatibus provident
              doloremque rem voluptates
            </p>
            <button
              onClick={() => {
                setValue('design_template', 'primary')
                setSelectedTemplate('primary')
              }}
              className="mt-3 cursor-pointer rounded-sm border border-neutral-700 px-6 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:brightness-110"
              type="button"
            >
              Escolher template
            </button>
          </article>
        </div>
        <div
          className={`w-full rounded-sm border bg-white px-3 py-4 ${selectedTemplate === 'secondary' ? 'border-rose-500' : 'border-slate-300'}`}
        >
          <figure className="h-[140px] w-full rounded-sm bg-neutral-500" />
          <article className="flex w-full flex-col">
            <h3 className="mt-3 text-base font-bold">Template Azul</h3>
            <p className="text-sm text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil id
              delectus cupiditate est repellat necessitatibus provident
              doloremque rem voluptates
            </p>
            <button
              onClick={() => {
                setValue('design_template', 'secondary')
                setSelectedTemplate('secondary')
              }}
              className="mt-3 cursor-pointer rounded-sm border border-neutral-700 px-6 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:brightness-110"
              type="button"
            >
              Escolher template
            </button>
          </article>
        </div>
        <div
          className={`w-full rounded-sm border bg-white px-3 py-4 ${selectedTemplate === 'tertiary' ? 'border-rose-500' : 'border-slate-300'}`}
        >
          <figure className="h-[140px] w-full rounded-sm bg-neutral-500" />
          <article className="mt-4 flex w-full flex-col">
            <h3 className="text-base font-bold">Template Azul</h3>
            <p className="text-sm text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil id
              delectus cupiditate est repellat necessitatibus provident
              doloremque rem voluptates
            </p>
            <button
              onClick={() => {
                setValue('design_template', 'tertiary')
                setSelectedTemplate('tertiary')
              }}
              className="mt-3 cursor-pointer rounded-sm border border-neutral-700 px-6 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:brightness-110"
              type="button"
            >
              Escolher template
            </button>
          </article>
        </div>
        <div
          className={`w-full rounded-sm border bg-white px-3 py-4 ${selectedTemplate === 'quarternary' ? 'border-rose-500' : 'border-slate-300'}`}
        >
          <figure className="h-[140px] w-full rounded-sm bg-neutral-500" />
          <article className="flex w-full flex-col">
            <h3 className="mt-3 text-base font-bold">Template Azul</h3>
            <p className="text-sm text-neutral-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil id
              delectus cupiditate est repellat necessitatibus provident
              doloremque rem voluptates
            </p>
            <button
              onClick={() => {
                setValue('design_template', 'quarternary')
                setSelectedTemplate('quarternary')
              }}
              className="mt-3 cursor-pointer rounded-sm border border-neutral-700 px-6 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:brightness-110"
              type="button"
            >
              Escolher template
            </button>
          </article>
        </div>
      </div>
      <div className="flex w-full items-center gap-4 lg:justify-between">
        <div className="item-center flex w-full justify-start">
          <button
            className="cursor-pointer rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all duration-150 hover:brightness-110 lg:text-base"
            onClick={prevStep}
            type="button"
          >
            Voltar
          </button>
        </div>
        <div className="item-center flex w-full justify-end">
          <button
            onClick={() => {
              console.log(errors)
            }}
            className="duration-15- flex cursor-pointer items-center gap-4 rounded-sm bg-neutral-700 px-6 py-2 text-sm font-semibold text-white transition-all hover:brightness-110 lg:text-base"
            disabled={isSubmitting}
            type="submit"
          >
            Finalizar
            {isSubmitting ? <Spin /> : null}
          </button>
        </div>
      </div>
    </form>
  )
}
