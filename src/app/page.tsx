import Link from "next/link";
import { 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  ShoppingBag, 
  Palette, 
  Star,
  Gem,
  Compass,
  Hammer,
  Check,
  ChevronRight,
  Maximize2
} from "lucide-react";

export default function Home() {
  const materials = [
    {
      name: "Travertin Mészkő",
      origin: "Tivoli & Denizli",
      desc: "Naturális, porozus textúra meleg bézs és homok árnyalatokban. Minden darab egyedi geológiai ujjlenyomat.",
      tag: "Legnépszerűbb",
      bgGradient: "from-[#f4ede4] to-[#e5d8c8]",
    },
    {
      name: "Természetes Márvány",
      origin: "Carrara & Volakas",
      desc: "Selymes matt-csiszolt felület, drámai szürke és arany erezetekkel. Időtálló elegancia étkező- és dohányzóasztalokhoz.",
      tag: "Klasszikus Luxus",
      bgGradient: "from-[#f7f7f7] to-[#e8e8e8]",
    },
    {
      name: "Amerikai Diófa & Tölgy",
      origin: "FSC Prémium Erdőgazdálkodás",
      desc: "Mély barna, meleg tónusú tömörfa kézműves olajozással. Tökéletesen ellenpontozza a hideg kőfelületeket.",
      tag: "Nemes Tömörfa",
      bgGradient: "from-[#eadecc] to-[#cbb497]",
    },
    {
      name: "Monolit Kőtömbök",
      origin: "Közvetlen Kőfaragó Manufaktúra",
      desc: "Egyetlen tömbből faragott szoborszerű konzolasztalok, oszlopok és padok a modern építészet szerelmeseinek.",
      tag: "Szoborszerű Forma",
      bgGradient: "from-[#f0e7db] to-[#d6c3ad]",
    },
  ];

  const featuredProducts = [
    {
      id: "prod-01",
      name: "Aura Navona Travertin Dohányzóasztal",
      category: "Travertin Bútorok",
      price: 389000,
      material: "100% Természetes Olasz Travertin, Matt Csiszolt Felület (110 x 60 x 38 cm)",
      stockStatus: "Raktáron (2 db azonnal)",
      tag: "Ikonikus Darab",
      rating: 5.0,
    },
    {
      id: "prod-02",
      name: "Silva Carrara Étkezőasztal (8-10 személyes)",
      category: "Márvány & Diófa",
      price: 749000,
      material: "Fehér Carrara Márványlap + Tömör Amerikai Diófa Monolit Lábak (220 x 100 cm)",
      stockStatus: "Érkező konténerben (Nov. 12)",
      tag: "Előrendelhető -10%",
      rating: 4.9,
    },
    {
      id: "prod-03",
      name: "Monolit Fluted Travertin Oszlop Console",
      category: "Konzolasztalok",
      price: 289000,
      material: "Faragott Kannelúrázott Travertin Kőtömb (120 x 40 x 85 cm)",
      stockStatus: "Raktáron (3 db)",
      tag: "Kézműves Faragvány",
      rating: 5.0,
    },
    {
      id: "prod-04",
      name: "Silva Lounge Fotel Diófa Vázzal",
      category: "Tömörfa & Kárpit",
      price: 269000,
      material: "Tömör Natúr Diófa Keret, Prémium Olasz Bouclé Kárpitozás",
      stockStatus: "Raktáron (4 db)",
      tag: "Skandináv & Japandi",
      rating: 4.9,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#faf7f2] text-[#14171c]">
      {/* Top Banner */}
      <div className="bg-[#14171c] text-[#d7c4ac] py-2 px-6 text-center text-xs font-medium border-b border-[#262c36]">
        <span>✨ Természetes travertin, márvány és nemes tömörfa bútorok • 100% gyártói import & garancia</span>
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
            <Link href="#kollekcio" className="hover:text-[#14171c] transition">Kollekciók</Link>
            <Link href="#anyagok" className="hover:text-[#14171c] transition">Travertin & Anyagok</Link>
            <Link href="#egyedi-gyartas" className="hover:text-[#14171c] transition">Egyedi Gyártás</Link>
            <Link href="#mintacsomag" className="hover:text-[#14171c] transition">Anyagminták</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative p-2.5 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] hover:bg-[#f4ede4] transition shadow-2xs">
              <ShoppingBag className="w-4 h-4 text-[#14171c]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#9e7753] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Link
              href="#kollekcio"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#14171c] text-white hover:bg-[#2e2118] transition shadow-xs"
            >
              <span>Vásárlás</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#d7c4ac]" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 border-b border-[#e8ddcf] bg-gradient-to-b from-[#faf7f2] via-[#f4ede4]/80 to-[#faf7f2]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d7c4ac] bg-white text-xs font-semibold text-[#805e43] shadow-2xs">
            <Gem className="w-3.5 h-3.5 text-[#9e7753]" />
            <span>Terra (Természetes Kő) • Silva (Nemes Tömörfa)</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#14171c] font-serif leading-[1.1]">
            A természet ereje, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e7753] via-[#755235] to-[#14171c]">
              időtálló travertin és tömörfa formájában.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#684d39] leading-relaxed">
            Minden bútorunk természetes travertin mészkőtömbökből, olasz márványból és nemes dió- illetve tölgyfából készül. 
            Közvetlen manufaktúra importtal garantáljuk az elérhető luxust és a generációkon átívelő tartósságot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#kollekcio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#14171c] text-white font-medium text-sm hover:bg-[#2e2118] transition shadow-md flex items-center justify-center gap-2"
            >
              <span>Kollekció Felfedezése</span>
              <ArrowRight className="w-4 h-4 text-[#d7c4ac]" />
            </Link>
            <Link
              href="#mintacsomag"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] font-medium text-sm hover:bg-[#f4ede4] transition shadow-xs flex items-center justify-center gap-2"
            >
              <Palette className="w-4 h-4 text-[#9e7753]" />
              <span>Valódi Kő- és Faminta Kérése</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Materials & Philosophy Spotlight */}
      <section id="anyagok" className="py-20 px-6 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#9e7753] font-bold block">
            Anyaghasználati Filozófia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#14171c]">
            Nyers természet, finomra csiszolva.
          </h2>
          <p className="text-sm text-[#684d39]">
            Nem használunk mesterséges műanyagokat vagy kőutánzatokat. Minden TerraSilva alkotás 100%-ban valódi föld mélyéből bányászott kő és tömörfa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((mat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-4 hover:border-[#9e7753] transition flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className={`h-28 rounded-xl bg-gradient-to-br ${mat.bgGradient} p-4 flex flex-col justify-between border border-[#e8ddcf]`}>
                  <span className="self-start px-2 py-0.5 rounded text-[10px] font-bold bg-[#14171c] text-white">
                    {mat.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-[#684d39]">Származás: {mat.origin}</span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#14171c]">{mat.name}</h3>
                <p className="text-xs text-[#684d39] leading-relaxed">
                  {mat.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#f4ede4] flex items-center justify-between text-xs font-semibold text-[#9e7753]">
                <span>Fedezd fel</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection Grid */}
      <section id="kollekcio" className="py-20 px-6 max-w-7xl mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9e7753] font-bold block mb-1">
              High-End Válogatás
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#14171c]">
              Természetes Kő & Nemesfa Bútoraink
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold overflow-x-auto pb-1">
            <button className="px-4 py-2 rounded-xl bg-[#14171c] text-white">Összes</button>
            <button className="px-4 py-2 rounded-xl bg-white border border-[#e8ddcf] text-[#553f31] hover:bg-[#f4ede4]">Travertin Asztalok</button>
            <button className="px-4 py-2 rounded-xl bg-white border border-[#e8ddcf] text-[#553f31] hover:bg-[#f4ede4]">Márvány Étkezők</button>
            <button className="px-4 py-2 rounded-xl bg-white border border-[#e8ddcf] text-[#553f31] hover:bg-[#f4ede4]">Tömörfa & Kárpit</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-[#e8ddcf] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              {/* Product Visual Box */}
              <div className="h-64 bg-gradient-to-br from-[#f4ede4] to-[#e8ddcf]/60 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#14171c] text-white shadow-xs">
                    {product.tag}
                  </span>
                  <div className="flex items-center gap-1 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-full text-xs font-semibold text-[#553f31]">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <div className="text-center py-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-white/80 border border-[#d7c4ac] flex items-center justify-center text-[#9e7753] group-hover:scale-105 transition-transform shadow-xs">
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
                  <h3 className="font-serif font-bold text-base text-[#14171c] group-hover:text-[#9e7753] transition">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#684d39] line-clamp-2">
                    {product.material}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f4ede4] flex items-center justify-between">
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

      {/* Custom Stone & Wood Ordering Section */}
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
              Speciális méretű étkezőasztalra, egyedi kőtömbre vagy saját tervezésű konzolra van szükséged? 
              Közvetlen kőfaragó műhelyünkben bármilyen egyedi méretet megvalósítunk 4-6 hetes gyártási határidővel.
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
                placeholder="Milyen méretű és anyagú bútort keresel? (pl. 240x100 cm Navona travertin étkezőasztal)"
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
