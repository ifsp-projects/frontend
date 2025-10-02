export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 flex max-h-[8rem] w-full items-center rounded-md bg-white/85 text-stone-900 backdrop-blur-2xl">
      <ul className="flex items-center justify-start gap-5 px-10 py-5">
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:bg-stone-100 hover:text-stone-700">
          Home
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:bg-stone-100 hover:text-stone-700">
          Ajude
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:bg-stone-100 hover:text-stone-700">
          Sobre-nós
        </li>
        <li className="flex cursor-pointer items-center justify-center rounded-lg px-1 py-2 hover:bg-stone-100 hover:text-stone-700">
          Contato
        </li>
      </ul>
    </nav>
  )
}
