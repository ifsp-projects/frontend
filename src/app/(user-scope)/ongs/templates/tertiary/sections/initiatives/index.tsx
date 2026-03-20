import Image from 'next/image'

const PROJECTS = [
  {
    tag: 'Alimentação',
    title: 'Cesta do Bem',
    description:
      'Distribuição mensal de cestas básicas para famílias em situação de insegurança alimentar em regiões periféricas.',
    metric: '340 famílias atendidas',
    status: 'Em andamento',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80'
  },
  {
    tag: 'Educação',
    title: 'Reforço em Rede',
    description:
      'Aulas de reforço escolar e alfabetização de adultos ministradas por voluntários em centros comunitários.',
    metric: '120 alunos ativos',
    status: 'Em andamento',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80'
  },
  {
    tag: 'Moradia',
    title: 'Teto Seguro',
    description:
      'Reforma e adaptação de habitações precárias para famílias em risco estrutural, priorizando idosos e crianças.',
    metric: '18 casas reformadas',
    status: 'Captando recursos',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
  }
]

const STATUS_STYLES: Record<string, string> = {
  'Em andamento': 'text-emerald-600 border-emerald-200',
  'Captando recursos': 'text-amber-600 border-amber-200'
}

export const Initiatives = () => {
  return (
    <section className="bg-neutral-100">
      <div className="mx-auto w-full max-w-2xl px-4 py-12 lg:max-w-7xl lg:py-16 xl:px-0">
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-8 bg-amber-400" />
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
            Projetos ativos
          </span>
        </div>

        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-lg text-3xl leading-tight font-black text-neutral-700 lg:text-4xl xl:text-5xl">
            Onde sua ajuda{' '}
            <span className="relative inline-block">
              <span className="relative z-10">chega</span>
              <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-amber-300/60" />
            </span>{' '}
            agora.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map(
            ({ tag, title, description, metric, status, image }) => (
              <div
                className="group flex flex-col overflow-hidden rounded-sm border border-neutral-300 bg-white"
                key={title}
              >
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <Image
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    height={400}
                    src={image}
                    width={600}
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black tracking-widest text-amber-950 uppercase">
                    {tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-black text-neutral-700">
                      {title}
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-400">
                      {description}
                    </p>
                  </div>

                  <div className="h-px w-full bg-neutral-200" />

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-neutral-400">Impacto</span>
                      <span className="text-sm font-black text-neutral-700">
                        {metric}
                      </span>
                    </div>
                    <span
                      className={`rounded-sm border px-3 py-1 text-[10px] font-bold ${STATUS_STYLES[status]}`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
