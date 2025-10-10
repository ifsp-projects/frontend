import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="fixed top-5 left-[15%] z-10 flex max-h-[6rem] items-center rounded-4xl inset-shadow-sm bg-stone-50 text-neutral-200 border-2 lg:w-[70%]">
      <ul className="flex w-full items-center justify-center gap-5 px-10 py-5 font-medium font-AlanSans text-neutral-700 lg:text-[1.35rem]">
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:text-neutral-600">
          Home
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:text-neutral-600">
          Cadastra-se
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:text-neutral-600">
          <Link href={'/faq'}>Sobre</Link>
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:text-neutral-600">
          Contato
        </li>
      </ul>
    </nav>
  )
}
