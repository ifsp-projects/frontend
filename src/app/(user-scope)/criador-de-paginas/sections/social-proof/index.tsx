export const SocialProof = async () => {
  return (
    <section className="border-y border-neutral-100 bg-neutral-50 px-6 py-6 xl:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs font-medium text-neutral-400">
          Usado por mais de{' '}
          <strong className="text-neutral-700">1.200 ONGs</strong> em todo o
          Brasil
        </p>
        <div className="hidden h-4 w-px bg-neutral-200 sm:block" />
        <p className="text-xs font-medium text-neutral-400">
          Mais de <strong className="text-neutral-700">8.400 páginas</strong>{' '}
          publicadas
        </p>
        <div className="hidden h-4 w-px bg-neutral-200 sm:block" />
        <p className="text-xs font-medium text-neutral-400">
          <strong className="text-neutral-700">R$ 2,1 milhões</strong> em
          doações facilitadas
        </p>
      </div>
    </section>
  )
}
