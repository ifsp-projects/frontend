'use client'

import { ArrowRight } from 'lucide-react'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { usePageBuilderStore } from '@/stores/page-builder-store'
import { PencilBox } from '@vectoricons/atlas-icons-react'

import type { EditableLinkFieldProps } from './types'

type Variant = 'filled' | 'outline' | 'ghost'

interface LinkState {
  href: string
  label: string
  showArrow: boolean
  variant: Variant
}

// const VARIANT_LABELS: Record<Variant, string> = {
//   filled: 'Preenchido',
//   outline: 'Contorno',
//   ghost: 'Fantasma'
// }

export const EditableLinkField: FC<EditableLinkFieldProps> = ({
  path,
  defaultValue = {},
  className = '',
  iconClassName = 'h-4 w-4'
}) => {
  const updateField = usePageBuilderStore(state => state.updateField)
  const [isOpen, setIsOpen] = useState(false)

  const [state, setState] = useState<LinkState>({
    label: defaultValue.label ?? 'Clique aqui',
    href: defaultValue.href ?? '#',
    showArrow: defaultValue.showArrow ?? false,
    variant: defaultValue.variant ?? 'filled'
  })

  const [draft, setDraft] = useState<LinkState>(state)

  useEffect(() => {
    const next: LinkState = {
      label: defaultValue.label ?? 'Clique aqui',
      href: defaultValue.href ?? '#',
      showArrow: defaultValue.showArrow ?? false,
      variant: defaultValue.variant ?? 'filled'
    }
    setState(next)
    setDraft(next)
  }, [
    defaultValue.label,
    defaultValue.href,
    defaultValue.showArrow,
    defaultValue.variant
  ])

  const handleOpen = (open: boolean) => {
    if (open) setDraft(state)
    setIsOpen(open)
  }

  const handleSave = () => {
    setState(draft)
    updateField(path, draft)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setDraft(state)
    setIsOpen(false)
  }

  return (
    <Dialog onOpenChange={handleOpen} open={isOpen}>
      <DialogTrigger asChild>
        <div className={`group relative inline-flex`}>
          <a
            className={`flex items-center justify-center gap-2 ${className}`}
            href={state.href}
            onClick={e => e.preventDefault()}
            rel="noreferrer"
            target="_blank"
          >
            {state.label}
            {state.showArrow && <ArrowRight className={iconClassName} />}
          </a>

          <figure className="absolute -inset-1 z-10 flex cursor-pointer items-center justify-center rounded-md bg-black/50 font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <PencilBox className="h-4 w-4 text-white" />
          </figure>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Editar Link</DialogTitle>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-neutral-700">
              Texto do botão
            </label>
            <input
              onChange={e =>
                setDraft(prev => ({ ...prev, label: e.target.value }))
              }
              className="rounded-md border border-neutral-200 px-3 py-2 text-sm transition outline-none focus:border-neutral-400 focus:ring-1 focus:ring-neutral-400"
              placeholder="Ex: Saiba mais"
              type="text"
              value={draft.label}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-neutral-700">URL</label>
            <input
              onChange={e =>
                setDraft(prev => ({ ...prev, href: e.target.value }))
              }
              className="focus:neutral-rose-400 rounded-md border border-neutral-200 px-3 py-2 text-sm transition outline-none focus:border-neutral-400 focus:ring-1"
              placeholder="https://..."
              type="url"
              value={draft.href}
            />
          </div>

          {/* <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-neutral-700">
              Estilo
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(VARIANT_STYLES) as Variant[]).map(v => (
                <button
                  className={`rounded-md border px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    draft.variant === v
                      ? 'border-rose-500 bg-rose-50 text-rose-600 ring-1 ring-rose-400'
                      : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                  }`}
                  key={v}
                  onClick={() => setDraft(prev => ({ ...prev, variant: v }))}
                  type="button"
                >
                  {VARIANT_LABELS[v]}
                </button>
              ))}
            </div>
          </div> */}

          <label className="flex cursor-pointer items-center gap-3">
            <div className="relative">
              <input
                onChange={e =>
                  setDraft(prev => ({ ...prev, showArrow: e.target.checked }))
                }
                checked={draft.showArrow}
                className="peer sr-only"
                type="checkbox"
              />
              <div className="h-5 w-9 rounded-full bg-neutral-200 transition peer-checked:bg-neutral-500" />
              <div className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-4" />
            </div>
            <span className="text-sm font-medium text-neutral-700">
              Mostrar seta
            </span>
          </label>

          <div className="rounded-md border border-dashed border-neutral-200 bg-neutral-50 p-4">
            <p className="mb-2 text-xs font-medium tracking-wide text-neutral-400 uppercase">
              Pré-visualização
            </p>
            <a
              className={`flex items-center justify-center gap-2 ${className}`}
              href="#"
              onClick={e => e.preventDefault()}
            >
              {draft.label || 'Clique aqui'}
              {draft.showArrow && <ArrowRight className={iconClassName} />}
            </a>
          </div>

          <div className="flex justify-end gap-2 border-t border-neutral-100 pt-2">
            <button
              className="cursor-pointer rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50"
              onClick={handleCancel}
              type="button"
            >
              Cancelar
            </button>
            <button
              className="cursor-pointer rounded-md bg-neutral-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
              onClick={handleSave}
              type="button"
            >
              Salvar
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
