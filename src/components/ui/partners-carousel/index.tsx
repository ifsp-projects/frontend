'use client'

import Image from 'next/image'
import React, { Fragment, useMemo } from 'react'

import { DefaultSlidesData } from './data'
import type { PartnersCarouselProps } from './types'

export const PartnersCarousel: React.FC<PartnersCarouselProps> = ({
  className,
  backgroundColor = '#fff'
}) => {
  const generateLoop = (
    slidesData: typeof DefaultSlidesData,
    maxLength: number
  ) => {
    if (slidesData.length > 0) {
      const repeatCount = Math.ceil(maxLength / slidesData.length)
      return Array.from(
        { length: repeatCount * slidesData.length },
        (_, index) => slidesData[index % slidesData.length]
      )
    }
    return []
  }

  const infiniteLogos = useMemo(() => {
    return generateLoop(DefaultSlidesData, DefaultSlidesData.length)
  }, [])

  return (
    <article
      className={`flex w-full flex-col py-6 ${className}`}
      data-cid="clients-carousel"
      style={{ background: backgroundColor }}
    >
      <div className="carousel">
        <div className="slider relative">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, ${backgroundColor}, transparent)`
            }}
            className={`absolute left-0 z-20 h-full w-[30%]`}
          />
          <div
            style={{
              backgroundImage: `linear-gradient(to left, ${backgroundColor}, transparent)`
            }}
            className={`absolute right-0 z-20 h-full w-[30%]`}
          />
          <div className="slide-track md:gap-x-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <Fragment key={`logos-${index}`}>
                {infiniteLogos.map((slideItem: string, index: number) => (
                  <figure
                    className="slide -mt-12 flex h-[70px] min-w-[130px] items-center justify-center"
                    key={`partner-logo-${index}`}
                  >
                    <Image
                      alt={`partner-logo-${index}`}
                      height={60}
                      src={slideItem}
                      width={90}
                    />
                  </figure>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
