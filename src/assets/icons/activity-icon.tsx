import type { SVGProps } from 'react'

export const ActivityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    height="1em"
    viewBox="0 0 36 36"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        clipRule="evenodd"
        d="M25.35 5.65H28c1.29 0 2.35 1.05 2.35 2.35v23c0 1.3-1.05 2.35-2.35 2.35H8c-1.3 0-2.35-1.05-2.35-2.35V8c0-1.3 1.06-2.35 2.35-2.35h2.65V5c0-1.3 1.05-2.35 2.35-2.35h10c1.3 0 2.35 1.05 2.35 2.35zm-12-.3v2.3h9.3v-2.3zm-5 25.3h19.3V8.35h-2.34c-.17 1.13-1.13 2-2.31 2H13c-1.17 0-2.14-.87-2.31-2H8.35zm0 0H8h.35m0 .342V31z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M14.65 17c0-.746.604-1.35 1.35-1.35h8a1.35 1.35 0 0 1 0 2.7h-8A1.35 1.35 0 0 1 14.65 17M14.65 23.35c0-.745.604-1.35 1.35-1.35h8a1.35 1.35 0 0 1 0 2.7h-8a1.35 1.35 0 0 1-1.35-1.35"
        fillRule="evenodd"
      />
      <path d="M13.5 17a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0M13.5 23.35a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0" />
    </g>
  </svg>
)
