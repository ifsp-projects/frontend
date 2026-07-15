import type { IconProps } from '@/shared/types/icon-props'

export const ChevronRightIcon: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
