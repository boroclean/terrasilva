"use client";

import { useState, useEffect } from "react";
import { 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Receipt, 
  CreditCard, 
  Building2, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  Calendar, 
  Filter, 
  Search,
  Sparkles,
  Smartphone,
  CheckCircle2,
  Trash2,
  X
} from "lucide-react";

interface TransactionItem {
  id: string;
  title: string;
  amount: number;
  type: "INCOME" | "EXPENSE";
  category: string;
  paymentMethod: "BANK_TRANSFER" | "CARD" | "CASH" | "STRIPE";
  date: string;
  recordedBy: string;
  invoiceNumber?: string;
  notes?: string;
}

const INITIAL_TRANSACTIONS: TransactionItem[] = [
  {
    id: "tx-01",
    title: "Travertin Milano Étkezőasztal Értékesítés (Budapest)",
    amount: 1490000,
    type: "INCOME",
    category: "Termékeladás",
    paymentMethod: "BANK_TRANSFER",
    date: "2026-09-28 09:15",
    recordedBy: "Boronkay Bence",
    invoiceNumber: "TS-2026/00142",
  },
  {
    id: "tx-02",
    title: "Konténer Fuvardíj & Vámkezelés (Koper - Bp)",
    amount: 680000,
    type: "EXPENSE",
    category: "Szállítás & Logisztika",
    paymentMethod: "BANK_TRANSFER",
    date: "2026-09-27 14:30",
    recordedBy: "Boronkay Bence",
    invoiceNumber: "MAERSK-HU-8891",
  },
  {
    id: "tx-03",
    title: "Meta / Instagram Hirdetések (Luxus Enteriőr Kampány)",
    amount: 125000,
    type: "EXPENSE",
    category: "Marketing & Reklám",
    paymentMethod: "CARD",
    date: "2026-09-27 11:20",
    recordedBy: "Boronkay Bence",
    invoiceNumber: "META-INV-49912",
  },
  {
    id: "tx-04",
    title: "Travertin Roma Dohányzóasztal Előleg (Debrecen)",
    amount: 390000,
    type: "INCOME",
    category: "Előleg Fizetés",
    paymentMethod: "CARD",
    date: "2026-09-26 17:40",
    recordedBy: "Boronkay Bence",
    invoiceNumber: "TS-2026/00141",
  },
  {
    id: "tx-05",
    title: "Központi Raktár Bérlet & Rezsi (2026/09)",
    amount: 320000,
    type: "EXPENSE",
    category: "Raktárbérlet & Rezsi",
    paymentMethod: "BANK_TRANSFER",
    date: "2026-09-25 10:00",
    recordedBy: "Boronkay Bence",
    invoiceNumber: "RAKTAR-2026-09",
  },
  {
    id: "tx-06",
    title: "Csomagolóanyagok & Élfa Védelem Beszerzés",
    amount: 45000,
    type: "EXPENSE",
    category: "Üzemeltetés & Anyag",
    paymentMethod: "CARD",
    date: "2026-09-24 16:15",
    recordedBy: "Boronkay Bence",
  },
];

