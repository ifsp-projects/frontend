'use client'
import { useMemo, useState } from 'react'

type FaqItem = { id: string; pergunta: string; resposta: string }

const TODOS_FAQS: FaqItem[] = [
  {
    id: 'faq1',
    pergunta: 'O que é uma ONG?',
    resposta:
      'Uma ONG é uma entidade privada, sem fins lucrativos, composta por pessoas que atuam em prol de causas sociais, ambientais, culturais, de saúde, educacionais e outras de interesse público, complementando ou fiscalizando ações governamentais.'
  },
  {
    id: 'faq2',
    pergunta: 'Como posso ajudar uma ONG?',
    resposta:
      'Você pode doar, ser voluntário ou divulgar os projetos para ampliar o alcance das ações. Algumas ONGs também precisam de apoio com serviços profissionais (ex.: jurídico, design, TI).'
  },
  {
    id: 'faq3',
    pergunta: 'Como eu entro em contato com uma ONG?',
    resposta:
      'Acesse a página da ONG no nosso site e utilize o botão de contato (formulário, e-mail ou WhatsApp). Você também pode falar pelas redes sociais oficiais listadas no perfil de cada ONG.'
  },
  {
    id: 'faq4',
    pergunta: 'Existe algum custo para me cadastrar como voluntário?',
    resposta:
      'Não. O cadastro de voluntários no site é gratuito. Eventuais custos de atividades (ex.: transporte, material) variam por projeto e são informados pela própria ONG.'
  },
  {
    id: 'faq5',
    pergunta: 'As doações são seguras? Quais formas de pagamento?',
    resposta:
      'As doações são processadas pelas próprias ONGs ou por provedores de pagamento parceiros. As opções comuns incluem PIX, cartão e boleto. Sempre confira se a página exibe os dados oficiais da ONG antes de concluir.'
  },
  {
    id: 'faq6',
    pergunta: 'Posso receber recibo da doação? Vale para Imposto de Renda?',
    resposta:
      'Sim, solicite o recibo diretamente à ONG após a doação. A dedução no IR depende da legislação vigente e do enquadramento da entidade; confirme com a ONG e seu contador.'
  },
  {
    id: 'faq7',
    pergunta: 'Posso fazer doação recorrente? Como cancelar?',
    resposta:
      'Se a ONG oferecer doação recorrente, a opção aparecerá no perfil dela. Para cancelar, use o link enviado por e-mail, a área do doador (quando houver) ou fale com a ONG.'
  },
  {
    id: 'faq8',
    pergunta: 'Como as ONGs são verificadas antes de aparecer no site?',
    resposta:
      'Toda ONG passa por um cadastro com envio de documentos e links oficiais. Analisamos informações públicas e sinais de transparência. Em caso de dúvida, a ONG pode ser suspensa até nova verificação.'
  },
  {
    id: 'faq9',
    pergunta: 'Preciso ter alguma formação para ser voluntário?',
    resposta:
      'A maioria dos projetos aceita pessoas sem pré-requisitos. Algumas vagas específicas podem pedir experiência ou certificados (ex.: saúde, jurídico, TI).'
  },
  {
    id: 'faq10',
    pergunta: 'Posso ser voluntário remoto?',
    resposta:
      'Sim. Muitas ONGs oferecem atividades on-line (mentorias, aulas, design, desenvolvimento, atendimento). Use os filtros de busca para encontrar vagas remotas.'
  },
  {
    id: 'faq11',
    pergunta: 'Como reporto um problema, fraude ou uso indevido?',
    resposta:
      'Utilize o botão “Denunciar” no perfil da ONG ou entre em contato pelo nosso formulário de suporte. Analisamos o caso e podemos suspender perfis até a apuração.'
  },
  {
    id: 'faq12',
    pergunta: 'Como meus dados são tratados? (LGPD)',
    resposta:
      'Usamos seus dados apenas para intermediar contato e doações, conforme nossa Política de Privacidade. Você pode solicitar atualização ou exclusão dos seus dados a qualquer momento.'
  }
]

const normalizar = (txt: string) =>
  txt
    .normalize('NFD')
    //@ts-ignore
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
{
  /*Rapaziada n tirem o 'gu' pois ele serve para caso alguem digitem sem assento na barra de pesquisa*/
}

export default function Faq() {
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
    <div className="container my-5">
      <h2 className="mb-3 text-center">Perguntas Frequentes (FAQ)</h2>

      <div className="mb-4">
        <label className="form-label" htmlFor="faqSearch">
          Pesquise por palavras-chave (ex.: doação, voluntário, contato)
        </label>
        <div className="d-flex gap-2">
          <input
            className="form-control"
            id="faqSearch"
            onChange={e => setQ(e.target.value)}
            placeholder="Digite para filtrar…"
            type="search"
            value={q}
          />
          {q && (
            <button
              aria-label="Limpar busca"
              className="btn btn-outline-secondary"
              onClick={() => setQ('')}
              type="button"
            >
              Limpar
            </button>
          )}
        </div>
        <small className="text-muted d-block mt-1">
          {faqs.length} resultado{faqs.length === 1 ? '' : 's'}
        </small>
      </div>

      <div className="accordion bg-body" id="faqAccordion">
        {faqs.map((f, idx) => (
          <div className="accordion-item bg-body" key={f.id}>
            <h2 className="accordion-header" id={`heading-${f.id}`}>
              <button
                aria-controls={f.id}
                aria-expanded="false"
                className="accordion-button collapsed"
                data-bs-target={`#${f.id}`}
                data-bs-toggle="collapse"
                type="button"
              >
                {f.pergunta}
              </button>
            </h2>
            <div
              aria-labelledby={`heading-${f.id}`}
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
              id={f.id}
            >
              <div className="accordion-body text-body">{f.resposta}</div>
            </div>
          </div>
        ))}
        {faqs.length === 0 && (
          <div className="text-muted py-5 text-center">
            Nenhum FAQ encontrado para “{q}”.
          </div>
        )}
      </div>
    </div>
  )
}
