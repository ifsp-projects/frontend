'use client'

import axios from 'axios'
import type { FC } from 'react'
import { toast } from 'react-toastify'

import { useUserSession } from '@/hooks/use-user-session'
import { usePageBuilderStore } from '@/stores/page-builder-store'
import {
  ArrowUpGraph,
  DashboardPerformance,
  Eye,
  QuestionMessage,
  Sunny
} from '@vectoricons/atlas-icons-react'

import type { ToolbarProps } from './types'

export const Toolbar: FC<ToolbarProps> = ({ slug, id }) => {
  const { token } = useUserSession()

  const getSections = usePageBuilderStore(state => state.getSections)

  const handleSave = async () => {
    const currentSections = getSections()

    try {
      await axios.post('/api/pages/update-copies', {
        slug,
        id,
        sections: currentSections,
        token
      })
      toast.success('Página salva com sucesso!')
    } catch (savePageCopiesError) {
      toast.error(savePageCopiesError)
    }
  }

  return (
    <div className="fixed bottom-8 left-1/2 z-30 flex w-full max-w-[392px] -translate-x-1/2 transform items-center gap-1 rounded-sm bg-gradient-to-r from-neutral-900 to-neutral-800 px-1 py-1 shadow lg:justify-between">
      <button
        onClick={() => {
          console.log('futuramente abril modal de suporte aqui')
        }}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
        type="button"
      >
        <QuestionMessage className="h-5 w-5 text-neutral-50" />
      </button>
      <div className="flex w-full flex-1 gap-1 border-x border-neutral-700 px-1">
        <button
          onClick={() => {
            console.log('futuramente abril modal de suporte aqui')
          }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
          type="button"
        >
          <Eye className="h-5 w-5 text-neutral-50" />
        </button>
        <button
          onClick={() => {
            console.log('futuramente abril modal de suporte aqui')
          }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
          type="button"
        >
          <ArrowUpGraph className="h-5 w-5 text-neutral-50" />
        </button>
        <button
          onClick={() => {
            console.log('futuramente abril modal de suporte aqui')
          }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
          type="button"
        >
          <DashboardPerformance className="h-5 w-5 text-neutral-50" />
        </button>
        <button
          onClick={() => {
            console.log('futuramente abril modal de suporte aqui')
          }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
          type="button"
        >
          <Sunny className="h-5 w-5 text-neutral-50" />
        </button>
      </div>
      <div className="w-auto px-2">
        <button
          className="cursor-pointer rounded-sm border border-white px-3 py-1.5 text-sm font-medium text-white transition-all duration-200 hover:bg-neutral-50 hover:text-neutral-700"
          onClick={() => handleSave()}
          type="button"
        >
          Salvar Alterações
        </button>
      </div>
    </div>
  )
}
