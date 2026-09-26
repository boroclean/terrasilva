"use client";

import { useState } from "react";
import { Users, Search, Phone, Mail, MapPin, Star, ShoppingBag, ShieldCheck } from "lucide-react";

interface CustomerMock {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  type: "LAKOSSÁGI_VIP" | "BELSŐÉPÍTÉSZ" | "LAKOSSÁGI";
  ordersCount: number;
  totalSpentHuf: number;
  lastOrderDate: string;
}

const CUSTOMERS: CustomerMock[] = [
  {
    id: "c1",
    name: "Tóth Balázs",
    email: "balazs.toth@atelierdesign.hu",
    phone: "+36 70 555 1234",
    city: "Debrecen",
    type: "BELSŐÉPÍTÉSZ",
    ordersCount: 4,
    totalSpentHuf: 3450000,
    lastOrderDate: "2026-09-24",
  },
  {
    id: "c2",
    name: "Dr. Szabó Zsófia",
    email: "zsofia.szabo@klinika.hu",
    phone: "+36 20 987 6543",
    city: "Győr",
    type: "LAKOSSÁGI_VIP",
    ordersCount: 2,
    totalSpentHuf: 1458000,
    lastOrderDate: "2026-09-25",
  },
  {
    id: "c3",
    name: "Kovács Péter",
    email: "peter.kovacs@gmail.com",
    phone: "+36 30 123 4567",
    city: "Budapest, II. kerület",
    type: "LAKOSSÁGI",
    ordersCount: 1,
    totalSpentHuf: 249000,
    lastOrderDate: "2026-09-26",
  },
  {
    id: "c4",
    name: "Horváth Ágnes",
    email: "agnes.horvath@freemail.hu",
    phone: "+36 30 888 9911",
    city: "Budaörs",
    type: "LAKOSSÁGI",
    ordersCount: 1,
    totalSpentHuf: 189000,
    lastOrderDate: "2026-09-26",
  },
];

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const filtered = CUSTOMERS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#14171c]">Regisztrált Vevők & CRM</h1>
          <p className="text-xs text-[#684d39]">
            Vásárlói előzmények, költési statisztikák és belsőépítész partner kapcsolatok
          </p>
        </div>
        <span className="text-xs font-semibold bg-white border border-[#e8ddcf] px-3.5 py-2 rounded-xl text-[#14171c] shadow-2xs self-start sm:self-auto">
          {CUSTOMERS.length} regisztrált ügyfél
        </span>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#805e43] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Keresés vevő neve, email címe vagy városa alapján..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Vevő Neve & Típus</th>
                <th className="p-3 font-semibold">Elérhetőség</th>
                <th className="p-3 font-semibold">Település</th>
                <th className="p-3 font-semibold text-center">Rendelések</th>
                <th className="p-3 font-semibold text-right">Összes Költés</th>
                <th className="p-3 font-semibold text-right rounded-r-lg">Utolsó Vásárlás</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-[#faf8f5] transition">
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block">{c.name}</span>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded mt-0.5 ${
                      c.type === "BELSŐÉPÍTÉSZ"
                        ? "bg-purple-100 text-purple-800"
                        : c.type === "LAKOSSÁGI_VIP"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {c.type.replace(/_/g, " ")}
                    </span>
                  </td>
                  <td className="p-3 text-[#553f31]">
                    <span className="block flex items-center gap-1"><Mail className="w-3 h-3 text-[#805e43]" /> {c.email}</span>
                    <span className="block flex items-center gap-1 mt-0.5"><Phone className="w-3 h-3 text-[#805e43]" /> {c.phone}</span>
                  </td>
                  <td className="p-3 text-[#553f31] font-medium">{c.city}</td>
                  <td className="p-3 text-center font-bold text-[#14171c]">{c.ordersCount} db</td>
                  <td className="p-3 text-right font-bold text-[#14171c]">
                    {new Intl.NumberFormat("hu-HU").format(c.totalSpentHuf)} Ft
                  </td>
                  <td className="p-3 text-right text-[#805e43] font-medium">{c.lastOrderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
