"use client";

import { useState } from "react";
import { 
  Armchair, 
  Plus, 
  Search, 
  Filter, 
  Boxes, 
  DollarSign, 
  Sparkles,
  Layers,
  ArrowUpDown
} from "lucide-react";

interface ProductRow {
  id: string;
  sku: string;
  name: string;
  category: string;
  material: string;
  stockQty: number;
  inTransitQty: number;
  basePriceHuf: number;
  purchasePriceUsd: number;
  landedCostHuf: number;
  marginPercent: number;
  cbm: number;
}

const PRODUCTS: ProductRow[] = [
  {
    id: "p1",
    sku: "BUTOR-FOT-01-GRN",
    name: "Aura Royale Lounge Fotel",
    category: "Fotelek",
    material: "Smaragdzöld Olasz Bársony + Matt Arany Láb",
    stockQty: 4,
    inTransitQty: 40,
    basePriceHuf: 249000,
    purchasePriceUsd: 110,
    landedCostHuf: 62000,
    marginPercent: 75.1,
    cbm: 0.35,
  },
  {
    id: "p2",
    sku: "BUTOR-ASZT-02-MAR",
    name: "Novara Carrara Étkezőasztal",
    category: "Étkezőasztalok",
    material: "Természetes Carrara Márvány + Fekete Fém Váz",
    stockQty: 2,
    inTransitQty: 12,
    basePriceHuf: 589000,
    purchasePriceUsd: 320,
    landedCostHuf: 185000,
    marginPercent: 68.5,
    cbm: 0.85,
  },
  {
    id: "p3",
    sku: "BUTOR-KAN-03-TER",
    name: "Velluto Moduláris Sarokkanapé",
    category: "Kanapék",
    material: "Prémium Terrakotta Bársony (3 részes)",
    stockQty: 3,
    inTransitQty: 15,
    basePriceHuf: 890000,
    purchasePriceUsd: 480,
    landedCostHuf: 290000,
    marginPercent: 67.4,
    cbm: 1.45,
  },
  {
    id: "p4",
    sku: "BUTOR-SZEK-04-BLK",
    name: "Verona Velvet Étkezőszék Szett",
    category: "Székek",
    material: "Antracit Bársony (4 db / doboz)",
    stockQty: 8,
    inTransitQty: 60,
    basePriceHuf: 189000,
    purchasePriceUsd: 42,
    landedCostHuf: 28000,
    marginPercent: 85.1,
    cbm: 0.18,
  },
  {
    id: "p5",
    sku: "BUTOR-DOH-01-WAL",
    name: "Lignum Organikus Dohányzóasztal",
    category: "Asztalok",
    material: "Tömör Amerikai Diófa",
    stockQty: 6,
    inTransitQty: 40,
    basePriceHuf: 189000,
    purchasePriceUsd: 75,
    landedCostHuf: 46000,
    marginPercent: 75.6,
    cbm: 0.22,
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#14171c]">Termékek, Készlet & Önköltség</h1>
          <p className="text-xs text-[#684d39]">
            Fizikai raktárkészlet, kínai import árak és Landed Cost haszonkulcs számítás
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-semibold hover:bg-[#2e2118] transition shadow-xs self-start sm:self-auto">
          <Plus className="w-4 h-4 text-[#9e7753]" />
          <span>Új Bútor Felvitele</span>
        </button>
      </div>

      {/* Search & Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white border border-[#e8ddcf] shadow-xs">
          <span className="text-[11px] text-[#805e43]">Raktáron lévő darabok</span>
          <div className="text-xl font-bold text-[#14171c] mt-1">23 db bútor</div>
          <span className="text-[10px] text-emerald-700 font-semibold">Azonnal szállítható</span>
        </div>
        <div className="p-4 rounded-xl bg-white border border-[#e8ddcf] shadow-xs">
          <span className="text-[11px] text-[#805e43]">Úton lévő darabok (Konténer)</span>
          <div className="text-xl font-bold text-[#14171c] mt-1">167 db bútor</div>
          <span className="text-[10px] text-amber-700 font-semibold">Előrendelhető a webshopon</span>
        </div>
        <div className="p-4 rounded-xl bg-white border border-[#e8ddcf] shadow-xs">
          <span className="text-[11px] text-[#805e43]">Átlagos Haszonkulcs (Margin)</span>
          <div className="text-xl font-bold text-emerald-700 mt-1">74.3%</div>
          <span className="text-[10px] text-[#805e43]">Gyári import előny</span>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#805e43] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Keresés bútor név, kategória vagy cikkszám alapján..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Bútor & Anyag</th>
                <th className="p-3 font-semibold text-center">Fizikai Készlet</th>
                <th className="p-3 font-semibold text-center">Úton (Konténer)</th>
                <th className="p-3 font-semibold text-right">Gyári Ár (USD)</th>
                <th className="p-3 font-semibold text-right">Bekerülési Költség</th>
                <th className="p-3 font-semibold text-right">Eladási Ár</th>
                <th className="p-3 font-semibold text-center rounded-r-lg">Haszonkulcs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-[#faf8f5] transition">
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block">{item.name}</span>
                    <span className="text-[11px] text-[#805e43] block">{item.material}</span>
                    <span className="font-mono text-[10px] text-[#9e7753]">{item.sku} • {item.cbm} CBM</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      item.stockQty > 0 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                    }`}>
                      {item.stockQty} db
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                      +{item.inTransitQty} db
                    </span>
                  </td>
                  <td className="p-3 text-right font-medium text-[#553f31]">
                    ${item.purchasePriceUsd}
                  </td>
                  <td className="p-3 text-right font-medium text-[#684d39]">
                    {new Intl.NumberFormat("hu-HU").format(item.landedCostHuf)} Ft
                  </td>
                  <td className="p-3 text-right font-bold text-[#14171c]">
                    {new Intl.NumberFormat("hu-HU").format(item.basePriceHuf)} Ft
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {item.marginPercent}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
