import Image from 'next/image'

export const Divider = async () => {
  return (
    <section className="flex w-full justify-between">
      <div className="relative mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between">
        <figure className="h-5 w-full lg:h-7.5">
          <Image
            alt="Try now background image"
            className="h-3.75 w-full object-cover lg:h-5"
            height={1080}
            src="https://vite.dev/assets/footer-background.BIgtbvhx.jpg"
            width={1920}
          />
        </figure>
      </div>
    </section>
  )
}
