import type { IconProps } from '@/shared/types/icon-props'

export const ActiveColor: React.FC<IconProps> = props => {
  return (
    <svg
      className="h-4 w-4 text-white drop-shadow"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
