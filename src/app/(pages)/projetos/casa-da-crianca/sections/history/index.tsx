'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { FC } from 'react'

export const History: FC = () => {
  return (
    <motion.div
      className="grid items-center gap-8 md:grid-cols-2"
      initial={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <article>
        <h2 className="mb-3 text-2xl font-semibold text-blue-800">História</h2>
        <p className="text-justify leading-relaxed">
          A Casa da Criança de Capivari nasceu do esforço e da dedicação de
          pessoas comprometidas com o bem-estar de crianças e adolescentes da
          cidade. A instituição atua sem fins lucrativos, oferecendo apoio
          educacional, oficinas, atividades esportivas e culturais, além de
          suporte emocional às famílias, contribuindo para o desenvolvimento
          integral dos atendidos e fortalecendo vínculos familiares e sociais.
        </p>
      </article>
      <figure className="relative h-64 overflow-hidden rounded-2xl shadow-lg md:h-80">
        <Image
          alt="Crianças participando de atividades na Casa da Criança"
          className="object-cover transition-transform duration-700 hover:scale-105"
          height={1080}
          src="https://www.raizesfm.com.br/wp-content/uploads/2024/08/casa-da-crianca.png"
          width={1920}
        />
      </figure>
    </motion.div>
  )
}
