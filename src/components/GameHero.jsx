export default function GameHero() {
  const coverUrl =
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop";

  return (
    <section className="relative mt-4 overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/60">
      <div
        className="h-64 w-full bg-cover bg-center sm:h-80"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(2,6,23,0.9), rgba(2,6,23,0.4)), url(${coverUrl})`,
        }}
      />
      <div className="p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Echoes of the Expanse</h1>
            <p className="mt-2 text-slate-300">A narrative-driven space exploration RPG where your choices ripple across galaxies. Build your crew, forge alliances, and outmaneuver cosmic threats.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700">RPG</span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700">Sci‑Fi</span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700">Single‑player</span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700">Controller Support</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:mt-0">
            <Stat label="Reviews" value="Very Positive" />
            <Stat label="Release" value="Oct 2025" />
            <Stat label="Developer" value="Eventide Labs" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-800/60 bg-slate-900/60 px-3 py-2 text-center">
      <div className="text-[10px] uppercase tracking-wide text-slate-400">{label}</div>
      <div className="text-sm font-semibold text-slate-100">{value}</div>
    </div>
  );
}
