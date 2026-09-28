"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  UserPlus, 
  Mail, 
  Lock, 
  Phone, 
  User, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Gem
} from "lucide-react";

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("RAKTAROS_WMS");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#9e7753_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative z-10 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e8ddcf] shadow-xs text-xs font-bold text-[#805e43]">
            <Gem className="w-4 h-4 text-[#9e7753]" />
            <span>TERRASILVA ERP • ÚJ REGISZTRÁCIÓ</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#14171c] tracking-tight">
            Munkatárs Regisztráció
          </h1>
          <p className="text-xs text-[#684d39]">
            A regisztráció után a tulajdonosnak (Boronkay Bence) jóvá kell hagynia a fiókot.
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#e8ddcf] p-8 shadow-xl space-y-6">
          {submitted ? (
            <div className="text-center space-y-4 py-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 mx-auto flex items-center justify-center text-emerald-600 shadow-md animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-[#14171c]">Regisztrációs Kérelem Elküldve!</h3>
                <p className="text-xs text-[#684d39] max-w-xs mx-auto">
                  A fiókod sikeresen rögzítve lett. Amint a tulajdonos jóváhagyja a hozzáférésedet a jogosultságok menüpontban, azonnal beléphetsz.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/admin/login"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#9e7753] transition"
                >
                  <span>Vissza a Belépéshez</span>
                  <ArrowRight className="w-4 h-4 text-[#d7c4ac]" />
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#553f31] block mb-1">Teljes Név</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="pl. Kovács János"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  />
                  <User className="w-4 h-4 text-[#805e43] absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#553f31] block mb-1">Email Cím</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="janos@butor.hu"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  />
                  <Mail className="w-4 h-4 text-[#805e43] absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#553f31] block mb-1">Telefonszám</label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+36 30 123 4567"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                  />
                  <Phone className="w-4 h-4 text-[#805e43] absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#553f31] block mb-1">Kért Szerepkör</label>
                <div className="relative">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium appearance-none"
                  >
                    <option value="RAKTAROS_WMS">Raktáros (WMS Árubeérkezés & Készlet)</option>
                    <option value="SOFOR_LOGISZTIKA">Sofőr (Kiszállítás & e-POD Aláírás)</option>
                    <option value="ERTEKESITO_CRM">Értékesítő & CRM (Vevők, Megrendelések)</option>
                    <option value="PENZUGY_KONYVELO">Pénzügy & Könyvelő (Számlák, Kiadások)</option>
                  </select>
                  <Briefcase className="w-4 h-4 text-[#805e43] absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#553f31] block mb-1">Jelszó</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-mono"
                  />
                  <Lock className="w-4 h-4 text-[#805e43] absolute left-3.5 top-3" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#9e7753] transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
              >
                {isLoading ? (
                  <span>Regisztráció feldolgozása...</span>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4 text-[#d7c4ac]" />
                    <span>Regisztrációs Kérelem Leadása</span>
                  </>
                )}
              </button>

              <div className="pt-3 text-center">
                <Link
                  href="/admin/login"
                  className="text-xs font-semibold text-[#805e43] hover:underline"
                >
                  Már van fiókod? Belépés itt &rarr;
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
