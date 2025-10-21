'use client'

import type { FC } from 'react'
import { useState } from 'react'

export const ContactForm: FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 lg:py-16 xl:px-0">
      <form
        className="space-y-6 rounded-sm border border-neutral-200 bg-white p-8"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="mb-2 block font-medium text-neutral-700">
            Nome
          </label>
          <input
            className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-neutral-500 focus:outline-none"
            name="nome"
            placeholder="Seu nome"
            type="text"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-neutral-700">
            E-mail
          </label>
          <input
            className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-neutral-500 focus:outline-none"
            name="email"
            placeholder="seuemail@exemplo.com"
            type="email"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-neutral-700">
            Sugestão de projeto ou ONG
          </label>
          <textarea
            className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:ring-2 focus:ring-neutral-500 focus:outline-none"
            name="mensagem"
            placeholder="Conte um pouco sobre o projeto, o nome da ONG e onde ela atua"
            rows={5}
            required
          ></textarea>
        </div>

        <button
          className="w-full rounded-lg bg-neutral-600 py-2 font-semibold text-white transition hover:bg-neutral-700"
          type="submit"
        >
          Enviar
        </button>

        {isFormSubmitted && (
          <p className="mt-4 text-center font-medium text-green-600">
            Sua mensagem foi enviada com sucesso!
          </p>
        )}
      </form>
    </section>
  )
}
