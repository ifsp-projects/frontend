'use client'

import type { ReactElement } from 'react'
import React, { type FC, useEffect, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { usePageBuilderStore } from '@/stores/page-builder-store'
import { PencilBox } from '@vectoricons/atlas-icons-react'

import { EDITABLE_ICON_FIELD_ICONS, type IconKey } from './data'
import type { EditableIconFieldProps } from './types'

export const EditableIconField: FC<EditableIconFieldProps> = ({
  path,
  defaultValue = 'star-lightbulb',
  className = '',
  iconClassName = 'w-4 h-4',
  ...props
}) => {
  const updateField = usePageBuilderStore(state => state.updateField)

  const [currentIconKey, setCurrentIconKey] = useState<string>(defaultValue)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setCurrentIconKey(defaultValue)
  }, [defaultValue])

  const handleIconSelect = (key: string) => {
    setCurrentIconKey(key)
    updateField(path, key)
    setIsOpen(false)
  }

  const CurrentIcon =
    EDITABLE_ICON_FIELD_ICONS[currentIconKey as IconKey] ||
    EDITABLE_ICON_FIELD_ICONS['star-lightbulb']

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <div
          className={`group relative flex cursor-pointer items-center justify-center ${className}`}
          {...props}
        >
          <div className={iconClassName}>
            {React.isValidElement(CurrentIcon)
              ? React.cloneElement(
                  CurrentIcon as ReactElement<{ className?: string }>,
                  {
                    className: iconClassName
                  }
                )
              : null}
          </div>

          <div className="absolute -inset-2 z-10 flex items-center justify-center rounded-sm bg-black/50 font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <PencilBox className="h-5 w-5 text-white" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="flex max-h-[80vh] max-w-2xl flex-col">
        <DialogHeader>
          <DialogTitle>Selecionar Ícone</DialogTitle>
        </DialogHeader>

        <ScrollArea className="mt-4 h-full min-h-[300px] flex-1 pr-4">
          <div className="grid max-h-[360px] grid-cols-4 gap-4 pb-4 sm:grid-cols-4">
            {Object.entries(EDITABLE_ICON_FIELD_ICONS).map(([key, icon]) => (
              <button
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border p-4 transition-all duration-300 hover:bg-neutral-100 focus:ring-2 focus:ring-neutral-900 focus:outline-none ${currentIconKey === key ? 'border-rose-500 bg-neutral-50 ring-1 ring-rose-400' : 'border-neutral-200'} `}
                key={key}
                onClick={() => handleIconSelect(key)}
                type="button"
              >
                <div className="flex h-8 w-8 items-center justify-center text-neutral-700">
                  {icon}
                </div>
                <span className="w-full truncate text-center text-[10px] text-neutral-500">
                  {key.replace(/-/g, ' ')}
                </span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
