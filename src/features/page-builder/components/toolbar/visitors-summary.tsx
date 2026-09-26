import type { VisitorsResponse } from 'capivara-solidaria-ts-sdk'

const number = (value: number, maximumFractionDigits = 0) =>
  new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits
  }).format(value)

const change = (value: number | null) => {
  if (value === null) return 'Sem base de comparação'
  return `${value > 0 ? '+' : ''}${number(value, 1)}%`
}

const dateLabel = (value: string | null) => {
  if (!value) return 'Ainda sem visitas'
  const [year, month, day] = value.split('-')
  return `${day}/${month}/${year}`
}

export function VisitorsSummary({ data }: { data: VisitorsResponse }) {
  return (
    <section aria-label="Resumo do período" className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 rounded-md bg-rose-50 p-5 sm:grid-cols-[1.25fr_1fr]">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-neutral-700">
            Visitantes únicos
          </span>
          <strong className="text-4xl leading-none font-semibold text-rose-700">
            {number(data.unique_visitors)}
          </strong>
          <span className="text-xs text-neutral-700">
            Identificadores distintos no período
          </span>
        </div>
        <div className="flex flex-col gap-1 sm:justify-center">
          <span className="text-sm font-medium text-neutral-700">
            Variação de visitantes
          </span>
          <strong className="text-xl font-semibold text-rose-700">
            {change(data.change_pct)}
          </strong>
          <span className="text-xs text-neutral-700">
            Em relação ao período anterior
          </span>
        </div>
      </div>

      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
          <dt className="text-sm text-neutral-700">Visualizações</dt>
          <dd className="text-2xl font-semibold text-neutral-700">
            {number(data.pageviews)}
          </dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
          <dt className="text-sm text-neutral-700">
            Visualizações por visitante
          </dt>
          <dd className="text-2xl font-semibold text-neutral-700">
            {number(data.views_per_visitor, 2)}
          </dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
          <dt className="text-sm text-neutral-700">Melhor dia do período</dt>
          <dd className="text-lg font-semibold text-neutral-700">
            {dateLabel(data.period_highlights.best_day)}
          </dd>
        </div>
        <div className="flex flex-col gap-1 border-b border-neutral-200 pb-3">
          <dt className="text-sm text-neutral-700">
            Média diária de visualizações
          </dt>
          <dd className="text-lg font-semibold text-neutral-700">
            {number(data.period_highlights.average_daily_pageviews, 2)}
          </dd>
        </div>
      </dl>
    </section>
  )
}
