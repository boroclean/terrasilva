"use client";

import { useState } from "react";
import { ScrollText, Search, Filter, CheckCircle2, ShieldCheck, AlertCircle, Clock, Receipt, Boxes } from "lucide-react";

interface LogEntry {
  id: string;
  timestamp: string;
  category: "SZÁMLA_NAV" | "KÉSZLET_WMS" | "RENDELÉS" | "RENDSZER";
  action: string;
  details: string;
  user: string;
}

const LOGS: LogEntry[] = [
  {
    id: "log-1",
    timestamp: "2026-09-26 14:21:05",
    category: "SZÁMLA_NAV",
    action: "Előlegszámla Automatikusan Kiállítva (#E-0021)",
    details: "Számlázz.hu / Billingo API válasz: SIKERES (NAV beküldve). Vevő: Kovács Péter (124 500 Ft)",
    user: "Rendszer Motor",
  },
  {
    id: "log-2",
    timestamp: "2026-09-26 14:20:12",
    category: "RENDELÉS",
    action: "Új Rendelés Beérkezett (#BUTOR-2026-0042)",
    details: "Aura Royale Lounge Fotel (Smaragdzöld). Fizetési mód: Bankkártya (SimplePay)",
    user: "Webshop Vásárló",
  },
  {
    id: "log-3",
    timestamp: "2026-09-25 11:30:00",
    category: "KÉSZLET_WMS",
    action: "Konténer Átvétel Frissítve (#MSCU-8923041)",
    details: "Státusz: IN_TRANSIT (Hajón úton) ➔ ETA módosítva: 2026-10-15",
    user: "Boronkay Bence",
  },
  {
    id: "log-4",
    timestamp: "2026-09-24 16:45:22",
    category: "SZÁMLA_NAV",
    action: "Végszámla Kiállítva (#V-0081)",
    details: "Velluto Moduláris Sarokkanapé sikeres kiszállítás után lezárva. Összeg: 890 000 Ft",
    user: "Boronkay Bence",
  },
  {
    id: "log-5",
    timestamp: "2026-09-24 09:12:00",
    category: "RENDSZER",
    action: "Napi Valuta Árfolyam Szinkron (USD/HUF & CNY/HUF)",
    details: "MNB középárfolyam frissítve: 1 USD = 368.50 HUF, 1 CNY = 52.10 HUF",
    user: "Cron Háttérfeladat",
  },
];

export default function SystemLogsPage() {
  const [search, setSearch] = useState("");

  const filtered = LOGS.filter(l =>
    l.action.toLowerCase().includes(search.toLowerCase()) ||
    l.details.toLowerCase().includes(search.toLowerCase()) ||
    l.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#14171c]">Rendszernapló & Audit Trail</h1>
          <p className="text-xs text-[#684d39]">
            Minden számlázási, készletmozgási és rendelés-státusz esemény visszakereshető naplója
          </p>
        </div>
        <span className="text-xs font-semibold bg-white border border-[#e8ddcf] px-3.5 py-2 rounded-xl text-[#14171c] shadow-2xs self-start sm:self-auto">
          {LOGS.length} rögzített esemény
        </span>
      </div>

      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#805e43] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Keresés művelet, kategória vagy részletek alapján..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
          />
        </div>

        <div className="space-y-3">
          {filtered.map((log) => (
            <div
              key={log.id}
              className="p-4 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] hover:bg-white transition space-y-1.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    log.category === "SZÁMLA_NAV"
                      ? "bg-purple-100 text-purple-800"
                      : log.category === "KÉSZLET_WMS"
                      ? "bg-amber-100 text-amber-800"
                      : log.category === "RENDELÉS"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-200 text-gray-800"
                  }`}>
                    {log.category}
                  </span>
                  <span className="font-bold text-xs text-[#14171c]">{log.action}</span>
                </div>
                <div className="text-[11px] text-[#805e43] flex items-center gap-2">
                  <span>{log.user}</span>
                  <span>•</span>
                  <span className="font-mono">{log.timestamp}</span>
                </div>
              </div>

              <p className="text-xs text-[#684d39] font-mono leading-relaxed pl-1">
                {log.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
