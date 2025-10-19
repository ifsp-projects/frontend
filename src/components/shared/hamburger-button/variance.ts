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
    'duration-default'
  ],
  // @ts-ignore
  {
    variants: {
      primary: ['bg-neutral-50'],
      secondary: ['bg-neutral-700']
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
