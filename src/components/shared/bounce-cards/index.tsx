'use client'
import { gsap } from 'gsap'
import { useEffect } from 'react'

interface BounceCardsProps {
  animationDelay?: number
  animationStagger?: number
  className?: string
  containerHeight?: number
  containerWidth?: number
  easeType?: string
  enableHover?: boolean
  images?: string[]
  transformStyles?: string[]
}

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = false
}: BounceCardsProps) {
  useEffect(() => {
    gsap.fromTo(
      '.card',
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    )
  }, [animationDelay, animationStagger, easeType])

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr)
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)')
    } else if (transformStr === 'none') {
      return 'rotate(0deg)'
    } else {
      return `${transformStr} rotate(0deg)`
    }
  }

  const getPushedTransform = (
    baseTransform: string,
    offsetX: number
  ): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/
    const match = baseTransform.match(translateRegex)
    if (match) {
      const currentX = parseFloat(match[1])
      const newX = currentX + offsetX
      return baseTransform.replace(translateRegex, `translate(${newX}px)`)
    } else {
      return baseTransform === 'none'
        ? `translate(${offsetX}px)`
        : `${baseTransform} translate(${offsetX}px)`
    }
  }

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) return

    images.forEach((_, i) => {
      const selector = `.card-${i}`
      gsap.killTweensOf(selector)

      const baseTransform = transformStyles[i] || 'none'

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform)
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        })
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160
        const pushedTransform = getPushedTransform(baseTransform, offsetX)

        const distance = Math.abs(hoveredIdx - i)
        const delay = distance * 0.05

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        })
      }
    })
  }

  const resetSiblings = () => {
    if (!enableHover) return

    images.forEach((_, i) => {
      const selector = `.card-${i}`
      gsap.killTweensOf(selector)

      const baseTransform = transformStyles[i] || 'none'
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      })
    })
  }

  return (
    <div
      style={{
        width: containerWidth,
        height: containerHeight
      }}
      className={`relative flex items-center justify-center ${className}`}
    >
      {images.map((src, idx) => (
        <div
          style={{
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transform: transformStyles[idx] || 'none'
          }}
          className={`card card-${idx} absolute aspect-square w-[200px] overflow-hidden rounded-[30px] border-8 border-white`}
          key={idx}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            alt={`card-${idx}`}
            className="h-full w-full object-cover"
            src={src}
          />
        </div>
      ))}
    </div>
  )
}
