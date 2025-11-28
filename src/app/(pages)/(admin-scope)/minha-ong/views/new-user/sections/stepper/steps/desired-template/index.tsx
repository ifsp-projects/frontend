import Image from 'next/image'
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
          <figure className="h-[140px] w-full rounded-sm">
            <Image
              alt="Primary Layout Preview"
              className="h-full w-full rounded-sm object-cover"
              height={720}
              src="/templates/primary-layout-preview.png"
              width={1080}
            />
          </figure>
          <article className="flex w-full flex-col">
            <h3 className="mt-3 text-base font-bold">Template 1</h3>
            <p className="min-h-[120px] text-sm text-neutral-500">
              Um layout moderno e flexível, ideal para quem deseja começar
              rápido. Perfeito para apresentar seus conteúdos com clareza e
              impacto visual.
            </p>
            <button
              onClick={() => {
                setValue('design_template', 'primary')
                setSelectedTemplate('primary')
              }}
              className="mt-3 cursor-pointer rounded-sm border border-neutral-700 px-6 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-700 hover:text-white"
              type="button"
            >
              Escolher template
            </button>
          </article>
        </div>
        <div
          className={`w-full rounded-sm border bg-white px-3 py-4 ${selectedTemplate === 'secondary' ? 'border-rose-500' : 'border-slate-300'}`}
        >
          <figure className="h-[140px] w-full rounded-sm">
            <Image
              alt="Secondary Layout Preview"
              className="h-full w-full rounded-sm object-cover"
              height={720}
              src="/templates/secondary-layout-preview.png"
              width={1080}
            />
          </figure>
          <article className="flex w-full flex-col">
            <h3 className="mt-3 text-base font-bold">Template 2</h3>
            <p className="min-h-[120px] text-sm text-neutral-500">
              Um visual mais institucional, ótimo para páginas profissionais.
              Destaque informações importantes de maneira organizada e com alta
              legibilidade.
            </p>
            <button
              onClick={() => {
                setValue('design_template', 'secondary')
                setSelectedTemplate('secondary')
              }}
              className="mt-3 cursor-pointer rounded-sm border border-neutral-700 px-6 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-700 hover:text-white"
              type="button"
            >
              Escolher template
            </button>
          </article>
        </div>
        <div
          className={`w-full rounded-sm border bg-white px-3 py-4 ${selectedTemplate === 'tertiary' ? 'border-rose-500' : 'border-slate-300'}`}
        >
          <figure className="h-[140px] w-full rounded-sm">
            <Image
              alt="Tertiary Layout Preview"
              className="h-full w-full rounded-sm object-cover"
              height={720}
              src="https://img.freepik.com/premium-vector/gradient-yellow-abstract-wave-background-landing-page-template-websites-apps_213860-3101.jpg"
              width={1080}
            />
          </figure>
          <article className="mt-4 flex w-full flex-col">
            <h3 className="text-base font-bold">Template 3</h3>
            <p className="min-h-[116px] text-sm text-neutral-500">
              Um template focado em impacto visual. Excelente para quem quer
              valorizar imagens, portfólios ou conteúdos mais dinâmicos.
            </p>
            <button
              onClick={() => {
                setValue('design_template', 'tertiary')
                setSelectedTemplate('tertiary')
              }}
              className="mt-3 cursor-pointer rounded-sm border border-neutral-700 px-6 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-700 hover:text-white"
              type="button"
            >
              Escolher template
            </button>
          </article>
        </div>
        <div
          className={`w-full rounded-sm border bg-white px-3 py-4 ${selectedTemplate === 'quarternary' ? 'border-rose-500' : 'border-slate-300'}`}
        >
          <figure className="h-[140px] w-full rounded-sm">
            <Image
              alt="Quarternary Layout Preview"
              className="h-full w-full rounded-sm object-cover"
              height={720}
              src="https://static.vecteezy.com/system/resources/previews/016/086/830/non_2x/abstract-landing-page-in-red-color-vector.jpg"
              width={1080}
            />
          </figure>
          <article className="flex w-full flex-col">
            <h3 className="mt-3 text-base font-bold">Template 4</h3>
            <p className="min-h-[120px] text-sm text-neutral-500">
              Estrutura simples e objetiva para quem prefere algo direto ao
              ponto. Fácil de personalizar e ideal para páginas rápidas e
              informativas.
            </p>
            <button
              onClick={() => {
                setValue('design_template', 'quarternary')
                setSelectedTemplate('quarternary')
              }}
              className="mt-3 cursor-pointer rounded-sm border border-neutral-700 px-6 py-1.5 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-neutral-700 hover:text-white"
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
