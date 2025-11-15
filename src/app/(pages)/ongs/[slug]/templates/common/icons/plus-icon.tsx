import type { IconProps } from '../../../../../../../types/components/icon-props'

export const PlusIcon: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      id="i-plus"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M16 2 L16 30 M2 16 L30 16"></path>{' '}
      </g>
    </svg>
  )
}
