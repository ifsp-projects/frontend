import { FacebookIcon } from '@/assets/icons/facebook'
import { TwitterIcon } from '@/assets/icons/twitter'
import { InstagramIcon } from '@/assets/socials/instagram'

export const SOCIAL_NETWORKS = [
  {
    id: 'instagram_url',
    Icon: InstagramIcon,
    placeholder: 'Instagram do seu projeto',
    iconClass: 'h-10 w-10 fill-rose-400 text-rose-400'
  },
  {
    id: 'facebook_url',
    Icon: FacebookIcon,
    placeholder: 'Facebook do seu projeto',
    iconClass: 'h-7 w-7'
  },
  {
    id: 'twitter_url',
    Icon: TwitterIcon,
    placeholder: 'Twitter do seu projeto',
    iconClass: 'h-7 w-7'
  }
] as const
