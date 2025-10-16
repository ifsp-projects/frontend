'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEnviado(true)
    e.currentTarget.reset()
  }

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
          Entre em Contato
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Conhece uma ONG, projeto social ou iniciativa solidária em Capivari e
          região? Envie sua sugestão — nossa equipe vai analisar e incluir novas
          iniciativas no site.
        </motion.p>
      </section>

      {/* Formulário */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <motion.form
          className="space-y-6 rounded-2xl bg-white p-8 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          onSubmit={handleSubmit}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <label className="mb-2 block font-medium text-gray-700">Nome</label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="nome"
              placeholder="Seu nome"
              type="text"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              E-mail
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="email"
              placeholder="seuemail@exemplo.com"
              type="email"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Sugestão de projeto ou ONG
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="mensagem"
              placeholder="Conte um pouco sobre o projeto, o nome da ONG e onde ela atua"
              rows={5}
              required
            ></textarea>
          </div>

          <button
            className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
            type="submit"
          >
            Enviar
          </button>

          {enviado && (
            <p className="mt-4 text-center font-medium text-green-600">
              Sua mensagem foi enviada com sucesso!
            </p>
          )}
        </motion.form>
      </section>
    </main>
  )
}
