import type { IconProps } from '@/types/components/icon-props'

export const DrawEffect: React.FC<IconProps> = async props => {
  return (
    <svg
      className="-bottom-[32px] -left-[12px] block"
      fill="none"
      height="32"
      viewBox="0 0 207 32"
      width="207"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path-underline"
        d="M6.78386 10.0373L202.192 10.7761L29.2835 20.3483L179 20.3483"
        stroke="#FBACB0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      ></path>
    </svg>
  )
}
