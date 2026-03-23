import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { BLOCKS } from './data'

export const Header = async () => {
  return (
    <section className="flex flex-col items-center px-6 py-24 text-center xl:px-12 xl:py-32">
      <header className="flex flex-col items-center gap-6 xl:gap-8">
        <div className="flex items-center gap-2 rounded-sm border border-rose-100 bg-rose-50 px-3 py-1.5">
          <span className="text-xs font-semibold text-rose-500">
            Funcionalidade — Páginas Interativas
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl leading-[1.08] font-black tracking-tight text-neutral-800 lg:text-6xl xl:text-7xl">
          Sua ONG merece uma <br className="hidden lg:block" />
          presença digital <span className="text-rose-400">à altura.</span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-neutral-500 lg:text-lg">
          Crie páginas institucionais, de campanha e de captação de doações em
          minutos — sem código, sem agência, sem custo adicional.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            className="flex items-center gap-2 rounded-sm bg-neutral-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-700"
            href="/contato"
          >
            Criar minha página agora
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            className="flex items-center gap-2 rounded-sm border border-neutral-200 px-6 py-3 text-sm font-semibold text-neutral-600 transition-all hover:border-neutral-300"
            href="/projetos"
          >
            Ver exemplos
          </Link>
        </div>
      </header>

      <div className="relative mt-16 w-full max-w-5xl xl:mt-20">
        <div className="absolute -inset-px rounded-sm bg-linear-to-b from-rose-100/60 to-transparent" />
        <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50 shadow-2xl shadow-neutral-200/60">
          <div className="flex items-center gap-2 border-b border-neutral-100 bg-white px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-neutral-200" />
              <div className="h-3 w-3 rounded-full bg-neutral-200" />
              <div className="h-3 w-3 rounded-full bg-neutral-200" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-sm border border-neutral-100 bg-neutral-50 px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-rose-300" />
              <span className="text-[10px] text-neutral-400">
                empresa-feliz.capivara-solidaria.com.br
              </span>
            </div>
          </div>

          <div className="flex min-h-[360px] flex-col">
            <div className="flex flex-col items-center gap-3 bg-linear-to-br from-rose-50 to-white px-8 py-12 text-center">
              <div className="h-3 w-24 rounded-sm bg-rose-200" />
              <div className="h-6 w-64 rounded-sm bg-neutral-200" />
              <div className="h-6 w-48 rounded-sm bg-neutral-200" />
              <div className="mt-2 flex gap-2">
                <div className="h-8 w-24 rounded-sm bg-neutral-800" />
                <div className="h-8 w-24 rounded-sm border border-neutral-200 bg-white" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 px-8 py-8">
              {[1, 2, 3].map(i => (
                <div
                  className="flex flex-col gap-2 rounded-sm border border-neutral-100 bg-white p-4"
                  key={i}
                >
                  <div className="h-8 w-8 rounded-sm bg-rose-100" />
                  <div className="h-3 w-20 rounded-sm bg-neutral-200" />
                  <div className="h-2 w-full rounded-sm bg-neutral-100" />
                  <div className="h-2 w-3/4 rounded-sm bg-neutral-100" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-10 right-0 hidden h-[calc(100%-40px)] w-52 flex-col gap-3 border-l border-neutral-100 bg-white/90 p-4 backdrop-blur-sm lg:flex">
            <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
              Blocos
            </p>
            {BLOCKS.map(({ icon: Icon, label }) => (
              <div
                className="flex items-center gap-2 rounded-sm border border-neutral-100 bg-neutral-50 px-3 py-2"
                key={label}
              >
                <Icon className="h-3.5 w-3.5 text-neutral-400" />
                <p className="text-xs text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
