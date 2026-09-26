'use client'

import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import type { FC } from 'react'
import { toast } from 'sonner'

import { usePageBuilderStore } from '@/features/page-builder/stores/page-builder-store'
import { ActiveColor } from '@/shared/assets/icons/active-color'
import { AnalyticsIcon } from '@/shared/assets/icons/analytics-icon'
import { useUserSession } from '@/shared/hooks/use-user-session'
import {
  DashboardPerformance,
  Eye,
  Link,
  QuestionMessage,
  Sunny
} from '@vectoricons/atlas-icons-react'

import { PRESET_COLORS } from '../../constants/preset-colors'
import { useVisitors } from '../../hooks/use-visitors'
import { getScoreColor } from '../../utils/get-score-color'
import { isValidHex } from '../../utils/is-valid-hex'
import { VisitorsChart } from './tabs/analytics/visitors-chart/visitors-chart'
import { VisitorsDay } from './tabs/analytics/visitors-day/visitors-day'
import { VisitorsDistributions } from './tabs/analytics/visitors-distribution/visitors-distributions'
import { VisitorsModal } from './tabs/analytics/visitors-modal/visitors-modal'
import { VisitorsSummary } from './tabs/analytics/visitors-summary/visitors-summary'
import type { PerfScore, ToolbarProps } from './types'

