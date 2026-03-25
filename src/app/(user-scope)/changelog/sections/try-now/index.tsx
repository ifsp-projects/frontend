import Image from 'next/image'

export const Divider = async () => {
  return (
    <section className="flex w-full justify-between">
      <div className="relative mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between">
        <figure className="h-[20px] w-full lg:h-[30px]">
          <Image
            alt="Try now background image"
            className="h-[15px] w-full object-cover lg:h-[20px]"
            height={1080}
            src="https://vite.dev/assets/footer-background.BIgtbvhx.jpg"
            width={1920}
          />
        </figure>
      </div>
    </section>
  )
}
