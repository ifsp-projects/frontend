import Image from 'next/image'
import Link from 'next/link'

export const Header = async () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 xl:px-0">
      <header className="mx-auto flex w-full max-w-2xl flex-col lg:min-h-[700px] lg:max-w-7xl lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-between gap-10 py-16 pr-0 lg:py-20 lg:pr-16">
          <div className="flex flex-col gap-2">
            <span className="w-fit rounded-none border-l-4 border-rose-600 pl-3 text-xs font-bold tracking-widest text-rose-600 uppercase">
              Projeto de extensão social
            </span>
          </div>

          <div className="flex flex-col gap-8">
            {/* Giant editorial number */}
            {/* <div className="flex items-end gap-4">
              <span className="text-[120px] leading-none font-black text-rose-600 opacity-10 lg:text-[180px]">
                14
              </span>
              <span className="mb-4 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                anos de atuação
              </span>
            </div> */}

            <div className="-mt-8 flex flex-col gap-6 lg:-mt-12">
              <h1 className="max-w-xl text-4xl leading-[1.1] font-black text-neutral-800 lg:text-5xl xl:text-6xl">
                Quando o Estado não chega,{' '}
                <em className="text-rose-600 not-italic">nós chegamos.</em>
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-base">
                Somos uma rede de voluntários e profissionais que atua nas
                lacunas deixadas pela ausência de políticas públicas. Diretos,
                presentes e sem burocracia.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                className="rounded-none bg-rose-600 px-8 py-3.5 text-sm font-black tracking-wider text-white uppercase transition-all duration-300 hover:bg-rose-700"
                href="#"
              >
                Quero ajudar
              </Link>
              <Link
                className="rounded-none border-2 border-neutral-200 px-8 py-3.5 text-sm font-black tracking-wider text-neutral-600 uppercase transition-all duration-300 hover:border-rose-600 hover:text-rose-600"
                href="#"
              >
                Ver projetos
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-8 border-t border-neutral-100 pt-8">
            {[
              { value: '500+', label: 'Famílias' },
              { value: '80+', label: 'Voluntários' },
              { value: '12', label: 'Cidades' }
            ].map(({ value, label }) => (
              <div className="flex flex-col gap-0.5" key={label}>
                <span className="text-2xl font-black text-rose-600">
                  {value}
                </span>
                <span className="text-xs font-medium tracking-widest text-neutral-400 uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="relative hidden w-[420px] shrink-0 overflow-hidden lg:block xl:w-[480px]">
          <Image
            alt="Hero"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=960&q=80"
            fill
          />
          <div className="absolute inset-0 bg-neutral-900/40" />
          <div className="absolute bottom-8 left-8 flex flex-col gap-2">
            <span className="w-fit bg-rose-600 px-3 py-1 text-xs font-black tracking-widest text-white uppercase">
              Em campo agora
            </span>
            <p className="max-w-[200px] text-sm leading-snug font-semibold text-white">
              Distribuição de kits de higiene em Fortaleza, CE
            </p>
          </div>
        </div> */}
        <figure className="relative z-30 w-full max-w-[500px] rounded-sm lg:pr-24">
          <Image
            alt="Hero Image"
            className="w-full object-cover"
            height={800}
            src="/templates/undraw_different-love_58hd.svg"
            width={800}
          />
        </figure>
      </header>
    </section>
  )
}
