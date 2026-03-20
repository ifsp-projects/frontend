'use client'

import type { FC } from 'react'
import { useMemo, useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { TODOS_FAQS } from './data'

export const Questions: FC = () => {
  const normalizar = (txt: string) =>
    txt
      .normalize('NFD')
      // @ts-ignore
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
  {
    /* Rapaziada n tirem o 'gu' pois ele serve para caso alguem digitem sem assento na barra de pesquisa */
  }

  const [q, setQ] = useState('')

  const faqs = useMemo(() => {
    if (!q.trim()) return TODOS_FAQS
    const termo = normalizar(q)
    return TODOS_FAQS.filter(
      f =>
        normalizar(f.pergunta).includes(termo) ||
        normalizar(f.resposta).includes(termo)
    )
  }, [q])

  return (
    <section className="bg-white px-0 py-12 lg:py-16 xl:px-4">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 lg:max-w-3xl lg:gap-6">
        <Label className="mb-2 block" htmlFor="faqSearch">
          Pesquise por palavras-chave (ex.: doação, voluntário, contato)
        </Label>
        <div className="flex gap-2">
          <Input
            id="faqSearch"
            onChange={e => setQ(e.target.value)}
            placeholder="Digite para filtrar…"
            type="search"
            value={q}
          />
          {q && (
            <Button onClick={() => setQ('')} variant="outline">
              Limpar
            </Button>
          )}
        </div>
        <small className="text-muted-foreground mt-2 block">
          {faqs.length} resultado{faqs.length === 1 ? '' : 's'}
        </small>

        {faqs.length > 0 ? (
          <Accordion
            className="w-full"
            defaultValue={faqs[0]?.id}
            type="single"
            collapsible
          >
            {faqs.map(f => (
              <AccordionItem key={f.id} value={f.id}>
                <AccordionTrigger className="text-left">
                  {f.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed">
                  {f.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="text-muted-foreground py-10 text-center">
            Nenhum FAQ encontrado para “{q}”.
          </div>
        )}
      </div>
    </section>
  )
}
