import { Clock, HandHeart, Package, Wrench } from 'lucide-react'
import Link from 'next/link'

// ─── SECTION 1: VOLUNTEER / GET INVOLVED ────────────────────────────────────

const WAYS = [
  {
    icon: HandHeart,
    title: 'Voluntariado em campo',
    description:
      'Atue diretamente nas comunidades em ações de distribuição, saúde e educação. Disponibilidade de meio período já é suficiente.',
    cta: 'Quero ser voluntário'
  },
  {
    icon: Package,
    title: 'Doação de itens',
    description:
      'Alimentos não-perecíveis, roupas em bom estado, materiais escolares e medicamentos são sempre bem-vindos em nossos pontos de coleta.',
    cta: 'Ver pontos de coleta'
  },
  {
    icon: Clock,
    title: 'Doação recorrente',
    description:
      'Com R$30 por mês você garante alimentação de uma família por 30 dias. Qualquer valor, qualquer frequência, gera impacto real.',
    cta: 'Começar a doar'
  },
  {
    icon: Wrench,
    title: 'Pro bono profissional',
    description:
      'Advogados, médicos, designers, contadores — se você tem uma habilidade, temos uma causa que precisa dela. Ofereça seu tempo.',
    cta: 'Oferecer serviço'
  }
]

export const GetInvolved = () => {
  return (
    <section className="bg-white px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="w-fit border-l-4 border-rose-600 pl-3 text-xs font-bold tracking-widest text-rose-600 uppercase">
              Como participar
            </span>
            <h2 className="text-3xl leading-tight font-black text-neutral-800 lg:text-4xl xl:text-5xl">
              Existem <span className="text-rose-600">muitas formas</span> de
              fazer parte disso.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-base">
            Não acreditamos que ajudar exige grandes sacrifícios. Cada pessoa
            tem algo a oferecer — tempo, habilidade, recurso ou voz. Escolha o
            que faz sentido pra você.
          </p>
        </div>

        {/* Ways grid */}
        <div className="grid grid-cols-1 gap-px border border-neutral-100 bg-neutral-100 md:grid-cols-2">
          {WAYS.map(({ icon: Icon, title, description, cta }) => (
            <div
              className="group relative flex flex-col gap-6 bg-white p-8 transition-all duration-300 hover:bg-rose-600"
              key={title}
            >
              <div className="flex h-12 w-12 items-center justify-center border-2 border-rose-100 bg-rose-50 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10">
                <Icon
                  className="h-5 w-5 text-rose-600 transition-colors duration-300 group-hover:text-white"
                  strokeWidth={2}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-black text-neutral-800 transition-colors duration-300 group-hover:text-white">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-rose-100">
                  {description}
                </p>
              </div>

              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-rose-600 uppercase transition-colors duration-300 group-hover:text-white">
                  {cta}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom urgency banner */}
        <div className="mt-px flex flex-col gap-4 border border-t-0 border-neutral-100 bg-neutral-50 px-8 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 animate-pulse rounded-full bg-rose-600" />
            <p className="text-sm font-bold text-neutral-700">
              Precisamos de{' '}
              <span className="text-rose-600">15 voluntários</span> para o
              mutirão de saúde em abril.
            </p>
          </div>
          <Link
            className="shrink-0 rounded-none bg-rose-600 px-7 py-3 text-xs font-black tracking-wider text-white uppercase shadow-lg shadow-rose-200 transition-all duration-300 hover:bg-rose-700"
            href="#"
          >
            Garantir minha vaga
          </Link>
        </div>
      </div>
    </section>
  )
}
