export const Header = async () => {
  return (
    <section className="mx-auto w-full max-w-2xl border-x border-b border-neutral-200 bg-neutral-50 px-4 pt-12 pb-12 lg:max-w-7xl lg:pt-24 lg:pb-16">
      <header className="flex flex-col items-center gap-4 lg:items-start">
        <h1 className="text-center text-2xl font-bold lg:text-left lg:text-4xl">
          Changelog
        </h1>
        <p className="text-center text-sm text-neutral-600 lg:text-left lg:text-base">
          Adições e atualização para a paltaforma da Capivara Solidária
        </p>
      </header>
    </section>
  )
}
