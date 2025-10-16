'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function CasaDaCriancaPage() {
  return (
    <main className="text-gray-800">
      <section className="relative mx-auto mt-24 h-[150px] w-full max-w-2xl px-4 sm:h-[200px] md:h-[250px]">
        <Image
          alt="Casa da criança capivari"
          className="object-contain"
          src="https://static.wixstatic.com/media/4b37ae_e3d6da186ffd41f78037b9281927dd4d~mv2.png/v1/fill/w_600,h_82,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4b37ae_e3d6da186ffd41f78037b9281927dd4d~mv2.png"
          fill
          priority
        />
      </section>
      {/* CONTEÚDO */}
      <section className="mx-auto max-w-5xl space-y-16 px-6 py-8">
        {/* Missão e Propósito */}
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
            A Casa da Criança de Capivari tem como missão oferecer acolhimento,
            educação e oportunidades de desenvolvimento integral para crianças e
            adolescentes em situação de vulnerabilidade. A instituição atua
            promovendo o fortalecimento dos vínculos familiares, a inclusão
            social e a construção de um futuro mais justo e solidário.
          </p>
        </motion.div>

        {/* História */}
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
              A Casa da Criança de Capivari nasceu do esforço e da dedicação de
              pessoas comprometidas com o bem-estar de crianças e adolescentes
              da cidade. A instituição atua sem fins lucrativos, oferecendo
              apoio educacional, oficinas, atividades esportivas e culturais,
              além de suporte emocional às famílias, contribuindo para o
              desenvolvimento integral dos atendidos e fortalecendo vínculos
              familiares e sociais.
            </p>
          </article>
          <figure className="relative h-64 overflow-hidden rounded-2xl shadow-lg md:h-80">
            <Image
              alt="Crianças participando de atividades na Casa da Criança"
              className="object-cover transition-transform duration-700 hover:scale-105"
              src="https://www.raizesfm.com.br/wp-content/uploads/2024/08/casa-da-crianca.png"
              fill
            />
          </figure>
        </motion.div>

        {/* Como ajudar */}
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
                Como Ajudar
              </h3>
              <p className="mb-2 leading-relaxed text-gray-800">
                Você pode apoiar a Casa da Criança com doações de alimentos,
                roupas, produtos de limpeza, móveis, eletrodomésticos ou
                contribuições financeiras. Também são bem-vindos voluntários
                dispostos a contribuir com tempo e habilidades.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>
                  📞 <strong>Telefone:</strong> (19) 3491-5944
                </li>
                <li>
                  ✉️ <strong>E-mail:</strong>{' '}
                  <a
                    className="text-blue-700 hover:underline"
                    href="mailto:contatocasadacriancacapivari@gmail.com"
                  >
                    contatocasadacriancacapivari@gmail.com
                  </a>
                </li>
                <li>
                  📍 <strong>Endereço:</strong> Rua da Glória, 45 – Jardim São
                  Luís, Capivari – SP
                </li>
              </ul>
            </article>

            {/* Doações */}
            <article>
              <h3 className="mb-2 text-xl font-semibold text-blue-800">
                Doações
              </h3>
              <p className="mb-2 leading-relaxed text-gray-800">
                As contribuições financeiras ajudam a manter os projetos e
                atividades da instituição.
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>
                  🏦 <strong>Banco:</strong> Santander
                </li>
                <li>
                  🏛️ <strong>Agência:</strong> 0149 –{' '}
                  <strong>Conta Corrente:</strong> 13-001141-1
                </li>
                <li>
                  🧾 <strong>CNPJ:</strong> 00.365.696/0001-50
                </li>
                <li>
                  🔗{' '}
                  <Link
                    className="text-blue-700 hover:underline"
                    href="https://www.casadacriancacapivari.org.br/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Saiba mais no site oficial
                  </Link>
                </li>
              </ul>
            </article>
          </motion.div>
        </motion.section>
      </section>
    </main>
  )
}
