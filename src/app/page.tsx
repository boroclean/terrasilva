import Link from "next/link";
import { 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  ShoppingBag, 
  Palette, 
  Star,
  Layers,
  Trees,
  Gem
} from "lucide-react";

export default function Home() {
  const featuredProducts = [
    {
      id: "prod-01",
      name: "Aura Travertino Dohányzóasztal",
      category: "Travertin & Mészkő",
      price: 389000,
      material: "Természetes Olasz Travertin Mészkő, Matt Csiszolt Felület",
      stockStatus: "Raktáron (2 db)",
      tag: "Természetes Kő",
      rating: 5.0,
    },
    {
      id: "prod-02",
      name: "Silva Carrara Étkezőasztal",
      category: "Márvány & Tömörfa",
      price: 749000,
      material: "Fehér Carrara Márványlap + Tömör Amerikai Diófa Talapzat",
      stockStatus: "Érkező konténerben (Nov. 12)",
      tag: "Előrendelhető -10%",
      rating: 4.9,
    },
    {
      id: "prod-03",
      name: "Monolit Travertin Oszlop Console",
      category: "Konzolasztalok",
      price: 289000,
      material: "Faragott Tömör Travertin Kőtömb, Naturális Textúra",
      stockStatus: "Raktáron (3 db)",
      tag: "High-End Kézműves",
      rating: 5.0,
    },
    {
      id: "prod-04",
      name: "Silva Royale Lounge Fotel",
      category: "Tömörfa & Kárpit",
      price: 269000,
      material: "Tömör Natúr Tölgy Váz, Prémium Olasz Bouclé Kárpitozás",
      stockStatus: "Raktáron (4 db)",
      tag: "Skandináv Elegancia",
      rating: 4.9,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#faf8f5]">
      {/* Public Storefront Navigation */}
      <header className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8ddcf]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#14171c] text-[#faf8f5] flex items-center justify-center font-bold text-sm tracking-wider shadow-sm border border-[#9e7753]/30">
              TS
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#14171c]">TERRASILVA</span>
              <span className="text-[10px] uppercase tracking-widest text-[#9e7753] block -mt-1 font-semibold">Stone & Timber Living</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#553f31]">
            <Link href="#kollekcio" className="hover:text-[#14171c] transition">Kő & Fa Kollekciók</Link>
            <Link href="#anyagok" className="hover:text-[#14171c] transition">Travertin & Márvány</Link>
            <Link href="#filozofia" className="hover:text-[#14171c] transition">Filozófia</Link>
            <Link href="#kapcsolat" className="hover:text-[#14171c] transition">Kapcsolat</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative p-2.5 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] hover:bg-[#f4efe8] transition shadow-2xs">
              <ShoppingBag className="w-4 h-4 text-[#14171c]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#9e7753] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Link
              href="#kollekcio"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#14171c] text-[#faf8f5] hover:bg-[#2e2118] transition shadow-xs"
            >
              <span>Kollekció</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 border-b border-[#e8ddcf] bg-gradient-to-b from-[#faf8f5] via-[#f4efe8]/70 to-[#faf8f5]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d7c4ac] bg-white text-xs font-semibold text-[#805e43] shadow-2xs">
            <Gem className="w-3.5 h-3.5 text-[#9e7753]" />
            <span>Terra (Kő & Travertin) • Silva (Tömörfa & Természet)</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#14171c] leading-[1.1]">
            A természet ereje, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e7753] to-[#553f31]">
              időtálló travertin és tömörfa formájában.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#684d39] leading-relaxed">
            Exkluzív travertin mészkő, természetes erezetű márvány és prémium dió- illetve tölgyfa bútorok. 
            Közvetlen manufaktúra és kőfaragó importtal elhozzuk otthonodba a megalkuvást nem ismerő luxust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#kollekcio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#14171c] text-white font-medium text-sm hover:bg-[#2e2118] transition shadow-md flex items-center justify-center gap-2"
            >
              <span>Kollekció Felfedezése</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#mintacsomag"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] font-medium text-sm hover:bg-[#f4efe8] transition shadow-xs flex items-center justify-center gap-2"
            >
              <Palette className="w-4 h-4 text-[#9e7753]" />
              <span>Kő- és Faminta Csomag Kérése</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection Grid */}
      <section id="kollekcio" className="py-20 px-6 max-w-7xl mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9e7753] font-bold block mb-1">
              High-End Válogatás
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#14171c]">
              Természetes Kő & Nemesfa Bútoraink
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <button className="px-4 py-2 rounded-lg bg-[#14171c] text-white">Összes</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-[#e8ddcf] text-[#553f31] hover:bg-[#f4efe8]">Travertin Mészkő</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-[#e8ddcf] text-[#553f31] hover:bg-[#f4efe8]">Márvány Asztalok</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-[#e8ddcf] text-[#553f31] hover:bg-[#f4efe8]">Tömörfa Kollekció</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-[#e8ddcf] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              {/* Product Visual Box */}
              <div className="h-64 bg-gradient-to-br from-[#f4efe8] to-[#e8ddcf]/50 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#14171c] text-white shadow-xs">
                    {product.tag}
                  </span>
                  <div className="flex items-center gap-1 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-full text-xs font-semibold text-[#553f31]">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <div className="text-center py-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-white/70 border border-[#d7c4ac] flex items-center justify-center text-[#9e7753] group-hover:scale-105 transition-transform shadow-xs">
                    <Gem className="w-8 h-8" />
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-[11px] font-semibold text-[#805e43] bg-white/90 px-3 py-1 rounded-full border border-[#e8ddcf]">
                    {product.stockStatus}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#9e7753] font-bold">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-base text-[#14171c] group-hover:text-[#9e7753] transition">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#684d39] line-clamp-2">
                    {product.material}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f4efe8] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#805e43] block">Fogyasztói Ár</span>
                    <span className="text-lg font-bold text-[#14171c]">
                      {new Intl.NumberFormat("hu-HU").format(product.price)} Ft
                    </span>
                  </div>
                  <button className="p-2.5 rounded-xl bg-[#14171c] text-white hover:bg-[#9e7753] transition shadow-xs">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Material Philosophy Banner */}
      <section id="filozofia" className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="rounded-3xl bg-[#14171c] text-white p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#d7c4ac]">
              <Palette className="w-3.5 h-3.5" />
              <span>Természetes Kő- és Faminták</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Kérj Valódi Travertin és Diófa Anyagmintát Otthonodba
            </h2>
            <p className="text-sm text-[#d7c4ac] leading-relaxed">
              Minden kőtömb és fafelület egyedi erezettel rendelkezik. Rendelj prémium travertin mészkő, carrara márvány és diófa mintacsomagot, melynek teljes díját jóváírjuk bútormegrendelésedkor!
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
            <span className="font-mono bg-[#14171c] text-white px-1.5 py-0.5 rounded text-[10px]">TS</span>
            <span>TERRASILVA</span>
            <span>•</span>
            <span className="font-normal text-[#805e43]">Exkluzív Travertin, Márvány & Tömörfa Bútorok</span>
          </div>
          <p>Kapcsolat: +36 20 407 6858 • info@terrasilva.hu</p>
          <p>© {new Date().getFullYear()} TerraSilva. Minden jog fenntartva.</p>
        </div>
      </footer>
    </main>
  );
}
