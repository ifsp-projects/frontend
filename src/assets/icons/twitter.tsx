import type { FC } from 'react'

import type { IconProps } from '@/types/components/icon-props'

export const TwitterIcon: FC<IconProps> = props => {
  return (
    <svg
      fill="currentColor"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>X</title>
      <path
        clipRule="evenodd"
        d="M8.26892 3H2L9.49268 12.7863L2.02576 21H4.72864L10.7284 14.4003L15.7812 21H22.0502L14.1313 10.6571L21.0923 3H18.3894L12.8956 9.04309L8.26892 3ZM16.7689 19L6.05017 5H7.28125L18 19H16.7689Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}
