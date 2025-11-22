'use client'

import { createElement } from 'react'

import { usePageBuilderStore } from '@/stores/page-builder-store'

import type { EditableCopyFieldProps } from './types'

export const EditableCopyField = <T extends React.ElementType = 'div'>({
  children,
  className = '',
  'data-cid': dataCid,
  as,
  defaultValue = '',
  onChange,
  path,
  ...props
}: EditableCopyFieldProps<T>) => {
  const Component = as || 'div'
  const updateField = usePageBuilderStore(state => state.updateField)

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    const value = e.currentTarget.textContent || ''

    updateField(path, value)

    if (onChange) onChange(value)
  }

  return createElement(Component, {
    className: `outline-0 ${className}`,
    'data-cid': dataCid,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: handleInput,
    onBlur: handleInput,
    spellCheck: false,
    ...props,
    children: defaultValue
  })
}
