import Image from 'next/image'
import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <section className="relative mx-auto mt-24 h-[150px] w-full max-w-2xl px-4 sm:h-[200px] md:h-[250px]">
      <Image
        alt="Casa da criança capivari"
        className="object-contain"
        height={1080}
        src="https://static.wixstatic.com/media/4b37ae_e3d6da186ffd41f78037b9281927dd4d~mv2.png/v1/fill/w_600,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4b37ae_e3d6da186ffd41f78037b9281927dd4d~mv2.png"
        width={1920}
        priority
      />
    </section>
  )
}
