import Link from 'next/link'

const TIMELINE = [
  {
    year: '2010',
    title: 'O começo',
    description:
      'Tudo começou com 5 voluntários e um carro lotado de mantimentos. Primeira distribuição no bairro Jardim das Flores, atendendo 12 famílias.',
    highlight: '12 famílias'
  },
  {
    year: '2013',
    title: 'Expansão para saúde',
    description:
      'Parceria com médicos voluntários deu origem aos mutirões de saúde. Em seis meses, mais de 400 consultas realizadas gratuitamente.',
    highlight: '400+ consultas'
  },
  {
    year: '2017',
    title: 'Registro oficial',
    description:
      'Tornamo-nos uma ONG oficialmente registrada, abrindo portas para parcerias institucionais e captação estruturada de recursos.',
    highlight: 'ONG registrada'
  },
  {
    year: '2020',
    title: 'Resposta à pandemia',
    description:
      'Em 72 horas após o decreto de lockdown, mobilizamos 200 voluntários e distribuímos 1.800 cestas básicas em toda a região.',
    highlight: '1.800 cestas'
  },
  {
    year: '2024',
    title: 'Presente',
    description:
      'Atuamos em 12 cidades, com mais de 80 voluntários fixos e impacto mensal direto em 500 famílias. A história continua.',
    highlight: '12 cidades'
  }
]

export const Timeline = () => {
  return (
    <section className="bg-neutral-50 px-4 py-24 xl:px-0">
      <div className="mx-auto w-full max-w-2xl lg:max-w-7xl">
        <div className="mb-16 flex flex-col gap-3">
          <span className="w-fit border-l-4 border-rose-600 pl-3 text-xs font-bold tracking-widest text-rose-600 uppercase">
            Nossa trajetória
          </span>
          <h2 className="max-w-lg text-3xl leading-tight font-black text-neutral-800 lg:text-4xl">
            14 anos construídos um passo de cada vez.
          </h2>
        </div>

        <div className="relative flex flex-col lg:flex-row lg:gap-0">
          <div className="absolute top-0 left-[19px] h-full w-px bg-rose-200 lg:top-[19px] lg:left-0 lg:h-px lg:w-full" />

          {TIMELINE.map(({ year, title, description, highlight }, i) => (
            <div
              className="relative flex gap-6 pb-12 last:pb-0 lg:flex-1 lg:flex-col lg:gap-6 lg:pt-12 lg:pr-8 lg:pb-0 last:lg:pr-0"
              key={year}
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center bg-rose-600 lg:absolute lg:top-[-19px] lg:left-0">
                <span className="text-[10px] font-black text-white">
                  {i + 1}
                </span>
              </div>

              <div className="flex flex-col gap-3 lg:pt-0">
                <span className="text-xs font-black tracking-widest text-rose-600 uppercase">
                  {year}
                </span>
                <h3 className="text-base font-black text-neutral-800">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {description}
                </p>
                <span className="mt-1 w-fit bg-rose-100 px-3 py-1 text-xs font-black text-rose-700">
                  {highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-neutral-200 pt-12 text-center">
          <p className="text-lg font-black text-neutral-700">
            E o próximo capítulo depende de você.
          </p>
          <Link
            className="rounded-none bg-rose-600 px-8 py-3.5 text-sm font-black tracking-wider text-white uppercase transition-all duration-300 hover:bg-rose-700"
            href="#"
          >
            Fazer parte da história
          </Link>
        </div>
      </div>
    </section>
  )
}