export const Toolbar: FC<ToolbarProps> = ({ slug, id }) => {
  const { token } = useUserSession()

  const getSections = usePageBuilderStore(state => state.getSections)
  const getOrder = usePageBuilderStore(state => state.getCurrentOrder)
  const setMainColor = usePageBuilderStore(state => state.setInitialMainColor)
  const setColorPalette = usePageBuilderStore(
    state => state.setInitialColorPalette
  )

  const activeColor = usePageBuilderStore(s => s.mainColor)

  const [showPalette, setShowPalette] = useState<boolean>(false)
  const [customHex, setCustomHex] = useState<string>('')
  const [customError, setCustomError] = useState<boolean>(false)
  const paletteRef = useRef<HTMLDivElement>(null)

  const [perfData, setPerfData] = useState<PerfScore | null>(null)
  const [perfLoading, setPerfLoading] = useState<boolean>(false)
  const [showPerfModal, setShowPerfModal] = useState<boolean>(false)
  const visitorsTrigger = useRef<HTMLButtonElement>(null)
  const {
    open: visitorsOpen,
    range: visitorsRange,
    selectedDate: visitorsDate,
    data: visitorsData,
    periodData: visitorsPeriodData,
    loading: visitorsLoading,
    error: visitorsError,
    openReport: openVisitors,
    closeReport: closeVisitors,
    changeRange: changeVisitorsRange,
    selectDate: selectVisitorsDate,
    backToPeriod: backToVisitorsPeriod
  } = useVisitors(slug, token)

  useEffect(() => {
    if (!visitorsOpen || !visitorsError) return
    toast.error(visitorsError.message, { position: 'top-center' })
    closeVisitors()
  }, [visitorsError, visitorsOpen, closeVisitors])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        paletteRef.current &&
        !paletteRef.current.contains(e.target as Node)
      ) {
        setShowPalette(false)
      }
    }
    if (showPalette) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showPalette])

  const handleSave = async () => {
    try {
      await axios.patch(`/api/pages/${id}`, {
        sections: getSections(),
        order: getOrder(),
        token
      })
      toast.success('Página salva com sucesso!', { position: 'top-center' })
    } catch (err) {
      console.error(err)
      toast.error('Não foi possível salvar as alterações de conteúdo', {
        position: 'top-center'
      })
    }
  }

  const handlePreview = () => {
    window.open(
      `https://capivara-solidaria.com.br/ongs/${slug}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const handlePerformance = async () => {
    setShowPerfModal(true)
    if (perfData) return

    setPerfLoading(true)
    try {
      const { data } = await axios.get(`/api/core-web-vitals?slug=${slug}`)
      setPerfData(data)
    } catch (err: any) {
      const msg =
        err?.response?.data?.error ??
        'Não foi possível carregar os dados de performance'
      toast.error(msg, { position: 'top-center' })
      setShowPerfModal(false)
    } finally {
      setPerfLoading(false)
    }
  }

  const handleSelectColor = async (hex: string) => {
    const previousColor = activeColor

    setMainColor(hex)

    setShowPalette(false)
    setCustomHex('')
    setCustomError(false)

    try {
      const updated_ong = await axios.patch(`/api/pages/${id}`, {
        main_color: hex,
        token
      })

      setColorPalette(updated_ong?.data?.page?.color_pallete)
      toast.success('Cor principal atualizada!', { position: 'top-center' })
    } catch (err) {
      setMainColor(previousColor)
      console.error(err)

      toast.error('Não foi possível atualizar a cor', {
        position: 'top-center'
      })
    }
  }

  const handleCustomHexChange = (value: string) => {
    const normalized = value.startsWith('#') ? value : `#${value}`
    setCustomHex(normalized)
    setCustomError(false)
  }

  const handleCustomHexSubmit = () => {
    const hex = customHex.startsWith('#') ? customHex : `#${customHex}`
    if (!isValidHex(hex)) {
      setCustomError(true)
      return
    }
    handleSelectColor(hex)
  }

  const handleCopyLink = () => {
    const url = `https://capivara-solidaria.com.br/ongs/${slug}`
    navigator.clipboard
      .writeText(url)
      .then(() => toast.success('Link copiado!', { position: 'top-center' }))
      .catch(() =>
        toast.error('Não foi possível copiar o link', {
          position: 'top-center'
        })
      )
  }

  return (
    <>
      <VisitorsModal
        onOpenChange={nextOpen => {
          if (!nextOpen) closeVisitors()
        }}
        data={visitorsData}
        loading={visitorsLoading}
        onRangeChange={changeVisitorsRange}
        open={visitorsOpen}
        range={visitorsRange}
        triggerRef={visitorsTrigger}
      >
        {visitorsData && (
          <div className="flex min-w-0 flex-col gap-8 pb-2">
            {visitorsPeriodData && (
              <VisitorsSummary data={visitorsPeriodData} />
            )}
            <VisitorsChart
              daily={visitorsData.daily}
              onSelectDate={selectVisitorsDate}
              selectedDate={visitorsDate}
            />
            <VisitorsDay
              data={visitorsData}
              onBackToPeriod={backToVisitorsPeriod}
              onSelectDate={selectVisitorsDate}
              selectedDate={visitorsDate}
            />
            <VisitorsDistributions data={visitorsData} />
          </div>
        )}
      </VisitorsModal>
      {showPerfModal && (
        <div
          onClick={() => {
            setShowPerfModal(false)
            setPerfData(null)
          }}
          className="fixed inset-0 z-40 flex items-end justify-center pb-28 sm:items-center sm:pb-0"
        >
          <div
            className="mx-4 w-full max-w-sm rounded-sm border border-neutral-700 bg-neutral-900 p-5 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-100">
                Performance da Página
              </span>
              <button
                onClick={() => {
                  setShowPerfModal(false)
                  setPerfData(null)
                }}
                className="cursor-pointer text-lg leading-none text-neutral-400 hover:text-neutral-100"
                type="button"
              >
                ✕
              </button>
            </div>
            {perfLoading && (
              <div className="flex items-center justify-center py-8">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-600 border-t-neutral-100" />
                <span className="ml-3 text-sm text-neutral-400">
                  Analisando...
                </span>
              </div>
            )}
            {perfData && !perfLoading && (
              <div className="grid grid-cols-3 gap-3">
                {(['Performance', 'Acessibilidade', 'SEO'] as const).map(
                  (label, i) => {
                    const score = [
                      perfData.performance,
                      perfData.accessibility,
                      perfData.seo
                    ][i]
                    return (
                      <div
                        className="flex flex-col items-center rounded-sm bg-neutral-800 px-2 py-3"
                        key={label}
                      >
                        <span
                          className={`text-2xl font-bold ${getScoreColor(score)}`}
                        >
                          {score}
                        </span>
                        <span className="mt-1 text-center text-[10px] text-neutral-400">
                          {label}
                        </span>
                      </div>
                    )
                  }
                )}
              </div>
            )}
            <p className="mt-4 text-[10px] text-neutral-500">
              Dados via Google PageSpeed Insights • Powered By Capivara
              Solidaria
            </p>
          </div>
        </div>
      )}

      {showPalette && (
        <div
          className="fixed bottom-24 left-1/2 z-40 w-[calc(100%-2rem)] max-w-112.5 -translate-x-1/2 rounded-sm border border-neutral-700 bg-neutral-900 p-3 shadow-2xl"
          ref={paletteRef}
        >
          <p className="mb-2.5 text-[11px] font-medium tracking-widest text-neutral-400 uppercase">
            Cor principal
          </p>

          <div className="mb-3 grid grid-cols-5 gap-1.5">
            {PRESET_COLORS.map(({ label, value }, index: number) => (
              <button
                className="group relative flex h-9 w-full cursor-pointer items-center justify-center rounded-sm transition-all duration-300 hover:brightness-125 focus:outline-none"
                key={`${value}-${index}`}
                onClick={() => handleSelectColor(value)}
                style={{ backgroundColor: value }}
                title={label}
                type="button"
              >
                {activeColor === value ? <ActiveColor /> : null}
              </button>
            ))}
          </div>

          <div
            className="mb-3 h-8 w-full rounded-sm transition-colors duration-300"
            style={{ backgroundColor: activeColor }}
          />

          <div className="flex gap-1.5">
            <div className="relative flex-1">
              <span className="absolute top-1/2 left-2.5 -translate-y-1/2 text-xs text-neutral-500 select-none">
                #
              </span>
              <input
                className={`w-full rounded-sm border bg-neutral-800 py-2 pr-2 pl-6 text-xs text-neutral-100 placeholder-neutral-600 transition-colors outline-none ${
                  customError
                    ? 'border-red-500'
                    : 'border-neutral-700 focus:border-neutral-500'
                }`}
                maxLength={7}
                onChange={e => handleCustomHexChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCustomHexSubmit()}
                placeholder="insira uma cor personalizada, ex.: #ff6600"
                type="text"
                value={customHex.replace(/^#/, '')}
              />
            </div>
            <button
              className="cursor-pointer rounded-sm bg-neutral-700 px-3 text-xs text-neutral-100 transition-colors hover:bg-neutral-600"
              onClick={() => handleCustomHexSubmit()}
              type="button"
            >
              OK
            </button>
          </div>
          {customError && (
            <p className="mt-1 text-[10px] text-red-400">
              Hex inválido. Use formato #RGB ou #RRGGBB
            </p>
          )}
        </div>
      )}

      <div className="fixed bottom-8 left-1/2 z-30 flex w-[calc(100%-2rem)] max-w-112.5 -translate-x-1/2 transform items-center gap-1 overflow-hidden rounded-sm bg-linear-to-r from-neutral-900 to-neutral-800 px-1 py-1 shadow lg:justify-between">
        <a
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
          href="/faq"
          target="_blank"
        >
          <QuestionMessage className="h-5 w-5 text-neutral-50" />
        </a>

        <div className="flex w-full flex-1 items-center justify-center gap-1 overflow-x-auto border-x border-neutral-700 px-1">
          <button
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
            onClick={handlePreview}
            title="Visualizar página publicada"
            type="button"
          >
            <Eye className="h-5 w-5 text-neutral-50" />
          </button>

          <button
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
            onClick={handlePerformance}
            title="Ver performance da página"
            type="button"
          >
            <DashboardPerformance className="h-5 w-5 text-neutral-50" />
          </button>

          <button
            aria-label="Visitantes"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
            onClick={openVisitors}
            ref={visitorsTrigger}
            title="Visitantes"
            type="button"
          >
            <AnalyticsIcon
              aria-hidden="true"
              className="h-5 w-5 text-neutral-50"
            />
          </button>

          <button
            className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
            onClick={() => setShowPalette(prev => !prev)}
            title="Cor principal da página"
            type="button"
          >
            <Sunny className="h-5 w-5 text-neutral-50" />
            <span
              className="absolute right-1.5 bottom-1.5 h-2 w-2 rounded-full border border-neutral-600 transition-colors duration-300"
              style={{ backgroundColor: activeColor }}
            />
          </button>

          <button
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-all duration-200 hover:bg-neutral-600"
            onClick={handleCopyLink}
            title="Copiar link da página"
            type="button"
          >
            <Link className="h-5 w-5 text-neutral-50" />
          </button>
        </div>

        <div className="w-auto shrink-0 px-2">
          <button
            className="cursor-pointer rounded-sm border border-white px-3 py-1.5 text-xs font-medium whitespace-nowrap text-white transition-all duration-200 hover:bg-neutral-50 hover:text-neutral-700 lg:text-sm"
            id="save"
            onClick={handleSave}
            type="button"
          >
            Salvar Alterações
          </button>
        </div>
      </div>
    </>
  )
}
