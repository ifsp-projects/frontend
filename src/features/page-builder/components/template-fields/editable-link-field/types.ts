import type { CSSProperties } from 'react'

export interface EditableLinkFieldProps {
  className?: string
  defaultValue?: {
    label?: string
    href?: string
    showArrow?: boolean
    variant?: 'filled' | 'outline' | 'ghost'
  }
  iconClassName?: string
  path: string
  style?: CSSProperties
}

export type Variant = 'filled' | 'outline' | 'ghost'

export interface LinkState {
  href: string
  label: string
  showArrow: boolean
  variant: Variant
}
