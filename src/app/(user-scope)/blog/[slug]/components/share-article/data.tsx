import { FacebookIcon } from '@/assets/icons/facebook'
import { TwitterIcon } from '@/assets/icons/twitter'
import { WhatsappIcon } from '@/assets/icons/whatsapp'

import type { ShareLink } from './types'

const baseDomain = process.env.NEXT_PUBLIC_BASE_URL

export const SHARE_LINKS: ShareLink[] = [
  {
    icon: <FacebookIcon className="h-6 w-6 lg:h-7 lg:w-7" />,
    href: `https://www.facebook.com/sharer.php?u=${baseDomain}`,
    type: 'facebook'
  },
  {
    icon: <TwitterIcon className="h-6 w-6 lg:h-7 lg:w-7" />,
    href: `https://twitter.com/intent/tweet?text=${baseDomain}`,
    type: 'twitter'
  },
  {
    icon: <WhatsappIcon className="h-6 w-6 lg:h-7 lg:w-7" />,
    href: `https://api.whatsapp.com/send?text=${baseDomain}`,
    type: 'whatsapp'
  }
]
