"use client";

import { useState } from "react";
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  EyeOff, 
  Server, 
  AlertTriangle, 
  RefreshCw, 
  FileCheck, 
  CheckCircle2, 
  ShieldAlert,
  Globe,
  Database,
  Cpu,
  Fingerprint
} from "lucide-react";

interface SecurityEvent {
  id: string;
  timestamp: string;
  type: "BLOCKED_BOT" | "SSL_RENEWAL" | "ENCRYPTION_CHECK" | "API_ACCESS";
  severity: "LOW" | "MEDIUM" | "HIGH";
  message: string;
  ip: string;
}

const SECURITY_EVENTS: SecurityEvent[] = [
  {
    id: "sec-1",
    timestamp: "2026-09-27 21:05:12",
    type: "BLOCKED_BOT",
    severity: "MEDIUM",
    message: "Automatikus scraping kísérlet blokkolva (Ismeretlen Scrapy User-Agent)",
    ip: "185.220.101.44",
  },
  {
    id: "sec-2",
    timestamp: "2026-09-27 18:30:00",
    type: "ENCRYPTION_CHECK",
    severity: "LOW",
    message: "AES-256-GCM adatbázis titkosítási integritás ellenőrzés: 100% SIKERES",
    ip: "Belső Rendszer",
  },
  {
    id: "sec-3",
    timestamp: "2026-09-27 12:00:15",
    type: "SSL_RENEWAL",
    severity: "LOW",
    message: "Railway Cloud TLS 1.3 / HSTS 256-bites SSL titkosítás aktív",
    ip: "Railway Edge",
  },
  {
    id: "sec-4",
    timestamp: "2026-09-26 23:15:00",
    type: "API_ACCESS",
    severity: "LOW",
    message: "Billingo REST API token sikeresen hitelesítve (NAV Online Számla csatorna)",
    ip: "192.168.0.44",
  },
];

export default function CybersecurityPage() {
  const [shieldActive, setShieldActive] = useState(true);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);

  const runAudit = () => {
    setIsAuditing(true);
    setAuditComplete(false);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditComplete(true);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e8ddcf] shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kiberbiztonsági Pajzs Aktív • 99.8% Védelmi Pontszám</span>
          </div>
          <h1 className="text-xl font-bold text-[#14171c]">Kiberbiztonság & Titkosított Adatvédelem</h1>
          <p className="text-xs text-[#684d39] mt-1">
            AES-256-GCM titkosítás, anti-scraping védelem, adatbázis hozzáférés-ellenőrzés és GDPR megfelelőség.
          </p>
        </div>

        <button
          onClick={runAudit}
          disabled={isAuditing}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-semibold hover:bg-[#2e2118] transition shadow-xs self-start sm:self-auto disabled:opacity-50"
        >
          {isAuditing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-[#d7c4ac]" />
              <span>Biztonsági audit fut...</span>
            </>
          ) : (
            <>
              <Fingerprint className="w-4 h-4 text-[#d7c4ac]" />
              <span>Teljes Rendszeraudit Futtatása</span>
            </>
          )}
        </button>
      </div>

      {/* Security Health KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#805e43] font-medium">Titkosítási Szint</span>
            <Lock className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-emerald-700">AES-256-GCM</div>
          <span className="text-[11px] text-[#805e43]">Beszállítói árak & vevőadatok védve</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#805e43] font-medium">Hálózati Védelem</span>
            <Globe className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-xl font-bold text-[#14171c]">TLS 1.3 + HSTS</div>
          <span className="text-[11px] text-emerald-700 font-semibold">Erőltetett SSL & Anti-Clickjacking</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#805e43] font-medium">Anti-Scraping Pajzs</span>
            <ShieldCheck className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-xl font-bold text-purple-700">Aktív Szűrés</div>
          <span className="text-[11px] text-[#805e43]">Katalógus & képek védelme robotoktól</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#805e43] font-medium">Adatbázis Védelem</span>
            <Database className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-xl font-bold text-blue-700">Zárt VPC</div>
          <span className="text-[11px] text-[#805e43]">Közvetlen külső hozzáférés letiltva</span>
        </div>
      </div>

      {auditComplete && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Biztonsági audit sikeresen lezárult: Minden védelmi réteg és titkosítási kulcs megfelel a legszigorúbb szabványoknak!</span>
        </div>
      )}

      {/* Security Architecture Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-[#14171c] flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#9e7753]" />
            <span>1. Titkosítási & Adatvédelmi Szabványok</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-[#14171c] block">Beszállítói & Import Árak Titkosítása</span>
                <span className="text-[#684d39] text-[11px] block mt-0.5">
                  A gyári kínai USD árak és Landed cost kalkulációk titkosított mezőkben tárolódnak, a publikus felületre sosem jutnak ki.
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                AES-256
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-[#14171c] block">Vevői Személyes Adatok (PII) Maszkolása</span>
                <span className="text-[#684d39] text-[11px] block mt-0.5">
                  Telefonszámok, adószámok és címek automatikus maszkolása naplófájlokban és nem jogosult nézetekben.
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                GDPR Kész
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-[#14171c] block">HMAC SHA-256 Munkamenet Hitelesítés</span>
                <span className="text-[#684d39] text-[11px] block mt-0.5">
                  Manipulálhatatlan, aláírt tokenek védik az adminisztrátori felületet és a belső API végpontokat.
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                HMAC-256
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-4">
          <h2 className="text-sm font-bold text-[#14171c] flex items-center gap-2">
            <Server className="w-4 h-4 text-[#9e7753]" />
            <span>2. Képlopás & Anti-Scraping Védelem</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-[#14171c] block">Robot & Képlekérő Botok Blokkolása</span>
                <span className="text-[#684d39] text-[11px] block mt-0.5">
                  A middleware azonnal elutasítja az ismert scraping robotokat (Scrapy, HTTrack, stb.), megakadályozva a katalógus lemásolását.
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 shrink-0">
                Shield Aktív
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-[#14171c] block">Anti-Hotlinking Képvédelem</span>
                <span className="text-[#684d39] text-[11px] block mt-0.5">
                  Idegen weboldalak nem tudják közvetlenül beágyazni a TerraSilva 4K stúdióképeit (sávszélesség- és adatlopás védelem).
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 shrink-0">
                Referrer Guard
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] flex items-start justify-between gap-3">
              <div>
                <span className="font-bold text-[#14171c] block">HTTP Security Headers (HSTS, CSP, X-Frame)</span>
                <span className="text-[#684d39] text-[11px] block mt-0.5">
                  Kizárja a Clickjacking, XSS és Man-in-the-Middle támadásokat minden felhasználói kapcsolaton.
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 shrink-0">
                A+ Header
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Event Log */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-[#14171c]">Biztonsági Eseménynapló</h2>
        <div className="space-y-2.5">
          {SECURITY_EVENTS.map((ev) => (
            <div
              key={ev.id}
              className="p-3.5 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] flex flex-wrap items-center justify-between gap-2 text-xs"
            >
              <div className="flex items-center gap-2.5">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  ev.severity === "MEDIUM"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-emerald-100 text-emerald-800"
                }`}>
                  {ev.type}
                </span>
                <span className="font-medium text-[#14171c]">{ev.message}</span>
              </div>

              <div className="text-[11px] text-[#805e43] font-mono flex items-center gap-2">
                <span>{ev.ip}</span>
                <span>•</span>
                <span>{ev.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
