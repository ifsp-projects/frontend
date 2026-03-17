'use client'

import ShinyText from '@/components/ui/shiny-text'

export const ShinyTextDecoration = () => {
  return (
    <span className="text-2xl font-bold text-neutral-500 lg:text-4xl xl:text-[56px] xl:leading-12">
      <ShinyText
        color="#737373"
        delay={0}
        direction="left"
        disabled={false}
        pauseOnHover={false}
        shineColor="#a3a3a3"
        speed={2}
        spread={120}
        text="causa social"
        yoyo={false}
      />
    </span>
  )
}
