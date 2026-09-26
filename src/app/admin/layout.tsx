"use client";

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
  Receipt
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Áttekintés", icon: LayoutDashboard },
    { href: "/admin/rendelesek", label: "Rendelések", icon: ShoppingBag, badge: "3 új" },
    { href: "/admin/termekek", label: "Termékek & Készlet", icon: Armchair },
    { href: "/admin/beszallito", label: "Konténer Beérkezés", icon: Boxes, badge: "2 úton" },
    { href: "/admin/vevok", label: "Regisztrált Vevők & CRM", icon: Users },
    { href: "/admin/teljesitmeny", label: "Pénzügy & Statisztika", icon: TrendingUp },
    { href: "/admin/naplo", label: "Rendszernapló", icon: ScrollText },
    { href: "/admin/fiokok", label: "Fiókok & Jogok", icon: UserCog },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f2] flex flex-col md:flex-row text-[#14171c]">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-[#14171c] text-white flex flex-col shrink-0 border-r border-[#262c36]">
        {/* Brand Header */}
        <div className="p-6 border-b border-[#262c36] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#9e7753] text-white flex items-center justify-center font-bold text-base shadow-sm">
              B
            </div>
            <div>
              <span className="font-bold tracking-tight text-white text-base block">BÚTOR ERP</span>
              <span className="text-[10px] uppercase tracking-widest text-[#d7c4ac] block">Admin & WMS</span>
            </div>
          </div>
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

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-semibold text-[#14171c] block">Központi Bútor ERP</span>
              <span className="text-[10px] text-[#805e43] block">+36 20 407 6858</span>
            </div>
            <button className="p-2 rounded-lg bg-[#faf8f5] border border-[#e8ddcf] text-[#553f31] hover:text-[#14171c] transition">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Admin Content Area */}
        <main className="flex-1 p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
