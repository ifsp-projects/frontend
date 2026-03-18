import Link from 'next/link'

export interface Section {
  content: React.ReactNode
  icon: string
  id: string
  title: string
}

export const sections: Section[] = [
  {
    id: 'aceitacao',
    icon: '✦',
    title: 'Aceitação dos Termos',
    content: (
      <>
        <p>
          Ao acessar ou utilizar a plataforma{' '}
          <strong>Capivara Solidária</strong> — disponível em{' '}
          <a
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
            href="https://capivara-solidaria.com.br"
          >
            capivara-solidaria.com.br
          </a>{' '}
          —, você declara ter lido, compreendido e concordado com os presentes
          Termos de Uso, bem como com nossa Política de Privacidade.
        </p>
        <p>
          Caso não concorde com qualquer disposição destes termos, solicitamos
          que se abstenha de utilizar a plataforma. O uso continuado após
          alterações nos Termos implica aceitação das novas condições.
        </p>
        <p>
          Estes Termos se aplicam a todos os usuários, incluindo visitantes,
          apoiadores cadastrados e organizações sem fins lucrativos (ONGs)
          registradas na plataforma.
        </p>
      </>
    )
  },
  {
    id: 'definicoes',
    icon: '◈',
    title: 'Definições',
    content: (
      <>
        <p>
          Para fins destes Termos de Uso, as seguintes definições se aplicam:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            [
              'Plataforma',
              'O site, aplicativo e serviços oferecidos pela Capivara Solidária.'
            ],
            [
              'Usuário',
              'Qualquer pessoa física ou jurídica que acesse ou utilize a Plataforma.'
            ],
            [
              'Apoiador',
              'Usuário pessoa física que busca descobrir e apoiar ONGs cadastradas.'
            ],
            [
              'Organização / ONG',
              'Pessoa jurídica sem fins lucrativos registrada e verificada na Plataforma.'
            ],
            [
              'Conta',
              'Registro pessoal que permite acesso a funcionalidades exclusivas da Plataforma.'
            ],
            [
              'Conteúdo',
              'Textos, imagens, logotipos, vídeos e demais materiais publicados na Plataforma.'
            ]
          ].map(([term, def]) => (
            <li className="flex gap-3" key={term}>
              <span className="mt-0.5 shrink-0 text-rose-400">▸</span>
              <span>
                <strong className="text-neutral-700">{term}:</strong>{' '}
                <span className="text-neutral-500">{def}</span>
              </span>
            </li>
          ))}
        </ul>
      </>
    )
  },
  {
    id: 'cadastro',
    icon: '◎',
    title: 'Cadastro e Conta',
    content: (
      <>
        <p>
          Para acessar determinadas funcionalidades da Plataforma, é necessário
          criar uma Conta. Ao se cadastrar, você se compromete a:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            'Fornecer informações verdadeiras, precisas, atuais e completas.',
            'Manter as informações da sua Conta atualizadas.',
            'Manter a confidencialidade de suas credenciais de acesso.',
            'Notificar imediatamente a Capivara Solidária sobre qualquer uso não autorizado da sua Conta.',
            'Ser o único responsável por todas as atividades realizadas com suas credenciais.'
          ].map((item, i) => (
            <li className="flex gap-3" key={i}>
              <span className="mt-0.5 shrink-0 text-rose-400">▸</span>
              <span className="text-neutral-500">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 rounded-sm border border-rose-100 bg-rose-50 p-4 text-sm text-rose-700">
          <strong>Atenção:</strong> É vedado o cadastro de menores de 18 anos
          sem consentimento expresso dos responsáveis legais. A Capivara
          Solidária se reserva o direito de recusar ou cancelar cadastros a
          qualquer momento.
        </div>
      </>
    )
  },
  {
    id: 'ongs',
    icon: '❋',
    title: 'Organizações e ONGs',
    content: (
      <>
        <p>
          A Capivara Solidária conecta apoiadores a organizações sem fins
          lucrativos verificadas. Para que uma ONG seja listada na Plataforma,
          ela deve:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            'Possuir registro jurídico válido como entidade sem fins lucrativos (CNPJ ativo).',
            'Passar pelo processo de verificação e curadoria da equipe Capivara Solidária.',
            'Manter seus dados institucionais atualizados na Plataforma.',
            'Agir em conformidade com a legislação brasileira vigente.',
            'Publicar apenas conteúdo verdadeiro, ético e relacionado à sua missão.'
          ].map((item, i) => (
            <li className="flex gap-3" key={i}>
              <span className="mt-0.5 shrink-0 text-rose-400">▸</span>
              <span className="text-neutral-500">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          A Capivara Solidária não se responsabiliza pelas atividades, promessas
          ou captações realizadas diretamente pelas organizações fora da
          Plataforma. Encorajamos os apoiadores a pesquisar as organizações
          antes de realizar qualquer contribuição.
        </p>
      </>
    )
  },
  {
    id: 'uso-aceitavel',
    icon: '⊕',
    title: 'Uso Aceitável',
    content: (
      <>
        <p>
          Ao usar a Plataforma, você concorda em não praticar, direta ou
          indiretamente, qualquer das seguintes ações:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            'Publicar conteúdo falso, enganoso ou fraudulento',
            'Utilizar a Plataforma para fins comerciais não autorizados',
            'Violar direitos de propriedade intelectual de terceiros',
            'Coletar dados de outros usuários sem consentimento',
            'Praticar spam, phishing ou engenharia social',
            'Tentar acessar áreas restritas da Plataforma',
            'Disseminar vírus, malware ou código malicioso',
            'Praticar assédio, discriminação ou discurso de ódio'
          ].map((item, i) => (
            <div
              className="flex items-start gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2.5 text-sm text-neutral-600"
              key={i}
            >
              <span className="mt-0.5 shrink-0 text-rose-300">✕</span>
              {item}
            </div>
          ))}
        </div>
        <p className="mt-4">
          O descumprimento destas regras pode resultar na suspensão ou
          encerramento imediato da sua Conta, sem aviso prévio, além de
          eventuais medidas legais cabíveis.
        </p>
      </>
    )
  },
  {
    id: 'propriedade-intelectual',
    icon: '◇',
    title: 'Propriedade Intelectual',
    content: (
      <>
        <p>
          Todo o conteúdo disponível na Plataforma — incluindo mas não se
          limitando a textos, logotipos, ilustrações, ícones, fotografias,
          interfaces, código-fonte e identidade visual — é de propriedade
          exclusiva da Capivara Solidária ou de seus parceiros licenciantes, e
          está protegido pela legislação brasileira e internacional de direitos
          autorais.
        </p>
        <p>É permitida a reprodução parcial de conteúdos desde que:</p>
        <ul className="mt-3 space-y-2">
          {[
            'A fonte seja devidamente citada com link para a Plataforma.',
            'O uso seja exclusivamente para fins não comerciais e informativos.',
            'Não haja alteração, adaptação ou deturpação do conteúdo original.'
          ].map((item, i) => (
            <li className="flex gap-3" key={i}>
              <span className="mt-0.5 shrink-0 text-rose-400">▸</span>
              <span className="text-neutral-500">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          As organizações cadastradas mantêm os direitos sobre os conteúdos que
          publicam, mas concedem à Capivara Solidária licença não exclusiva para
          exibi-los na Plataforma.
        </p>
      </>
    )
  },
  {
    id: 'privacidade',
    icon: '◉',
    title: 'Privacidade e Dados',
    content: (
      <>
        <p>
          A Capivara Solidária trata os dados pessoais dos usuários em
          conformidade com a{' '}
          <strong>
            Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)
          </strong>
          . O tratamento ocorre com base em fundamentos legais sólidos, como
          consentimento, execução contratual e legítimo interesse.
        </p>
        <p>
          Coletamos apenas os dados necessários para o funcionamento da
          Plataforma. Você pode exercer seus direitos de acesso, correção,
          exclusão e portabilidade de dados a qualquer momento através do e-mail{' '}
          <a
            className="text-rose-500 underline decoration-rose-200 underline-offset-2 transition-colors hover:decoration-rose-400"
            href="mailto:privacidade@capivara-solidaria.com.br"
          >
            privacidade@capivara-solidaria.com.br
          </a>
          .
        </p>
        <div className="mt-4 flex items-center gap-3 rounded-sm border border-sky-100 bg-sky-50 p-4 text-sm text-sky-700">
          <span>
            Para informações detalhadas sobre coleta, uso e proteção dos seus
            dados, consulte nossa{' '}
            <Link
              className="font-semibold underline underline-offset-2 hover:opacity-80"
              href="/politica-de-privacidade"
            >
              Política de Privacidade
            </Link>
            .
          </span>
        </div>
      </>
    )
  },
  {
    id: 'responsabilidade',
    icon: '△',
    title: 'Limitação de Responsabilidade',
    content: (
      <>
        <p>
          A Capivara Solidária atua como plataforma intermediária e não se
          responsabiliza por:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            'Ações, omissões ou irregularidades praticadas pelas organizações cadastradas.',
            'Danos indiretos, incidentais ou consequenciais decorrentes do uso da Plataforma.',
            'Indisponibilidade temporária da Plataforma por motivos técnicos ou de manutenção.',
            'Conteúdo de terceiros acessível por meio de links externos presentes na Plataforma.',
            'Perda de dados decorrente de falhas não imputáveis à Capivara Solidária.'
          ].map((item, i) => (
            <li className="flex gap-3" key={i}>
              <span className="mt-0.5 shrink-0 text-neutral-300">▸</span>
              <span className="text-neutral-500">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          A Plataforma é fornecida <em>"no estado em que se encontra"</em>, sem
          garantias expressas ou implícitas de adequação a finalidade específica
          ou ausência de erros.
        </p>
      </>
    )
  },
  {
    id: 'alteracoes',
    icon: '↻',
    title: 'Alterações nos Termos',
    content: (
      <>
        <p>
          A Capivara Solidária se reserva o direito de modificar estes Termos a
          qualquer momento. Alterações relevantes serão comunicadas através de:
        </p>
        <ul className="mt-4 space-y-3">
          {[
            'Notificação por e-mail para os usuários cadastrados.',
            'Aviso em destaque na página inicial da Plataforma.',
            'Atualização da data de vigência no topo desta página.'
          ].map((item, i) => (
            <li className="flex gap-3" key={i}>
              <span className="mt-0.5 shrink-0 text-rose-400">▸</span>
              <span className="text-neutral-500">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          O uso continuado da Plataforma após a publicação de novos Termos
          constitui aceitação automática das alterações. Recomendamos a revisão
          periódica desta página.
        </p>
      </>
    )
  }
] as const
