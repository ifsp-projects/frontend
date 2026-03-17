import type { FC } from 'react'

import { ShinyTextDecoration } from './shiny-text-decoration'
import Link from 'next/link'

export const Header: FC = () => {
  return (
    <section className="relative bg-neutral-50">
      {/* <div className="absolute top-0 left-0 z-20 h-full min-h-[600px] w-full 2xl:min-h-[780px]">
        <Iridescence
          amplitude={0.1}
          color={[0.5, 0.45, 0.7]}
          mouseReact={false}
          speed={0.5}
        />
      </div> */}
      <div
        className="group absolute z-20 w-full lg:min-h-[190px]"
        id="page-wrap"
      >
        <div id="inner-wrap">
          <svg
            className="waves w-full"
            height="321.75"
            preserveAspectRatio="xMinYMid meet"
            viewBox="0 0 960 214.5"
            width="1440"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="a">
                <stop offset="0" stopColor="#fafafa" />
                <stop offset="0.2" stopColor="#f5f5f5" />
                <stop offset="0.4" stopColor="#eaeaea" />
                <stop offset="0.6" stopColor="#f5f5f5" />
                <stop offset="1" stopColor="#fafafa" />
              </linearGradient>
            </defs>

            <path
              d="M2662.6 1S2532 41.2 2435 40.2c-19.6-.2-37.3-1.3-53.5-2.8 0 0-421.3-59.4-541-28.6-119.8 30.6-206.2 75.7-391 73.3-198.8-2-225.3-15-370.2-50-145-35-218 37-373.3 36-19.6 0-37.5-1-53.7-3 0 0-282.7-36-373.4-38C139 26 75 46-1 46v106c17-1.4 20-2.3 37.6-1.2 130.6 8.4 210 56.3 287 62.4 77 6 262-25 329.3-23.6 67 1.4 107 22.6 193 23.4 155 1.5 249-71 380-62.5 130 8.5 209 56.3 287 62.5 77 6 126-18 188-18 61.4 0 247-38 307.4-46 159.3-20 281.2 29 348.4 30 67 2 132.2 6 217.4 7 39.3 0 87-11 87-11V1z"
              fill="url(#a)"
              fillOpacity="0.25"
            />

            <path
              d="M2663.6 73.2S2577 92 2529 89c-130.7-8.5-209.5-56.3-286.7-62.4s-125.7 18-188.3 18c-5 0-10-.4-14.5-.7-52-5-149.2-43-220.7-39-31.7 2-64 14-96.4 30-160.4 80-230.2-5.6-340.4-18-110-12-146.6 20-274 36S820.4 0 605.8 0C450.8 0 356 71 225.2 62.2 128 56 60.7 28-.3 11.2V104c22 7.3 46 14.2 70.4 16.7 110 12.3 147-19.3 275-35.5s350 39.8 369 43c27 4.3 59 8 94 10 13 .5 26 1 39 1 156 2 250-70.3 381-62 130.5 8.2 209.5 56.3 286.7 62 77 6.4 125.8-18 188.3-17.5 5 0 10 .2 14.3.6 52 5 145 49.5 220.7 38.2 32-5 64-15 96.6-31 160.5-79.4 230.3 6 340 18.4 110 12 146.3-20 273.7-36l15.5-2V73l1-.5z"
              fill="#f5f5f5"
            />

            <g fill="none" stroke="#e5e5e5" strokeWidth="0.6">
              <path d="M0 51.4c3.4.6 7.7 1.4 11 2.3 133.2 34 224.3 34 308.6 34 110.2 0 116.7 36.6 229.8 26 113-11 128.7-44 222-42.6C865 73 889 38 1002 27c113-10.8 119.6 25.6 229.8 25.6 84.4 0 175.4 0 308.6 34 133 34.2 277-73 379.4-84.3 204-22.5 283.6 128.7 283.6 128.7" />
              <path d="M0 6C115.7-6 198.3 76.6 308 76.6c109.6 0 131.8-20 223-28.3 114.3-10.2 238.2 0 238.2 0s124 10.2 238.3 0c91-8.2 113.2-28 223-28S1425 103 1541 91c115.8-11.8 153.3-69 269.3-84.6 116-15.5 198.4 71 308 71 109.8 0 131.8-20 223-28 114-10.2 237.7 0 237.7 0s37.4 2.4 82.8 3.7" />
            </g>
          </svg>
        </div>
      </div>
      <header className="relative z-30 mx-auto flex w-full max-w-2xl flex-col items-center gap-4 px-4 py-16 lg:max-w-7xl lg:flex-row lg:justify-between lg:gap-6 lg:py-28 xl:px-0">
        <div className="flex w-full flex-col gap-6 lg:gap-8">
          <article className="flex flex-col gap-4">
            {/* <span className="g-[#f5f5f7c2] bg-opacity-10 w-fit rounded-full border border-neutral-400 bg-clip-padding px-2 py-1.5 text-[10px] font-semibold uppercase backdrop-blur-sm backdrop-filter">
              Projeto de Extensão
            </span> */}
            <h1 className="text-center text-2xl font-bold lg:text-left lg:text-4xl xl:text-[56px] xl:leading-12">
              Crie páginas profissionais <br className="hidden xl:block" /> e
              conquiste mais apoio <br className="hidden xl:block" /> para a sua{' '}
              <ShinyTextDecoration />.
            </h1>
          </article>
          {/* <div className="flex w-fit items-center gap-4">
            <Link
              className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-700 px-6 py-2 text-sm font-medium text-white backdrop-blur-[10px] transition-all duration-300 hover:bg-neutral-800"
              href="/minha-ong"
            >
              Quero participar
            </Link>
            <Link
              className="cursor-pointer rounded-full border border-neutral-700 px-6 py-2 text-sm font-medium backdrop-blur-[10px] transition-all duration-300 hover:bg-white"
              href="/ongs"
            >
              Ver projetos
            </Link>
          </div> */}
        </div>
        <div className="flex w-full items-center lg:max-w-[520px]">
          <p className="text-center text-sm lg:text-left lg:text-base xl:text-xl">
            Com o Capivara Solidária, sua ONG pode gerar landing pages
            completas, editar textos, imagens e ícones e se destacar entre as
            demais — em poucos minutos.
          </p>
        </div>
        <div className="mt-4 flex w-fit items-center gap-4 lg:mt-0 lg:hidden">
          <Link
            className="cursor-pointer rounded-full border border-neutral-700 bg-neutral-700 px-6 py-2 text-sm font-medium text-white backdrop-blur-[10px] transition-all duration-300 hover:bg-neutral-800"
            href="/minha-ong"
          >
            Quero participar
          </Link>
          <Link
            className="cursor-pointer rounded-full border border-neutral-700 px-6 py-2 text-sm font-medium backdrop-blur-[10px] transition-all duration-300 hover:bg-white"
            href="/ongs"
          >
            Ver projetos
          </Link>
        </div>
      </header>
    </section>
  )
}
