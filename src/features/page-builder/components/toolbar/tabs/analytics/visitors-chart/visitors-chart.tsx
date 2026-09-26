'use client'

import type { VisitorsDailyPoint } from 'capivara-solidaria-ts-sdk'
import { useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { Button } from '@/shared/components/ui/button'
import { ChartContainer } from '@/shared/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components/ui/select'

const dateLabel = (date: string) => {
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}

type VisitorsChartProps = {
  daily: VisitorsDailyPoint[]
  selectedDate: string | null
  onSelectDate: (date: string) => void
}

export function VisitorsChart({
  daily,
  selectedDate,
  onSelectDate
}: VisitorsChartProps) {
  const [metric, setMetric] = useState<'visitors' | 'pageviews'>('visitors')
  const metricLabel = metric === 'visitors' ? 'Visitantes' : 'Visualizações'

  return (
    <section
      aria-label="Movimento diário"
      className="flex min-w-0 flex-col gap-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-neutral-700">
          Movimento diário
        </h2>
        <div
          aria-label="Métrica do gráfico"
          className="flex gap-1"
          role="group"
        >
          <Button
            className={
              metric === 'visitors'
                ? 'border-rose-700 bg-rose-50 text-rose-700'
                : 'text-neutral-700'
            }
            aria-pressed={metric === 'visitors'}
            onClick={() => setMetric('visitors')}
            size="sm"
            type="button"
            variant="outline"
          >
            Visitantes
          </Button>
          <Button
            className={
              metric === 'pageviews'
                ? 'border-rose-700 bg-rose-50 text-rose-700'
                : 'text-neutral-700'
            }
            aria-pressed={metric === 'pageviews'}
            onClick={() => setMetric('pageviews')}
            size="sm"
            type="button"
            variant="outline"
          >
            Visualizações
          </Button>
        </div>
      </div>

      <ChartContainer
        config={{
          visitors: { label: 'Visitantes', color: '#fb7185' },
          pageviews: { label: 'Visualizações', color: '#fb7185' }
        }}
        aria-label={`${metricLabel} por dia`}
        className="h-52"
        role="img"
        style={{ height: 208 }}
      >
        <BarChart
          data={daily}
          margin={{ top: 8, right: 4, left: -24, bottom: 0 }}
          accessibilityLayer
        >
          <CartesianGrid stroke="#e5e5e5" vertical={false} />
          <XAxis
            tickFormatter={value =>
              `${value.slice(8, 10)}/${value.slice(5, 7)}`
            }
            axisLine={false}
            dataKey="date"
            interval="preserveStartEnd"
            minTickGap={22}
            tickLine={false}
          />
          <YAxis allowDecimals={false} axisLine={false} tickLine={false} />
          <Tooltip
            formatter={value => [
              Number(value).toLocaleString('pt-BR'),
              metricLabel
            ]}
            labelFormatter={value => dateLabel(String(value))}
          />
          <Bar
            dataKey={metric}
            fill={`var(--color-${metric})`}
            maxBarSize={32}
            onClick={(_, index) => onSelectDate(daily[index].date)}
            radius={[3, 3, 0, 0]}
          >
            {daily.map(point => (
              <Cell
                fill={point.date === selectedDate ? '#be123c' : '#fb7185'}
                key={point.date}
              />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>

      <div className="flex flex-col gap-1 sm:max-w-xs">
        <label
          className="text-sm font-medium text-neutral-700"
          htmlFor="visitors-chart-date"
        >
          Escolher dia
        </label>
        <Select onValueChange={onSelectDate} value={selectedDate ?? undefined}>
          <SelectTrigger aria-label="Escolher dia" id="visitors-chart-date">
            <SelectValue placeholder="Selecione um dia" />
          </SelectTrigger>
          <SelectContent>
            {daily.map(point => (
              <SelectItem key={point.date} value={point.date}>
                {dateLabel(point.date)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}
