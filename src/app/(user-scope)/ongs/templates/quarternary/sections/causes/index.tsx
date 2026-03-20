import { BookOpen, ShieldCheck, Stethoscope, Utensils } from 'lucide-react'

const CAUSES = [
  {
    number: '01',
    icon: Utensils,
    title: 'Segurança alimentar',
    description:
      'Nenhuma família deveria passar fome. Distribuímos alimentos frescos e cestas básicas toda semana nas regiões mais críticas.',
    reach: '340 famílias / mês'
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Educação de base',
    description:
      'Reforço escolar, alfabetização de adultos e acesso a material didático para crianças fora do ciclo regular.',
    reach: '120 alunos ativos'
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'Saúde preventiva',
    description:
      'Mutirões de saúde com médicos voluntários, distribuição de medicamentos e campanhas de vacinação em áreas remotas.',
    reach: '8 mutirões realizados'
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Proteção e abrigo',
    description:
      'Suporte a famílias em situação de risco habitacional, com reformas emergenciais e encaminhamento para programas oficiais.',
    reach: '18 famílias protegidas'
  }
]

export const Causes = () => {
  return (
    <section className="bg-white px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <span className="w-fit border-l-4 border-rose-600 pl-3 text-xs font-bold tracking-widest text-rose-600 uppercase">
              Nossas causas
            </span>
            <h2 className="max-w-lg text-3xl leading-tight font-black text-neutral-800 lg:text-4xl xl:text-5xl">
              Quatro frentes. Um objetivo.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400 lg:text-right">
            Concentramos esforços onde o impacto é mais urgente e menos
            assistido pelo poder público.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-neutral-100 bg-neutral-100 md:grid-cols-2 lg:grid-cols-4">
          {CAUSES.map(({ number, icon: Icon, title, description, reach }) => (
            <div
              className="group relative flex flex-col gap-6 bg-white p-8"
              key={title}
            >
              <span className="absolute top-4 right-4 text-6xl font-black text-neutral-100 select-none">
                {number}
              </span>

              <div className="flex h-12 w-12 items-center justify-center border-2 border-rose-100 bg-rose-50">
                <Icon className="h-5 w-5 text-rose-600" strokeWidth={2} />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-black text-neutral-800">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {description}
                </p>
              </div>

              <div className="mt-auto border-t border-neutral-100 pt-4">
                <span className="text-xs font-bold tracking-widest text-rose-600 uppercase">
                  {reach}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
