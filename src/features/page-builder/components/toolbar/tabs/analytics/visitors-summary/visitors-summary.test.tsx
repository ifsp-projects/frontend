import type { VisitorsResponse } from 'capivara-solidaria-ts-sdk'
import { afterEach, describe, expect, it } from 'vitest'

import { cleanup, render, screen } from '@testing-library/react'

import { VisitorsSummary } from './visitors-summary'

const sample = {
  unique_visitors: 3,
  pageviews: 14,
  views_per_visitor: 4.67,
  change_pct: 50,
  previous_unique_visitors: 2,
  period_highlights: {
    best_day: '2026-09-23',
    average_daily_pageviews: 2
  }
} as VisitorsResponse

describe('VisitorsSummary', () => {
  afterEach(cleanup)

  it('shows the spec seven-day example', () => {
    render(<VisitorsSummary data={sample} />)
    const value = (label: string) =>
      screen.getByText(label).parentElement?.textContent
    expect(value('Visitantes únicos')).toContain('3')
    expect(value('Visualizações')).toBe('Visualizações14')
    expect(value('Visualizações por visitante')).toBe(
      'Visualizações por visitante4,67'
    )
    expect(value('Variação de visitantes')).toContain('+50%')
    expect(value('Média diária de visualizações')).toBe(
      'Média diária de visualizações2'
    )
    expect(value('Melhor dia do período')).toBe(
      'Melhor dia do período23/09/2026'
    )
  })

  it('labels a positive period with no comparison base', () => {
    render(
      <VisitorsSummary
        data={{ ...sample, previous_unique_visitors: 0, change_pct: null }}
      />
    )
    expect(screen.getByText('Sem base de comparação')).toBeTruthy()
  })

  it('shows zero metrics and the no-visit highlight', () => {
    render(
      <VisitorsSummary
        data={{
          ...sample,
          unique_visitors: 0,
          pageviews: 0,
          views_per_visitor: 0,
          change_pct: 0,
          previous_unique_visitors: 0,
          period_highlights: { best_day: null, average_daily_pageviews: 0 }
        }}
      />
    )
    const summary = screen.getByRole('region', { name: 'Resumo do período' })
    expect(summary.textContent).toContain('Variação de visitantes0%')
    expect(summary.textContent).toContain('Ainda sem visitas')
    expect(
      screen.getByText('Visualizações por visitante').parentElement?.textContent
    ).toBe('Visualizações por visitante0')
    expect(
      screen.getByText('Média diária de visualizações').parentElement
        ?.textContent
    ).toBe('Média diária de visualizações0')
  })
})
