import Link from "next/link";
import { 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  ShoppingBag, 
  Palette, 
  Eye, 
  Check,
  Star
} from "lucide-react";

export default function Home() {
  const featuredProducts = [
    {
      id: "prod-01",
      name: "Aura Royale Lounge Fotel",
      category: "Fotelek",
      price: 249000,
      material: "Smaragdzöld Olasz Bársony, Matt Arany Lábak",
      stockStatus: "Raktáron (1-2 nap)",
      tag: "Legnépszerűbb",
      rating: 4.9,
    },
    {
      id: "prod-02",
      name: "Novara Carrara Étkezőasztal",
      category: "Étkezőasztalok",
      price: 589000,
      material: "Természetes Carrara Márvány, Fekete Acél Váz",
      stockStatus: "Érkező konténerben (Nov. 12)",
      tag: "Előrendelhető -10%",
      rating: 5.0,
    },
    {
      id: "prod-03",
      name: "Velluto Moduláris Sarokkanapé",
      category: "Kanapék",
      price: 890000,
      material: "Prémium Terrakotta Struktúrszövet, Diófa Alap",
      stockStatus: "Raktáron (3 db)",
      tag: "Új Kollekció",
      rating: 4.8,
    },
    {
      id: "prod-04",
      name: "Verona Velvet Étkezőszék Szett",
      category: "Székek",
      price: 189000,
      material: "Antracit Bársony, Porszórt Acél (4 db / szett)",
      stockStatus: "Raktáron (5 szett)",
      tag: "Csomagkedvezmény",
      rating: 4.9,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#faf8f5]">
      {/* Public Storefront Navigation */}
      <header className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8ddcf]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#14171c] text-[#faf8f5] flex items-center justify-center font-bold text-lg shadow-sm">
              B
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#14171c]">BÚTOR</span>
              <span className="text-xs uppercase tracking-widest text-[#9e7753] block -mt-1 font-medium">Beszálló & Studio</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#553f31]">
            <Link href="#kollekcio" className="hover:text-[#14171c] transition">Kollekciók</Link>
            <Link href="#anyagok" className="hover:text-[#14171c] transition">Anyagminták</Link>
            <Link href="#minoseg" className="hover:text-[#14171c] transition">Minőség & Garancia</Link>
            <Link href="#kapcsolat" className="hover:text-[#14171c] transition">Elérhetőség</Link>
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
              <span>Vásárlás</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 px-6 border-b border-[#e8ddcf] bg-gradient-to-b from-[#faf8f5] via-[#f4efe8]/60 to-[#faf8f5]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d7c4ac] bg-white text-xs font-semibold text-[#805e43] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#b08c65]" />
            <span>Közvetlen Gyártói Import • Prémium Kivitel</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#14171c] leading-[1.1]">
            Időtálló luxus bútorok, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e7753] to-[#553f31]">
              közvetlenül a gyártótól.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#684d39] leading-relaxed">
            Válogatott olasz bársony kárpitozás, természetes márvány és tömörfa felületek. 
            A közvetlen importnak köszönhetően elérhetővé tesszük az exkluzív dizájnt.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="#kollekcio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#14171c] text-white font-medium text-sm hover:bg-[#2e2118] transition shadow-md flex items-center justify-center gap-2"
            >
              <span>Bútorkollekció Megtekintése</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#mintacsomag"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] font-medium text-sm hover:bg-[#f4efe8] transition shadow-xs flex items-center justify-center gap-2"
            >
              <Palette className="w-4 h-4 text-[#9e7753]" />
              <span>Anyagminta Csomag Kérése</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection Grid */}
      <section id="kollekcio" className="py-20 px-6 max-w-7xl mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9e7753] font-bold block mb-1">
              Kiemelt Válogatás
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-[#14171c]">
              Legnépszerűbb Dizájn Darabok
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <button className="px-4 py-2 rounded-lg bg-[#14171c] text-white">Összes</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-[#e8ddcf] text-[#553f31] hover:bg-[#f4efe8]">Fotelek</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-[#e8ddcf] text-[#553f31] hover:bg-[#f4efe8]">Asztalok</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-[#e8ddcf] text-[#553f31] hover:bg-[#f4efe8]">Kanapék</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-[#e8ddcf] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              {/* Product Visual Box */}
              <div className="h-64 bg-gradient-to-br from-[#f4efe8] to-[#e8ddcf]/40 p-6 flex flex-col justify-between relative overflow-hidden">
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
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/60 border border-[#d7c4ac] flex items-center justify-center text-[#9e7753] group-hover:scale-105 transition-transform">
                    <Sparkles className="w-8 h-8" />
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

      {/* Swatch Sample Banner */}
      <section id="mintacsomag" className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="rounded-3xl bg-[#14171c] text-white p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#d7c4ac]">
              <Palette className="w-3.5 h-3.5" />
              <span>Tapintsd meg vásárlás előtt</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Rendelj Prémium Anyag- és Színmintát Otthonodba
            </h2>
            <p className="text-sm text-[#d7c4ac] leading-relaxed">
              Olasz bársony, bouclé és márvány mintákat küldünk postán 2 munkanapon belül. 
              A mintacsomag díját (1.990 Ft) teljes mértékben jóváírjuk későbbi bútormegrendelésedből!
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
            <span>BÚTOR Studio</span>
            <span>•</span>
            <span className="font-normal text-[#805e43]">Prémium Bútor Import</span>
          </div>
          <p>Kapcsolat: +36 20 407 6858 • info@butor.hu</p>
          <p>© {new Date().getFullYear()} Bútor. Minden jog fenntartva.</p>
        </div>
      </footer>
    </main>
  );
}
