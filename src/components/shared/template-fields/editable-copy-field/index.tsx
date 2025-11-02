import { createElement } from 'react'

import type { EditableCopyFieldProps } from './types'

export const EditableCopyField: React.FC<EditableCopyFieldProps> = ({
  children,
  className = '',
  'data-cid': dataCid,
  as = 'div',
  defaultValue = '',
  onChange,
  ...props
}) => {
  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    if (onChange) onChange(e.currentTarget.textContent || defaultValue)
  }

  return createElement(as, {
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
