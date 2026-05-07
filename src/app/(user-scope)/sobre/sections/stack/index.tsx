'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import ReactLenis from 'lenis/react'
import React, { useRef } from 'react'

import { cn } from '@/lib/utils'

type CharacterProps = {
  char: string
  index: number
  centerIndex: number
  scrollYProgress: any
}

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress
}: CharacterProps) => {
  const isSpace = char === ' '

  const distanceFromCenter = index - centerIndex

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  )
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  )

  return (
    <motion.span
      style={{
        x,
        rotateX
      }}
      className={cn('inline-block text-rose-400', isSpace && 'w-4')}
    >
      {char}
    </motion.span>
  )
}
const CharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress
}: CharacterProps) => {
  const isSpace = char === ' '
  const distanceFromCenter = index - centerIndex

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  )
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1])

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 50, 0]
  )

  return (
    <motion.img
      className={cn(
        'inline-block w-fit max-w-16 object-contain',
        isSpace && 'w-4'
      )}
      style={{
        x,
        scale,
        y,
        transformOrigin: 'center'
      }}
      src={char}
    />
  )
}
const CharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress
}: CharacterProps) => {
  const isSpace = char === ' '
  const distanceFromCenter = index - centerIndex

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 90, 0]
  )
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0]
  )
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1])

  return (
    <motion.img
      className={cn(
        'inline-block w-fit max-w-16 object-contain',
        isSpace && 'w-4'
      )}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: 'center'
      }}
      src={char}
    />
  )
}

const Stack = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const targetRef2 = useRef<HTMLDivElement | null>(null)
  const targetRef3 = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef
  })
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: targetRef2
  })
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: targetRef3
  })

  const text = 'construído com uma stack moderna e escalável'
  const characters = text.split('')
  const centerIndex = Math.floor(characters.length / 2)

  const frontendIcons = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png',
    'https://images.icon-icons.com/2389/PNG/512/next_js_logo_icon_145038.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png',
    'https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png',
    'https://logo.svgcdn.com/devicon/zustand-original.png',
    'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/posthog.png',
    'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/zod-y1q3vdp0xohonaq2l9m0c9.png/zod-272tgei389yqljmp061a1h.png?_a=DATAiZAAZAA0',
    'https://react-hook-form.com/images/logo/react-hook-form-logo-only.png',
    'https://cdn-icons-png.flaticon.com/512/5968/5968872.png'
  ]
  const frontendIconsCenteredIndex = Math.floor(frontendIcons.length / 2)

  const backendIcons = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png',
    'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/fastify-9nx5re1pt450uqxmih0n3.png/fastify-1e90xtotg592ebctdnzdla.png?_a=DATAiZAAZAA0',
    'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp',
    'https://www.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png',
    'https://freepnglogo.com/images/all_img/1702059841openai-icon-png.png',
    'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/docker-icon.png',
    'https://img.icons8.com/color/600/google-cloud.png',
    'https://images.seeklogo.com/logo-png/43/2/opentelemetry-logo-png_seeklogo-430977.png',
    'https://cdn.iconscout.com/icon/free/png-256/free-grafana-logo-icon-svg-download-png-2944910.png'
  ]
  const backendIconsCenteredIndex = Math.floor(backendIcons.length / 2)

  return (
    <ReactLenis root>
      <section className="mb-[-45vh] hidden w-full bg-white lg:block">
        <div
          className="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"
          ref={targetRef}
        >
          <article className="absolute top-20 flex flex-col items-center gap-4">
            <h2 className="text-center text-2xl font-bold lg:text-4xl">
              Stack do nosso projeto
            </h2>
            <p className="text-center text-sm text-neutral-500 lg:text-base">
              Conheça as linguagens e frameworks que utilizamos no
              desenvolvimento
            </p>
          </article>
          <div
            style={{
              perspective: '500px'
            }}
            className="font-geist w-full max-w-4xl pb-3 text-center text-6xl font-bold tracking-tighter text-black uppercase"
          >
            {characters.map((char, index) => (
              <CharacterV1
                centerIndex={centerIndex}
                char={char}
                index={index}
                key={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
        <div
          className="relative mt-[-100vh] box-border flex h-[210vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"
          ref={targetRef2}
        >
          <p className="font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-black">
            <Bracket className="h-12 text-black" />
            <span className="font-geist font-medium">
              o que utilizamos atualmente em nosso frontend?
            </span>
            <Bracket className="h-12 scale-x-[-1] text-black" />
          </p>
          <div className="font-geist flex w-full max-w-4xl items-center justify-center gap-8 pb-3 text-center text-6xl font-bold tracking-tighter text-black uppercase">
            {frontendIcons.map((char, index) => (
              <CharacterV2
                centerIndex={frontendIconsCenteredIndex}
                char={char}
                index={index}
                key={index}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>
        <div
          className="relative mt-[-95vh] box-border flex h-[170vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"
          ref={targetRef3}
        >
          {' '}
          <p className="font-geist flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-black">
            <Bracket className="h-12 text-black" />
            <span className="font-geist font-medium">
              o que utilizamos atualmente em nosso backend?
            </span>
            <Bracket className="h-12 scale-x-[-1] text-black" />
          </p>
          <div
            style={{
              perspective: '500px'
            }}
            className="font-geist flex w-full max-w-4xl items-center justify-center gap-8 pb-3 text-center text-6xl font-bold tracking-tighter text-black uppercase"
          >
            {backendIcons.map((char, index) => (
              <CharacterV3
                centerIndex={backendIconsCenteredIndex}
                char={char}
                index={index}
                key={index}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>
      </section>
    </ReactLenis>
  )
}

export { CharacterV1, CharacterV2, CharacterV3, Stack }

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 27 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
        fill="#000"
      ></path>
    </svg>
  )
}
