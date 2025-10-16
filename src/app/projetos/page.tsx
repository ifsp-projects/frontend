'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { JSX } from 'react'
import React from 'react'

const projetos = [
  {
    id: 'lar-dos-velhinhos',
    title: 'Lar dos Velhinhos',
    description: 'Acolhimento e assistência a idosos com mais de 60 anos.',
    image:
      'https://www.larvelhinhoscapivari.org.br/wp-content/uploads/2013/06/logo_lar_velhinhos.jpg'
  },
  {
    id: 'casa-da-crianca',
    title: 'Casa da Criança Capivari',
    description:
      'Instituição sem fins lucrativos que apoia crianças, adolescentes e suas famílias.',
    image:
      'https://capivarisocial.com.br/wp-content/uploads/2022/03/casa-da-crianca_logo-300x179.jpg'
  },
  {
    id: 'em-producao',
    title: 'Teto & Afeto',
    description:
      'serviço de acolhimento que consiste em cadastrar, capacitar e acompanhar famílias e pessoas',
    image:
      'https://capivarisocial.com.br/wp-content/uploads/2022/03/tetoeafeto_logo-300x240.png'
  }
] as const

export default function ProjetosPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Seção de topo com título e descrição */}
      <section className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 px-6 py-16 text-center">
        <motion.h1
          className="mb-4 text-4xl font-bold text-blue-800"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Projetos Sociais em Capivari
        </motion.h1>
        <motion.p
          className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Conheça iniciativas locais que promovem solidariedade, educação e
          apoio à comunidade, incluindo ONGs e projetos sociais ativos na cidade
          e região.
        </motion.p>
      </section>

      {/* Grid de projetos */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map(projeto => (
            <motion.div
              className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              key={projeto.id}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link href={`/projetos/${projeto.id}`}>
                <figure className="relative h-48 w-full">
                  <Image
                    alt={projeto.title}
                    className="h-full w-full object-cover"
                    src={projeto.image}
                    fill
                  />
                </figure>
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold text-gray-800">
                    {projeto.title}
                  </h2>
                  <p className="text-gray-600">{projeto.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
