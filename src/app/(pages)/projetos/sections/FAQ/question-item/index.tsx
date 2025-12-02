'use client'

import { useEffect, useState } from 'react'

import { PlusIcon } from '../../icons/plus-icon'
import type { QuestionItemProps } from './types'

export const QuestionItem: React.FC<QuestionItemProps> = ({ copy, index }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(false)
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
    setIsQuestionOpen(index === 0)
  }, [index])

  return (
    <button
      className={`group w-full cursor-pointer rounded-sm bg-slate-100 p-4 transition`}
      onClick={() => setIsQuestionOpen(!isQuestionOpen)}
    >
      <div
        className={`${
          isQuestionOpen ? 'mb-2' : 'mb-0'
        } flex w-full items-center justify-between gap-3 transition-all`}
      >
        <h3
          className={`text-left text-base font-medium transition-all group-hover:brightness-125 sm:text-lg lg:font-semibold`}
        >
          {copy.title}
        </h3>

        <figure className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800">
          <PlusIcon
            className={`h-4 w-4 border-white stroke-white text-white duration-300 ${
              isQuestionOpen ? 'rotate-45' : 'rotate-90'
            }`}
          />
        </figure>
      </div>

      {isClient && (
        <p
          style={{
            maxHeight: isQuestionOpen ? '400px' : '0px'
          }}
          className={`overflow-hidden text-left text-sm text-slate-500 transition-all duration-300 ease-in-out md:text-base`}
          dangerouslySetInnerHTML={{ __html: copy.description }}
        />
      )}
    </button>
  )
}
