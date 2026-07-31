import Image from 'next/image'

import { Header } from './sections/header'

export const Login = async () => {
  return (
    <main className="flex min-h-screen w-full flex-col overflow-hidden lg:h-screen lg:flex-row lg:justify-between">
      <Header />
      <figure className="relative hidden h-full w-full lg:block lg:max-w-1/2">
        <Image
          alt="Login Background Image"
          className="h-full w-full object-cover"
          height={1414}
          src="https://cdn.prod.website-files.com/6618114bae6895cc12d3dc1d/665f1765f1432b0533fb7524_iStock-1498170916.webp"
          width={2120}
        />
      </figure>
    </main>
  )
}
