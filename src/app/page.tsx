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
  Eye,
  Menu,
  X,
  Phone
} from "lucide-react";
import { ROOM_CATEGORIES, MATERIALS } from "@/lib/categories";
import { PRODUCTS, ProductItem } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState<string>("all");
  const [selectedSubType, setSelectedSubType] = useState<string>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentRoomObj = ROOM_CATEGORIES.find((r) => r.id === selectedRoom);

  // Dynamically compute available materials that exist for the currently selected room & subtype
  const availableMaterialsForCategory = MATERIALS.filter((mat) => {
    if (mat.id === "all") return true;
    return PRODUCTS.some((p) => {
      const matchesRoom = selectedRoom === "all" || p.room === selectedRoom;
      const matchesSubType = selectedSubType === "all" || p.subType === selectedSubType;
      return matchesRoom && matchesSubType && p.materialType === mat.id;
    });
  });

  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesRoom = selectedRoom === "all" || prod.room === selectedRoom;
    const matchesSubType = selectedSubType === "all" || prod.subType === selectedSubType;
    const matchesMaterial = selectedMaterial === "all" || prod.materialType === selectedMaterial;
    return matchesRoom && matchesSubType && matchesMaterial;
  });

  return (
    <main className="min-h-screen flex flex-col bg-[#faf7f2] text-[#14171c]">
      {/* Top Notification Banner */}
      <div className="bg-[#14171c] text-[#d7c4ac] py-2 px-3 sm:px-6 text-center text-[11px] sm:text-xs font-medium border-b border-[#262c36]">
        <span>✨ Természetes travertin mészkő, olasz márvány és tömörfa bútorok közvetlen importból • 100% garancia</span>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e8ddcf]">
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
            <Link href="#katalogus" className="hover:text-[#14171c] transition">Bútorkollekciók & Anyagok</Link>
            <Link href="#egyedi-gyartas" className="hover:text-[#14171c] transition">Egyedi Gyártás</Link>
            <Link href="#mintacsomag" className="hover:text-[#14171c] transition">Anyagminta Csomag</Link>
            <div className="flex items-center gap-1.5 cursor-default select-none text-[#7a6454]">
              <span>Bemutatóterem</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#e8ddcf]/70 text-[#805e43] border border-[#d7c4ac]/70 shadow-2xs">
                Hamarosan
              </span>
            </div>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/admin"
              className="hidden sm:inline-block text-xs font-semibold text-[#805e43] hover:text-[#14171c] transition px-2.5 py-1.5"
            >
              Admin
            </Link>
            <Link
              href="#katalogus"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#14171c] text-white hover:bg-[#2e2118] transition shadow-xs"
            >
              <span>Katalógus</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#d7c4ac]" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white border border-[#e8ddcf] text-[#14171c] hover:bg-[#f4efe8] transition"
              aria-label="Menü megnyitása"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-[#e8ddcf] px-5 py-5 space-y-4 animate-in slide-in-from-top duration-300 shadow-xl">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-[#553f31]">
              <Link 
                href="#katalogus" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-[#faf7f2] text-[#14171c] font-semibold flex items-center justify-between"
              >
                <span>Bútorkollekciók & Anyagok</span>
                <ChevronRight className="w-4 h-4 text-[#9e7753]" />
              </Link>
              <Link 
                href="#egyedi-gyartas" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-[#faf7f2] flex items-center justify-between"
              >
                <span>Egyedi Gyártás</span>
                <ChevronRight className="w-4 h-4 text-[#9e7753]" />
              </Link>
              <Link 
                href="#mintacsomag" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl hover:bg-[#faf7f2] flex items-center justify-between"
              >
                <span>Anyagminta Csomag (1.990 Ft)</span>
                <ChevronRight className="w-4 h-4 text-[#9e7753]" />
              </Link>
              <div className="p-2.5 rounded-xl bg-[#faf7f2] flex items-center justify-between text-xs text-[#7a6454]">
                <span>Bemutatóterem</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#e8ddcf] text-[#805e43]">
                  Hamarosan
                </span>
              </div>
            </nav>

            <div className="pt-3 border-t border-[#e8ddcf] flex flex-col gap-2.5 text-xs">
              <a 
                href="tel:+36204076858"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f7f3ee] text-[#14171c] font-bold"
              >
                <Phone className="w-4 h-4 text-[#9e7753]" />
                <span>Közvetlen Hívás: +36 20 407 6858</span>
              </a>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 rounded-xl border border-[#d7c4ac] text-[#805e43] font-semibold hover:bg-[#14171c] hover:text-white transition"
              >
                Admin Belépés & ERP
              </Link>
            </div>
          </div>
        )}
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

            {/* Right Column: Dynamic Dual Perspective Hero Showcase (Front Elevation + Enlarged Tabletop Macro Detail) */}
            <div className="md:col-span-6 lg:col-span-6 relative flex flex-col items-center justify-center pt-2 md:pt-0">
              <div className="relative w-full max-w-[600px] group flex flex-col items-center">
                
                {/* Ambient Soft Glow Behind Table */}
                <div className="absolute inset-0 bg-radial from-[#e8ddcf]/50 via-[#faf7f2]/20 to-transparent -z-10 blur-2xl scale-90 pointer-events-none" />

                {/* Main Isolated Stone Table (Front Elevation with Monolithic Dome Pillars and Staged Styling) */}
                <div className="relative py-2 px-2 flex flex-col items-center w-full">
                  <img
                    src="/kepek/showcase/travertin_dome_staged_hd.png"
                    alt="TerraSilva Navona Travertin Monolit Dóm Étkezőasztal"
                    className="w-full h-auto max-h-[390px] object-contain group-hover:scale-102 transition-transform duration-700 ease-out mx-auto"
                  />
                  {/* Natural Ground Contact Shadow */}
                  <div className="w-[86%] h-4 bg-[#14171c]/12 rounded-full blur-md -mt-3 pointer-events-none" />
                </div>

                {/* Full-Bleed 8K Tabletop Stone Macro Texture with Interactive Zoom on Hover */}
                <div className="mt-2 w-full max-w-[500px] h-32 sm:h-36 rounded-2xl overflow-hidden border border-[#d7c4ac] shadow-lg relative group/macro cursor-zoom-in bg-[#3a3028]">
                  <img
                    src="/kepek/showcase/travertin_surface_macro_8k.jpg"
                    alt="TerraSilva 8K Navona Travertin Asztallap Kőtextúra"
                    className="w-full h-full object-cover group-hover/macro:scale-135 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/macro:bg-black/10 transition-colors pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15 text-white flex items-center gap-2 text-[10px] font-semibold tracking-wide pointer-events-none transition-opacity duration-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>8K Navona Travertin Textúra • Finomcsiszolt Kőpórusok</span>
                  </div>
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

        {/* 1. Primary Filter: Visual Room Category Cards with Real Staging Photos */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-[#9e7753] font-bold">
              1. Válassz Szobatípust
            </span>
            <span className="text-xs text-[#805e43]">
              Kattints a kategóriára a szűréshez
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {/* All Rooms Card */}
            <button
              onClick={() => {
                setSelectedRoom("all");
                setSelectedSubType("all");
                setSelectedMaterial("all");
              }}
              className={`group relative rounded-2xl overflow-hidden p-3.5 text-left border transition-all duration-300 flex flex-col justify-between min-h-[110px] ${
                selectedRoom === "all"
                  ? "bg-[#14171c] text-white border-[#9e7753] shadow-md ring-2 ring-[#9e7753]/40"
                  : "bg-white text-[#14171c] border-[#e8ddcf] hover:border-[#9e7753] hover:shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">🛋️</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  selectedRoom === "all" ? "bg-white/20 text-white" : "bg-[#faf7f2] text-[#805e43] border border-[#e8ddcf]"
                }`}>
                  {PRODUCTS.length} bútor
                </span>
              </div>
              <div className="mt-2">
                <h4 className="font-serif font-bold text-xs sm:text-sm">Összes Kollekció</h4>
                <p className={`text-[10px] line-clamp-1 mt-0.5 ${selectedRoom === "all" ? "text-gray-300" : "text-[#805e43]"}`}>
                  Minden szoba & bútor
                </p>
              </div>
            </button>

            {/* Room Category Cards with Staging Backgrounds */}
            {ROOM_CATEGORIES.map((room) => {
              const count = PRODUCTS.filter((p) => p.room === room.id).length;
              const isSelected = selectedRoom === room.id;

              return (
                <button
                  key={room.id}
                  onClick={() => {
                    setSelectedRoom(room.id);
                    setSelectedSubType("all");
                    setSelectedMaterial("all");
                  }}
                  className={`group relative rounded-2xl overflow-hidden p-3.5 text-left border transition-all duration-300 flex flex-col justify-between min-h-[110px] ${
                    isSelected
                      ? "border-[#9e7753] shadow-lg ring-2 ring-[#9e7753]/50 text-white"
                      : "border-[#e8ddcf] text-white hover:border-[#9e7753] hover:shadow-md"
                  }`}
                >
                  {/* Photo Background */}
                  <div className="absolute inset-0 z-0">
                    {room.imageUrl ? (
                      <img
                        src={room.imageUrl}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#262c36]" />
                    )}
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      isSelected
                        ? "bg-gradient-to-t from-black/85 via-black/40 to-black/30"
                        : "bg-gradient-to-t from-black/80 via-black/45 to-black/20 group-hover:from-black/75"
                    }`} />
                  </div>

                  {/* Top Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-amber-400 animate-pulse" : "bg-white/40"}`} />
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                      {count} bútor
                    </span>
                  </div>

                  {/* Bottom Title */}
                  <div className="relative z-10 mt-2">
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-white drop-shadow-xs">
                      {room.name}
                    </h4>
                    <p className="text-[10px] text-[#e8ddcf] line-clamp-1 mt-0.5 drop-shadow-xs">
                      {room.description || "Prémium kollekció"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Sub-Type Pills (if a room is selected) */}
        {currentRoomObj && (
          <div className="bg-white p-4 rounded-2xl border border-[#e8ddcf] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#805e43] shrink-0">
              <Layers className="w-4 h-4 text-[#9e7753]" />
              <span>Bútortípusok ({currentRoomObj.name}):</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {currentRoomObj.subTypes.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => {
                    setSelectedSubType(sub.id);
                    setSelectedMaterial("all");
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                    selectedSubType === sub.id
                      ? "bg-[#14171c] text-white shadow-xs"
                      : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4ede4]"
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 3. Visual Material Selector with Macro Swatch Photos (Shows only available materials for the selected category) */}
        {availableMaterialsForCategory.length > 1 && (
          <div className="bg-white p-5 rounded-3xl border border-[#e8ddcf] shadow-xs space-y-3.5 animate-in fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#9e7753]" />
                <span className="text-xs uppercase tracking-widest text-[#805e43] font-bold">
                  2. Válassz Alapanyagot {currentRoomObj ? `(${currentRoomObj.name})` : ""}:
                </span>
              </div>
              <span className="text-xs text-[#805e43] font-medium hidden sm:inline-block">
                {availableMaterialsForCategory.length - 1} elérhető anyag ebben a kategóriában
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {availableMaterialsForCategory.map((mat) => {
                const isSelected = selectedMaterial === mat.id;
                const count = PRODUCTS.filter((p) => {
                  const matchesRoom = selectedRoom === "all" || p.room === selectedRoom;
                  const matchesSubType = selectedSubType === "all" || p.subType === selectedSubType;
                  const matchesMaterial = mat.id === "all" || p.materialType === mat.id;
                  return matchesRoom && matchesSubType && matchesMaterial;
                }).length;

                return (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat.id)}
                    className={`group rounded-2xl p-2.5 text-left border transition-all duration-300 flex items-center gap-3 relative overflow-hidden ${
                      isSelected
                        ? "bg-[#14171c] text-white border-[#9e7753] shadow-md ring-2 ring-[#9e7753]/50"
                        : "bg-[#faf8f5] text-[#14171c] border-[#e8ddcf] hover:border-[#9e7753] hover:bg-white"
                    }`}
                  >
                    {/* Swatch Thumbnail */}
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-black/10 relative shadow-2xs">
                      {mat.imageUrl ? (
                        <img
                          src={mat.imageUrl}
                          alt={mat.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center font-bold text-xs"
                          style={{ backgroundColor: mat.colorHex || "#e8ddcf" }}
                        >
                          ✨
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h5 className="font-serif font-bold text-xs truncate">
                          {mat.name}
                        </h5>
                        <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                          isSelected ? "bg-white/20 text-amber-300" : "bg-white text-[#805e43] border border-[#e8ddcf]"
                        }`}>
                          {count}
                        </span>
                      </div>
                      <p className={`text-[10px] truncate mt-0.5 ${isSelected ? "text-gray-300" : "text-[#805e43]"}`}>
                        {mat.description || mat.tag || "Prémium anyag"}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

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
