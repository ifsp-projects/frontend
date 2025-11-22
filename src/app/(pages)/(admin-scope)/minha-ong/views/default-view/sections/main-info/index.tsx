import Image from 'next/image'
import Link from 'next/link'

import { getUserSession } from '@/utils/auth/get-user-session'
import { ExportArrowUpRight } from '@vectoricons/atlas-icons-react'

export const MainInfo = async () => {
  const user = await getUserSession()

  return (
    <section className="px-4 py-12 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-md border border-neutral-200 bg-white lg:max-w-7xl">
        <figure className="h-[260px] w-full rounded-t-md">
          <Image
            alt="background image"
            className="h-full w-full rounded-t-md object-cover"
            height={2160}
            src="https://i.redd.it/macos-sonoma-wallpapers-5120x2160-v0-qfwf1gq8h5wb1.jpg?width=5120&format=pjpg&auto=webp&s=e7ac63bffcb4fce31b0ce59d7da32201d97bc962"
            width={5000}
          />
        </figure>
        <div className="flex w-full items-start gap-4 px-4 lg:justify-between">
          <div className="flex w-full flex-col items-center gap-4 lg:flex-row">
            <Image
              alt={user?.organization_profile?.name}
              className="h-24 w-24 rounded-md border border-neutral-200 object-cover"
              height={120}
              src={user?.organization_profile?.logo}
              width={120}
            />
            <div className="flex w-full flex-col justify-center gap-2">
              <article className="flex w-full flex-col">
                <p className="text-base font-bold lg:text-lg">
                  {user?.organization_profile?.name}
                </p>
                <p className="-mt-1 text-sm lg:text-base">
                  {user?.organization_profile?.ong_type}
                </p>
              </article>
            </div>
          </div>
          <div className="flex w-full items-start lg:justify-end">
            <button className="w-fit cursor-pointer items-center justify-center rounded-sm bg-neutral-700 px-6 py-2 text-center !text-white transition-all duration-150 hover:bg-neutral-600">
              Editar perfil
            </button>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 px-4 pb-8">
          <h3 className="font-bold">Informações sobre a ONG</h3>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-neutral-600">Contato: {user.email}</p>
            <p className="text-sm text-neutral-600">
              Endereço: 201 Rua dos Sashimis, Capivari - São Paulo, BR
            </p>
            <p className="text-sm text-neutral-600">
              Telefone de Contato: {user?.organization_profile?.phone}
            </p>
            <Link
              className="group mt-3 flex cursor-pointer items-center gap-2"
              href={`/ongs/${user?.organization_profile?.slug}`}
            >
              <p className="text-rose-400 transition-all duration-300 group-hover:brightness-105">
                Ver página da ONG
              </p>
              <ExportArrowUpRight className="h-4 w-4 text-rose-400 transition-all duration-300 group-hover:brightness-105" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
