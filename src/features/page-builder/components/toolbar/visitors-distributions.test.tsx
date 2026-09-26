import { cleanup, render, screen, within } from '@testing-library/react'
import type { VisitorsResponse } from 'capivara-solidaria-ts-sdk'
import { afterEach, describe, expect, it } from 'vitest'

import { VisitorsDistributions } from './visitors-distributions'

const period = {
  selected_date: null,
  pageviews: 10,
  sources: [
    { kind: 'external', domain: 'google.com', pageviews: 5, share_pct: 50 },
    { kind: 'internal', domain: null, pageviews: 2, share_pct: 20 },
    { kind: 'other', domain: null, pageviews: 1, share_pct: 10 },
    { kind: 'unknown', domain: null, pageviews: 2, share_pct: 20 }
  ],
  devices: [
    { type: 'mobile', pageviews: 7, share_pct: 70 },
    { type: 'desktop', pageviews: 2, share_pct: 20 },
    { type: 'tablet', pageviews: 0, share_pct: 0 },
    { type: 'unknown', pageviews: 1, share_pct: 10 }
  ]
} as VisitorsResponse

describe('VisitorsDistributions', () => {
  afterEach(cleanup)

  it('shows period counts and shares with aggregated domain only', () => {
    render(<VisitorsDistributions data={period} />)
    const sources = screen.getByRole('region', { name: 'Origens de tráfego' })
    const devices = screen.getByRole('region', { name: 'Dispositivos' })

    expect(
      within(sources).getByText('google.com').parentElement?.textContent
    ).toBe('google.com5 visualizações50%')
    expect(
      within(sources).getByText('Navegação interna').parentElement?.textContent
    ).toBe('Navegação interna2 visualizações20%')
    expect(within(sources).getByText('Outras origens')).toBeTruthy()
    expect(within(sources).getByText('Origem não identificada')).toBeTruthy()
    expect(sources.textContent).not.toContain('https://')
    expect(within(devices).getByText('Tablet').parentElement?.textContent).toBe(
      'Tablet0 visualizações0%'
    )
    expect(
      within(devices).getByText('Não informado').parentElement?.textContent
    ).toBe('Não informado1 visualização10%')
  })

  it('shows the selected day distributions rather than period values', () => {
    render(
      <VisitorsDistributions
        data={{
          ...period,
          selected_date: '2026-09-23',
          pageviews: 2,
          sources: [
            { kind: 'unknown', domain: null, pageviews: 2, share_pct: 100 }
          ],
          devices: [
            { type: 'mobile', pageviews: 0, share_pct: 0 },
            { type: 'desktop', pageviews: 0, share_pct: 0 },
            { type: 'tablet', pageviews: 0, share_pct: 0 },
            { type: 'unknown', pageviews: 2, share_pct: 100 }
          ]
        }}
      />
    )

    expect(screen.getByText('Distribuições de 23/09/2026')).toBeTruthy()
    expect(screen.queryByText('google.com')).toBeNull()
    expect(
      screen.getByText('Origem não identificada').parentElement?.textContent
    ).toBe('Origem não identificada2 visualizações100%')
    expect(screen.getByText('Não informado').parentElement?.textContent).toBe(
      'Não informado2 visualizações100%'
    )
  })
})
