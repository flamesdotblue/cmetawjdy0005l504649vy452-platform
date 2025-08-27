import { useId } from "react";

const currencyMeta = {
  USD: { label: "US Dollar", symbol: "$" },
  EUR: { label: "Euro", symbol: "€" },
  BTC: { label: "Bitcoin", symbol: "₿" },
  ETH: { label: "Ethereum", symbol: "Ξ" },
  ADA: { label: "Cardano", symbol: "₳" },
};

function formatPrice(code, value) {
  if (code === "USD") return `$${value.toFixed(2)}`;
  if (code === "EUR") return `€${value.toFixed(2)}`;
  if (code === "BTC") return `₿${value.toFixed(6)}`;
  if (code === "ETH") return `Ξ${value.toFixed(6)}`;
  if (code === "ADA") return `₳${value.toFixed(2)}`;
  return value.toFixed(2);
}

export default function PricePanel({ baseUsd, computedPrices, selectedCurrency, onSelectCurrency }) {
  const selectId = useId();
  const items = ["USD", "EUR", "BTC", "ETH", "ADA"];

  return (
    <section className="rounded-xl border border-slate-800/60 bg-slate-900/70 p-5 shadow-lg">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Pricing</h2>
          <p className="text-sm text-slate-400">Base price: ${baseUsd.toFixed(2)} USD</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-slate-400" htmlFor={selectId}>
            Display currency
          </label>
          <select
            id={selectId}
            className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-sm text-slate-100 outline-none focus:border-indigo-500"
            value={selectedCurrency}
            onChange={(e) => onSelectCurrency(e.target.value)}
          >
            {items.map((c) => (
              <option key={c} value={c}>
                {c} — {currencyMeta[c].label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((code) => {
          const isActive = selectedCurrency === code;
          return (
            <button
              key={code}
              onClick={() => onSelectCurrency(code)}
              className={
                "flex items-center justify-between gap-3 rounded-lg border px-3 py-3 text-left transition " +
                (isActive
                  ? "border-indigo-500/70 bg-indigo-500/10 ring-1 ring-inset ring-indigo-500/40"
                  : "border-slate-800/60 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-800/60")
              }
            >
              <div className="flex items-center gap-3">
                <CurrencyIcon code={code} />
                <div>
                  <div className="text-sm font-medium text-slate-100">{currencyMeta[code].label}</div>
                  <div className="text-xs text-slate-400">{code}</div>
                </div>
              </div>
              <div className="text-base font-semibold text-white">{formatPrice(code, computedPrices[code])}</div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function CurrencyIcon({ code }) {
  const base = "flex h-9 w-9 items-center justify-center rounded-md text-lg shadow ";
  if (code === "USD") return <div className={base + "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/40"}>$</div>;
  if (code === "EUR") return <div className={base + "bg-sky-500/20 text-sky-300 ring-1 ring-sky-500/40"}>€</div>;
  if (code === "BTC") return <div className={base + "bg-orange-500/20 text-orange-300 ring-1 ring-orange-500/40"}>₿</div>;
  if (code === "ETH") return <div className={base + "bg-violet-500/20 text-violet-300 ring-1 ring-violet-500/40"}>Ξ</div>;
  if (code === "ADA") return <div className={base + "bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/40"}>₳</div>;
  return <div className={base + "bg-slate-700 text-slate-100"}>?</div>;
}
