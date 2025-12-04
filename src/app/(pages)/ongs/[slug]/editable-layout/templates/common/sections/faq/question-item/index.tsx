'use client'

import { useEffect, useState } from 'react'

import { EditableCopyField } from '@/components/shared/template-fields/editable-copy-field'

import type { QuestionItemProps } from './types'

export const QuestionItem: React.FC<QuestionItemProps> = ({ copy, index }) => {
  const isQuestionOpen = true
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
  }, [index])

  return (
    <button
      className={`group w-full cursor-pointer rounded-sm bg-neutral-100 p-4 transition`}
    >
      <div
        className={`${
          isQuestionOpen ? 'mb-2' : 'mb-0'
        } flex w-full items-center justify-between gap-3 transition-all`}
      >
        <EditableCopyField
          as="h3"
          className={`text-left text-base font-medium transition-all group-hover:brightness-125 sm:text-lg lg:font-semibold`}
          defaultValue={copy.title}
          path={`faq.questions[${index}].title`}
        />
      </div>

      {isClient && (
        <EditableCopyField
          as="p"
          className={`max-h-[400px] overflow-hidden text-left text-sm text-neutral-500 transition-all duration-300 ease-in-out md:text-base`}
          defaultValue={copy.description}
          path={`faq.questions[${index}].description`}
        />
      )}
    </button>
  )
}
