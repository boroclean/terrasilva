"use client";

import Link from "next/link";
import { 
  TrendingUp, 
  ShoppingBag, 
  Boxes, 
  Users, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Truck, 
  AlertCircle,
  Receipt,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function AdminDashboardPage() {
  const recentOrders = [
    {
      id: "BUTOR-2026-0042",
      customer: "Kovács Péter",
      city: "Budapest, II. kerület",
      item: "Aura Royale Lounge Fotel (Smaragdzöld)",
      amount: 249000,
      status: "ELŐLEG FIZETVE (50%)",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      invoice: "Díjbekérő #D-0042",
      date: "Ma, 14:20",
    },
    {
      id: "BUTOR-2026-0041",
      customer: "Dr. Szabó Zsófia",
      city: "Győr",
      item: "Novara Carrara Étkezőasztal + 6 Szék",
      amount: 869000,
      status: "KONTÉNERBEN ÚTON",
      statusColor: "bg-amber-50 text-amber-700 border-amber-200",
      invoice: "Előlegszámla #E-0019",
      date: "Tegnap, 18:45",
    },
    {
      id: "BUTOR-2026-0040",
      customer: "Tóth Balázs (Belsőépítész)",
      city: "Debrecen",
      item: "Velluto Moduláris Sarokkanapé",
      amount: 890000,
      status: "KISZÁLLÍTVA (Lezárva)",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      invoice: "Végszámla #V-0081",
      date: "2026-09-24",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e8ddcf] shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-[#14171c]">Üdvözöllek, Bence! 👋</h1>
          <p className="text-xs text-[#684d39] mt-1">
            Itt láthatod a Bútor Kereskedelmi ERP legfrissebb pénzügyi és raktárkészlet adatait.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/rendelesek"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-semibold hover:bg-[#2e2118] transition shadow-xs"
          >
            <ShoppingBag className="w-4 h-4 text-[#9e7753]" />
            <span>Új Rendelések Kezelése</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-[#805e43]">
            <span>Havi Bruttó Forgalom</span>
            <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold flex items-center gap-0.5 text-[11px]">
              <TrendingUp className="w-3.5 h-3.5" /> +24%
            </span>
          </div>
          <div className="text-2xl font-bold text-[#14171c]">7 480 000 Ft</div>
          <span className="text-[11px] text-[#805e43] block">Átlagos haszonkulcs: <strong className="text-emerald-700 font-bold">58.4%</strong></span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-[#805e43]">
            <span>Függőben lévő Rendelések</span>
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-700 font-bold text-[11px]">
              3 aktív
            </span>
          </div>
          <div className="text-2xl font-bold text-[#14171c]">2 008 000 Ft</div>
          <span className="text-[11px] text-[#805e43] block">1 előrendelés + 2 raktári szállítás</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-[#805e43]">
            <span>Úton Lévő Konténerek</span>
            <span className="p-1.5 rounded-lg bg-amber-50 text-amber-700 font-bold text-[11px]">
              95.7 CBM
            </span>
          </div>
          <div className="text-2xl font-bold text-[#14171c]">2 Konténer</div>
          <span className="text-[11px] text-[#805e43] block">Várható érkezés: <strong>Okt. 15 (Nansha)</strong></span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <div className="flex items-center justify-between text-xs text-[#805e43]">
            <span>Számlázási Integráció</span>
            <span className="p-1.5 rounded-lg bg-purple-50 text-purple-700 font-bold text-[11px]">
              Billingo REST API
            </span>
          </div>
          <div className="text-2xl font-bold text-emerald-700">100% Automata</div>
          <span className="text-[11px] text-[#805e43] block">NAV Online Számla bekötve</span>
        </div>
      </div>

      {/* Quick Action Banner for Solo Founder */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#14171c] to-[#262c36] text-white flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#9e7753] flex items-center justify-center text-white shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">1-Kattintásos Működési Mód Aktív</h3>
            <p className="text-xs text-[#d7c4ac] mt-0.5">
              Egyedül viszed a boltot? Nem szükséges sofőröket vagy bonyolult protokollokat adminisztrálnod – a rendelések 1 kattintással státuszolhatók.
            </p>
          </div>
        </div>
        <Link
          href="/admin/rendelesek"
          className="px-4 py-2.5 rounded-xl bg-white text-[#14171c] text-xs font-bold hover:bg-[#f4efe8] transition shrink-0"
        >
          Rendelések Áttekintése
        </Link>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[#e8ddcf]">
          <div>
            <h2 className="text-sm font-bold text-[#14171c]">Legfrissebb Bútormegrendelések</h2>
            <p className="text-xs text-[#805e43]">Valós idejű rendelés- és számlastátusz</p>
          </div>
          <Link
            href="/admin/rendelesek"
            className="text-xs font-semibold text-[#9e7753] hover:text-[#553f31] flex items-center gap-1"
          >
            <span>Összes Rendelés</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Azonosító</th>
                <th className="p-3 font-semibold">Vásárló & Cím</th>
                <th className="p-3 font-semibold">Rendelt Tétel</th>
                <th className="p-3 font-semibold text-right">Összeg</th>
                <th className="p-3 font-semibold text-center">Státusz</th>
                <th className="p-3 font-semibold text-right rounded-r-lg">Számla</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-[#faf8f5] transition">
                  <td className="p-3 font-mono font-bold text-[#14171c]">{order.id}</td>
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block">{order.customer}</span>
                    <span className="text-[11px] text-[#805e43]">{order.city}</span>
                  </td>
                  <td className="p-3 text-[#553f31] font-medium">{order.item}</td>
                  <td className="p-3 text-right font-bold text-[#14171c]">
                    {new Intl.NumberFormat("hu-HU").format(order.amount)} Ft
                  </td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 text-right font-medium text-emerald-800">
                    <span className="bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-semibold border border-emerald-200">
                      {order.invoice}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
