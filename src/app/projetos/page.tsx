'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { JSX } from 'react'
import React from 'react'

const projetos = [
  {
    id: 'lar-dos-velhinhos',
    title: 'Lar dos Velhinhos São Vicente de Paulo',
    description: 'Acolhimento e assistência a idosos com mais de 60 anos.',
    image:
      'https://www.larvelhinhoscapivari.org.br/wp-content/uploads/2013/06/logo_lar_velhinhos.jpg'
  },
  {
    id: 'projeto-exemplo-2',
    title: 'Projeto Exemplo 2',
    description: 'Outro projeto social da cidade.',
    image:
      'https://www.larvelhinhoscapivari.org.br/wp-content/uploads/2013/06/logo_lar_velhinhos.jpg'
  },
  {
    id: 'projeto-exemplo-3',
    title: 'Projeto Exemplo 3',
    description: 'Outro projeto social da cidade',
    image:
      'https://www.larvelhinhoscapivari.org.br/wp-content/uploads/2013/06/logo_lar_velhinhos.jpg'
  } as const
]

export default function ProjetosPage(): JSX.Element {
  return (
    <main className="mx-auto mt-16 max-w-6xl px-6 py-12">
      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </main>
  )
}
