import type { VisitorsResponse } from 'capivara-solidaria-ts-sdk'
import { useRef, useState } from 'react'
import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page, userEvent } from 'vitest/browser'

import { VisitorsModal } from './visitors-modal'

const data = {
  range: '30d',
  period_start: '2026-08-25',
  period_end: '2026-09-23',
  updated_at: '2026-09-24T12:00:00.000Z',
  pageviews: 14,
  selected_date: null
} as VisitorsResponse

function Harness({ loading = false, report = data }) {
  const [open, setOpen] = useState(false)
  const [range, setRange] = useState<'7d' | '30d'>('30d')
  const triggerRef = useRef<HTMLButtonElement>(null)
  return (
    <>
      <button onClick={() => setOpen(true)} ref={triggerRef} type="button">
        Abrir visitantes
      </button>
      <VisitorsModal
        data={report}
        loading={loading}
        onOpenChange={setOpen}
        onRangeChange={setRange}
        open={open}
        range={range}
        triggerRef={triggerRef}
      >
        <p>Relatório carregado</p>
      </VisitorsModal>
    </>
  )
}

describe('VisitorsModal', () => {
  it('shows loading without stale metrics, then period metadata', async () => {
    const screen = await render(<Harness loading />)
    await page.getByRole('button', { name: 'Abrir visitantes' }).click()
    await expect
      .element(page.getByRole('status'))
      .toHaveTextContent('Carregando visitantes...')
    await expect
      .element(page.getByText('Relatório carregado'))
      .not.toBeInTheDocument()

    await screen.rerender(<Harness />)
    await expect
      .element(page.getByText('Relatório carregado'))
      .toBeInTheDocument()
    await expect
      .element(page.getByText('25/08/2026 a 23/09/2026'))
      .toBeInTheDocument()
    await expect
      .element(page.getByText('Dados via PostHog'))
      .toBeInTheDocument()
    await expect
      .element(page.getByText('Horário de Brasília'))
      .toBeInTheDocument()
    await expect
      .element(page.getByRole('combobox', { name: 'Período' }))
      .toBeInTheDocument()
  })

  it('shows the empty state and returns focus after Escape', async () => {
    await render(<Harness report={{ ...data, pageviews: 0 }} />)
    const trigger = page.getByRole('button', { name: 'Abrir visitantes' })
    await trigger.click()
    await expect
      .element(page.getByText('Nenhuma visita neste período'))
      .toBeInTheDocument()
    await expect
      .element(page.getByText('Relatório carregado'))
      .toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await expect.element(page.getByRole('dialog')).not.toBeInTheDocument()
    expect(document.activeElement).toBe(trigger.element())
  })

  it('closes through its button and returns focus', async () => {
    await render(<Harness />)
    const trigger = page.getByRole('button', { name: 'Abrir visitantes' })
    await trigger.click()
    await page.getByRole('button', { name: 'Fechar visitantes' }).click()
    await expect.element(page.getByRole('dialog')).not.toBeInTheDocument()
    expect(document.activeElement).toBe(trigger.element())
  })
})
