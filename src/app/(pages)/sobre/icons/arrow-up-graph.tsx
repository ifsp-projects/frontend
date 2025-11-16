import type { IconProps } from '@/types/components/icon-props'

export const ArrowUpGraph: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.3 21.8V8.40005H17V21.8H14.7V12.3H9.3V21.8H7V16H1.7V21.7001H0.5V23.2001H1.7H7H9.3H14.6H17H22.3H23.5V21.7001H22.3V21.8ZM3.2 21.8V17.6H5.5V21.8H3.2ZM10.8 21.8V13.8H13.1V21.8H10.8ZM18.5 21.8V9.90005H20.8V21.8H18.5ZM2.5 10.8V9.30005C8.4 9.30005 14.1 6.90005 18.2 2.80005L18.8 2.20005H15.8V0.800049H21.3V6.30005H19.8V3.30005L19.2 3.90005C14.9 8.30005 8.7 10.8 2.5 10.8Z"
        fill="currentColor"
      />
    </svg>
  )
}
