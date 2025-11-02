import type { HTMLProps, PropsWithChildren } from 'react'

type ClassName = HTMLProps<HTMLElement>['className']

export interface EditableCopyFieldProps
  extends PropsWithChildren,
    HTMLProps<HTMLElement> {
  as?: keyof JSX.IntrinsicElements
  className?: ClassName
  'data-cid'?: string
  defaultValue: string
  onChange?: (value: unknown) => void
}
