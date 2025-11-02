import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren
} from 'react'

export type EditableCopyFieldProps<T extends ElementType = 'div'> =
  PropsWithChildren<ComponentPropsWithoutRef<T>> & {
    as?: T
    className?: string
    'data-cid'?: string
    defaultValue: string
    onChange?: (value: unknown) => void
  }
