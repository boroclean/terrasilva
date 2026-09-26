"use client";

import { 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Boxes, 
  ArrowUpRight, 
  CreditCard,
  Building2,
  Calendar
} from "lucide-react";

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#14171c]">Pénzügy & Teljesítmény Statisztika</h1>
          <p className="text-xs text-[#684d39]">
            Havi forgalom, nettó árrés, tengeri konténer megtérülés és átlagos kosárérték
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold bg-white border border-[#e8ddcf] px-3.5 py-2 rounded-xl text-[#14171c] shadow-2xs flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#9e7753]" /> 2026. Szeptember
          </span>
        </div>
      </div>

      {/* Main KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <span className="text-xs text-[#805e43] font-medium">Összesített Bruttó Árbevétel</span>
          <div className="text-2xl font-bold text-[#14171c]">18 640 000 Ft</div>
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +32% előző hónaphoz képest
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <span className="text-xs text-[#805e43] font-medium">Becsült Nettó Árrés (Profit)</span>
          <div className="text-2xl font-bold text-emerald-700">10 885 000 Ft</div>
          <span className="text-[11px] text-[#805e43]">Átlagos haszonkulcs: <strong>58.4%</strong></span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <span className="text-xs text-[#805e43] font-medium">Átlagos Rendelési Érték (AOV)</span>
          <div className="text-2xl font-bold text-[#14171c]">548 000 Ft</div>
          <span className="text-[11px] text-[#805e43]">Prémium luxus bútor kategória</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <span className="text-xs text-[#805e43] font-medium">CBM Kihasználtság (Konténer)</span>
          <div className="text-2xl font-bold text-[#14171c]">97.2%</div>
          <span className="text-[11px] text-emerald-700 font-semibold">Minimális fuvarköltség / db</span>
        </div>
      </div>

      {/* Financial Breakdown Table */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-[#14171c]">Termékkategóriák Jövedelmezősége</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Kategória</th>
                <th className="p-3 font-semibold text-center">Eladott db</th>
                <th className="p-3 font-semibold text-right">Összes Bevétel</th>
                <th className="p-3 font-semibold text-right">Bekerülési Költség (Landed)</th>
                <th className="p-3 font-semibold text-right">Nettó Árrés (Ft)</th>
                <th className="p-3 font-semibold text-center rounded-r-lg">Haszonkulcs %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              <tr className="hover:bg-[#faf8f5]">
                <td className="p-3 font-bold text-[#14171c]">Fotelek & Lounge székek</td>
                <td className="p-3 text-center font-semibold">14 db</td>
                <td className="p-3 text-right font-bold text-[#14171c]">3 486 000 Ft</td>
                <td className="p-3 text-right text-[#684d39]">868 000 Ft</td>
                <td className="p-3 text-right font-bold text-emerald-700">2 618 000 Ft</td>
                <td className="p-3 text-center font-bold text-emerald-700">75.1%</td>
              </tr>
              <tr className="hover:bg-[#faf8f5]">
                <td className="p-3 font-bold text-[#14171c]">Márvány Étkezőasztalok</td>
                <td className="p-3 text-center font-semibold">6 db</td>
                <td className="p-3 text-right font-bold text-[#14171c]">3 534 000 Ft</td>
                <td className="p-3 text-right text-[#684d39]">1 110 000 Ft</td>
                <td className="p-3 text-right font-bold text-emerald-700">2 424 000 Ft</td>
                <td className="p-3 text-center font-bold text-emerald-700">68.5%</td>
              </tr>
              <tr className="hover:bg-[#faf8f5]">
                <td className="p-3 font-bold text-[#14171c]">Moduláris Kanapék</td>
                <td className="p-3 text-center font-semibold">8 db</td>
                <td className="p-3 text-right font-bold text-[#14171c]">7 120 000 Ft</td>
                <td className="p-3 text-right text-[#684d39]">2 320 000 Ft</td>
                <td className="p-3 text-right font-bold text-emerald-700">4 800 000 Ft</td>
                <td className="p-3 text-center font-bold text-emerald-700">67.4%</td>
              </tr>
              <tr className="hover:bg-[#faf8f5]">
                <td className="p-3 font-bold text-[#14171c]">Étkezőszék Szettek (4-es)</td>
                <td className="p-3 text-center font-semibold">24 db</td>
                <td className="p-3 text-right font-bold text-[#14171c]">4 500 000 Ft</td>
                <td className="p-3 text-right text-[#684d39]">672 000 Ft</td>
                <td className="p-3 text-right font-bold text-emerald-700">3 828 000 Ft</td>
                <td className="p-3 text-center font-bold text-emerald-700">85.1%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
