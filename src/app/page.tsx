export default function Home() {
  return (
    <main className="mt-[2rem] flex h-screen items-center justify-center">
      <img
        alt=""
        className="absolute z-0 h-[90%] w-full object-cover opacity-90"
        src="https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_1280.jpg"
      />
      <div className="relative z-10 flex-col rounded-3xl bg-stone-700/10 px-2 py-3">
        <p className="text-8xl font-bold text-stone-100 text-shadow-2xs text-shadow-stone-700">
          O Poder está em suas Mãos
        </p>
      </div>
    </main>
  )
}
