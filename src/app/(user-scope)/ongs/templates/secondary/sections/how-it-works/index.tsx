import Image from 'next/image'
import Link from 'next/link'

export const HowItWorks = async () => {
  return (
    <section className="bg-neutral-50 px-4 py-12 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <figure className="w-full">
          <Image
            alt="Section Image"
            className="h-[320px] w-full rounded-sm object-cover"
            height={1080}
            src="https://images.ctfassets.net/kftzwdyauwt9/4pZ1y9pOSiiyrm99zhBAzH/6bc57658ced65b6e97b4744b539703e7/oai_GA_Stories_1.1.png?w=3840&q=90&fm=webp"
            width={1920}
          />
        </figure>
        <div className="flex w-full flex-col gap-8">
          <article className="flex w-full flex-col gap-2">
            <span className="mb-2 w-fit rounded-full border border-blue-500 px-4 py-1 text-xs text-blue-500">
              Sobre o projeto
            </span>
            <h2 className="text-2xl font-bold lg:text-5xl">
              Lorem ipsum dolor sit <br /> ipsum beca dolor!
            </h2>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              aliquid dolor quas commodi ullam. Quidem hic natus dignissimos
              optio iusto, accusantium nesciunt eligendi ipsum illum. Commodi
              soluta repudiandae tempore. Assumenda.
            </p>
          </article>
          <Link
            className="flex max-w-fit cursor-pointer items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-center text-sm font-bold text-white transition-all duration-300 hover:brightness-105"
            href="#"
          >
            Quero saber mais
          </Link>
        </div>
      </div>
    </section>
  )
}
