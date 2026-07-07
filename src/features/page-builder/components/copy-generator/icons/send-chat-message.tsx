import React from 'react'

import type { IconProps } from '@/types/components/icon-props'

export const SendChatMessage: React.FC<IconProps> = props => {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  )
}
