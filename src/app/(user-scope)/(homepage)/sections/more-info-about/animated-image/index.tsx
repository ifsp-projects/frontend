'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export const AnimatedImage = () => {
  return (
    <motion.figure
      className="h-auto max-h-full w-full max-w-full rounded-sm bg-[#fdd7d9] lg:aspect-square lg:max-h-[520px] lg:max-w-[400px]"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.65, ease: [0.6, 0.05, -0.01, 0.9] }}
      viewport={{ once: true, amount: 0.3 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
    >
      <Image
        alt="Section Image"
        className="h-auto max-h-full rounded-sm object-cover lg:aspect-square lg:max-h-[520px]"
        fetchPriority="high"
        height={1080}
        loading="eager"
        src="https://www-cdn.anthropic.com/images/4zrzovbb/website/1576ae23eaf481f33bd36ab468171cc69d12361a-1000x1000.svg"
        width={1920}
      />
    </motion.figure>
  )
}
