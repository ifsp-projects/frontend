'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ArrowRight } from '../assets/icons/arrow-right'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-start overflow-x-hidden bg-gray-50">
      <section className="w-full bg-gradient-to-r from-blue-50 to-green-50 px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-blue-800 sm:text-4xl md:text-5xl lg:text-6xl">
          Faça a Diferença
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700 sm:text-base md:text-lg">
          Descubra ONGs próximas de você ou sugira iniciativas sociais na
          região. Sua ajuda transforma vidas.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Link href="/projetos" passHref>
            <Button
              className="group rounded-2xl bg-neutral-100 px-8 py-4 text-xl text-stone-800 hover:bg-neutral-200 sm:px-6 sm:py-3"
              size="lg"
              variant="ghost"
            >
              Quero Conhecer
              <ArrowRight className="ml-2 transition-transform duration-150 ease-in group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="/contato" passHref>
            <Button
              className="group rounded-2xl bg-neutral-100 px-8 py-4 text-xl text-stone-800 hover:bg-neutral-300 sm:px-6 sm:py-3"
              size="lg"
              variant="ghost"
            >
              Sou uma ONG
              <ArrowRight className="ml-2 transition-transform duration-150 ease-in group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Seção de Destaque de Projetos */}
      <section className="mt-20 w-full max-w-6xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-blue-800">
          Projetos em Destaque
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-gray-700 sm:text-lg">
          Conheça algumas das iniciativas que estão fazendo a diferença em
          Capivari e região.
        </p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-md">
            <Image
              alt="Lar dos Velhinhos"
              className="mx-auto mb-4 object-contain"
              height={150}
              src="https://www.larvelhinhoscapivari.org.br/wp-content/uploads/2013/06/logo_lar_velhinhos.jpg"
              width={300}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Lar dos Velhinhos
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Acolhimento e assistência a idosos com mais de 60 anos.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-md">
            <Image
              alt="Casa da Criança"
              className="mx-auto mb-4 object-contain"
              height={150}
              src="https://capivarisocial.com.br/wp-content/uploads/2022/03/casa-da-crianca_logo-300x179.jpg"
              width={300}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Casa da Criança
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Apoio a crianças, adolescentes e famílias em situação de
              vulnerabilidade.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl bg-white p-4 shadow-md">
            <Image
              alt="Projeto Exemplo"
              className="mx-auto mb-4 object-contain"
              height={150}
              src="https://capivarisocial.com.br/wp-content/uploads/2022/03/tetoeafeto_logo-300x240.png"
              width={300}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Projeto Exemplo
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Outra iniciativa social da cidade.
            </p>
          </div>
        </div>
      </section>

      {/* Chamada para Sugestões */}
      <section className="mt-20 mb-20 w-full max-w-3xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold text-blue-800">
          Tem uma sugestão?
        </h2>
        <p className="mx-auto max-w-xl text-gray-700 sm:text-lg">
          Se conhece alguma ONG, projeto social ou iniciativa solidária, envie
          sua sugestão e ajude a ampliar o alcance dessas ações.
        </p>
        <Link href="/contato" passHref>
          <Button className="mt-6 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
            Enviar Sugestão
          </Button>
        </Link>
      </section>
    </main>
  )
}
