import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export const FeaturedArticleCard = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <figure className="relative aspect-square w-full rounded-xl">
        <Image
          alt="Featured Article Card Image"
          className="aspect-square h-full w-full rounded-xl object-cover"
          height={800}
          src={imageSrc}
          width={800}
        />
        <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-neutral-700">
          Generative
        </span>
      </figure>
      <article className="flex w-full flex-col gap-2">
        <div className="flex w-full flex-row lg:justify-between">
          <h2 className="flex w-full flex-1 justify-start text-lg font-semibold">
            An In-Depth Tutorial for Character Aniamtion
          </h2>
          <figure className="flex h-5 w-5 justify-end lg:h-6 lg:w-6">
            <ArrowUpRight className="h-5 w-5 text-neutral-700 lg:h-6 lg:w-6" />
          </figure>
        </div>
        <p className="text-sm text-neutral-500">Aug • 5min</p>
      </article>
    </div>
  )
}
