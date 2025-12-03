import type { FC } from 'react'

import FloatingLines from '@/components/shared/floating-lines'

export const Header: FC = async () => {
  return (
    <section className="relative min-h-[500px] px-4 xl:px-0 2xl:min-h-[580px]">
      <div className="absolute top-0 left-0 z-20 h-full min-h-[500px] w-full 2xl:min-h-[580px]">
        <FloatingLines
          bendRadius={5.0}
          bendStrength={-0.5}
          enabledWaves={['top', 'middle', 'bottom']}
          interactive={true}
          lineCount={[5]}
          lineDistance={[5]}
          parallax={true}
        />
      </div>
      <header className="relative z-30 mx-auto flex min-h-[600px] w-full max-w-2xl flex-col items-center justify-center gap-4 lg:max-w-6xl lg:gap-6 2xl:min-h-[780px]">
        <span className="mx-auto rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur-[10px] transition duration-200">
          Catálogo de ONGs
        </span>
        <h1 className="text-center text-2xl font-bold text-white lg:text-4xl xl:text-5xl">
          Descubra organizações que fazem a diferença
          <br /> e apoie causas importantes.
        </h1>
      </header>
    </section>
  )
}
