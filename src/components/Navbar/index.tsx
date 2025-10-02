import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="fixed top-5 left-[25%] z-10 flex max-h-[6rem] items-center rounded-4xl inset-shadow-sm bg-neutral-100/20 text-neutral-200 backdrop-blur-mdS border-neutral-300/20 border-2 hover:bg-neutral-200/20 lg:w-[50%]">
      <ul className="flex w-full items-center justify-center gap-5 px-10 py-5 font-medium font-AlanSans  lg:text-[1.2rem]">
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:text-neutral-300">
          Home
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:text-neutral-300">
          Cadastra-se
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:text-neutral-300">
          <Link href={'/faq'}>Sobre</Link>
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:text-neutral-300">
          Contato
        </li>
      </ul>
    </nav>
  )
}
