import { Sparkles } from 'lucide-react'

export const MockTerminal = async () => {
  return (
    <div className="w-full overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-xl shadow-neutral-100">
      <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
        </div>
        <div className="flex items-center gap-1.5 rounded-sm border border-neutral-100 bg-white px-3 py-1">
          <Sparkles className="h-3 w-3 text-rose-400" />
          <span className="text-[10px] font-medium text-neutral-400">
            Gerador de Copy — Capivara Solidária
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-0 divide-y divide-neutral-100">
        <div className="flex flex-col gap-3 p-6">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
              Seu contexto
            </span>
            <div className="flex items-center gap-2">
              <div className="rounded-sm border border-neutral-100 bg-neutral-50 px-2 py-1">
                <span className="text-[10px] text-neutral-400">
                  Tom: Emocional
                </span>
              </div>
              <div className="rounded-sm border border-neutral-100 bg-neutral-50 px-2 py-1">
                <span className="text-[10px] text-neutral-400">
                  Tipo: E-mail
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-sm border border-neutral-100 bg-neutral-50 p-4">
            <p className="text-xs leading-relaxed text-neutral-500">
              Escreva um e-mail pedindo doações para nossa campanha de cestas
              básicas de Natal para 200 famílias em Campinas...
            </p>
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-sm bg-neutral-800 py-2.5 text-xs font-semibold text-white">
            <Sparkles className="h-3.5 w-3.5 text-rose-400" />
            Gerar copy
          </button>
        </div>

        <div className="flex flex-col gap-3 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
              <span className="text-[10px] font-bold tracking-widest text-rose-400 uppercase">
                Gerado
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-sm border border-neutral-100 bg-neutral-50 px-2 py-1 text-[10px] text-neutral-400">
                Copiar
              </button>
              <button className="rounded-sm border border-neutral-100 bg-neutral-50 px-2 py-1 text-[10px] text-neutral-400">
                Regerar
              </button>
            </div>
          </div>
          <div className="rounded-sm border border-rose-100 bg-rose-50/40 p-4">
            <p className="text-xs leading-relaxed text-neutral-600">
              Neste Natal, <strong>200 famílias em Campinas</strong> acordarão
              sem saber se haverá comida na mesa. Mas com a sua ajuda, podemos
              mudar isso.
              <br />
              <br />
              Por apenas R$45 — menos do que um jantar fora — você garante uma
              cesta básica completa para uma família passar as festas com
              dignidade. Cada real doado vai direto para quem mais precisa, com
              transparência e prestação de contas públicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
