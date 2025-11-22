import Masonry from '@/components/ui/mansory'

import { IMAGES_DATA } from './data'

export const ImagesGrid = async () => {
  return (
    <section className="relative px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <article className="flex w-full flex-col gap-2 lg:items-center">
          <h2 className="text-center text-2xl font-bold lg:text-4xl">
            Nosso compromisso é com você!
          </h2>
          <p className="text-sm text-slate-500">
            Confira algumas imagens do nosso das ações projeto com a sociedade
          </p>
        </article>
        <Masonry
          animateFrom="bottom"
          blurToFocus={true}
          colorShiftOnHover={false}
          duration={0.6}
          ease="power3.out"
          hoverScale={0.95}
          items={IMAGES_DATA}
          scaleOnHover={true}
          stagger={0.05}
        />
      </div>
    </section>
  )
}
