'use client'

import type { FC } from 'react'

import { Sparkles } from './icons/sparkles'

export const CopyGenerator: FC = () => {
  return (
    <div className="fixed right-8 bottom-8 z-30 flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-rose-700 to-rose-500 px-4 py-2 shadow transition-all duration-200 hover:brightness-110">
      <p className="text-sm font-medium text-white xl:text-base">
        Gerar texto automaticamente
      </p>
      <Sparkles className="h-5 w-5 text-white" />
    </div>
  )
}
