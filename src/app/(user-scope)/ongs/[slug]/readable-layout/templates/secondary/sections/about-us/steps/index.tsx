'use client'

import { motion } from 'framer-motion'
import type { FC } from 'react'
import React from 'react'

import { EDITABLE_ICON_FIELD_ICONS } from '@/components/shared/template-fields/editable-icon-field/data'

import type { StepProps } from './types'

export const Steps: FC<StepProps> = ({ cards }) => {
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
            {React.cloneElement(
              EDITABLE_ICON_FIELD_ICONS[card.icon] as React.ReactElement<{
                className?: string
              }>,
              {
                className: 'h-6 w-6 text-blue-400 lg:h-7 lg:w-7'
              }
            )}
          </figure>
          <h3 className="mt-1 text-center font-bold lg:text-xl">
            {card.title}
          </h3>
          <p className="text-center text-sm text-neutral-500 lg:text-base">
            {card.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
