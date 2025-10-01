export default function Home() {
  return (
    <main className="h-screen mt-[2rem] items-center justify-center flex">
      <img
        src="https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_1280.jpg"
        alt=""
        className="absolute z-0 w-full h-[90%] opacity-90 object-cover"
      />
      <div className="relative z-10 flex-col bg-stone-700/10 rounded-3xl py-3 px-2">
        <p className="text-8xl font-bold text-stone-100 text-shadow-2xs text-shadow-stone-700">
          O Poder está em suas Mãos
        </p>
      </div>
    </main>
  )
}