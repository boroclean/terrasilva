"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Layers, 
  Search, 
  Check, 
  Maximize2, 
  ShieldCheck, 
  Eye, 
  X, 
  Phone, 
  Sliders, 
  Sun, 
  Moon, 
  Flame, 
  Compass, 
  Package, 
  Sparkle,
  Info,
  ChevronRight,
  Menu
} from "lucide-react";
import { STONE_MATERIALS, StoneMaterial } from "@/lib/materialsData";

export default function MaterialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeStone, setActiveStone] = useState<StoneMaterial | null>(null);
  const [inspectLight, setInspectLight] = useState<"daylight" | "warm" | "gallery">("daylight");
  const [inspectFinish, setInspectFinish] = useState<number>(0);
  const [sampleModalOpen, setSampleModalOpen] = useState<boolean>(false);
  const [sampleSelectedStone, setSampleSelectedStone] = useState<string>("beige-travertine");
  const [sampleSent, setSampleSent] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: "all", name: "Összes Nemeskő" },
    { id: "travertine", name: "Travertin Mészkövek" },
    { id: "classic-marble", name: "Klasszikus Olasz Márványok" },
    { id: "exotic-stone", name: "Egzotikus & Színes Kőzetek" },
    { id: "onyx", name: "Áttetsző Nemes Ónixok" },
    { id: "dark-stone", name: "Sötét & Karakteres" }
  ];

  const filteredStones = STONE_MATERIALS.filter((stone) => {
    const matchesCategory = selectedCategory === "all" || stone.category === selectedCategory;
    const matchesSearch = 
      stone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stone.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stone.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stone.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLightFilterClass = () => {
    switch (inspectLight) {
      case "warm":
        return "sepia-[0.25] brightness-95 contrast-105 hue-rotate-[-10deg]";
      case "gallery":
        return "brightness-110 contrast-125 saturate-110";
      case "daylight":
      default:
        return "brightness-100 contrast-100";
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#faf7f2] text-[#14171c]">
      {/* Top Banner */}
      <div className="bg-[#14171c] text-[#d7c4ac] py-2.5 px-4 text-center text-xs font-medium border-b border-[#262c36]">
        <span>✨ 100% Eredeti, bányaválogatott természetes kőtömbök • Egyedi méretre vágás & 10x10 cm mintarendelés</span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e8ddcf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#14171c] text-[#faf7f2] flex items-center justify-center font-serif font-bold text-xs sm:text-sm tracking-widest border border-[#9e7753]/40 shadow-xs">
              TS
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#14171c] font-serif block leading-none">TERRASILVA</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#9e7753] block mt-0.5 font-semibold">Stone & Timber Living</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#553f31]">
            <Link href="/" className="hover:text-[#14171c] transition">Kezdőlap</Link>
            <Link href="/#katalogus" className="hover:text-[#14171c] transition">Bútorkollekciók</Link>
            <Link href="/anyagok" className="text-[#9e7753] font-bold">Kő- & Márványtár</Link>
            <Link href="/#egyedi-gyartas" className="hover:text-[#14171c] transition">Egyedi Gyártás</Link>
            <button 
              onClick={() => setSampleModalOpen(true)}
              className="text-[#805e43] hover:text-[#14171c] font-medium transition flex items-center gap-1.5"
            >
              <Package className="w-4 h-4 text-[#9e7753]" />
              <span>Mintacsomag</span>
            </button>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSampleModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#9e7753] text-white hover:bg-[#805e43] transition shadow-xs"
            >
              <Package className="w-3.5 h-3.5" />
              <span>Anyagminta Kérése</span>
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#14171c] text-white hover:bg-[#2e2118] transition shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#d7c4ac]" />
              <span>Vissza a Bútorokhoz</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white border border-[#e8ddcf] text-[#14171c]"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-[#e8ddcf] px-5 py-5 space-y-3 animate-in slide-in-from-top duration-300 shadow-xl">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-[#faf7f2] flex items-center justify-between text-sm font-semibold"
            >
              <span>Kezdőlap & Bútorok</span>
              <ChevronRight className="w-4 h-4 text-[#9e7753]" />
            </Link>
            <Link 
              href="/anyagok" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-[#faf7f2] text-[#9e7753] flex items-center justify-between text-sm font-bold"
            >
              <span>Kő- & Márványtár</span>
              <Check className="w-4 h-4 text-[#9e7753]" />
            </Link>
            <button 
              onClick={() => { setMobileMenuOpen(false); setSampleModalOpen(true); }}
              className="w-full text-left p-2.5 rounded-xl hover:bg-[#faf7f2] flex items-center justify-between text-sm font-semibold text-[#805e43]"
            >
              <span>Anyagminta Doboz Rendelés</span>
              <Package className="w-4 h-4 text-[#9e7753]" />
            </button>
          </div>
        )}
      </header>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#e8ddcf] bg-linear-to-b from-[#f4efe8] via-[#faf7f2] to-[#faf7f2]">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#d7c4ac]/70 text-[#9e7753] text-xs font-semibold tracking-wider uppercase mb-5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Közvetlen Bányaválogatott Kőkollekció</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#14171c] tracking-tight mb-5 leading-tight">
            Nemes Kőzetek & Travertin Mészkövek
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#553f31] leading-relaxed mb-8">
            A TerraSilva bútorok szívét a természet évmilliók alatt csiszolt kincsei alkotják. 
            Ismerje meg az olaszországi, spanyol és török bányákból származó prémium travertin, 
            kristályos márvány és áttetsző ónix anyagainkat 8K makró részletességben.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-[#e8ddcf] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#faf7f2] border border-[#d7c4ac] flex items-center justify-center text-[#9e7753]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#14171c] block">100% Természetes</span>
                <span className="text-[11px] text-[#7a6454]">Tömör kőzettömbök</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-[#e8ddcf] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#faf7f2] border border-[#d7c4ac] flex items-center justify-center text-[#9e7753]">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#14171c] block">3-féle Felület</span>
                <span className="text-[11px] text-[#7a6454]">Matt, Polírozott, Pórusos</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-[#e8ddcf] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#faf7f2] border border-[#d7c4ac] flex items-center justify-center text-[#9e7753]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#14171c] block">Egyedi Méret</span>
                <span className="text-[11px] text-[#7a6454]">CNC vágás rajz alapján</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-[#e8ddcf] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#faf7f2] border border-[#d7c4ac] flex items-center justify-center text-[#9e7753]">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#14171c] block">Mintacsomag</span>
                <span className="text-[11px] text-[#7a6454]">10x10 cm minták házhoz</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-16 sm:top-20 z-30 bg-[#faf7f2]/95 backdrop-blur-md py-4 border-b border-[#e8ddcf] px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories Tab Pill */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                    isActive 
                      ? "bg-[#14171c] text-white border-[#14171c] shadow-xs" 
                      : "bg-white text-[#553f31] border-[#e8ddcf] hover:border-[#9e7753] hover:bg-[#fbf9f6]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7a6454]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Keresés kőzetnév, származás szerint..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#e8ddcf] text-xs text-[#14171c] placeholder:text-[#9e8b7c] focus:outline-hidden focus:border-[#9e7753] focus:ring-1 focus:ring-[#9e7753]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a6454] hover:text-[#14171c]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Material Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full grow">
        <div className="mb-6 flex items-center justify-between">
          <div className="text-xs text-[#7a6454]">
            Találatok: <span className="font-bold text-[#14171c]">{filteredStones.length} prémium kőzet</span>
          </div>
          <div className="text-xs text-[#9e7753] font-medium flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>Kattintson egy kőzetre a 8K Makró & Fényvizsgálóhoz</span>
          </div>
        </div>

        {filteredStones.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#e8ddcf] p-8">
            <Search className="w-10 h-10 text-[#9e7753] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold font-serif text-[#14171c] mb-2">Nincs találat erre a keresésre</h3>
            <p className="text-xs text-[#7a6454] mb-4">Próbáljon más kifejezést vagy váltson kategóriát.</p>
            <button 
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="px-4 py-2 rounded-xl bg-[#14171c] text-white text-xs font-semibold"
            >
              Szűrők törlése
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredStones.map((stone) => {
              return (
                <div
                  key={stone.id}
                  onClick={() => {
                    setActiveStone(stone);
                    setInspectFinish(0);
                  }}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#e8ddcf] hover:border-[#9e7753]/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col cursor-pointer"
                >
                  {/* Image Container with Macro Texture */}
                  <div className="relative aspect-4/3 bg-[#f0ebe3] overflow-hidden">
                    <Image
                      src={stone.textureImage}
                      alt={stone.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Highlight Badge */}
                    {stone.highlightBadge && (
                      <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-[#14171c] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md border border-white/40 flex items-center gap-1">
                        <Sparkle className="w-3 h-3 text-[#9e7753]" />
                        <span>{stone.highlightBadge}</span>
                      </div>
                    )}

                    {/* Inspect Badge */}
                    <div className="absolute top-3.5 right-3.5 bg-black/40 backdrop-blur-md text-white/90 p-2 rounded-xl border border-white/20 group-hover:bg-[#9e7753] group-hover:text-white transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                      <span className="text-[11px] font-semibold text-[#d7c4ac] uppercase tracking-wider block mb-0.5">
                        {stone.categoryLabel}
                      </span>
                      <h2 className="text-xl font-serif font-bold leading-snug drop-shadow-xs">
                        {stone.name}
                      </h2>
                      <span className="text-xs text-white/80 font-mono italic">
                        {stone.originalName}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col grow justify-between">
                    <div>
                      {/* Origin & Hardness Tag */}
                      <div className="flex items-center justify-between gap-2 text-[11px] text-[#7a6454] pb-3 mb-3 border-b border-[#f0ebe3]">
                        <span className="flex items-center gap-1 truncate font-medium">
                          <Compass className="w-3.5 h-3.5 text-[#9e7753] shrink-0" />
                          <span className="truncate">{stone.origin}</span>
                        </span>
                        <span className="shrink-0 bg-[#faf7f2] px-2 py-0.5 rounded-md border border-[#e8ddcf] font-mono text-[10px] text-[#553f31]">
                          Mohs {stone.specifications.mohsHardness.split(" ")[0]}
                        </span>
                      </div>

                      <p className="text-xs text-[#553f31] leading-relaxed line-clamp-2 mb-4">
                        {stone.description}
                      </p>

                      {/* Surface Finishes Available */}
                      <div className="space-y-1.5 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#9e7753] block">
                          Elérhető Felületkezelések:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {stone.surfaceFinishes.map((f, i) => (
                            <span 
                              key={i}
                              className="text-[10px] bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] px-2 py-0.5 rounded-md font-medium"
                            >
                              {f.name.split(" ")[0]}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="pt-3 border-t border-[#f0ebe3] flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#805e43] group-hover:text-[#14171c] transition flex items-center gap-1">
                        <span>Makró vizsgálat</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#9e7753] group-hover:translate-x-0.5 transition-transform" />
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSampleSelectedStone(stone.id);
                          setSampleModalOpen(true);
                        }}
                        className="text-[10px] font-bold uppercase tracking-wider text-[#9e7753] hover:text-[#805e43] px-2.5 py-1 rounded-lg bg-[#fbf9f6] border border-[#d7c4ac]/60 hover:bg-[#faf7f2] transition"
                      >
                        Minta kérése
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Bespoke / Custom Size & Sourcing Banner */}
      <section className="bg-[#14171c] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#262c36]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262c36] text-[#d7c4ac] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#9e7753]" />
              <span>Egyedi Tervezés & Anyagbeszerzés</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#faf7f2] leading-tight">
              Nem találja a keresett kőzetet vagy méretet?
            </h2>
            <p className="text-sm sm:text-base text-[#d7c4ac]/80 leading-relaxed max-w-2xl">
              Közvetlen kapcsolatban állunk a legnagyobb nemzetközi kőbányákkal és kőtömb-feldolgozókkal. 
              Egyedi méretű étkezőasztalokat, lebegő konzolokat, könyvespolcokat és mosdópultokat 
              is legyártunk a választott tömbből, milliméter pontos CNC vízvágással és kézi élcsiszolással.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="tel:+36204076858"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#9e7753] text-white font-semibold text-xs hover:bg-[#805e43] transition shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>+36 20 407 6858 (Közvetlen Szakértő)</span>
              </a>
              <button
                onClick={() => setSampleModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#262c36] text-[#faf7f2] font-semibold text-xs hover:bg-[#343b47] transition border border-[#3b4352]"
              >
                <Package className="w-4 h-4 text-[#d7c4ac]" />
                <span>Anyagminta Doboz Rendelése</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#1b2028] p-6 sm:p-8 rounded-3xl border border-[#2d3442] space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#faf7f2]">
              Miért különleges a TerraSilva kőválogatás?
            </h3>
            <ul className="space-y-3 text-xs text-[#d7c4ac]/80">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#9e7753] shrink-0 mt-0.5" />
                <span><strong>Pattern & Vein Lock:</strong> A rendelés leadásakor fotón jóváhagyhatja a kiválasztott kőtábla pontos erezetét.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#9e7753] shrink-0 mt-0.5" />
                <span><strong>Nano-Impregnálás:</strong> Minden átadott bútor professzionális hidrofób és olajlepergető felületvédelmet kap.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#9e7753] shrink-0 mt-0.5" />
                <span><strong>Közvetlen Gyártói Import:</strong> Nincs sokszoros kereskedői felár, a legmagasabb minőséget biztosítjuk elérhető áron.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#14171c] text-[#d7c4ac] border-t border-[#262c36] py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#262c36] text-white flex items-center justify-center font-serif font-bold text-xs border border-[#9e7753]/50">
              TS
            </div>
            <span className="font-serif font-bold text-white tracking-wide">TERRASILVA</span>
            <span className="text-white/40">• Stone & Timber Living</span>
          </div>
          <div className="text-white/60 text-center sm:text-right">
            <span>Kapcsolat: Boronkay Bence • </span>
            <a href="tel:+36204076858" className="text-[#d7c4ac] font-semibold hover:underline">+36 20 407 6858</a>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* Interactive Stone Inspector Modal */}
      {/* ========================================================================= */}
      {activeStone && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#faf7f2] rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-[#e8ddcf] shadow-2xl relative my-auto">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-white border-b border-[#e8ddcf] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full border border-black/20" 
                  style={{ backgroundColor: activeStone.accentColor }} 
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#14171c] leading-tight">
                    {activeStone.name}
                  </h3>
                  <span className="text-xs text-[#7a6454] font-mono">
                    {activeStone.originalName} • {activeStone.origin}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveStone(null)}
                className="p-2 rounded-full bg-[#faf7f2] hover:bg-[#f0ebe3] text-[#14171c] transition border border-[#e8ddcf]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto grow space-y-6">
              {/* Image & Light Simulator Area */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-7 flex flex-col gap-3">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-black/5 border border-[#e8ddcf] shadow-inner">
                    <Image
                      src={activeStone.textureImage}
                      alt={activeStone.name}
                      fill
                      className={`object-cover transition-all duration-500 ${getLightFilterClass()}`}
                    />
                    
                    {/* Live Light Indicator Tag */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#d7c4ac]" />
                      <span>
                        {inspectLight === "daylight" && "Természetes Nappali Fény (5500K)"}
                        {inspectLight === "warm" && "Meleg Esti Hangulatfény (2700K)"}
                        {inspectLight === "gallery" && "Galéria & Spot Megvilágítás"}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#14171c] text-[10px] font-bold px-2.5 py-1 rounded-lg border border-[#e8ddcf] shadow-sm">
                      8K Makró Részlet
                    </div>
                  </div>

                  {/* Light Simulator Switcher */}
                  <div className="bg-white p-3 rounded-2xl border border-[#e8ddcf] flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7a6454] flex items-center gap-1.5 pl-1">
                      <Sun className="w-3.5 h-3.5 text-[#9e7753]" />
                      <span>Fényhatás Vizsgálat:</span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setInspectLight("daylight")}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
                          inspectLight === "daylight"
                            ? "bg-[#14171c] text-white border-[#14171c]"
                            : "bg-[#faf7f2] text-[#553f31] border-[#e8ddcf] hover:bg-[#f0ebe3]"
                        }`}
                      >
                        Nappali
                      </button>
                      <button
                        onClick={() => setInspectLight("warm")}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
                          inspectLight === "warm"
                            ? "bg-[#9e7753] text-white border-[#9e7753]"
                            : "bg-[#faf7f2] text-[#553f31] border-[#e8ddcf] hover:bg-[#f0ebe3]"
                        }`}
                      >
                        Meleg Fény
                      </button>
                      <button
                        onClick={() => setInspectLight("gallery")}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
                          inspectLight === "gallery"
                            ? "bg-[#262c36] text-[#d7c4ac] border-[#262c36]"
                            : "bg-[#faf7f2] text-[#553f31] border-[#e8ddcf] hover:bg-[#f0ebe3]"
                        }`}
                      >
                        Galéria Spot
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stone Details & Specs Column */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-[#e8ddcf]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9e7753] block mb-1">
                      Kőzet Jellemzői & Tapintása
                    </span>
                    <p className="text-xs text-[#553f31] leading-relaxed mb-3">
                      {activeStone.visualCharacteristics}
                    </p>
                    <p className="text-xs text-[#7a6454] leading-relaxed">
                      {activeStone.description}
                    </p>
                  </div>

                  {/* Surface Finishes Selection */}
                  <div className="bg-white p-5 rounded-2xl border border-[#e8ddcf]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9e7753] block mb-2">
                      Rendelhető Felületkezelés
                    </span>
                    <div className="space-y-2">
                      {activeStone.surfaceFinishes.map((finish, idx) => (
                        <div
                          key={idx}
                          onClick={() => setInspectFinish(idx)}
                          className={`p-2.5 rounded-xl border cursor-pointer transition ${
                            inspectFinish === idx
                              ? "bg-[#faf7f2] border-[#9e7753] text-[#14171c]"
                              : "bg-white border-[#e8ddcf] text-[#553f31] hover:bg-[#fcfaf7]"
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-bold mb-0.5">
                            <span>{finish.name}</span>
                            {inspectFinish === idx && <Check className="w-3.5 h-3.5 text-[#9e7753]" />}
                          </div>
                          <p className="text-[11px] text-[#7a6454]">{finish.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specs Table */}
                  <div className="bg-white p-5 rounded-2xl border border-[#e8ddcf] text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9e7753] block mb-2.5">
                      Technikai Paraméterek
                    </span>
                    <div className="space-y-2 text-[#553f31]">
                      <div className="flex justify-between pb-1.5 border-b border-[#f0ebe3]">
                        <span className="text-[#7a6454]">Mohs Keménység:</span>
                        <span className="font-semibold">{activeStone.specifications.mohsHardness}</span>
                      </div>
                      <div className="flex justify-between pb-1.5 border-b border-[#f0ebe3]">
                        <span className="text-[#7a6454]">Sűrűség:</span>
                        <span className="font-semibold">{activeStone.specifications.density}</span>
                      </div>
                      <div className="flex justify-between pb-1.5 border-b border-[#f0ebe3]">
                        <span className="text-[#7a6454]">Vízfelvétel:</span>
                        <span className="font-semibold">{activeStone.specifications.waterAbsorption}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#7a6454]">Javasolt Felhasználás:</span>
                        <span className="font-semibold text-right">{activeStone.specifications.recommendedUses.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 bg-white border-t border-[#e8ddcf] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-[#7a6454]">
                Kérdése van a kőzettel kapcsolatban? Hívja szakértőnket: <a href="tel:+36204076858" className="font-bold text-[#14171c] hover:underline">+36 20 407 6858</a>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSampleSelectedStone(activeStone.id);
                    setActiveStone(null);
                    setSampleModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#9e7753] text-white font-semibold text-xs hover:bg-[#805e43] transition shadow-xs flex items-center justify-center gap-2"
                >
                  <Package className="w-4 h-4" />
                  <span>10x10 cm Minta Rendelése</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* Sample Box Request Modal */}
      {/* ========================================================================= */}
      {sampleModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#faf7f2] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#e8ddcf] shadow-2xl relative">
            <button
              onClick={() => { setSampleModalOpen(false); setSampleSent(false); }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#f0ebe3] text-[#14171c] border border-[#e8ddcf]"
            >
              <X className="w-4 h-4" />
            </button>

            {sampleSent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#e8ddcf] text-[#9e7753] flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#14171c]">
                  Mintakérés Sikeresen Rögzítve!
                </h3>
                <p className="text-xs text-[#553f31] leading-relaxed">
                  Köszönjük érdeklődését! Munkatársunk 24 órán belül felveszi Önnel a kapcsolatot 
                  a szállítási cím és a kiválasztott kőzetminták egyeztetése céljából.
                </p>
                <div className="p-3 bg-white rounded-xl border border-[#e8ddcf] text-xs text-[#7a6454]">
                  Sürgős kérdés esetén: <a href="tel:+36204076858" className="font-bold text-[#14171c]">+36 20 407 6858</a>
                </div>
                <button
                  onClick={() => { setSampleModalOpen(false); setSampleSent(false); }}
                  className="w-full py-3 rounded-xl bg-[#14171c] text-white font-semibold text-xs hover:bg-[#262c36] transition"
                >
                  Rendben, bezárás
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSampleSent(true);
                }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-[#9e7753] text-xs font-bold uppercase tracking-wider">
                  <Package className="w-4 h-4" />
                  <span>Anyagminta Doboz Rendelés</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#14171c]">
                  Tapintsa meg a kőzetek valódi textúráját otthonában!
                </h3>

                <p className="text-xs text-[#553f31] leading-relaxed">
                  A csomag valódi, csiszolt 10x10 cm-es kőtömböket tartalmaz a kiválasztott típusokból, 
                  hogy saját fényviszonyai között illeszthesse meglévő burkolataihoz és bútoraihoz.
                </p>

                <div>
                  <label className="block text-xs font-bold text-[#14171c] mb-1">
                    Válasszon Elsődleges Kőzetet:
                  </label>
                  <select
                    value={sampleSelectedStone}
                    onChange={(e) => setSampleSelectedStone(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-[#e8ddcf] text-xs text-[#14171c] focus:outline-hidden focus:border-[#9e7753]"
                  >
                    {STONE_MATERIALS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.originalName})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14171c] mb-1">Név *</label>
                  <input
                    type="text"
                    required
                    placeholder="Kovács Anna"
                    className="w-full p-2.5 rounded-xl bg-white border border-[#e8ddcf] text-xs text-[#14171c] focus:outline-hidden focus:border-[#9e7753]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#14171c] mb-1">Telefonszám *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+36 30 123 4567"
                      className="w-full p-2.5 rounded-xl bg-white border border-[#e8ddcf] text-xs text-[#14171c] focus:outline-hidden focus:border-[#9e7753]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#14171c] mb-1">E-mail cím *</label>
                    <input
                      type="email"
                      required
                      placeholder="anna@example.hu"
                      className="w-full p-2.5 rounded-xl bg-white border border-[#e8ddcf] text-xs text-[#14171c] focus:outline-hidden focus:border-[#9e7753]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#14171c] mb-1">Szállítási Cím / Megjegyzés</label>
                  <textarea
                    rows={2}
                    placeholder="Irányítószám, Város, Utca, Házszám vagy egyedi kérés..."
                    className="w-full p-2.5 rounded-xl bg-white border border-[#e8ddcf] text-xs text-[#14171c] focus:outline-hidden focus:border-[#9e7753]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#14171c] text-white font-semibold text-xs hover:bg-[#262c36] transition shadow-md flex items-center justify-center gap-2"
                >
                  <span>Mintacsomag Igénylése</span>
                  <ArrowRight className="w-4 h-4 text-[#d7c4ac]" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
