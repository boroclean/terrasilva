"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Boxes, 
  Plus, 
  Search, 
  Filter, 
  Sparkles, 
  Gem, 
  Layers, 
  Eye, 
  Edit3, 
  Trash2, 
  Check, 
  Wand2, 
  Camera, 
  ArrowRight,
  TrendingUp,
  Tag,
  DollarSign
} from "lucide-react";

interface CatalogItem {
  id: string;
  sku: string;
  name: string;
  category: "Travertin Asztalok" | "Márvány Étkezők" | "Tömörfa & Kárpit" | "Kő Lámpatestek" | "Monolit Faragványok" | "Székek & Fotelek";
  material: string;
  dimensions: string;
  sellingPriceHuf: number;
  purchasePriceUsd: number;
  landedCostHuf: number;
  marginPercent: number;
  physicalStock: number;
  inTransitStock: number;
  cbm: number;
  isLive: boolean;
  imageTag: string;
}

const INITIAL_CATALOG: CatalogItem[] = [
  {
    id: "ts-01",
    sku: "TS-TRAV-NAV-01",
    name: "Aura Navona Travertin Dohányzóasztal",
    category: "Travertin Asztalok",
    material: "100% Természetes Olasz Navona Travertin Mészkő, Matt Csiszolt",
    dimensions: "110 x 60 x 38 cm",
    sellingPriceHuf: 389000,
    purchasePriceUsd: 140,
    landedCostHuf: 82000,
    marginPercent: 78.9,
    physicalStock: 2,
    inTransitStock: 25,
    cbm: 0.38,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-02",
    sku: "TS-MAR-CAR-02",
    name: "Silva Carrara Étkezőasztal (8 személyes)",
    category: "Márvány Étkezők",
    material: "Fehér Carrara Márványlap + Tömör Amerikai Diófa Talapzat",
    dimensions: "220 x 100 x 76 cm",
    sellingPriceHuf: 749000,
    purchasePriceUsd: 380,
    landedCostHuf: 215000,
    marginPercent: 71.3,
    physicalStock: 1,
    inTransitStock: 12,
    cbm: 0.92,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-03",
    sku: "TS-MON-COL-03",
    name: "Monolit Fluted Travertin Oszlop Console",
    category: "Monolit Faragványok",
    material: "Tömör Kannelúrázott Travertin Kőtömb Faragvány",
    dimensions: "120 x 40 x 85 cm",
    sellingPriceHuf: 289000,
    purchasePriceUsd: 110,
    landedCostHuf: 65000,
    marginPercent: 77.5,
    physicalStock: 3,
    inTransitStock: 18,
    cbm: 0.45,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-04",
    sku: "TS-FOT-BOU-04",
    name: "Silva Royale Lounge Fotel",
    category: "Tömörfa & Kárpit",
    material: "Tömör Natúr Diófa Keret, Prémium Olasz Bouclé Kárpit",
    dimensions: "85 x 82 x 75 cm",
    sellingPriceHuf: 269000,
    purchasePriceUsd: 115,
    landedCostHuf: 68000,
    marginPercent: 74.7,
    physicalStock: 4,
    inTransitStock: 30,
    cbm: 0.35,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-05",
    sku: "TS-LAMP-TRAV-05",
    name: "Aura Alabástrom & Travertin Asztali Lámpa",
    category: "Kő Lámpatestek",
    material: "Faragott Travertin Talp, Átvilágítható Természetes Alabástrom Gömb",
    dimensions: "28 x 28 x 45 cm",
    sellingPriceHuf: 149000,
    purchasePriceUsd: 48,
    landedCostHuf: 29000,
    marginPercent: 80.5,
    physicalStock: 8,
    inTransitStock: 50,
    cbm: 0.08,
    isLive: true,
    imageTag: "Új Modell",
  },
];

const CATEGORIES = [
  "Összes Kategória",
  "Travertin Asztalok",
  "Márvány Étkezők",
  "Tömörfa & Kárpit",
  "Kő Lámpatestek",
  "Monolit Faragványok",
  "Székek & Fotelek",
];

