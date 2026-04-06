import type { IconProps } from '@/types/components/icon-props'

export const FacebookIcon: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      height="44"
      viewBox="0 0 44 44"
      width="44"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect fill="#fff" height="44" rx="2" width="44" />
      <path
        d="M27.141 22.0097H23.777V34H18.7926V22.0097H16.4229V17.7717H18.7926V15.0304C18.7926 13.0676 19.7255 10 23.823 10L27.5166 10.0145V14.1282H24.8359C24.3997 14.1282 23.7786 14.3462 23.7786 15.2824V17.7725H27.5764L27.141 22.0097Z"
        fill="#3b82f6"
      />
    </svg>
  )
}
