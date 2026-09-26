'use client'

import type { VisitorsRange, VisitorsResponse } from 'capivara-solidaria-ts-sdk'
import type { ReactNode, RefObject } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/shared/components/ui/dialog'
import { ScrollArea } from '@/shared/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components/ui/select'

const calendarDate = (date: string) => {
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}

const updatedTime = (instant: string) =>
  new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    dateStyle: 'short',
    timeStyle: 'short'
  }).format(new Date(instant))

type VisitorsModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  range: VisitorsRange
  onRangeChange: (range: VisitorsRange) => void
  loading: boolean
  data: VisitorsResponse | null
  triggerRef?: RefObject<HTMLButtonElement | null>
  children?: ReactNode
}

export function VisitorsModal({
  open,
  onOpenChange,
  range,
  onRangeChange,
  loading,
  data,
  triggerRef,
  children
}: VisitorsModalProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent
        onCloseAutoFocus={event => {
          if (!triggerRef?.current) return
          event.preventDefault()
          triggerRef.current.focus()
        }}
        className="flex max-h-[min(760px,calc(100dvh-2rem))] w-[calc(100vw-2rem)] max-w-2xl min-w-0 flex-col gap-0 overflow-hidden rounded-lg border-neutral-200 bg-white p-0 text-neutral-700 sm:max-w-2xl"
        showCloseButton={false}
      >
        <DialogHeader className="shrink-0 gap-1 border-b border-neutral-200 px-5 py-4 text-left sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <DialogTitle className="text-xl font-semibold text-neutral-700">
              Visitantes
            </DialogTitle>
            <button
              aria-label="Fechar visitantes"
              className="rounded-sm px-2 text-xl leading-none text-neutral-700 hover:text-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
              onClick={() => onOpenChange(false)}
              type="button"
            >
              ×
            </button>
          </div>
          <DialogDescription className="text-sm text-neutral-700">
            {data
              ? `${calendarDate(data.period_start)} a ${calendarDate(data.period_end)}`
              : 'Movimento da página pública'}
          </DialogDescription>
        </DialogHeader>

        <div className="shrink-0 border-b border-neutral-200 px-5 py-4 sm:px-6">
          <label
            className="mb-1 block text-sm font-medium"
            htmlFor="visitors-range"
          >
            Período
          </label>
          <Select
            onValueChange={value => onRangeChange(value as VisitorsRange)}
            value={range}
          >
            <SelectTrigger
              aria-label="Período"
              className="w-full max-w-xs focus-visible:outline-2 focus-visible:outline-rose-700"
              id="visitors-range"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ScrollArea className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {loading ? (
            <div
              aria-live="polite"
              className="flex items-center justify-center gap-3 py-12"
              role="status"
            >
              <span className="size-6 animate-spin rounded-full border-2 border-neutral-200 border-t-rose-400 motion-reduce:animate-none" />
              <span>Carregando visitantes...</span>
            </div>
          ) : data?.pageviews === 0 ? (
            <div className="flex flex-col gap-5">
              <p className="text-center text-neutral-700">
                Nenhuma visita neste período
              </p>
              {children}
            </div>
          ) : (
            children
          )}
        </ScrollArea>

        <footer className="flex shrink-0 flex-wrap gap-x-3 gap-y-1 border-t border-neutral-200 px-5 py-3 text-xs text-neutral-700 sm:px-6">
          <span>Dados via PostHog</span>
          <span>Horário de Brasília</span>
          {data && <span>Atualizado em {updatedTime(data.updated_at)}</span>}
        </footer>
      </DialogContent>
    </Dialog>
  )
}
