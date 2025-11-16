'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { FC } from 'react'

export const HowToHelp: FC = () => {
  return (
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
        <article>
          <h3 className="mb-2 text-xl font-semibold text-blue-800">
            Como Ajudar
          </h3>
          <p className="mb-2 leading-relaxed">
            Você pode apoiar a Casa da Criança com doações de alimentos, roupas,
            produtos de limpeza, móveis, eletrodomésticos ou contribuições
            financeiras. Também são bem-vindos voluntários dispostos a
            contribuir com tempo e habilidades.
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
              📍 <strong>Endereço:</strong> Rua da Glória, 45 – Jardim São Luís,
              Capivari – SP
            </li>
          </ul>
        </article>

        <article>
          <h3 className="mb-2 text-xl font-semibold text-blue-800">Doações</h3>
          <p className="mb-2 leading-relaxed">
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
  )
}
