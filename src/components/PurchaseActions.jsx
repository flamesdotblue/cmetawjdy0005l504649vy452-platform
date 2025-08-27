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

export default function PurchaseActions({ computedPrices, selectedCurrency }) {
  const price = computedPrices[selectedCurrency];

  return (
    <div className="mt-4 space-y-3 rounded-xl border border-slate-800/60 bg-slate-900/70 p-5 shadow-lg">
      <div className="flex items-end justify-between">
        <div className="text-sm text-slate-400">Your selection</div>
        <div className="text-lg font-bold text-white">
          {formatPrice(selectedCurrency, price)}
          <span className="ml-2 text-xs font-medium text-slate-400">{selectedCurrency}</span>
        </div>
      </div>
      <button className="w-full rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 px-4 py-3 font-semibold text-white shadow-md transition hover:brightness-110">
        Buy Now
      </button>
      <div className="flex items-center justify-between gap-3">
        <button className="flex-1 rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800">Add to Wishlist</button>
        <button className="rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800">Share</button>
      </div>
      <div className="text-xs text-slate-400">
        All prices are indicative. Cryptocurrency rates are snapshots for display and may differ at checkout.
      </div>
    </div>
  );
}
