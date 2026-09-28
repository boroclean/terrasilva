"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Armchair, 
  Boxes, 
  Users, 
  TrendingUp, 
  ScrollText, 
  UserCog, 
  LogOut, 
  Sparkles,
  ShieldCheck,
  Bell,
  Search,
  Receipt,
  Download,
  Smartphone,
  CheckCircle2,
  X,
  Plus
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPwaModal, setShowPwaModal] = useState(false);
  const [isPwaInstalled, setIsPwaInstalled] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode (already installed PWA)
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsPwaInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setIsPwaInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      setShowPwaModal(true);
    }
  };

  const navItems = [
    { href: "/admin", label: "Áttekintés", icon: LayoutDashboard },
    { href: "/admin/penzugy", label: "Pénzügy & Kiadások", icon: Receipt, badge: "Élő" },
    { href: "/admin/katalogus", label: "Termékkatalógus", icon: Armchair, badge: "Új" },
    { href: "/admin/studio", label: "AI Fotóstúdió", icon: Sparkles, badge: "AI" },
    { href: "/admin/rendelesek", label: "Rendelések", icon: ShoppingBag, badge: "3 új" },
    { href: "/admin/beszallito", label: "Konténer Beérkezés", icon: Boxes, badge: "2 úton" },
    { href: "/admin/vevok", label: "Regisztrált Vevők & CRM", icon: Users },
    { href: "/admin/teljesitmeny", label: "Üzleti Statisztikák", icon: TrendingUp },
    { href: "/admin/biztonsag", label: "Kiberbiztonság & Védelem", icon: ShieldCheck, badge: "A+" },
    { href: "/admin/naplo", label: "Rendszernapló", icon: ScrollText },
    { href: "/admin/fiokok", label: "Fiókok & Jogok", icon: UserCog, badge: "2 kérelem" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f2] flex flex-col md:flex-row text-[#14171c] pb-16 md:pb-0">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-[#14171c] text-white flex flex-col shrink-0 border-r border-[#262c36]">
        {/* Brand Header */}
        <div className="p-6 border-b border-[#262c36] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#9e7753] text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-sm">
              TS
            </div>
            <div>
              <span className="font-bold tracking-tight text-white text-base block">TERRASILVA</span>
              <span className="text-[10px] uppercase tracking-widest text-[#d7c4ac] block">ERP & AI Platform</span>
            </div>
          </div>
        </div>

        {/* PWA Download Banner inside Sidebar */}
        <div className="px-4 pt-3">
          <button
            onClick={handleInstallClick}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#262c36] to-[#1c222c] border border-[#9e7753]/40 text-white text-xs hover:border-[#9e7753] transition group shadow-xs"
          >
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span className="font-bold block text-[11px]">Mobil App Letöltése</span>
                <span className="text-[9px] text-[#d7c4ac] block">PWA 1-kattintásos indítás</span>
              </div>
            </div>
            <Download className="w-3.5 h-3.5 text-[#9e7753]" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#9e7753] text-white shadow-xs"
                    : "text-[#d7c4ac] hover:bg-[#262c36] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#9e7753]"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-[#262c36] text-[#d7c4ac]"
                  }`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom User Box */}
        <div className="p-4 border-t border-[#262c36] bg-[#0e1014]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#262c36] border border-[#9e7753]/40 flex items-center justify-center font-bold text-xs text-[#d7c4ac]">
                BB
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Boronkay Bence</span>
                <span className="text-[10px] text-emerald-400 block font-medium">Tulajdonos (Admin)</span>
              </div>
            </div>

            <Link
              href="/admin/login"
              title="Kijelentkezés"
              className="p-1.5 rounded-lg text-[#805e43] hover:text-rose-400 hover:bg-[#262c36] transition"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Admin Viewport */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-[#e8ddcf] px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              NAV & Billingo API Kapcsolat Aktív
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Install App Quick Button */}
            <button
              onClick={handleInstallClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] text-xs font-bold text-[#553f31] hover:bg-[#f4efe8] transition"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#9e7753]" />
              <span>App Telepítése</span>
            </button>

            <div className="text-right hidden md:block">
              <span className="text-xs font-semibold text-[#14171c] block">Központi Bútor ERP</span>
              <span className="text-[10px] text-[#805e43] block">+36 20 407 6858</span>
            </div>
            <button className="p-2 rounded-lg bg-[#faf8f5] border border-[#e8ddcf] text-[#553f31] hover:text-[#14171c] transition">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Admin Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar (Fixed for phone ergonomics) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#14171c] border-t border-[#262c36] flex items-center justify-around px-2 z-40">
        <Link 
          href="/admin" 
          className={`flex flex-col items-center gap-1 text-[10px] ${
            pathname === "/admin" ? "text-amber-400 font-bold" : "text-[#d7c4ac]"
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Főoldal</span>
        </Link>
        <Link 
          href="/admin/penzugy" 
          className={`flex flex-col items-center gap-1 text-[10px] ${
            pathname === "/admin/penzugy" ? "text-amber-400 font-bold" : "text-[#d7c4ac]"
          }`}
        >
          <Receipt className="w-5 h-5" />
          <span>Pénzügy</span>
        </Link>
        <Link 
          href="/admin/studio" 
          className={`flex flex-col items-center gap-1 text-[10px] ${
            pathname === "/admin/studio" ? "text-amber-400 font-bold" : "text-[#d7c4ac]"
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span>AI Stúdió</span>
        </Link>
        <Link 
          href="/admin/rendelesek" 
          className={`flex flex-col items-center gap-1 text-[10px] ${
            pathname === "/admin/rendelesek" ? "text-amber-400 font-bold" : "text-[#d7c4ac]"
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Rendelések</span>
        </Link>
        <Link 
          href="/admin/fiokok" 
          className={`flex flex-col items-center gap-1 text-[10px] ${
            pathname === "/admin/fiokok" ? "text-amber-400 font-bold" : "text-[#d7c4ac]"
          }`}
        >
          <UserCog className="w-5 h-5" />
          <span>Fiókok</span>
        </Link>
      </div>

      {/* PWA INSTALL INSTRUCTIONS MODAL */}
      {showPwaModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-[#e8ddcf] shadow-2xl max-w-md w-full p-6 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#f4efe8] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#9e7753] text-white flex items-center justify-center font-bold">
                  TS
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#14171c]">TerraSilva Admin App</h3>
                  <p className="text-[11px] text-[#805e43]">Telepítés a kezdőképernyőre</p>
                </div>
              </div>
              <button
                onClick={() => setShowPwaModal(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#553f31]">
              <div className="p-3 bg-[#faf8f5] rounded-xl border border-[#e8ddcf] space-y-1.5">
                <p className="font-bold text-[#14171c] flex items-center gap-1.5">
                  <span>📱 iPhone / iPad (Safari):</span>
                </p>
                <ol className="list-decimal list-inside space-y-1 text-[11px] text-[#684d39]">
                  <li>Kattints a Safari alsó menüjében a <strong>Megosztás</strong> (Share) ikonra.</li>
                  <li>Görgess le és válaszd a <strong>"Főképernyőhöz adás"</strong> (Add to Home Screen) opciót.</li>
                  <li>Koppints a <strong>Hozzáadás</strong> gombra a jobb felső sarokban.</li>
                </ol>
              </div>

              <div className="p-3 bg-[#faf8f5] rounded-xl border border-[#e8ddcf] space-y-1.5">
                <p className="font-bold text-[#14171c] flex items-center gap-1.5">
                  <span>🤖 Android / Google Chrome:</span>
                </p>
                <ol className="list-decimal list-inside space-y-1 text-[11px] text-[#684d39]">
                  <li>Nyisd meg a jobb felső <strong>három pontot (⋮)</strong> a Chrome-ban.</li>
                  <li>Válaszd az <strong>"Alkalmazás telepítése"</strong> vagy <strong>"Kezdőképernyőre"</strong> menüpontot.</li>
                </ol>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowPwaModal(false)}
                className="w-full py-2.5 rounded-xl bg-[#14171c] text-white font-bold text-xs hover:bg-[#2e2118] transition"
              >
                Rendben, értem!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
