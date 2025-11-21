'use client'

import type { FC } from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'

import { QuestionItem } from './question-item'
import type { FaqProps } from './types'

export const FAQ: FC<FaqProps> = ({ color, copy }) => {
  return (
    <section className="px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between">
        <article className="flex w-full flex-col gap-6">
          <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-500 backdrop-blur-[10px] transition duration-200">
            FAQs
          </span>
          <h2 className="text-2xl font-bold lg:text-5xl xl:text-6xl">
            Perguntas <br /> mais frequentes
          </h2>
          <p className="text-sm text-slate-500 lg:text-base">
            Respostas para as perguntas mais frequentes da nossa comunidade{' '}
            <br /> Não teve sua pergunta respondida? Entre em contato com a
            gente:
          </p>
          <EditableCopyField
            as="div"
            className={`mt-2 flex max-w-fit cursor-pointer items-center justify-center rounded-md border px-6 py-2 text-center text-sm transition-all duration-300 hover:brightness-105 text-${color}-500 border-${color}-500`}
            defaultValue={copy.anchor}
          />
        </article>
        <div className="flex w-full flex-col gap-y-6">
          {copy.questions.map((question, index) => (
            <QuestionItem
              copy={question}
              index={index}
              key={`cmms-questions-question-${question.title}-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