export default function FinancePage() {
  const [transactions, setTransactions] = useState<TransactionItem[]>(INITIAL_TRANSACTIONS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<"ALL" | "INCOME" | "EXPENSE">("ALL");
  const [saveAlert, setSaveAlert] = useState<string | null>(null);

  // Quick Add Form State
  const [formData, setFormData] = useState<{
    title: string;
    amount: string;
    type: "EXPENSE" | "INCOME";
    category: string;
    paymentMethod: "BANK_TRANSFER" | "CARD" | "CASH" | "STRIPE";
    invoiceNumber: string;
    notes: string;
  }>({
    title: "",
    amount: "",
    type: "EXPENSE",
    category: "Szállítás & Logisztika",
    paymentMethod: "BANK_TRANSFER",
    invoiceNumber: "",
    notes: "",
  });

  // Financial Calculations
  const totalIncome = transactions
    .filter((t) => t.type === "INCOME")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "EXPENSE")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const netProfit = totalIncome - totalExpense;
  const profitMargin = totalIncome > 0 ? Math.round((netProfit / totalIncome) * 100) : 0;

  const handleQuickAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.amount) return;

    const newTx: TransactionItem = {
      id: "tx-" + Date.now(),
      title: formData.title,
      amount: parseInt(formData.amount.replace(/[^0-9]/g, "")) || 0,
      type: formData.type,
      category: formData.category,
      paymentMethod: formData.paymentMethod,
      date: new Date().toISOString().replace("T", " ").substring(0, 16),
      recordedBy: "Boronkay Bence (Tulajdonos)",
      invoiceNumber: formData.invoiceNumber || undefined,
      notes: formData.notes || undefined,
    };

    setTransactions([newTx, ...transactions]);
    setIsModalOpen(false);
    setSaveAlert(`Sikeresen rögzítve: ${newTx.title} (${newTx.amount.toLocaleString("hu-HU")} Ft)`);
    setTimeout(() => setSaveAlert(null), 4000);

    // Reset Form
    setFormData({
      title: "",
      amount: "",
      type: "EXPENSE",
      category: "Szállítás & Logisztika",
      paymentMethod: "BANK_TRANSFER",
      invoiceNumber: "",
      notes: "",
    });
  };

  const handleDelete = (id: string) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (t.invoiceNumber && t.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedTypeFilter === "ALL" || t.type === selectedTypeFilter;
    return matchesSearch && matchesType;
  });

  const exportCSV = () => {
    const headers = "ID;Megnevezés;Összeg (Ft);Típus;Kategória;Fizetési Mód;Dátum;Számlaszám;Rögzítő\n";
    const rows = transactions.map((t) => 
      `"${t.id}";"${t.title}";"${t.amount}";"${t.type}";"${t.category}";"${t.paymentMethod}";"${t.date}";"${t.invoiceNumber || ''}";"${t.recordedBy}"`
    ).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `terrasilva_penzugy_${new Date().toISOString().substring(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl lg:text-2xl font-bold text-[#14171c]">Pénzügyi Vezérlőpult & Kiadáskövető</h1>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
              Élő Cash-Flow
            </span>
          </div>
          <p className="text-xs text-[#684d39] mt-0.5">
            Valós idejű bevétel, kiadás és árrés követés azonnali mobil rögzítéssel
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#e8ddcf] text-xs font-semibold text-[#553f31] hover:bg-[#faf8f5] transition shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-[#9e7753]" />
            <span>Könyvelés CSV</span>
          </button>
          
          {/* Quick Add Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#9e7753] hover:bg-[#866343] text-white text-xs font-bold transition shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>+ Gyors Rögzítés (3 mp)</span>
          </button>
        </div>
      </div>

      {/* Success Alert */}
      {saveAlert && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex items-center gap-3 text-xs text-emerald-900 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-semibold">{saveAlert}</span>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue */}
        <div className="bg-white rounded-2xl border border-[#e8ddcf] p-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#805e43]">Összes Bevétel</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-[#14171c] block">
              {totalIncome.toLocaleString("hu-HU")} <span className="text-sm font-semibold text-[#805e43]">Ft</span>
            </span>
            <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              Eladások & előlegek
            </span>
          </div>
        </div>

        {/* Total Expenses */}
        <div className="bg-white rounded-2xl border border-[#e8ddcf] p-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#805e43]">Összes Kiadás</span>
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-[#14171c] block">
              {totalExpense.toLocaleString("hu-HU")} <span className="text-sm font-semibold text-[#805e43]">Ft</span>
            </span>
            <span className="text-[11px] text-rose-700 font-semibold flex items-center gap-1 mt-1">
              <TrendingDown className="w-3 h-3" />
              Beszerzés, vám, logisztika, ads
            </span>
          </div>
        </div>

        {/* Net Profit */}
        <div className="bg-[#14171c] text-white rounded-2xl p-5 shadow-sm relative overflow-hidden border border-[#262c36]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d7c4ac]">Nettó Eredmény (Profit)</span>
            <div className="w-8 h-8 rounded-lg bg-[#9e7753]/30 text-[#e8ddcf] flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-[#d7c4ac]" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-white block">
              {netProfit.toLocaleString("hu-HU")} <span className="text-sm font-semibold text-[#d7c4ac]">Ft</span>
            </span>
            <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1 mt-1">
              Tisztított pénzállomány
            </span>
          </div>
        </div>

        {/* Margin */}
        <div className="bg-white rounded-2xl border border-[#e8ddcf] p-5 shadow-xs relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#805e43]">Profit Árrés %</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold text-xs">
              %
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-extrabold text-[#14171c] block">
              {profitMargin}%
            </span>
            <span className="text-[11px] text-[#805e43] font-medium mt-1 block">
              Prémium D2C kategóriás haszonkulcs
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#805e43] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Keresés megnevezés, kategória, számlaszám alapján..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] text-xs focus:outline-none focus:border-[#9e7753] transition"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedTypeFilter("ALL")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedTypeFilter === "ALL"
                ? "bg-[#14171c] text-white"
                : "bg-[#faf8f5] text-[#684d39] hover:bg-[#f4efe8]"
            }`}
          >
            Mind ({transactions.length})
          </button>
          <button
            onClick={() => setSelectedTypeFilter("INCOME")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedTypeFilter === "INCOME"
                ? "bg-emerald-700 text-white"
                : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
            }`}
          >
            Bevételek
          </button>
          <button
            onClick={() => setSelectedTypeFilter("EXPENSE")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedTypeFilter === "EXPENSE"
                ? "bg-rose-700 text-white"
                : "bg-rose-50 text-rose-800 hover:bg-rose-100"
            }`}
          >
            Kiadások
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#14171c]">Pénzügyi Tranzakciók & Bizonylatok</h2>
          <span className="text-xs text-[#805e43]">
            {filteredTransactions.length} tétel megjelenítve
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Típus</th>
                <th className="p-3 font-semibold">Tétel Megnevezése</th>
                <th className="p-3 font-semibold">Kategória</th>
                <th className="p-3 font-semibold">Fizetési Mód</th>
                <th className="p-3 font-semibold">Bizonylat / Számla</th>
                <th className="p-3 font-semibold">Dátum</th>
                <th className="p-3 font-semibold text-right">Összeg</th>
                <th className="p-3 font-semibold text-center rounded-r-lg">Művelet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-[#faf8f5] transition">
                  <td className="p-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                      tx.type === "INCOME" 
                        ? "bg-emerald-100 text-emerald-800" 
                        : "bg-rose-100 text-rose-800"
                    }`}>
                      {tx.type === "INCOME" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {tx.type === "INCOME" ? "BEVÉTEL" : "KIADÁS"}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block">{tx.title}</span>
                    <span className="text-[10px] text-[#805e43]">Rögzítette: {tx.recordedBy}</span>
                  </td>
                  <td className="p-3">
                    <span className="inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-[11px] font-medium">
                      {tx.category}
                    </span>
                  </td>
                  <td className="p-3 text-[#553f31] font-medium">
                    {tx.paymentMethod === "BANK_TRANSFER" && "Átutalás"}
                    {tx.paymentMethod === "CARD" && "Bankkártya"}
                    {tx.paymentMethod === "CASH" && "Készpénz"}
                    {tx.paymentMethod === "STRIPE" && "Stripe Online"}
                  </td>
                  <td className="p-3 font-mono text-[11px] text-[#684d39]">
                    {tx.invoiceNumber || "-"}
                  </td>
                  <td className="p-3 text-[#805e43] text-[11px]">
                    {tx.date}
                  </td>
                  <td className="p-3 text-right">
                    <span className={`font-extrabold text-xs ${
                      tx.type === "INCOME" ? "text-emerald-700" : "text-rose-700"
                    }`}>
                      {tx.type === "INCOME" ? "+" : "-"}{tx.amount.toLocaleString("hu-HU")} Ft
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(tx.id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Törlés"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* QUICK ADD MODAL (Optimized for Mobile & Fast Desktop Entry) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-[#e8ddcf] shadow-2xl max-w-lg w-full p-6 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#f4efe8] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#9e7753] text-white flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#14171c]">Gyors Rögzítés (Mobilbarát)</h3>
                  <p className="text-[11px] text-[#805e43]">3 másodperces kiadás / bevétel bejegyzés</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleQuickAdd} className="space-y-4 text-xs">
              {/* Type Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#f4efe8] rounded-2xl">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ 
                      ...formData, 
                      type: "EXPENSE",
                      category: "Szállítás & Logisztika" 
                    });
                  }}
                  className={`py-2.5 rounded-xl font-bold transition flex items-center justify-center gap-1.5 ${
                    formData.type === "EXPENSE"
                      ? "bg-rose-600 text-white shadow-xs"
                      : "text-[#553f31] hover:text-[#14171c]"
                  }`}
                >
                  <ArrowDownRight className="w-4 h-4" />
                  <span>Kiadás Rögzítése</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ 
                      ...formData, 
                      type: "INCOME",
                      category: "Termékeladás" 
                    });
                  }}
                  className={`py-2.5 rounded-xl font-bold transition flex items-center justify-center gap-1.5 ${
                    formData.type === "INCOME"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-[#553f31] hover:text-[#14171c]"
                  }`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Bevétel Rögzítése</span>
                </button>
              </div>

              {/* Title Input */}
              <div>
                <label className="font-bold text-[#14171c] block mb-1">
                  Megnevezés / Tétel leírása *
                </label>
                <input
                  type="text"
                  required
                  placeholder={formData.type === "EXPENSE" ? "pl. Üzemanyag furgonba / Vámilleték" : "pl. Travertin Dohányzóasztal előleg"}
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] text-xs focus:outline-none focus:border-[#9e7753]"
                />
              </div>

              {/* Amount Input */}
              <div>
                <label className="font-bold text-[#14171c] block mb-1">
                  Összeg (HUF) *
                </label>
                <div className="relative">
                  <input
                    type="number"
                    required
                    placeholder="pl. 145000"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] text-sm font-bold focus:outline-none focus:border-[#9e7753]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 font-bold text-[#805e43] text-xs">
                    Ft
                  </span>
                </div>
              </div>

              {/* Category & Payment Method Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#14171c] block mb-1">Kategória</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] text-xs focus:outline-none focus:border-[#9e7753]"
                  >
                    {formData.type === "EXPENSE" ? (
                      <>
                        <option value="Konténer Beszerzés">Konténer Beszerzés (Kő/Fa)</option>
                        <option value="Szállítás & Logisztika">Szállítás & Vámkezelés</option>
                        <option value="Marketing & Reklám">Marketing & Meta Ads</option>
                        <option value="Raktárbérlet & Rezsi">Raktárbérlet & Rezsi</option>
                        <option value="Üzemeltetés & Anyag">Csomagolóanyag & Eszközök</option>
                        <option value="Egyéb Kiadás">Egyéb Működési Költség</option>
                      </>
                    ) : (
                      <>
                        <option value="Termékeladás">Készlet Bútor Értékesítés</option>
                        <option value="Előleg Fizetés">Egyedi Bútor Előleg</option>
                        <option value="Kiszállítási Díj">Kiszállítási & Összeszerelési Díj</option>
                        <option value="Egyéb Bevétel">Egyéb Bevétel</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#14171c] block mb-1">Fizetési Mód</label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] text-xs focus:outline-none focus:border-[#9e7753]"
                  >
                    <option value="BANK_TRANSFER">Banki Átutalás</option>
                    <option value="CARD">Céges Bankkártya</option>
                    <option value="CASH">Készpénz</option>
                    <option value="STRIPE">Stripe / Online Kártya</option>
                  </select>
                </div>
              </div>

              {/* Invoice Number */}
              <div>
                <label className="font-bold text-[#14171c] block mb-1">
                  Számlaszám / Nyugtaszám (Opcionális)
                </label>
                <input
                  type="text"
                  placeholder="pl. TS-2026/00143 vagy NAV számlaszám"
                  value={formData.invoiceNumber}
                  onChange={(e) => setFormData({ ...formData, invoiceNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] text-xs focus:outline-none focus:border-[#9e7753]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
                >
                  Mégse
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#14171c] text-white font-bold hover:bg-[#2e2118] transition flex items-center gap-2 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Rögzítés Most</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
