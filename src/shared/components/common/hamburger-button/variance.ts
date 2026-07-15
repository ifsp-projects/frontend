import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'h-[2px]',
    'w-5',
    'my-[2px]',
    'rounded-full',
    'transition',
    'ease',
    'transform',
    'duration-150'
  ],
  {
    variants: {
      variant: {
        primary: ['bg-neutral-700'],
        secondary: ['bg-neutral-50']
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
