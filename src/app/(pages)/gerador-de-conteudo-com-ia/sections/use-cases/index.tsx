import { Sparkles } from 'lucide-react'

import { USE_CASES } from './data'

export const UseCases = async () => {
  return (
    <section className="flex flex-col items-center border-t border-neutral-100 bg-neutral-50 px-6 py-24 xl:px-12">
      <div className="flex w-full max-w-5xl flex-col gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase">
            Casos de uso
          </span>
          <h2 className="max-w-lg text-3xl font-black tracking-tight text-neutral-800 lg:text-4xl">
            Veja o que a IA escreve com o seu contexto.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {USE_CASES.map(({ tag, title, prompt, output }) => (
            <div
              className="grid grid-cols-1 overflow-hidden rounded-sm border border-neutral-200 bg-white lg:grid-cols-2"
              key={title}
            >
              <div className="flex flex-col gap-4 border-b border-neutral-100 p-6 lg:border-r lg:border-b-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-sm bg-neutral-100 px-2 py-0.5 text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                    {tag}
                  </span>
                  <span className="text-xs font-semibold text-neutral-600">
                    {title}
                  </span>
                </div>
                <div className="rounded-sm border border-neutral-100 bg-neutral-50 p-4">
                  <p className="text-xs leading-relaxed text-neutral-500 italic">
                    "{prompt}"
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-neutral-400">
                  <span>Prompt do usuário</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-rose-400" />
                  <span className="text-[10px] font-bold tracking-widest text-rose-400 uppercase">
                    Output da IA
                  </span>
                </div>
                <div className="rounded-sm border border-rose-100 bg-rose-50/30 p-4">
                  <p className="text-xs leading-relaxed text-neutral-600">
                    {output}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
