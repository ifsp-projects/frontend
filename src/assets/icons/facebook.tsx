import type { FC } from 'react'

import type { IconProps } from '@/types/components/icon-props'

export const FacebookIcon: FC<IconProps> = props => {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="24px"
      role="img"
      viewBox="0 0 24 24"
      width="24px"
      {...props}
    >
      <path d="M22 12.037C22 6.494 17.523 2 12 2S2 6.494 2 12.037c0 4.707 3.229 8.656 7.584 9.741v-6.674H7.522v-3.067h2.062v-1.322c0-3.416 1.54-5 4.882-5 .634 0 1.727.125 2.174.25v2.78a12.807 12.807 0 0 0-1.155-.037c-1.64 0-2.273.623-2.273 2.244v1.085h3.266l-.56 3.067h-2.706V22C18.164 21.4 22 17.168 22 12.037z"></path>
    </svg>
  )
}
