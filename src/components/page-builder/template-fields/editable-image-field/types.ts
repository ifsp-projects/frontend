import type { CSSProperties } from 'react'

export interface EditableImageFieldProps {
  alt?: string
  className?: string
  defaultValue?: string
  height?: number
  path: string
  style?: CSSProperties
  uploadPreset?: string
  width?: number
}
