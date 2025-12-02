export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-50 dark:bg-black">
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-black dark:text-white">Kernel Bye</h1>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">
              Home
            </a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">
              cool stuff
            </a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition">
              register(???)
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center w-full overflow-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-semibold leading-12 tracking-tight text-black dark:text-zinc-50">
            Kernel Bye uh this page is a WIP rn ok chill
          </h1>
        </div>
      </main>
    </div>
  );
}
