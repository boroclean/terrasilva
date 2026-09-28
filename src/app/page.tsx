"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ShoppingBag, 
  ArrowRight, 
  Palette, 
  Star, 
  Gem, 
  Check, 
  ChevronRight, 
  Filter, 
  Layers, 
  Search,
  Maximize2,
  ShieldCheck,
  Eye
} from "lucide-react";
import { ROOM_CATEGORIES, MATERIALS } from "@/lib/categories";
import { PRODUCTS, ProductItem } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState<string>("all");
  const [selectedSubType, setSelectedSubType] = useState<string>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");

  const currentRoomObj = ROOM_CATEGORIES.find((r) => r.id === selectedRoom);

  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesRoom = selectedRoom === "all" || prod.room === selectedRoom;
    const matchesSubType = selectedSubType === "all" || prod.subType === selectedSubType;
    const matchesMaterial = selectedMaterial === "all" || prod.materialType === selectedMaterial;
    return matchesRoom && matchesSubType && matchesMaterial;
  });

  return (
    <main className="min-h-screen flex flex-col bg-[#faf7f2] text-[#14171c]">
      {/* Top Notification Banner */}
      <div className="bg-[#14171c] text-[#d7c4ac] py-2 px-6 text-center text-xs font-medium border-b border-[#262c36]">
        <span>✨ Természetes travertin mészkő, olasz márvány és tömörfa bútorok közvetlen importból • 100% garancia</span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#e8ddcf]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#14171c] text-[#faf7f2] flex items-center justify-center font-serif font-bold text-sm tracking-widest border border-[#9e7753]/40 shadow-xs">
              TS
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#14171c] font-serif">TERRASILVA</span>
              <span className="text-[10px] uppercase tracking-widest text-[#9e7753] block -mt-1 font-semibold">Stone & Timber Living</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#553f31]">
            <Link href="#katalogus" className="hover:text-[#14171c] transition">Bútorkollekciók</Link>
            <Link href="#anyagok" className="hover:text-[#14171c] transition">Travertin Részletek</Link>
            <Link href="#egyedi-gyartas" className="hover:text-[#14171c] transition">Egyedi Gyártás</Link>
            <Link href="#mintacsomag" className="hover:text-[#14171c] transition">Anyagminta Csomag</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="text-xs font-semibold text-[#805e43] hover:text-[#14171c] transition px-3 py-2"
            >
              Admin Belépés
            </Link>
            <Link
              href="#katalogus"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#14171c] text-white hover:bg-[#2e2118] transition shadow-xs"
            >
              <span>Katalógus</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#d7c4ac]" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Clean Side-by-Side Split Layout (Responsive on all laptops & screens) */}
      <section className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-16 px-4 sm:px-6 border-b border-[#e8ddcf] bg-gradient-to-br from-[#faf7f2] via-[#f7f2ea] to-[#f4ede4]">
        {/* Soft Ambient Radial Warmth in the background */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#9e7753]/12 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            
            {/* Left Column: Premium Typography & CTAs (Takes 6 cols on tablets/laptops/desktops) */}
            <div className="md:col-span-6 lg:col-span-6 space-y-4 md:space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d7c4ac] bg-white/80 backdrop-blur-xs text-[11px] font-semibold text-[#805e43] shadow-2xs">
                <Gem className="w-3.5 h-3.5 text-[#9e7753]" />
                <span>Terra (Kő & Travertin) • Silva (Nemes Tömörfa)</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#14171c] font-serif leading-[1.1]">
                A természet ereje, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e7753] via-[#755235] to-[#14171c]">
                  időtálló travertin
                </span>{" "}
                és tömörfa formájában.
              </h1>

              <p className="max-w-lg text-xs sm:text-sm md:text-sm lg:text-base text-[#684d39] leading-relaxed">
                Minden bútorunk természetes travertin mészkőtömbökből, olasz márványból és nemes dió- illetve tölgyfából készül. 
                Közvetlen kőfaragó és manufaktúra importtal hozzuk el az igazi luxust.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <Link
                  href="#katalogus"
                  className="px-6 py-3 rounded-xl bg-[#14171c] text-white font-semibold text-xs sm:text-sm hover:bg-[#2e2118] transition shadow-md flex items-center justify-center gap-2 group"
                >
                  <span>Bútorkatalógus Megtekintése</span>
                  <ArrowRight className="w-4 h-4 text-[#d7c4ac] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#mintacsomag"
                  className="px-6 py-3 rounded-xl border border-[#d7c4ac] bg-white/90 backdrop-blur-xs text-[#14171c] font-semibold text-xs sm:text-sm hover:bg-[#f4ede4] transition shadow-xs flex items-center justify-center gap-2"
                >
                  <Palette className="w-4 h-4 text-[#9e7753]" />
                  <span>Valódi Kőminta Kérése</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-[#e8ddcf]/80 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] font-semibold text-[#553f31]">
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>100% Olasz Navona Travertin</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Kézműves Csiszolás</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Közvetlen Gyártói Árak</span>
                </div>
              </div>
            </div>

            {/* Right Column: Seamless Isolated Travertine Furniture Piece (Takes 6 cols) */}
            <div className="md:col-span-6 lg:col-span-6 relative flex items-center justify-center pt-2 md:pt-0">
              <div className="relative w-full max-w-[560px] group">
                {/* Isolated Stone Table - Zero White Background & Intact Tabletop */}
                <div className="relative py-2">
                  <img
                    src="/kepek/showcase/travertin_front_master.png"
                    alt="TerraSilva Navona Travertin Étkezőasztal"
                    className="w-full h-auto max-h-[380px] object-contain group-hover:scale-103 transition-transform duration-700 ease-out mx-auto"
                  />
                </div>

                {/* Floating Micro Badge on the Stone */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#d7c4ac] shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-[#14171c]">100% Monolit Travertin Kőtalpak</span>
                </div>

                {/* Floating Macro Thumbnail */}
                <div className="absolute -bottom-2 left-2 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl border border-[#d7c4ac] shadow-md flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-[#e8ddcf]">
                    <img
                      src="/kepek/showcase/travertin_edge_macro.jpg"
                      alt="8K Makró Részlet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left pr-1.5">
                    <span className="text-[9px] uppercase font-bold text-[#9e7753] block">8K Makró</span>
                    <span className="text-[10px] font-bold text-[#14171c] block">Pórusos textúra</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ULTRA-CLEAN SHOWCASE SECTION */}
        <div id="anyagok" className="max-w-6xl mx-auto mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Left Large Showcase Card: Full Tabletop Slab Architecture */}
            <div className="md:col-span-7 bg-white rounded-3xl border border-[#e8ddcf] p-6 shadow-sm flex flex-col justify-between overflow-hidden relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf7f2] border border-[#d7c4ac] text-xs font-semibold text-[#805e43]">
                    <Gem className="w-3.5 h-3.5 text-[#9e7753]" />
                    <span>Természetes Olasz Navona Travertin</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#805e43] font-bold">100% Tömör Kőtömb</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-[#14171c]">
                  Organikus Kőerezet & Kannelúrázott Kőtalp
                </h3>
                <p className="text-xs text-[#684d39] mt-1 max-w-md">
                  A természet által formált egyedi párhuzamos rétegződések minden egyes asztallapot megismételhetetlen műalkotássá varázsolnak.
                </p>
              </div>

              {/* Image Container */}
              <div className="mt-6 rounded-2xl overflow-hidden bg-[#faf8f5] border border-[#e8ddcf] relative aspect-[4/3] group-hover:shadow-md transition-shadow">
                <img
                  src="/kepek/showcase/travertin_top_detail.jpg"
                  alt="TerraSilva Travertin Étkezőasztal Részlet"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/40 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#14171c]">Aura Travertin Étkezőasztal</span>
                  <span className="text-[#805e43] font-medium">200 x 100 x 76 cm</span>
                </div>
              </div>
            </div>

            {/* Right Showcase Card: 8K Macro Edge & Pore Close-Up */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#14171c] to-[#262c36] rounded-3xl p-6 shadow-sm text-white flex flex-col justify-between overflow-hidden relative group border border-[#3e4756]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#d7c4ac] border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>8K Makró Részlet</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Matt Csiszolt</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Kézműves Lekerekítés & Természetes Pórusok
                </h3>
                <p className="text-xs text-[#d7c4ac] mt-1">
                  Selymes tapintású, matt felületkezelés, amely megőrzi a valódi kő lélegző textúráját.
                </p>
              </div>

              {/* Image Container */}
              <div className="mt-6 rounded-2xl overflow-hidden bg-black/40 border border-white/10 relative aspect-square group-hover:shadow-lg transition-shadow">
                <img
                  src="/kepek/showcase/travertin_edge_macro.jpg"
                  alt="TerraSilva 8K Travertin Makró Pórusok"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-[11px]">3 cm vastag tömör kőlap</span>
                  <span className="text-amber-300 font-bold text-[11px]">Víz- és Folttaszító</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dynamic Product Catalog with Room & Material Filtering */}
      <section id="katalogus" className="py-20 px-6 max-w-7xl mx-auto w-full space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9e7753] font-bold block mb-1">
              Hivatalos Bútorkínálat
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#14171c]">
              Válogass Szobák & Anyagok Szerint
            </h2>
          </div>
          <span className="text-xs text-[#805e43] font-semibold bg-white border border-[#e8ddcf] px-3.5 py-2 rounded-xl shadow-2xs self-start md:self-auto">
            {filteredProducts.length} bútor megjelenítve
          </span>
        </div>

        {/* 1. Primary Filter: Room Categories */}
        <div className="bg-white p-5 rounded-3xl border border-[#e8ddcf] shadow-xs space-y-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#805e43] font-bold block mb-2">
              1. Válassz Szobatípust:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => {
                  setSelectedRoom("all");
                  setSelectedSubType("all");
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedRoom === "all"
                    ? "bg-[#14171c] text-white shadow-xs"
                    : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4ede4]"
                }`}
              >
                🛋️ Összes Szoba & Bútor
              </button>

              {ROOM_CATEGORIES.map((room) => (
                <button
                  key={room.id}
                  onClick={() => {
                    setSelectedRoom(room.id);
                    setSelectedSubType("all");
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    selectedRoom === room.id
                      ? "bg-[#14171c] text-white shadow-xs"
                      : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4ede4]"
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-Type Pills (if a room is selected) */}
          {currentRoomObj && (
            <div className="pt-3 border-t border-[#f4ede4]">
              <span className="text-[11px] uppercase tracking-wider text-[#805e43] font-bold block mb-2">
                Bútortípus ({currentRoomObj.name}):
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {currentRoomObj.subTypes.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubType(sub.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                      selectedSubType === sub.id
                        ? "bg-[#9e7753] text-white shadow-xs"
                        : "bg-white text-[#684d39] border border-[#d7c4ac] hover:bg-[#faf7f2]"
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. Secondary Filter: Material Filters */}
          <div className="pt-3 border-t border-[#f4ede4]">
            <span className="text-[11px] uppercase tracking-wider text-[#805e43] font-bold block mb-2">
              2. Szűrés Anyaghasználat Szerint:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {MATERIALS.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setSelectedMaterial(mat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                    selectedMaterial === mat.id
                      ? "bg-[#553f31] text-white shadow-xs"
                      : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4ede4]"
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
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Bespoke Stone Ordering */}
      <section id="egyedi-gyartas" className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#e8ddcf] shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#9e7753] font-bold block">
              Belsőépítészeknek & Magánszemélyeknek
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#14171c]">
              Egyedi Méretre Vágott Travertin & Márvány Asztalok
            </h2>
            <p className="text-sm text-[#684d39] leading-relaxed">
              Speciális méretű étkezőasztalra, egyedi kőtömbre vagy saját tervezésű TV-médiabútorra van szükséged? 
              Közvetlen kőfaragó manufaktúránkban bármilyen egyedi méretet és formát legyártunk.
            </p>
            <div className="space-y-2 text-xs text-[#553f31]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Választható táblaerezethez igazított vágás</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Impregnált, víz- és folttaszító felületkezelés</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Ingyenes 3D látványterv és méretezett ajánlat</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#e8ddcf] space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#14171c]">Kérj Egyedi Kőajánlatot</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Neved vagy Irodád Neve"
                className="w-full px-4 py-2.5 rounded-xl border border-[#e8ddcf] bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
              />
              <input
                type="tel"
                placeholder="Telefonszámod (+36...)"
                className="w-full px-4 py-2.5 rounded-xl border border-[#e8ddcf] bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
              />
              <textarea
                placeholder="Milyen méretű és anyagú bútort keresel? (pl. 240x100 cm Navona travertin étkezőasztal vagy TV-szekrény)"
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e8ddcf] bg-white text-xs focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
              />
              <button className="w-full py-3 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#2e2118] transition shadow-xs">
                Ajánlatkérés Elküldése
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Swatch Sample Banner */}
      <section id="mintacsomag" className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="rounded-3xl bg-[#14171c] text-white p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#d7c4ac]">
              <Palette className="w-3.5 h-3.5 text-[#9e7753]" />
              <span>Tapintsd meg a valódi kő és fa textúráját</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-serif tracking-tight">
              Rendelj Valódi Travertin, Márvány és Diófa Anyagmintát
            </h2>
            <p className="text-sm text-[#d7c4ac] leading-relaxed">
              Minden kőtömb és fafelület egyedi erezettel rendelkezik. Rendelj prémium travertin mészkő, carrara márvány és diófa mintacsomagot, melynek teljes díját (1.990 Ft) jóváírjuk bútormegrendelésedkor!
            </p>
          </div>

          <button className="px-8 py-4 rounded-xl bg-[#9e7753] hover:bg-[#b08c65] text-white font-semibold text-sm transition shadow-lg shrink-0">
            Mintacsomag Rendelése (1.990 Ft)
          </button>
        </div>
      </section>

      {/* Public Footer */}
      <footer className="mt-auto border-t border-[#e8ddcf] bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#805e43]">
          <div className="flex items-center gap-2 font-bold text-[#14171c]">
            <span className="font-serif bg-[#14171c] text-white px-2 py-0.5 rounded text-[10px]">TS</span>
            <span className="font-serif">TERRASILVA</span>
            <span>•</span>
            <span className="font-normal text-[#805e43]">Prémium Travertin, Márvány & Tömörfa Bútorok</span>
          </div>
          <p>Kapcsolat: +36 20 407 6858 • info@terrasilva.hu</p>
          <p>© {new Date().getFullYear()} TerraSilva. Minden jog fenntartva.</p>
        </div>
      </footer>
    </main>
  );
}
