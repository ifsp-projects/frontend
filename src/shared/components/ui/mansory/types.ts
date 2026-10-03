export interface Item {
  height: number
  id: string
  img: string
  url: string
}

export interface GridItem extends Item {
  h: number
  w: number
  x: number
  y: number
}

export interface MasonryProps {
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random'
  blurToFocus?: boolean
  colorShiftOnHover?: boolean
  duration?: number
  ease?: string
  hoverScale?: number
  items: Item[]
  scaleOnHover?: boolean
  stagger?: number
}
