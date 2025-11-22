import type { IconProps } from '@/types/components/icon-props'

export const ArrowRight: React.FC<IconProps> = props => {
  return (
    <svg
      className={`lucide lucide-arrow-right-icon lucide-arrow-right`}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
