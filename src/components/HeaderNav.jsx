export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg" />
          <span className="text-lg font-semibold tracking-wide text-slate-100">Nebula Games</span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-slate-300 hover:text-white transition" href="#">Store</a>
          <a className="text-sm text-slate-300 hover:text-white transition" href="#">Library</a>
          <a className="text-sm text-slate-300 hover:text-white transition" href="#">Community</a>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search store"
            className="w-40 rounded-md bg-slate-800/80 px-3 py-2 text-sm text-slate-100 placeholder-slate-400 outline-none ring-1 ring-inset ring-slate-700 focus:ring-indigo-500 md:w-64"
          />
          <button className="rounded-md bg-indigo-500/90 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500">Install App</button>
        </div>
      </nav>
    </header>
  );
}
