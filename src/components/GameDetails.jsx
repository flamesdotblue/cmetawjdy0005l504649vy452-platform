export default function GameDetails() {
  return (
    <section className="space-y-6">
      <Panel title="About this game">
        <p className="text-slate-300">
          Chart a course through procedurally generated star systems in a handcrafted narrative. Recruit a diverse crew, upgrade your ship, and decide the fate of fringe colonies at the edge of known space. Every jump forward carries risk—and reward.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
          <li>Branching storylines with meaningful consequences</li>
          <li>Deep ship management and tactical away missions</li>
          <li>Original synthwave soundtrack</li>
          <li>Full controller and ultrawide support</li>
        </ul>
      </Panel>

      <Panel title="Screenshots">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          <Shot url="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop" />
          <Shot url="https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?q=80&w=1200&auto=format&fit=crop" />
          <Shot url="https://images.unsplash.com/photo-1618941715603-0db2d8896c7c?q=80&w=1200&auto=format&fit=crop" />
        </div>
      </Panel>

      <Panel title="System requirements">
        <div className="grid gap-4 sm:grid-cols-2">
          <ReqBlock label="Minimum">
            <ul className="space-y-1 text-sm text-slate-300">
              <li>OS: Windows 10 64-bit</li>
              <li>Processor: Intel i5-6600K / AMD Ryzen 3</li>
              <li>Memory: 8 GB RAM</li>
              <li>Graphics: GTX 970 / RX 570</li>
              <li>Storage: 30 GB available space</li>
            </ul>
          </ReqBlock>
          <ReqBlock label="Recommended">
            <ul className="space-y-1 text-sm text-slate-300">
              <li>OS: Windows 11 64-bit</li>
              <li>Processor: Intel i7-8700K / AMD Ryzen 5</li>
              <li>Memory: 16 GB RAM</li>
              <li>Graphics: RTX 2060 / RX 6600</li>
              <li>Storage: 30 GB SSD space</li>
            </ul>
          </ReqBlock>
        </div>
      </Panel>
    </section>
  );
}

function Panel({ title, children }) {
  return (
    <div className="rounded-xl border border-slate-800/60 bg-slate-900/70 p-5 shadow">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Shot({ url }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-800/60">
      <img src={url} alt="Screenshot" className="h-40 w-full object-cover transition duration-300 hover:scale-[1.02] md:h-44" />
    </div>
  );
}

function ReqBlock({ label, children }) {
  return (
    <div className="rounded-lg border border-slate-800/60 bg-slate-900/60 p-4">
      <div className="text-sm font-semibold text-slate-200">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
