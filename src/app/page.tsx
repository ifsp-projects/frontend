import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <main className="mt-20 flex h-screen overflow-y-hidden">
      <div className="flex h-full w-full items-start justify-around pt-15">
        <div className="flex w-1/4 items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/26/10/23/cat-4364464_1280.jpg"
            alt="Imagem de destaque"
            className="h-[300px] w-[300px] rounded-[50%] object-cover"
          />
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center gap-3">
          <p className="font-AlanSans text-center text-7xl font-semibold text-neutral-800">
            Faça a diferença
          </p>
          <p className="font-AlanSans text-2xl font-light text-neutral-600">
            Junte-se a nós, faça uma doação e salve uma vida
          </p>
        </div>
        <div className="flex w-1/4 items-center justify-center">
          <div className="flex h-[300px] w-[300px] flex-col items-center justify-center p-0">
            <Button variant="ghost" size="icon" className="h-[90%] w-[90%]">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/18/11/52/fire-994185_1280.jpg"
                alt="Imagem de destaque"
                className="z-0 h-full w-full rounded-[50%] object-cover"
              />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
