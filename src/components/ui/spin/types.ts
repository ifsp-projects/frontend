import type { VariantProps } from 'class-variance-authority'

import type { spinVariants } from './variance'

export interface SpinProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof spinVariants> {
  size?: 'small' | 'medium' | 'large'
}
