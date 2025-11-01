'use client'

import { gsap } from 'gsap'
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

const useMedia = (
  queries: string[],
  values: number[],
  defaultValue: number
): number => {
  const get = () => {
    if (typeof window === 'undefined') return defaultValue
    const index = queries.findIndex(q => window.matchMedia(q).matches)
    return values[index] ?? defaultValue
  }

  const [value, setValue] = useState<number>(defaultValue)

  useEffect(() => {
    setValue(get())

    const handler = () => setValue(get())

    queries.forEach(q =>
      window.matchMedia(q).addEventListener('change', handler)
    )
    return () =>
      queries.forEach(q =>
        window.matchMedia(q).removeEventListener('change', handler)
      )
  }, [queries])

  return value
}

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  return [ref, size] as const
}

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      src =>
        new Promise<void>(resolve => {
          const img = new Image()
          img.src = src
          img.onload = img.onerror = () => resolve()
        })
    )
  )
}

interface Item {
  height: number
  id: string
  img: string
  url: string
}

interface GridItem extends Item {
  h: number
  w: number
  x: number
  y: number
}

interface MasonryProps {
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

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false
}) => {
  const columns = useMedia(
    [
      '(min-width:1500px)',
      '(min-width:1000px)',
      '(min-width:600px)',
      '(min-width:400px)'
    ],
    [5, 4, 3, 2],
    1
  )

  const [containerRef, { width }] = useMeasure<HTMLDivElement>()
  const [imagesReady, setImagesReady] = useState(false)

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return { x: item.x, y: item.y }

    let direction = animateFrom

    if (animateFrom === 'random') {
      const directions = ['top', 'bottom', 'left', 'right']
      direction = directions[
        Math.floor(Math.random() * directions.length)
      ] as typeof animateFrom
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 }
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 }
      case 'left':
        return { x: -200, y: item.y }
      case 'right':
        return { x: window.innerWidth + 200, y: item.y }
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        }
      default:
        return { x: item.x, y: item.y + 100 }
    }
  }

  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true))
  }, [items])

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return []

    const colHeights = new Array(columns).fill(0)
    const columnWidth = width / columns

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights))
      const x = columnWidth * col
      const height = child.height / 2
      const y = colHeights[col]

      colHeights[col] += height

      return { ...child, x, y, w: columnWidth, h: height }
    })
  }, [columns, items, width])

  const hasMounted = useRef(false)

  useLayoutEffect(() => {
    if (!imagesReady) return

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h
      }

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item)
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: 'blur(10px)' })
        }

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.8,
          ease: 'power3.out',
          delay: index * stagger
        })
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration: duration,
          ease: ease,
          overwrite: 'auto'
        })
      }
    })

    hasMounted.current = true
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease])

  const handleMouseEnter = (e: React.MouseEvent, item: GridItem) => {
    const element = e.currentTarget as HTMLElement
    const selector = `[data-key="${item.id}"]`

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay') as HTMLElement
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3
        })
      }
    }
  }

  const handleMouseLeave = (e: React.MouseEvent, item: GridItem) => {
    const element = e.currentTarget as HTMLElement
    const selector = `[data-key="${item.id}"]`

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 0.95,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay') as HTMLElement
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3
        })
      }
    }
  }

  const totalHeight = useMemo(() => {
    if (!width || grid.length === 0) return 0
    const colHeights = new Array(columns).fill(0)
    grid.forEach(item => {
      const col = Math.round(item.x / (width / columns))
      colHeights[col] += item.h
    })
    return Math.max(...colHeights)
  }, [grid, width, columns])

  return (
    <div
      className="list relative"
      ref={containerRef}
      style={{ height: totalHeight }}
    >
      {grid.map(item => {
        return (
          <div
            className="item-wrapper"
            data-key={item.id}
            key={item.id}
            onClick={() => window.open(item.url, '_blank', 'noopener')}
            onMouseEnter={e => handleMouseEnter(e, item)}
            onMouseLeave={e => handleMouseLeave(e, item)}
          >
            <div
              className="item-img"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {colorShiftOnHover && (
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                    opacity: 0,
                    pointerEvents: 'none',
                    borderRadius: '8px'
                  }}
                  className="color-overlay"
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Masonry
