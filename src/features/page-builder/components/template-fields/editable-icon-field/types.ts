import type { CSSProperties } from 'react'

export interface EditableIconFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  iconClassName?: string
  path: string
  style?: CSSProperties
}
