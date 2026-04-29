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
}
