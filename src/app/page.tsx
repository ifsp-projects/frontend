import { ArrowRight } from '../components/Icons/Arrow-right'
import { Navbar } from '../components/Navbar'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center overflow-y-hidden">
      <Navbar />
      <img
        alt=""
        className="absolute z-0 h-full w-full object-cover"
        src="https://cdn.pixabay.com/photo/2024/09/05/11/52/cats-9024710_1280.jpg"
      />
      <div className="font-AlanSans relative z-10 flex flex-col items-center justify-center rounded-3xl bg-neutral-500/10 px-2 py-3">
        <p className="text-center text-[5.3rem] font-bold text-stone-100 text-shadow-2xs text-shadow-stone-800">
          Faça a Diferença
        </p>
        <p className="mt-5 text-center font-medium text-stone-100 text-shadow-2xs text-shadow-stone-800 lg:text-2xl">
          Saiba quais ONG's estão mais proximas de você, sua ajuda pode salvar
          vidas
        </p>
        <div className='flex items-center justify-around w-full p-5 gap-10 font-AlanSans'>
          <Button variant='ghost' size='lg' className='bg-neutral-100 text-stone-800 rounded-2xl group cursor-pointer hover:bg-neutral-200 text-xl px-20 py-6'>Quero Conhecer<ArrowRight className='group-hover:translate-x-1 translate-x-0 duration-150 transition-all ease-in'/></Button>
          <Button variant='ghost' size='lg' className='bg-neutral-100 group text-stone-800 rounded-2xl cursor-pointer hover:bg-neutral-300 text-xl py-6'>Sou uma ONG<ArrowRight className='group-hover:translate-x-1 translate-x-0 duration-150 transition-all ease-in'/></Button>
        </div>
      </div>
    </main>
  )
}
