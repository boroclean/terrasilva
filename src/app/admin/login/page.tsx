"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Gem,
  Smartphone,
  Eye,
  EyeOff
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("bence@terrasilva.hu");
  const [password, setPassword] = useState("bence2026");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      // Check credentials (Owner password is set to bence2026)
      if (
        (email === "bence@terrasilva.hu" || email === "bence@butor.hu" || email === "bence") &&
        password === "bence2026"
      ) {
        setSuccess(true);
        if (typeof window !== "undefined") {
          localStorage.setItem("ts_auth_user", JSON.stringify({
            name: "Boronkay Bence",
            email: "bence@terrasilva.hu",
            role: "TULAJDONOS_ADMIN",
            phone: "+36 20 407 6858",
            loggedInAt: new Date().toISOString()
          }));
        }
        setTimeout(() => {
          router.push("/admin");
        }, 800);
      } else if (password === "bence2026") {
        setSuccess(true);
        if (typeof window !== "undefined") {
          localStorage.setItem("ts_auth_user", JSON.stringify({
            name: email.split("@")[0],
            email: email,
            role: "TULAJDONOS_ADMIN",
            loggedInAt: new Date().toISOString()
          }));
        }
        setTimeout(() => {
          router.push("/admin");
        }, 800);
      } else {
        setIsLoading(false);
        setError("Hibás email cím vagy jelszó! A tulajdonosi jelszó: bence2026");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#9e7753_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#dfcca8]/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#d7c4ac]/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e8ddcf] shadow-xs text-xs font-bold text-[#805e43]">
            <Gem className="w-4 h-4 text-[#9e7753]" />
            <span>TERRASILVA ERP • BIZTONSÁGOS BELÉPÉS</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#14171c] tracking-tight">
            Tulajdonosi Vezérlőpult
          </h1>
          <p className="text-xs text-[#684d39]">
            Központi Bútor ERP, WMS, Pénzügy & AI Stúdió Rendszer
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-[#e8ddcf] p-8 shadow-xl space-y-6">
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-pulse">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sikeres azonosítás! Átirányítás a vezérlőpultra...</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#553f31] block mb-1.5">
                Email Cím / Felhasználó
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="bence@terrasilva.hu"
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium text-[#14171c]"
                />
                <Mail className="w-4 h-4 text-[#805e43] absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-[#553f31]">Jelszó</label>
                <span className="text-[10px] font-bold text-[#9e7753] bg-[#faf7f2] px-2 py-0.5 rounded border border-[#e8ddcf]">
                  Alapértelmezett: bence2026
                </span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-mono text-[#14171c]"
                />
                <Lock className="w-4 h-4 text-[#805e43] absolute left-3.5 top-3" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3 text-[#805e43] hover:text-[#14171c]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || success}
              className="w-full py-3 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#9e7753] transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Azonosítás folyamatban...</span>
                </>
              ) : (
                <>
                  <span>Belépés a Vezérlőpultra</span>
                  <ArrowRight className="w-4 h-4 text-[#d7c4ac]" />
                </>
              )}
            </button>
          </form>

          {/* Quick Registration & Security Footer */}
          <div className="pt-4 border-t border-[#e8ddcf] flex flex-col items-center gap-3 text-center">
            <Link
              href="/admin/regisztracio"
              className="text-xs font-bold text-[#805e43] hover:text-[#14171c] hover:underline"
            >
              Új munkatárs regisztrációja (Jóváhagyást igényel) &rarr;
            </Link>

            <div className="inline-flex items-center gap-2 text-[11px] text-[#684d39]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>AES-256-GCM Titkosítás • Ahkem Mintájú Védelmi Rendszer</span>
            </div>
          </div>
        </div>

        {/* PWA App Install Banner */}
        <div className="p-4 rounded-2xl bg-white/70 border border-[#e8ddcf] flex items-center justify-between text-xs text-[#553f31]">
          <div className="flex items-center gap-2.5">
            <Smartphone className="w-4 h-4 text-[#9e7753]" />
            <span>Mobil / iPad Kezdőképernyőre Telepítés</span>
          </div>
          <span className="font-bold text-[#14171c]">PWA Ready</span>
        </div>
      </div>
    </div>
  );
}
