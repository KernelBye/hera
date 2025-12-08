/**
 * Render the homepage layout with a top navigation bar, centered hero content, and fixed title and badge overlays.
 *
 * @returns A React element representing a full-screen responsive page containing the navigation, main centered text, and two fixed overlay elements (large title and subtitle badge).
 */
export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-50 dark:bg-black relative">
      <nav className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 sticky top-0 z-40">
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
      {/*Center page content!! */}
      <main className="flex-1 flex flex-col items-center justify-center w-full overflow-auto gap-4">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">Building the Future,</p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">One Kernel at a Time</p>
        <p className="text-sm text-zinc-400 dark:text-zinc-400">A city of Ottawa Premier Vex Robotics Team 2381</p>
      </main>

      {/* Title, OVER the navbar border */}
      <div className="fixed top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6 text-center">
        <h1 className="text-7xl font-bold leading-none tracking-tight text-black dark:text-zinc-50">
          Kernel Bye
        </h1>
      </div>
      {/* That oval thing in the figma... Under heading */}
      <div className="fixed top-48 left-1/2 -translate-x-1/2 z-50">
        <div className="px-4 py-2 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black text-sm font-medium">
          2381 robotics
        </div>
      </div>
    </div>
  );
}

//Yo am i crazy or is this not committing to github