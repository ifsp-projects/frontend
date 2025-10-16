'use client'

import { motion } from 'framer-motion'

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Cabeçalho */}
      <section className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 px-6 py-16 text-center">
        <motion.h1
          className="mb-4 text-4xl font-bold text-blue-800"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Nossa Iniciativa
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Nosso site reúne informações sobre ONGs, projetos sociais e
          iniciativas solidárias de Capivari e região. A ideia é dar
          visibilidade a ações que promovem solidariedade, inclusão e bem-estar
          na comunidade. Qualquer pessoa pode sugerir novas iniciativas para que
          possamos ampliar o alcance das ações locais.
        </motion.p>
      </section>
      <motion.section
        className="mx-auto mt-5 max-w-5xl px-6 py-12"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mb-8 text-center text-2xl font-semibold text-blue-800">
          Como Funciona
        </h2>

        <div className="relative flex flex-col items-center md:flex-row md:justify-between">
          {/* Etapas */}
          {[
            {
              step: 1,
              title: 'Sugestão',
              desc: 'Envie informações sobre um projeto ou ONG que você conhece.'
            },
            {
              step: 2,
              title: 'Avaliação',
              desc: 'Nossa equipe verifica as informações enviadas.'
            },
            {
              step: 3,
              title: 'Divulgação',
              desc: 'O projeto é publicado no site para que mais pessoas conheçam.'
            },
            {
              step: 4,
              title: 'Crescimento',
              desc: 'Mais iniciativas são integradas à rede de solidariedade.'
            }
          ].map((item, idx) => (
            <motion.div
              className="mb-12 flex w-full flex-col items-center text-center md:relative md:w-1/4"
              initial={{ opacity: 0, y: 20 }}
              key={idx}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-blue-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Equipe */}
      <section className="mx-auto mb-12 max-w-4xl px-6 py-12 text-center">
        <motion.h2
          className="mb-8 text-2xl font-semibold text-blue-800"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Equipe de Desenvolvimento
        </motion.h2>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {[
            {
              nome: 'Gabriel Gardezabal Ortona',
              linkedin:
                'https://www.linkedin.com/in/gabriel-gardeazabal-ortona-8332511ab/',
              github: 'https://github.com/Gortona-dev'
            },
            {
              nome: 'Higor Matias Figueiredo',
              linkedin: 'https://www.linkedin.com/in/higor-matias-7905262aa/',
              github: 'https://github.com/Higorx019'
            },
            {
              nome: 'Luis Gustavo Barbosa',
              linkedin:
                'https://www.linkedin.com/in/lu%C3%ADs-gustavo-barbosa-27b0601b2/',
              github: 'https://github.com/LuisBarbosaGit'
            },
            {
              nome: 'Matheus Gonçalves da Cruz Rocha',
              linkedin: 'https://www.linkedin.com/in/matheus-rocha-45a077300/',
              github: 'https://github.com/rocha985'
            },
            {
              nome: 'Murilo Alexandre Medina',
              linkedin: 'https://www.linkedin.com/in/murilo-medina-47ba002a9/',
              github: 'https://github.com/medinavs'
            },
            {
              nome: 'Vitor Gabriel Silva',
              linkedin: 'https://www.linkedin.com/in/vitor-silva-0ab38a261/',
              github: 'https://github.com/vitingr'
            }
          ].map((integrante, index) => (
            <div className="text-gray-700" key={index}>
              <h3 className="mb-1 font-medium text-gray-800">
                {integrante.nome}
              </h3>
              <div className="flex justify-center gap-4 text-sm text-blue-600">
                <a
                  className="hover:underline"
                  href={integrante.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  className="hover:underline"
                  href={integrante.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
