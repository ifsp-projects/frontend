import { motion } from 'framer-motion'
import Image from 'next/image'
import type { FC } from 'react'

import { Donations } from './donations'

export const Mission: FC = () => {
  return (
    <section className="mx-auto max-w-5xl space-y-16 px-6 py-12">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-4 text-2xl font-semibold text-blue-800">
          Missão e Propósito
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed">
          O Lar dos Velhinhos São Vicente de Paulo é uma associação civil que
          acolhe idosos com mais de 60 anos em caráter de internação. O objetivo
          é oferecer um ambiente digno, com alimentação, assistência médica,
          apoio espiritual e convivência acolhedora — promovendo bem-estar e
          qualidade de vida.
        </p>
      </motion.div>

      <motion.div
        className="grid items-center gap-8 md:grid-cols-2"
        initial={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <article>
          <h2 className="mb-3 text-2xl font-semibold text-blue-800">
            História
          </h2>
          <p className="text-justify leading-relaxed">
            Fundado em 21 de junho de 1935, o Lar dos Velhinhos São Vicente de
            Paulo iniciou suas atividades em uma antiga vila de moradores,
            assumindo o trabalho dos Vicentinos. Em 8 de abril de 1943, passou a
            adotar a denominação atual e, desde então, mantém um papel
            fundamental no acolhimento de idosos em situação de vulnerabilidade
            na cidade de Capivari e região.
            <br />
            <br />A instituição segue ativa graças ao apoio de voluntários, da
            comunidade local e de parceiros que colaboram para a manutenção de
            um espaço de cuidado e solidariedade.
          </p>
        </article>
        <figure className="relative h-64 overflow-hidden rounded-2xl shadow-lg md:h-80">
          <Image
            alt="Idosos recebendo cuidados"
            className="object-cover transition-transform duration-700 hover:scale-105"
            src="https://www.jornalosemanario.com.br/wp-content/uploads/2020/11/fachada-lar-dos-velhinhos-sao-vicente-de-paulo-capivari.jpg"
            fill
          />
        </figure>
      </motion.div>

      <Donations />
    </section>
  )
}
