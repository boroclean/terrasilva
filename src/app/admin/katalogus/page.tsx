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
import { ROOM_CATEGORIES, MATERIALS } from "@/lib/categories";

interface CatalogItem {
  id: string;
  sku: string;
  name: string;
  room: "nappali" | "etkezo" | "eloszoba" | "vilagitas";
  subType: string;
  materialType: "travertine" | "marble" | "wood" | "upholstery";
  materialDesc: string;
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
    room: "nappali",
    subType: "Dohányzóasztalok",
    materialType: "travertine",
    materialDesc: "100% Természetes Olasz Navona Travertin, Matt Csiszolt",
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
    sku: "TS-TRAV-TV-02",
    name: "Monolit Travertin TV-Szekrény & Médiafal",
    room: "nappali",
    subType: "TV-szekrények",
    materialType: "travertine",
    materialDesc: "Romano Travertin Keret + Diófa Lamellás Front",
    dimensions: "200 x 45 x 50 cm",
    sellingPriceHuf: 649000,
    purchasePriceUsd: 260,
    landedCostHuf: 155000,
    marginPercent: 76.1,
    physicalStock: 1,
    inTransitStock: 10,
    cbm: 0.75,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-03",
    sku: "TS-MAR-CAR-03",
    name: "Silva Carrara Étkezőasztal (8 személyes)",
    room: "etkezo",
    subType: "Étkezőasztalok",
    materialType: "marble",
    materialDesc: "Fehér Carrara Márványlap + Tömör Amerikai Diófa Talapzat",
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
    id: "ts-04",
    sku: "TS-WOOD-DIN-04",
    name: "Silva Tömör Diófa Étkezőasztal",
    room: "etkezo",
    subType: "Étkezőasztalok",
    materialType: "wood",
    materialDesc: "Tömör Amerikai Diófa Palló, Matt Kézműves Olajozás",
    dimensions: "200 x 95 x 76 cm",
    sellingPriceHuf: 489000,
    purchasePriceUsd: 210,
    landedCostHuf: 122000,
    marginPercent: 75.1,
    physicalStock: 3,
    inTransitStock: 15,
    cbm: 0.65,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-05",
    sku: "TS-MON-COL-05",
    name: "Monolit Fluted Travertin Oszlop Console",
    room: "eloszoba",
    subType: "Monolit Konzolok",
    materialType: "travertine",
    materialDesc: "Tömör Kannelúrázott Travertin Kőtömb Faragvány",
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
    id: "ts-06",
    sku: "TS-FOT-BOU-06",
    name: "Silva Royale Lounge Fotel",
    room: "nappali",
    subType: "Fotelek",
    materialType: "upholstery",
    materialDesc: "Tömör Natúr Diófa Keret, Prémium Olasz Bouclé Kárpit",
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
    id: "ts-07",
    sku: "TS-LAMP-TRAV-07",
    name: "Aura Alabástrom & Travertin Asztali Lámpa",
    room: "vilagitas",
    subType: "Kő Lámpatestek",
    materialType: "travertine",
    materialDesc: "Faragott Travertin Talp, Átvilágítható Alabástrom Gömb",
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

export default function CatalogManagerPage() {
  const [items, setItems] = useState<CatalogItem[]>(INITIAL_CATALOG);
  const [selectedRoom, setSelectedRoom] = useState<string>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  // New product state
  const [newProduct, setNewProduct] = useState({
    name: "",
    room: "nappali" as CatalogItem["room"],
    subType: "Dohányzóasztalok",
    materialType: "travertine" as CatalogItem["materialType"],
    materialDesc: "",
    dimensions: "",
    sellingPriceHuf: 349000,
    purchasePriceUsd: 130,
    cbm: 0.35,
  });

  const handleCreateProduct = () => {
    const landedHuf = Math.round(newProduct.purchasePriceUsd * 370 * 1.55);
    const margin = Math.round(((newProduct.sellingPriceHuf - landedHuf) / newProduct.sellingPriceHuf) * 1000) / 10;
    const newItem: CatalogItem = {
      id: `ts-${Date.now()}`,
      sku: `TS-${newProduct.materialType.substring(0, 4).toUpperCase()}-${Math.floor(10 + Math.random() * 90)}`,
      name: newProduct.name || "Új Bútor Tétel",
      room: newProduct.room,
      subType: newProduct.subType,
      materialType: newProduct.materialType,
      materialDesc: newProduct.materialDesc || "Természetes Kő / Fa",
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
    const matchesRoom = selectedRoom === "all" || it.room === selectedRoom;
    const matchesMaterial = selectedMaterial === "all" || it.materialType === selectedMaterial;
    const matchesSearch = 
      it.name.toLowerCase().includes(search.toLowerCase()) ||
      it.sku.toLowerCase().includes(search.toLowerCase()) ||
      it.materialDesc.toLowerCase().includes(search.toLowerCase()) ||
      it.subType.toLowerCase().includes(search.toLowerCase());
    return matchesRoom && matchesMaterial && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e8ddcf] shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf7f2] border border-[#d7c4ac] text-xs font-semibold text-[#805e43] mb-2">
            <Gem className="w-3.5 h-3.5 text-[#9e7753]" />
            <span>TerraSilva Hivatalos Termékkatalógus</span>
          </div>
          <h1 className="text-xl font-bold text-[#14171c]">Kategóriák & Termékkezelés</h1>
          <p className="text-xs text-[#684d39] mt-1">
            Kezeld a bútorokat szobatípusok (Nappali, Étkező, Előszoba, Világítás) és anyagok (Travertin, Márvány, Diófa) szerint.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/studio"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] text-xs font-semibold hover:bg-[#faf7f2] transition shadow-xs"
          >
            <Wand2 className="w-4 h-4 text-[#9e7753]" />
            <span>AI Fotóstúdió</span>
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

      {/* Categories & Materials Filter Bar */}
      <div className="bg-white p-5 rounded-3xl border border-[#e8ddcf] shadow-xs space-y-4">
        {/* Room Types */}
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[#805e43] font-bold block mb-2">
            Szobatípus Szerinti Szűrés:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedRoom("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedRoom === "all"
                  ? "bg-[#14171c] text-white shadow-xs"
                  : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
              }`}
            >
              Összes Szoba
            </button>
            {ROOM_CATEGORIES.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedRoom === room.id
                    ? "bg-[#14171c] text-white shadow-xs"
                    : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="pt-3 border-t border-[#f4ede4]">
          <span className="text-[11px] uppercase tracking-wider text-[#805e43] font-bold block mb-2">
            Anyaghasználat Szerinti Szűrés:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {MATERIALS.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                  selectedMaterial === mat.id
                    ? "bg-[#553f31] text-white shadow-xs"
                    : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
                }`}
              >
                {mat.colorHex && (
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/20"
                    style={{ backgroundColor: mat.colorHex }}
                  />
                )}
                <span>{mat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative pt-2">
          <Search className="w-4 h-4 text-[#805e43] absolute left-3.5 top-1/2 -translate-y-1/2 mt-1" />
          <input
            type="text"
            placeholder="Keresés bútor név, cikkszám, travertin/márvány típus alapján..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
          />
        </div>
      </div>

      {/* Catalog Table */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#14171c]">Bútorkatalógus Tételei</h2>
          <span className="text-xs text-[#805e43] font-medium">{filteredItems.length} termék listázva</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Bútor & Anyaghasználat</th>
                <th className="p-3 font-semibold">Szoba & Típus</th>
                <th className="p-3 font-semibold text-center">Fizikai Raktár</th>
                <th className="p-3 font-semibold text-center">Konténerben Úton</th>
                <th className="p-3 font-semibold text-right">Gyári Ár (USD)</th>
                <th className="p-3 font-semibold text-right">Landed Önköltség</th>
                <th className="p-3 font-semibold text-right">Eladási Ár (HUF)</th>
                <th className="p-3 font-semibold text-center">Árrés</th>
                <th className="p-3 font-semibold text-center rounded-r-lg">Webshop Státusz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-[#faf8f5] transition">
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block text-sm">{item.name}</span>
                    <span className="text-[11px] text-[#805e43] block mt-0.5">{item.materialDesc}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-[10px] text-[#9e7753] font-semibold">{item.sku}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#faf7f2] text-[#805e43] border border-[#d7c4ac]">
                        {item.imageTag}
                      </span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block uppercase text-[10px] text-[#9e7753]">
                      {item.room}
                    </span>
                    <span className="font-semibold text-[#14171c] block text-xs">{item.subType}</span>
                    <span className="text-[11px] text-[#684d39] block">{item.dimensions}</span>
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
                <label className="font-bold text-[#553f31] block mb-1">Bútor Neve</label>
                <input
                  type="text"
                  placeholder="pl. Monolit Romano Travertin TV-Szekrény"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Szoba Típus</label>
                  <select
                    value={newProduct.room}
                    onChange={(e) => setNewProduct({ ...newProduct, room: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  >
                    <option value="nappali">Nappali Bútorok</option>
                    <option value="etkezo">Étkező Bútorok</option>
                    <option value="eloszoba">Előszoba & Monolitok</option>
                    <option value="vilagitas">Világítás & Kiegészítők</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Fő Anyag</label>
                  <select
                    value={newProduct.materialType}
                    onChange={(e) => setNewProduct({ ...newProduct, materialType: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  >
                    <option value="travertine">Travertin Mészkő</option>
                    <option value="marble">Természetes Márvány</option>
                    <option value="wood">Tömör Dió- & Tölgyfa</option>
                    <option value="upholstery">Bouclé & Bársony Kárpit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Bútortípus</label>
                  <input
                    type="text"
                    placeholder="pl. TV-szekrény / Dohányzóasztal"
                    value={newProduct.subType}
                    onChange={(e) => setNewProduct({ ...newProduct, subType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Méretek</label>
                  <input
                    type="text"
                    placeholder="pl. 200 x 45 x 50 cm"
                    value={newProduct.dimensions}
                    onChange={(e) => setNewProduct({ ...newProduct, dimensions: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  />
                </div>
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
                <label className="font-bold text-[#553f31] block mb-1">Részletes Anyagleírás</label>
                <input
                  type="text"
                  placeholder="pl. 100% Natúr Romano Travertin Mészkő, Matt Impregnált"
                  value={newProduct.materialDesc}
                  onChange={(e) => setNewProduct({ ...newProduct, materialDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                />
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
