const LAST_UPDATED: string = '1 de janeiro de 2025' as const
const EFFECTIVE_DATE: string = '1 de janeiro de 2025' as const

export const Header = async () => {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-4 py-16 lg:py-24 xl:px-0">
      <header className="relative mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <article>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 px-4 py-1.5 text-xs font-medium text-rose-400">
              Documento Legal
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-800 lg:text-5xl">
              Termos de Uso
            </h1>
            <p className="mt-3 max-w-xl text-base text-neutral-500">
              Leia com atenção antes de utilizar nossa plataforma. Estes termos
              estabelecem os direitos e deveres de todos os envolvidos.
            </p>
          </article>

          <article className="flex shrink-0 flex-col gap-1 rounded-sm border border-neutral-200 bg-white px-5 py-4">
            <p className="text-xs text-neutral-400">
              Última atualização:{' '}
              <span className="font-medium text-neutral-600">
                {LAST_UPDATED}
              </span>
            </p>
            <p className="text-xs text-neutral-400">
              Em vigor desde:{' '}
              <span className="font-medium text-neutral-600">
                {EFFECTIVE_DATE}
              </span>
            </p>
            <p className="text-xs text-neutral-400">
              Versão: <span className="font-medium text-neutral-600">1.0</span>
            </p>
          </article>
        </div>
      </header>
    </section>
  )
}
