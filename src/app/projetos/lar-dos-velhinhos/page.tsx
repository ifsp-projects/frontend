'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LarDosVelhinhosPage() {
  return (
    <main className="min-h-screen text-gray-800">
      <section className="relative mx-auto mt-16 h-[150px] w-full max-w-4xl px-4 sm:h-[200px] md:h-[250px]">
        <Image
          alt="Lar dos Velhinhos São Vicente de Paulo"
          className="object-contain"
          src="https://www.larvelhinhoscapivari.org.br/wp-content/uploads/2019/08/logotipo_lar_dos_velhinhos.png"
          fill
          priority
        />
      </section>

      <section className="mx-auto max-w-5xl space-y-16 px-6 py-12">
        {/* Missão */}
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
            acolhe idosos com mais de 60 anos em caráter de internação. O
            objetivo é oferecer um ambiente digno, com alimentação, assistência
            médica, apoio espiritual e convivência acolhedora — promovendo
            bem-estar e qualidade de vida.
          </p>
        </motion.div>

        {/* História e Identidade */}
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
              assumindo o trabalho dos Vicentinos. Em 8 de abril de 1943, passou
              a adotar a denominação atual e, desde então, mantém um papel
              fundamental no acolhimento de idosos em situação de
              vulnerabilidade na cidade de Capivari e região.
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

        <motion.section
          className="mx-auto max-w-6xl px-6 py-12"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="flex flex-col space-y-6 rounded-2xl bg-gradient-to-r from-blue-100 to-green-100 p-8 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {/* Voluntariado */}
            <article>
              <h3 className="mb-2 text-xl font-semibold text-blue-800">
                Voluntariado
              </h3>
              <p className="mb-2 leading-relaxed">
                Apoie o Lar dos Velhinhos contribuindo com tempo, cuidado e
                atenção aos idosos.
              </p>
              <ul className="space-y-1">
                <li>
                  📞 <strong>Telefone:</strong> (19) 3491-1647
                </li>
                <li>
                  ✉️ <strong>E-mail: </strong>
                  <a
                    className="text-blue-700 hover:underline"
                    href="mailto:administracao@larvelinhoscapivari.org.br"
                  >
                    administracao@larvelinhoscapivari.org.br
                  </a>
                </li>
                <li>
                  💬 <strong>Facebook: </strong>
                  <a
                    className="text-blue-700 hover:underline"
                    href="https://www.facebook.com/larvelhinhossvp/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    larvelhinhossvp
                  </a>
                </li>
              </ul>
            </article>

            {/* Doações */}
            <article>
              <h3 className="mb-2 text-xl font-semibold text-blue-800">
                Doações
              </h3>
              <p className="mb-2 leading-relaxed">
                Faça uma doação via PIX e ajude a manter a qualidade de vida dos
                idosos.
              </p>
              <ul className="space-y-1">
                <li>
                  💳 <strong>Chave PIX:</strong> 46 368 429 0001 37
                </li>
                <li>
                  🔗{' '}
                  <a
                    className="text-blue-700 hover:underline"
                    href="https://www.larvelhinhoscapivari.org.br/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Saiba mais no site oficial
                  </a>
                </li>
              </ul>
            </article>
          </motion.div>
        </motion.section>
      </section>
    </main>
  )
}
