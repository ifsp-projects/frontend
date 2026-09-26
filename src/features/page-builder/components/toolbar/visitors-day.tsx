'use client'

import type { VisitorsResponse } from 'capivara-solidaria-ts-sdk'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

const dateLabel = (date: string) => {
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}

const number = (value: number, fractionDigits = 0) =>
  new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: fractionDigits
  }).format(value)

const changeLabel = (value: number | null) =>
  value === null
    ? 'Sem base de comparação'
    : `${value > 0 ? '+' : ''}${number(value, 1)}%`

type VisitorsDayProps = {
  data: VisitorsResponse
  selectedDate: string | null
  onSelectDate: (date: string) => void
  onBackToPeriod: () => void
}

export function VisitorsDay({
  data,
  selectedDate,
  onSelectDate,
  onBackToPeriod
}: VisitorsDayProps) {
  const detail = data.selected_date === selectedDate ? data : null
  const hourly = detail?.hourly ?? null
  const maxPageviews = Math.max(
    1,
    ...(hourly?.map(point => point.pageviews) ?? [])
  )

  return (
    <section aria-label="Detalhe diário" className="flex flex-col gap-4">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <label
            className="text-sm font-medium text-neutral-700"
            htmlFor="visitors-date"
          >
            Dia
          </label>
          <Input
            onChange={event => {
              const date = event.target.value
              if (date >= data.period_start && date <= data.period_end)
                onSelectDate(date)
            }}
            className="w-full max-w-48 min-w-0 text-neutral-700 focus-visible:ring-rose-700"
            id="visitors-date"
            max={data.period_end}
            min={data.period_start}
            type="date"
            value={selectedDate ?? ''}
          />
        </div>
        {selectedDate && (
          <Button
            className="text-rose-700"
            onClick={onBackToPeriod}
            type="button"
            variant="outline"
          >
            Voltar ao período
          </Button>
        )}
      </div>

      {detail?.selected_date && hourly && (
        <>
          <h2 className="text-lg font-semibold text-neutral-700">
            Resumo de {dateLabel(detail.selected_date)}
          </h2>
          <dl className="grid grid-cols-2 gap-3 rounded-md bg-rose-50 p-4 sm:grid-cols-4">
            <div>
              <dt className="text-sm text-neutral-700">Visitantes</dt>
              <dd className="text-xl font-semibold text-rose-700">
                {number(detail.unique_visitors)}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-700">Visualizações</dt>
              <dd className="text-xl font-semibold text-rose-700">
                {number(detail.pageviews)}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-700">
                Variação frente ao dia anterior
              </dt>
              <dd className="text-xl font-semibold text-rose-700">
                {changeLabel(detail.change_pct)}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-neutral-700">Hora de pico</dt>
              <dd className="text-xl font-semibold text-rose-700">
                {detail.peak_hour === null
                  ? 'Sem horário de pico'
                  : `${String(detail.peak_hour).padStart(2, '0')}:00`}
              </dd>
            </div>
          </dl>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-neutral-700">
              Movimento por hora
            </h3>
            <ol className="grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-2">
              {hourly.map(point => (
                <li
                  className="flex items-center gap-2 text-sm"
                  key={point.hour}
                >
                  <span className="w-12 shrink-0 text-neutral-700 tabular-nums">
                    {String(point.hour).padStart(2, '0')}:00
                  </span>
                  <span className="h-2 min-w-0 flex-1 rounded-sm bg-neutral-100">
                    <span
                      style={{
                        width: `${(point.pageviews / maxPageviews) * 100}%`
                      }}
                      className="block h-full rounded-sm bg-rose-400"
                    />
                  </span>
                  <span className="w-8 text-right text-neutral-700 tabular-nums">
                    {point.pageviews}
                  </span>
                  <span className="sr-only">
                    {point.visitors} visitantes, {point.pageviews} visualizações
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </>
      )}
    </section>
  )
}
