import type {
  VisitorsDevice,
  VisitorsResponse,
  VisitorsSource
} from 'capivara-solidaria-ts-sdk'

const sourceLabel = (source: VisitorsSource) => {
  if (source.kind === 'external')
    return source.domain ?? 'Origem não identificada'
  if (source.kind === 'internal') return 'Navegação interna'
  if (source.kind === 'other') return 'Outras origens'
  return 'Origem não identificada'
}

const deviceLabels: Record<VisitorsDevice['type'], string> = {
  mobile: 'Celular',
  desktop: 'Computador',
  tablet: 'Tablet',
  unknown: 'Não informado'
}

const dateLabel = (date: string) => {
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}

type DistributionRow = {
  label: string
  pageviews: number
  share_pct: number
}

function Distribution({
  title,
  rows
}: {
  title: string
  rows: DistributionRow[]
}) {
  return (
    <section aria-label={title} className="min-w-0" role="region">
      <h3 className="mb-3 text-sm font-semibold text-neutral-700">{title}</h3>
      <ul className="flex flex-col gap-2">
        {rows.map((row, index) => (
          <li
            className="flex min-w-0 items-center gap-2 text-sm text-neutral-700"
            key={`${row.label}-${index}`}
          >
            <span className="min-w-0 flex-1 truncate" title={row.label}>
              {row.label}
            </span>
            <span className="shrink-0 tabular-nums">
              {row.pageviews}{' '}
              {row.pageviews === 1 ? 'visualização' : 'visualizações'}
            </span>
            <span className="w-11 shrink-0 text-right font-medium text-rose-700 tabular-nums">
              {row.share_pct.toLocaleString('pt-BR', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 1
              })}
              %
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function VisitorsDistributions({ data }: { data: VisitorsResponse }) {
  return (
    <section aria-label="Distribuições" className="flex min-w-0 flex-col gap-4">
      <h2 className="text-base font-semibold text-neutral-700">
        {data.selected_date
          ? `Distribuições de ${dateLabel(data.selected_date)}`
          : 'Distribuições do período'}
      </h2>
      <div className="grid min-w-0 grid-cols-1 gap-6 rounded-md border border-neutral-200 p-4 sm:grid-cols-2">
        <Distribution
          rows={data.sources.map(source => ({
            label: sourceLabel(source),
            pageviews: source.pageviews,
            share_pct: source.share_pct
          }))}
          title="Origens de tráfego"
        />
        <Distribution
          rows={data.devices.map(device => ({
            label: deviceLabels[device.type],
            pageviews: device.pageviews,
            share_pct: device.share_pct
          }))}
          title="Dispositivos"
        />
      </div>
    </section>
  )
}
