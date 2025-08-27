import { useMemo, useState } from "react";
import HeaderNav from "./components/HeaderNav";
import GameHero from "./components/GameHero";
import PricePanel from "./components/PricePanel";
import PurchaseActions from "./components/PurchaseActions";
import GameDetails from "./components/GameDetails";

export default function App() {
  const baseUsd = 59.99;

  // Static conversion rates (example snapshots)
  const rates = {
    USD: 1, // base
    EUR: 0.92, // 1 USD = 0.92 EUR
    BTC: 1 / 60000, // 1 USD = 1/60000 BTC
    ETH: 1 / 3000, // 1 USD = 1/3000 ETH
    ADA: 1 / 0.4, // 1 USD = 2.5 ADA
  };

  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const computedPrices = useMemo(() => {
    return {
      USD: baseUsd * rates.USD,
      EUR: baseUsd * rates.EUR,
      BTC: baseUsd * rates.BTC,
      ETH: baseUsd * rates.ETH,
      ADA: baseUsd * rates.ADA,
    };
  }, [baseUsd]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <HeaderNav />
      <main className="mx-auto max-w-6xl px-4 pb-24">
        <GameHero />
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <GameDetails />
          </div>
          <aside className="lg:col-span-1">
            <PricePanel
              baseUsd={baseUsd}
              rates={rates}
              computedPrices={computedPrices}
              selectedCurrency={selectedCurrency}
              onSelectCurrency={setSelectedCurrency}
            />
            <PurchaseActions
              computedPrices={computedPrices}
              selectedCurrency={selectedCurrency}
            />
          </aside>
        </div>
      </main>
    </div>
  );
}
