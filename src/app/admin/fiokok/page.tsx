"use client";

import { useState } from "react";
import { 
  UserCog, 
  Plus, 
  ShieldCheck, 
  Mail, 
  Key, 
  CheckCircle2, 
  UserCheck, 
  UserX, 
  Lock, 
  Copy, 
  Check, 
  Eye, 
  EyeOff, 
  AlertCircle,
  Clock,
  Sparkles
} from "lucide-react";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "TULAJDONOS_ADMIN" | "RAKTÁROS" | "PÉNZÜGY_KÖNYVELŐ" | "ÉRTÉKESÍTŐ" | "SOFŐR";
  status: "AKTÍV" | "FÜGGŐBEN" | "INAKTÍV";
  lastLogin: string;
  createdAt: string;
  phone?: string;
}

const INITIAL_USERS: AdminUser[] = [
  {
    id: "u1",
    name: "Boronkay Bence",
    email: "bence@terrasilva.hu",
    role: "TULAJDONOS_ADMIN",
    status: "AKTÍV",
    lastLogin: "Most aktív",
    createdAt: "2026-09-01",
    phone: "+36 20 407 6858",
  },
  {
    id: "u2",
    name: "Kovács Péter (Raktárvezető)",
    email: "raktar@terrasilva.hu",
    role: "RAKTÁROS",
    status: "AKTÍV",
    lastLogin: "Tegnap 16:45",
    createdAt: "2026-09-15",
    phone: "+36 30 123 4567",
  },
];

const PENDING_REGISTRATIONS: AdminUser[] = [
  {
    id: "p1",
    name: "Nagy Ádám",
    email: "adam.nagy@butorpartner.hu",
    role: "SOFŐR",
    status: "FÜGGŐBEN",
    lastLogin: "-",
    createdAt: "2026-09-28 08:30",
    phone: "+36 70 987 6543",
  },
  {
    id: "p2",
    name: "Tóth Eszter",
    email: "eszter.konyveles@audit.hu",
    role: "PÉNZÜGY_KÖNYVELŐ",
    status: "FÜGGŐBEN",
    lastLogin: "-",
    createdAt: "2026-09-27 19:10",
    phone: "+36 20 555 1234",
  },
];

