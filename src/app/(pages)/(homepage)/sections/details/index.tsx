import Image from 'next/image'

import { CircleButton } from '@/components/ui/circle-button'

export const Details = async () => {
  return (
    <section className="bg-neutral-100 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:gap-12">
        <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:gap-8">
          <h2 className="text-2xl font-bold lg:text-3xl">
            At Anthropic, we build AI to serve humanity’s long-term well-being.
          </h2>
          <article className="flex flex-col gap-4">
            <p className="text-sm text-neutral-700 lg:text-base">
              While no one can foresee every outcome AI will have on society, we
              do know that designing powerful technologies requires both bold
              steps forward and intentional pauses to consider the effects.
            </p>
            <p className="text-sm text-neutral-700 lg:text-base">
              That’s why we focus on building tools with human benefit at their
              foundation, like Claude. Through our daily research, policy work,
              and product design, we aim to show what responsible AI development
              looks like in practice.
            </p>
          </article>
        </div>
        <div className="flex h-auto w-full gap-8 lg:justify-between">
          <div className="flex w-full flex-col items-center gap-6 bg-[#e3dacc] px-8 py-12">
            <Image
              alt="Card Image"
              className="h-full max-h-[205px] w-full max-w-[205px] object-cover"
              height={400}
              src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd686b6d20bb1cd568c_Hands-Build.svg"
              width={400}
            />
            <p className="text-base font-bold lg:text-xl xl:text-2xl">
              Core Views on AI Safety
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-6 bg-[#bcd1ca] px-8 py-12">
            <Image
              alt="Card Image"
              className="h-full max-h-[205px] w-full max-w-[205px] object-cover"
              height={400}
              src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd686b6d20bb1cd568c_Hands-Build.svg"
              width={400}
            />
            <p className="text-base font-bold lg:text-xl xl:text-2xl">
              Core Views on AI Safety
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-6 bg-[#cbcadb] px-8 py-12">
            <Image
              alt="Card Image"
              className="h-full max-h-[205px] w-full max-w-[205px] object-cover"
              height={400}
              src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd686b6d20bb1cd568c_Hands-Build.svg"
              width={400}
            />
            <p className="text-base font-bold lg:text-xl xl:text-2xl">
              Core Views on AI Safety
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