export default function CatalogManagerPage() {
  const [items, setItems] = useState<CatalogItem[]>(INITIAL_CATALOG);
  const [selectedCat, setSelectedCat] = useState("Összes Kategória");
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  // New product state
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Travertin Asztalok" as CatalogItem["category"],
    material: "",
    dimensions: "",
    sellingPriceHuf: 299000,
    purchasePriceUsd: 120,
    cbm: 0.3,
  });

  const handleCreateProduct = () => {
    const landedHuf = Math.round(newProduct.purchasePriceUsd * 370 * 1.55); // Estimated duty + freight
    const margin = Math.round(((newProduct.sellingPriceHuf - landedHuf) / newProduct.sellingPriceHuf) * 1000) / 10;
    const newItem: CatalogItem = {
      id: `ts-${Date.now()}`,
      sku: `TS-${newProduct.category.substring(0, 4).toUpperCase()}-${Math.floor(10 + Math.random() * 90)}`,
      name: newProduct.name || "Új Prémium Bútor",
      category: newProduct.category,
      material: newProduct.material || "Természetes Kő / Fa",
      dimensions: newProduct.dimensions || "Egyedi Méret",
      sellingPriceHuf: newProduct.sellingPriceHuf,
      purchasePriceUsd: newProduct.purchasePriceUsd,
      landedCostHuf: landedHuf,
      marginPercent: margin,
      physicalStock: 0,
      inTransitStock: 10,
      cbm: newProduct.cbm,
      isLive: true,
      imageTag: "Staging Szükséges",
    };

    setItems([newItem, ...items]);
    setShowAddModal(false);
  };

  const toggleLiveStatus = (id: string) => {
    setItems(items.map(it => it.id === id ? { ...it, isLive: !it.isLive } : it));
  };

  const filteredItems = items.filter(it => {
    const matchesCat = selectedCat === "Összes Kategória" || it.category === selectedCat;
    const matchesSearch = 
      it.name.toLowerCase().includes(search.toLowerCase()) ||
      it.sku.toLowerCase().includes(search.toLowerCase()) ||
      it.material.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e8ddcf] shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf7f2] border border-[#d7c4ac] text-xs font-semibold text-[#805e43] mb-2">
            <Gem className="w-3.5 h-3.5 text-[#9e7753]" />
            <span>TerraSilva Hivatalos Termékkatalógus</span>
          </div>
          <h1 className="text-xl font-bold text-[#14171c]">Kategóriák & Termékkezelés</h1>
          <p className="text-xs text-[#684d39] mt-1">
            Kezeld a travertin, márvány és tömörfa termékeket kategóriánként, számold az árrést és generálj hozzájuk AI fotókat!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/studio"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] text-xs font-semibold hover:bg-[#faf7f2] transition shadow-xs"
          >
            <Wand2 className="w-4 h-4 text-[#9e7753]" />
            <span>AI Fotóstúdió Megnyitása</span>
          </Link>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-semibold hover:bg-[#2e2118] transition shadow-xs"
          >
            <Plus className="w-4 h-4 text-[#d7c4ac]" />
            <span>Új Bútor Felvitele</span>
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs">
          <span className="text-xs text-[#805e43] font-medium">Katalógus Elemek</span>
          <div className="text-2xl font-bold text-[#14171c] mt-1">{items.length} prémium tétel</div>
          <span className="text-[11px] text-emerald-700 font-semibold">{items.filter(i => i.isLive).length} termék éles a webshopon</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs">
          <span className="text-xs text-[#805e43] font-medium">Átlagos Árrés (Gross Margin)</span>
          <div className="text-2xl font-bold text-emerald-700 mt-1">76.4%</div>
          <span className="text-[11px] text-[#805e43]">Gyári kínai kőfaragó import</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs">
          <span className="text-xs text-[#805e43] font-medium">Fotóstúdió Staging Állapot</span>
          <div className="text-2xl font-bold text-[#14171c] mt-1">100% 4K Kész</div>
          <span className="text-[11px] text-[#9e7753] font-semibold">Egységes Japandi & Villa stílus</span>
        </div>
      </div>

      {/* Categories Tabs & Search */}
      <div className="bg-white p-4 rounded-2xl border border-[#e8ddcf] shadow-xs space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCat === cat
                  ? "bg-[#14171c] text-white shadow-xs"
                  : "bg-[#faf8f5] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="w-4 h-4 text-[#805e43] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Keresés bútor név, cikkszám, kő- vagy fafajta alapján..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
          />
        </div>
      </div>

      {/* Catalog Table */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Bútor & Anyaghasználat</th>
                <th className="p-3 font-semibold">Kategória & Méret</th>
                <th className="p-3 font-semibold text-center">Fizikai Készlet</th>
                <th className="p-3 font-semibold text-center">Úton (Konténer)</th>
                <th className="p-3 font-semibold text-right">Gyári Ár (USD)</th>
                <th className="p-3 font-semibold text-right">Landed Önköltség</th>
                <th className="p-3 font-semibold text-right">Fogyasztói Ár</th>
                <th className="p-3 font-semibold text-center">Árrés</th>
                <th className="p-3 font-semibold text-center rounded-r-lg">Státusz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-[#faf8f5] transition">
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block text-sm">{item.name}</span>
                    <span className="text-[11px] text-[#805e43] block mt-0.5">{item.material}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-[10px] text-[#9e7753] font-semibold">{item.sku}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#faf7f2] text-[#805e43] border border-[#d7c4ac]">
                        {item.imageTag}
                      </span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="font-semibold text-[#14171c] block">{item.category}</span>
                    <span className="text-[11px] text-[#684d39] block mt-0.5">{item.dimensions}</span>
                    <span className="text-[10px] text-[#805e43]">{item.cbm} CBM</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                      item.physicalStock > 0 ? "bg-emerald-100 text-emerald-800" : "bg-amber-50 text-amber-800"
                    }`}>
                      {item.physicalStock} db
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                      +{item.inTransitStock} db
                    </span>
                  </td>
                  <td className="p-3 text-right font-medium text-[#14171c]">
                    ${item.purchasePriceUsd}
                  </td>
                  <td className="p-3 text-right font-medium text-[#684d39]">
                    {new Intl.NumberFormat("hu-HU").format(item.landedCostHuf)} Ft
                  </td>
                  <td className="p-3 text-right font-bold text-[#14171c] text-sm">
                    {new Intl.NumberFormat("hu-HU").format(item.sellingPriceHuf)} Ft
                  </td>
                  <td className="p-3 text-center font-bold text-emerald-700">
                    <span className="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.marginPercent}%
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => toggleLiveStatus(item.id)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition ${
                        item.isLive
                          ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {item.isLive ? "Éles Webshopon" : "Vázlat"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 border border-[#e8ddcf] shadow-2xl space-y-4 animate-in fade-in zoom-in duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8ddcf]">
              <h3 className="font-bold text-base text-[#14171c]">Új Bútor Hozzáadása a Katalógushoz</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-[#805e43] hover:text-[#14171c] text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-[#553f31] block mb-1">Termék Neve</label>
                <input
                  type="text"
                  placeholder="pl. Monolit Romano Travertin Dohányzóasztal"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                />
              </div>

              <div>
                <label className="font-bold text-[#553f31] block mb-1">Kategória</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                >
                  <option value="Travertin Asztalok">Travertin Asztalok</option>
                  <option value="Márvány Étkezők">Márvány Étkezők</option>
                  <option value="Tömörfa & Kárpit">Tömörfa & Kárpit</option>
                  <option value="Kő Lámpatestek">Kő Lámpatestek</option>
                  <option value="Monolit Faragványok">Monolit Faragványok</option>
                  <option value="Székek & Fotelek">Székek & Fotelek</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Fogyasztói Ár (HUF)</label>
                  <input
                    type="number"
                    value={newProduct.sellingPriceHuf}
                    onChange={(e) => setNewProduct({ ...newProduct, sellingPriceHuf: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Gyári Ár (USD)</label>
                  <input
                    type="number"
                    value={newProduct.purchasePriceUsd}
                    onChange={(e) => setNewProduct({ ...newProduct, purchasePriceUsd: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-[#553f31] block mb-1">Anyag & Felület</label>
                <input
                  type="text"
                  placeholder="pl. 100% Natúr Romano Travertin, Matt Impregnált"
                  value={newProduct.material}
                  onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Méretek</label>
                  <input
                    type="text"
                    placeholder="pl. 120 x 70 x 40 cm"
                    value={newProduct.dimensions}
                    onChange={(e) => setNewProduct({ ...newProduct, dimensions: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Csomag CBM</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newProduct.cbm}
                    onChange={(e) => setNewProduct({ ...newProduct, cbm: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#e8ddcf] flex items-center justify-end gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 rounded-xl border border-[#e8ddcf] text-xs font-semibold text-[#553f31] hover:bg-[#faf8f5]"
              >
                Mégse
              </button>
              <button
                onClick={handleCreateProduct}
                className="px-5 py-2 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#2e2118] shadow-xs"
              >
                Bútor Mentése
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
