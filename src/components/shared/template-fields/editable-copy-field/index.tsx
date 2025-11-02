import { createElement } from 'react'

import type { EditableCopyFieldProps } from './types'

export const EditableCopyField = <T extends React.ElementType = 'div'>({
  children,
  className = '',
  'data-cid': dataCid,
  as,
  defaultValue = '',
  onChange,
  ...props
}: EditableCopyFieldProps<T>) => {
  const Component = as || 'div'

  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    if (onChange) onChange(e.currentTarget.textContent || defaultValue)
  }

  return createElement(Component, {
    className: `outline-0 ${className}`,
    'data-cid': dataCid,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: handleInput,
    spellCheck: false,
    ...props,
    children: defaultValue
  })
}
