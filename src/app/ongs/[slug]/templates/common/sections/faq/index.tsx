import Link from 'next/link'
import { FAQ_QUESTIONS } from './data'
import { QuestionItem } from './question-item'

export const FAQ = async () => {
  return (
    <section className="px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between">
        <article className="flex w-full flex-col gap-6">
          <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-500 backdrop-blur-[10px] transition duration-200">
            FAQs
          </span>
          <h2 className="text-2xl font-bold lg:text-5xl xl:text-6xl">
            Perguntas <br /> mais frequentes
          </h2>
          <p className="text-sm text-slate-500 lg:text-base">
            Respostas para as perguntas mais frequentes da nossa comunidade{' '}
            <br /> Não teve sua pergunta respondida? Entre em contato com a
            gente:
          </p>
          <Link
            className="mt-2 flex max-w-fit cursor-pointer items-center justify-center rounded-md border border-emerald-600 px-6 py-2 text-center text-sm text-emerald-600 transition-all duration-300 hover:brightness-105"
            href="#"
          >
            Entrar em contato
          </Link>
        </article>
        <div className="flex w-full flex-col gap-y-6">
          {FAQ_QUESTIONS.map((question, index) => (
            <QuestionItem
              copy={question}
              index={index}
              key={`cmms-questions-question-${question.title}-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
