'use client'

import { motion } from 'framer-motion'
import type { FC } from 'react'

import { EditableCopyField } from '@/components/page-builder/template-fields/editable-copy-field'
import { EditableIconField } from '@/components/page-builder/template-fields/editable-icon-field'

import type { StepsProps } from './types'

export const Steps: FC<StepsProps> = ({ cards }) => {
  return (
    <div className="mx-auto grid w-full grid-cols-2 gap-4 lg:flex lg:flex-row lg:justify-between lg:gap-8">
      {cards.map((card, index: number) => (
        <motion.div
          className="flex w-full flex-col items-center gap-2 rounded-sm border border-neutral-200 bg-white px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          key={`how-it-works-card-${index}`}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <figure className="flex items-center justify-center rounded-sm bg-blue-100 p-2">
            <EditableIconField
              defaultValue={card.icon}
              iconClassName="h-6 w-6 text-blue-400 lg:h-7 lg:w-7"
              path={`aboutUs.cards[${index}].icon`}
            />
          </figure>
          <EditableCopyField
            as="p"
            className="mt-1 text-center font-bold lg:text-xl"
            defaultValue={card.title}
            path={`aboutUs.cards[${index}].title`}
          />
          <EditableCopyField
            as="p"
            className="text-center text-sm text-neutral-500 lg:text-base"
            defaultValue={card.description}
            path={`aboutUs.cards[${index}].description`}
          />
        </motion.div>
      ))}
    </div>
  )
}
