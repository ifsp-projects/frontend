import Image from 'next/image'
import type { FC } from 'react'

export const Header: FC = () => {
  return (
    <section className="relative mx-auto mt-16 h-[150px] w-full max-w-4xl px-4 sm:h-[200px] md:h-[250px]">
      <Image
        alt="Lar dos Velhinhos São Vicente de Paulo"
        className="object-contain"
        src="https://www.larvelhinhoscapivari.org.br/wp-content/uploads/2019/08/logotipo_lar_dos_velhinhos.png"
        fill
        priority
      />
    </section>
  )
}
