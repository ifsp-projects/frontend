import Image from 'next/image'

import { CircleButton } from '@/components/ui/circle-button'

export const Details = async () => {
  return (
    <section className="bg-neutral-100 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:gap-8">
          <h2 className="text-2xl font-bold lg:text-3xl">
            No Capivara Solidária, acreditamos que toda causa merece ser vista e
            apoiada.
          </h2>
          <article className="flex flex-col gap-4">
            <p className="text-sm text-neutral-700 lg:text-base">
              Nosso propósito é fortalecer ONGs e projetos sociais que muitas
              vezes não têm visibilidade, oferecendo uma plataforma simples e
              intuitiva para criar páginas, compartilhar suas ações e alcançar
              novos apoiadores.
            </p>
            <p className="text-sm text-neutral-700 lg:text-base">
              Acreditamos que a tecnologia pode ser uma aliada poderosa do
              impacto social. Por isso, desenvolvemos o Capivara Solidário para
              dar autonomia às ONGs — sem precisar de equipe técnica — e ajudar
              cada projeto a contar sua história de forma profissional,
              transparente e inspiradora.
            </p>
          </article>
        </div>
        <div className="flex h-auto w-full flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col items-center gap-6 rounded-sm bg-[#e3dacc] px-8 py-12">
            <Image
              alt="Card Image"
              className="h-full max-h-[205px] w-full max-w-[205px] object-cover"
              height={400}
              src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd686b6d20bb1cd568c_Hands-Build.svg"
              width={400}
            />
            <p className="text-base font-bold lg:text-xl xl:text-2xl">
              Tecnologia a serviço das causas sociais
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-6 rounded-sm bg-[#bcd1ca] px-8 py-12">
            <Image
              alt="Card Image"
              className="h-full max-h-[205px] w-full max-w-[205px] object-cover"
              height={400}
              src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd72914c76f710d86fc_Hands-Stack.svg"
              width={400}
            />
            <p className="text-base font-bold lg:text-xl xl:text-2xl">
              Conectando pessoas, ideias e impacto real
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-6 rounded-sm bg-[#cbcadb] px-8 py-12">
            <Image
              alt="Card Image"
              className="h-full max-h-[205px] w-full max-w-[205px] object-cover"
              height={400}
              src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7b8d86b6d20bb1cd1292_Objects-Puzzle.svg"
              width={400}
            />
            <p className="text-base font-bold lg:text-xl xl:text-2xl">
              Soluções simples para desafios reais
            </p>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <CircleButton href="/ongs" label="Ver todos projetos" />
        </div>
      </div>
    </section>
  )
}
