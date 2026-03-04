export const SocialProof = async () => {
  return (
    <section className="border-y border-neutral-100 bg-neutral-50 px-6 py-6 xl:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs font-medium text-neutral-400">
          Mais de <strong className="text-neutral-700">48.000 textos</strong>{' '}
          gerados
        </p>
        <div className="hidden h-4 w-px bg-neutral-200 sm:block" />
        <p className="text-xs font-medium text-neutral-400">
          Usado por{' '}
          <strong className="text-neutral-700">900+ comunicadores</strong> de
          ONGs
        </p>
        <div className="hidden h-4 w-px bg-neutral-200 sm:block" />
        <p className="text-xs font-medium text-neutral-400">
          Média de <strong className="text-neutral-700">3h economizadas</strong>{' '}
          por semana
        </p>
      </div>
    </section>
  )
}