export default function AccountsPage() {
  const [users, setUsers] = useState<AdminUser[]>(INITIAL_USERS);
  const [pendingUsers, setPendingUsers] = useState<AdminUser[]>(PENDING_REGISTRATIONS);
  const [copiedPassword, setCopiedPassword] = useState(false);
  const [showOwnerPassword, setShowOwnerPassword] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const ownerPassword = "bence2026";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPassword(true);
    setTimeout(() => setCopiedPassword(false), 2000);
  };

  const handleApprove = (user: AdminUser) => {
    setPendingUsers(pendingUsers.filter((p) => p.id !== user.id));
    setUsers([...users, { ...user, status: "AKTÍV", lastLogin: "Frissen jóváhagyva" }]);
    setFeedback(`"${user.name}" sikeresen jóváhagyva és aktiválva! Belépési értesítő elküldve.`);
    setTimeout(() => setFeedback(null), 4000);
  };

  const handleReject = (id: string, name: string) => {
    setPendingUsers(pendingUsers.filter((p) => p.id !== id));
    setFeedback(`"${name}" regisztrációs kérelme elutasítva.`);
    setTimeout(() => setFeedback(null), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-[#14171c]">
            Admin Fiókok, Belépés & Jogosultságok
          </h1>
          <p className="text-xs text-[#684d39] mt-0.5">
            Ahkem-típusú kötelező regisztráció-jóváhagyás, szerepkörök és jelszókezelés
          </p>
        </div>
      </div>

      {/* Feedback Alert */}
      {feedback && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-center gap-3 text-xs text-emerald-900 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold">{feedback}</span>
        </div>
      )}

      {/* OWNER MASTER CARD */}
      <div className="bg-gradient-to-br from-[#14171c] to-[#262c36] rounded-3xl p-6 text-white border border-[#3e4756] shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#9e7753] text-white flex items-center justify-center font-black text-base shadow-sm">
              BB
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white">Boronkay Bence</h2>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#9e7753] text-white uppercase tracking-wider">
                  Fő Tulajdonos & Rendszergazda
                </span>
              </div>
              <p className="text-xs text-[#d7c4ac] font-mono mt-0.5">
                bence@terrasilva.hu • +36 20 407 6858
              </p>
            </div>
          </div>

          {/* Password box */}
          <div className="bg-black/40 border border-[#9e7753]/30 rounded-2xl p-3.5 flex items-center justify-between sm:justify-end gap-3">
            <div>
              <span className="text-[10px] text-[#d7c4ac] block uppercase tracking-wider font-semibold">
                Aktív Tulajdonosi Jelszó:
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono text-sm font-bold text-amber-300">
                  {showOwnerPassword ? ownerPassword : "•••••••••"}
                </span>
                <button
                  onClick={() => setShowOwnerPassword(!showOwnerPassword)}
                  className="text-gray-400 hover:text-white transition p-1"
                  title="Jelszó felfedése"
                >
                  {showOwnerPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <button
              onClick={() => copyToClipboard(ownerPassword)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#9e7753] hover:bg-[#866343] text-white text-xs font-bold transition shadow-xs"
            >
              {copiedPassword ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPassword ? "Másolva!" : "Másolás"}</span>
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#d7c4ac] gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Teljeskörű hozzáférés: ERP, AI Fotóstúdió, Pénzügy, Számlázás, Vám & Konténer modulok</span>
          </div>
          <span className="text-[11px] text-gray-400">Biztonsági státusz: 256-bit AES Titkosított</span>
        </div>
      </div>

      {/* PENDING APPROVALS QUEUE (Ahkem Style) */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#14171c]">
                Jóváhagyásra Váró Regisztrációs Kérelmek ({pendingUsers.length})
              </h2>
              <p className="text-[11px] text-[#805e43]">
                Csak a tulajdonos jóváhagyása után léphetnek be a munkatársak a rendszerbe
              </p>
            </div>
          </div>
        </div>

        {pendingUsers.length === 0 ? (
          <div className="p-8 text-center bg-[#faf8f5] rounded-xl border border-dashed border-[#e8ddcf]">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2 opacity-60" />
            <p className="text-xs font-semibold text-[#553f31]">Nincs függőben lévő regisztrációs kérelem.</p>
            <p className="text-[11px] text-[#805e43] mt-0.5">Minden beküldött kérés elbírálva.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f4efe8] text-[#553f31]">
                <tr>
                  <th className="p-3 font-semibold rounded-l-lg">Jelentkező Neve</th>
                  <th className="p-3 font-semibold">Email & Telefon</th>
                  <th className="p-3 font-semibold">Igényelt Szerepkör</th>
                  <th className="p-3 font-semibold">Kérelem Ideje</th>
                  <th className="p-3 font-semibold text-right rounded-r-lg">Művelet (Jóváhagyás)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f4efe8]">
                {pendingUsers.map((p) => (
                  <tr key={p.id} className="hover:bg-[#faf8f5] transition">
                    <td className="p-3 font-bold text-[#14171c]">{p.name}</td>
                    <td className="p-3 text-[#553f31]">
                      <span className="block font-mono text-[11px]">{p.email}</span>
                      <span className="text-[10px] text-[#805e43]">{p.phone}</span>
                    </td>
                    <td className="p-3">
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                        {p.role}
                      </span>
                    </td>
                    <td className="p-3 text-[#805e43] text-[11px]">{p.createdAt}</td>
                    <td className="p-3 text-right">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => handleReject(p.id, p.name)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold transition text-[11px]"
                        >
                          <UserX className="w-3.5 h-3.5" />
                          <span>Elutasítás</span>
                        </button>
                        <button
                          onClick={() => handleApprove(p)}
                          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 font-bold transition text-[11px] shadow-xs"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Jóváhagyás</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ACTIVE USERS LIST */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-[#14171c]">Aktív Munkatársak & Hozzáférések ({users.length})</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Felhasználó</th>
                <th className="p-3 font-semibold">Elérhetőség</th>
                <th className="p-3 font-semibold">Szerepkör</th>
                <th className="p-3 font-semibold text-center">Állapot</th>
                <th className="p-3 font-semibold text-right rounded-r-lg">Utolsó Belépés</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-[#faf8f5] transition">
                  <td className="p-3 font-bold text-[#14171c]">{user.name}</td>
                  <td className="p-3 text-[#553f31]">
                    <span className="font-mono text-[11px] block">{user.email}</span>
                    <span className="text-[10px] text-[#805e43]">{user.phone}</span>
                  </td>
                  <td className="p-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold ${
                      user.role === "TULAJDONOS_ADMIN"
                        ? "bg-purple-100 text-purple-900 border border-purple-200"
                        : "bg-blue-50 text-blue-800 border border-blue-200"
                    }`}>
                      {user.role.replace(/_/g, " ")}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3 h-3" />
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 text-right text-[#805e43] font-medium">{user.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
