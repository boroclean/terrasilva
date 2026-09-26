"use client";

import { useState } from "react";
import { UserCog, Plus, ShieldCheck, Mail, Key, CheckCircle2 } from "lucide-react";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "TULAJDONOS_ADMIN" | "RAKTÁROS" | "PÉNZÜGY_KÖNYVELŐ";
  status: "AKTÍV" | "INAKTÍV";
  lastLogin: string;
}

const ADMIN_USERS: AdminUser[] = [
  {
    id: "u1",
    name: "Boronkay Bence",
    email: "bence@butor.hu",
    role: "TULAJDONOS_ADMIN",
    status: "AKTÍV",
    lastLogin: "Most aktív",
  },
  {
    id: "u2",
    name: "Raktári Munkatárs (Opcionális)",
    email: "raktar@butor.hu",
    role: "RAKTÁROS",
    status: "INAKTÍV",
    lastLogin: "-",
  },
];

export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#14171c]">Admin Fiókok & Jogosultságok</h1>
          <p className="text-xs text-[#684d39]">
            Hozzáférések kezelése, szerepkörök és biztonsági beállítások
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-semibold hover:bg-[#2e2118] transition shadow-xs self-start sm:self-auto">
          <Plus className="w-4 h-4 text-[#9e7753]" />
          <span>Új Munkatárs Meghívása</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <h2 className="text-sm font-bold text-[#14171c]">Rendszer Adminisztrátorok</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Felhasználó Neve</th>
                <th className="p-3 font-semibold">Email Cím</th>
                <th className="p-3 font-semibold">Szerepkör</th>
                <th className="p-3 font-semibold text-center">Állapot</th>
                <th className="p-3 font-semibold text-right rounded-r-lg">Utolsó Belépés</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {ADMIN_USERS.map((user) => (
                <tr key={user.id} className="hover:bg-[#faf8f5] transition">
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block">{user.name}</span>
                  </td>
                  <td className="p-3 text-[#553f31] font-mono">{user.email}</td>
                  <td className="p-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold ${
                      user.role === "TULAJDONOS_ADMIN"
                        ? "bg-purple-100 text-purple-800 border border-purple-200"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {user.role.replace(/_/g, " ")}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                      user.status === "AKTÍV" ? "bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-600"
                    }`}>
                      {user.status === "AKTÍV" && <CheckCircle2 className="w-3 h-3" />}
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
