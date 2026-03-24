import type { FC } from 'react'

import type { IconProps } from '@/types/components/icon-props'

export const DrawingCopy: FC<IconProps> = props => {
  return (
    <svg height="25" role="presentation" width="25" {...props}>
      <use
        href="/static/blogv2/images/icons.svg?version=pr20251002-1653#social-link"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      ></use>
    </svg>
  )
}
