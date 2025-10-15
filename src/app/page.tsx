import { ArrowRight } from '../components/Icons/Arrow-right'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center overflow-y-hidden">
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
        <div className="font-AlanSans flex w-full items-center justify-around gap-10 p-5">
          <Button
            className="group cursor-pointer rounded-2xl bg-neutral-100 px-20 py-6 text-xl text-stone-800 hover:bg-neutral-200"
            size="lg"
            variant="ghost"
          >
            Quero Conhecer
            <ArrowRight className="translate-x-0 transition-all duration-150 ease-in group-hover:translate-x-1" />
          </Button>
          <Button
            className="group cursor-pointer rounded-2xl bg-neutral-100 py-6 text-xl text-stone-800 hover:bg-neutral-300"
            size="lg"
            variant="ghost"
          >
            Sou uma ONG
            <ArrowRight className="translate-x-0 transition-all duration-150 ease-in group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </main>
  )
}
