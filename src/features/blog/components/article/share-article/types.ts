import type React from 'react'

type SocialMediaNames = 'facebook' | 'whatsapp' | 'twitter'

export interface ShareLink {
  href: string
  icon: React.JSX.Element
  type: SocialMediaNames
}
