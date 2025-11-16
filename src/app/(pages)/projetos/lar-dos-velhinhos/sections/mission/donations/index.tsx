'use client'

import { motion } from 'framer-motion'
import type { FC } from 'react'

export const Donations: FC = () => {
  return (
    <motion.div
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
        <article>
          <h3 className="mb-2 text-xl font-semibold text-blue-800">
            Voluntariado
          </h3>
          <p className="mb-2 leading-relaxed">
            Apoie o Lar dos Velhinhos contribuindo com tempo, cuidado e atenção
            aos idosos.
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

        <article>
          <h3 className="mb-2 text-xl font-semibold text-blue-800">Doações</h3>
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
    </motion.div>
  )
}
