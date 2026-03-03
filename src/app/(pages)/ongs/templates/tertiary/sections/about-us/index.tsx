import { HeartHandshake, Home, Users, Wheat } from 'lucide-react'

const STATS = [
  { icon: Users, value: '+500', label: 'Pessoas auxiliadas' },
  { icon: Wheat, value: '+25kg', label: 'Alimentos arrecadados' },
  { icon: Home, value: '+2', label: 'Abrigos disponibilizados' },
  { icon: HeartHandshake, value: '+80', label: 'Voluntários ativos' }
]

export const AboutUs = () => {
  return (
    <section className="bg-neutral-50 px-4 py-20 xl:px-0 xl:py-28">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-8 bg-amber-400" />
          <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
            Sobre o projeto
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl leading-tight font-black text-neutral-700 lg:text-4xl xl:text-5xl">
                Acreditamos que{' '}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">solidariedade</span>
                  <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-amber-300/60" />
                </span>{' '}
                não é caridade — é justiça.
              </h2>
              <p className="text-sm leading-relaxed text-neutral-500 lg:text-base">
                Nascemos em 2010 com a convicção de que pequenos gestos,
                somados, reescrevem histórias. Atuamos diretamente em
                comunidades vulneráveis, conectando quem quer ajudar com quem
                mais precisa — sem burocracia, sem intermediários.
              </p>
              <p className="text-sm leading-relaxed text-neutral-500 lg:text-base">
                Nossa metodologia é simples: escutar antes de agir. Cada projeto
                nasce de uma demanda real, mapeada junto às famílias atendidas.
                Porque as melhores soluções vêm de dentro da comunidade.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                className="group flex flex-col gap-4 rounded-sm border border-neutral-300 bg-white p-6"
                key={label}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-400/20">
                  <Icon className="h-5 w-5 text-amber-600" strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-neutral-700">
                    {value}
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
