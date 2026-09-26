import Link from "next/link";
import { 
  Sparkles, 
  Package, 
  Truck, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Receipt,
  Boxes
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top Bar / Navigation */}
      <header className="sticky top-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8ddcf]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#14171c] text-[#faf8f5] flex items-center justify-center font-bold text-lg shadow-sm">
              B
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#14171c]">BÚTOR</span>
              <span className="text-xs uppercase tracking-widest text-[#9e7753] block -mt-1 font-medium">Studio & Import</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#553f31]">
            <Link href="#katalogus" className="hover:text-[#14171c] transition">Katalógus</Link>
            <Link href="#minoseg" className="hover:text-[#14171c] transition">Anyaghasználat</Link>
            <Link href="#import" className="hover:text-[#14171c] transition">Gyártói Import</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/beszallito"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg border border-[#d7c4ac] bg-white text-[#14171c] hover:bg-[#f4efe8] transition shadow-xs"
            >
              <Boxes className="w-4 h-4 text-[#9e7753]" />
              <span>Raktár & Beérkezés</span>
            </Link>
            <Link
              href="#katalogus"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-[#14171c] text-[#faf8f5] hover:bg-[#2e2118] transition shadow-xs"
            >
              <span>Kollekció Megtekintése</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6 border-b border-[#e8ddcf] bg-gradient-to-b from-[#faf8f5] via-[#f4efe8]/50 to-[#faf8f5]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#d7c4ac] bg-[#f4efe8] text-xs font-semibold text-[#805e43]">
            <Sparkles className="w-3.5 h-3.5 text-[#b08c65]" />
            <span>Közvetlen Gyártói Import & Prémium Dizájn</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#14171c] leading-[1.1]">
            Időtálló elegancia, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e7753] to-[#553f31]">
              közvetlenül a gyártótól.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#684d39] leading-relaxed">
            Egyedi tervezésű bútorok válogatott minőségű olasz kárpittal, tömörfa és márvány felületekkel. 
            Közvetlen konténeres importtal garantáljuk a kiemelkedő ár-érték arányt.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#katalogus"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#14171c] text-white font-medium text-sm hover:bg-[#2e2118] transition shadow-md flex items-center justify-center gap-2"
            >
              <span>Fedezd fel a kínálatot</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/admin/beszallito"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] font-medium text-sm hover:bg-[#f4efe8] transition shadow-xs flex items-center justify-center gap-2"
            >
              <Package className="w-4 h-4 text-[#9e7753]" />
              <span>Beszállítói ERP Felület</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Value Props */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#9e7753]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-[#14171c]">Egyedi Formatervezés</h3>
          <p className="text-xs text-[#684d39] leading-relaxed">
            Különleges, ritka dizájn darabok, melyek nem találhatók meg a tömegáruházakban.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#9e7753]">
            <Truck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-[#14171c]">Konténeres Előrendelés</h3>
          <p className="text-xs text-[#684d39] leading-relaxed">
            Úton lévő konténerekből kedvezményes előrendelési áron köthetők le az érkező tételek.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#9e7753]">
            <Receipt className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-[#14171c]">Automatikus E-Számla</h3>
          <p className="text-xs text-[#684d39] leading-relaxed">
            Billingo és Számlázz.hu REST API integráció azonnali NAV-kompatibilis bizonylatkiállítással.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#f4efe8] flex items-center justify-center text-[#9e7753]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-[#14171c]">100% Minőségellenőrzés</h3>
          <p className="text-xs text-[#684d39] leading-relaxed">
            Gyári és raktári beérkezési ellenőrzés minden egyes bútor esetében a kiszállítás előtt.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-[#e8ddcf] bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#805e43]">
          <div className="flex items-center gap-2 font-bold text-[#14171c]">
            <span>BÚTOR Studio</span>
            <span>•</span>
            <span className="font-normal text-[#805e43]">Prémium Kereskedelmi & WMS Rendszer</span>
          </div>
          <p>© {new Date().getFullYear()} Bútor. Minden jog fenntartva.</p>
        </div>
      </footer>
    </main>
  );
}
