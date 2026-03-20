'use client'

import Link from 'next/link'
import { useRef } from 'react'

import { generateWhatsappLink } from '@/utils/helpers/generate-whatsapp-link'

import { useScrollProgressContext } from '../../context/scroll-progress-context'
import { sections } from '../../data'

export const Content = () => {
  const { activeSection } = useScrollProgressContext()

  const contentRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 112
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-12 lg:max-w-7xl lg:py-16 xl:px-0">
      <div className="flex gap-12">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24">
            <p className="mb-4 text-[11px] font-semibold tracking-widest text-neutral-400 uppercase">
              Conteúdo
            </p>
            <nav aria-label="Sumário">
              <ol className="space-y-1">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <button
                      className={`group flex w-full items-center gap-3 rounded-sm px-3 py-2 text-left text-sm transition-all duration-150 ${
                        activeSection === section.id
                          ? 'bg-rose-50 font-medium text-rose-600'
                          : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-700'
                      } `}
                      onClick={() => scrollToSection(section.id)}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[10px] font-bold transition-colors duration-150 ${
                          activeSection === section.id
                            ? 'bg-rose-100 text-rose-500'
                            : 'bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200'
                        } `}
                      >
                        {i + 1}
                      </span>
                      {section.title}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-8 flex flex-col gap-2">
              {/* <a
                className="flex w-full items-center gap-2 rounded-sm border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-600 transition hover:border-rose-200 hover:text-rose-600"
                href="/politica-de-privacidade"
              >
                Política de Privacidade
              </a> */}
              {generateWhatsappLink({
                phone: '5519999101607',
                message:
                  'Olá! tudo bem? Estou entrando em contato com o suporte referente para comunicar referente a um problema do Capivara Solidaria',
                label: 'Falar com o suporte',
                className:
                  'flex w-full items-center gap-2 rounded-sm border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-600 transition hover:border-rose-200 hover:text-rose-600'
              })}
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1" ref={contentRef}>
          <details className="mb-8 rounded-sm border border-neutral-200 bg-neutral-50 p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-medium text-neutral-700">
              Ir para uma seção
            </summary>
            <ol className="mt-3 space-y-1">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <button
                    className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm text-neutral-600 hover:bg-white"
                    onClick={() => scrollToSection(section.id)}
                  >
                    <span className="text-xs text-neutral-400">{i + 1}.</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ol>
          </details>

          <div className="space-y-14">
            {sections.map((section, i) => (
              <section
                aria-labelledby={`heading-${section.id}`}
                className="scroll-mt-28"
                id={section.id}
                key={section.id}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-sm text-rose-400">
                    {section.icon}
                  </span>
                  <h2
                    className="text-xl font-semibold text-neutral-800"
                    id={`heading-${section.id}`}
                  >
                    <span className="mr-2 text-sm font-normal text-neutral-300">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    {section.title}
                  </h2>
                </div>

                <div className="mb-5 h-px bg-linear-to-r from-rose-100 via-neutral-100 to-transparent" />

                <div className="prose-custom space-y-4 text-[15px] leading-relaxed text-neutral-600">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-sm border border-neutral-300 bg-neutral-50 p-8 text-center">
            <span className="text-3xl">🐾</span>
            <h3 className="mt-3 text-lg font-semibold text-neutral-800">
              Dúvidas sobre nossos Termos?
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-neutral-500">
              Nossa equipe está pronta para esclarecer qualquer ponto deste
              documento. Entre em contato conosco.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {generateWhatsappLink({
                phone: '5519999101607',
                message:
                  'Olá! tudo bem? Estou entrando em contato com o suporte referente para comunicar referente a um problema do Capivara Solidaria',
                label: 'Enviar mensagem',
                className:
                  'inline-flex cursor-pointer items-center gap-2 rounded-sm bg-rose-400 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-rose-500'
              })}
              <Link
                className="inline-flex cursor-pointer items-center gap-2 rounded-sm border border-neutral-200 bg-white px-6 py-2.5 text-sm font-medium text-neutral-600 transition-all duration-300 hover:border-rose-200 hover:text-rose-600"
                href="/"
              >
                Voltar ao início
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
