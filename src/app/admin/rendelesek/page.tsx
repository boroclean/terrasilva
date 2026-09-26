"use client";

import { useState } from "react";
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  Check, 
  Clock, 
  Truck, 
  Receipt, 
  Phone, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  FileText
} from "lucide-react";

interface OrderMock {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  item: string;
  variant: string;
  totalAmount: number;
  depositAmount: number;
  status: "UJ_RENDELES" | "ELOLEG_FIZETVE" | "KONTENERBEN_UTON" | "RAKTARON_ATVEHETO" | "KISZALLITVA";
  invoiceStatus: "DÍJBEKÉRŐ_KIKÜLDVE" | "ELŐLEGSZÁMLA_NAV" | "VÉGSZÁMLA_NAV";
  date: string;
  isPreOrder: boolean;
}

const INITIAL_ORDERS: OrderMock[] = [
  {
    id: "ord-1",
    orderNumber: "BUTOR-2026-0042",
    customerName: "Kovács Péter",
    customerPhone: "+36 30 123 4567",
    deliveryAddress: "1024 Budapest, Rózsadomb u. 14. 2/4.",
    item: "Aura Royale Lounge Fotel",
    variant: "Smaragdzöld Olasz Bársony + Matt Arany Lábak",
    totalAmount: 249000,
    depositAmount: 124500,
    status: "ELOLEG_FIZETVE",
    invoiceStatus: "ELŐLEGSZÁMLA_NAV",
    date: "2026-09-26 14:20",
    isPreOrder: false,
  },
  {
    id: "ord-2",
    orderNumber: "BUTOR-2026-0041",
    customerName: "Dr. Szabó Zsófia",
    customerPhone: "+36 20 987 6543",
    deliveryAddress: "9022 Győr, Dunapart sor 8.",
    item: "Novara Carrara Étkezőasztal + 6 Verona Szék",
    variant: "Természetes Carrara Márvány + Antracit Bársony Székek",
    totalAmount: 869000,
    depositAmount: 434500,
    status: "KONTENERBEN_UTON",
    invoiceStatus: "ELŐLEGSZÁMLA_NAV",
    date: "2026-09-25 18:45",
    isPreOrder: true,
  },
  {
    id: "ord-3",
    orderNumber: "BUTOR-2026-0040",
    customerName: "Tóth Balázs",
    customerPhone: "+36 70 555 1234",
    deliveryAddress: "4032 Debrecen, Egyetem sugárút 45.",
    item: "Velluto Moduláris Sarokkanapé",
    variant: "Terrakotta Prémium Bársony",
    totalAmount: 890000,
    depositAmount: 890000,
    status: "KISZALLITVA",
    invoiceStatus: "VÉGSZÁMLA_NAV",
    date: "2026-09-24 11:10",
    isPreOrder: false,
  },
  {
    id: "ord-4",
    orderNumber: "BUTOR-2026-0039",
    customerName: "Horváth Ágnes",
    customerPhone: "+36 30 888 9911",
    deliveryAddress: "2040 Budaörs, Templom tér 3.",
    item: "Lignum Organikus Dohányzóasztal",
    variant: "Tömör Amerikai Diófa",
    totalAmount: 189000,
    depositAmount: 0,
    status: "UJ_RENDELES",
    invoiceStatus: "DÍJBEKÉRŐ_KIKÜLDVE",
    date: "2026-09-26 18:15",
    isPreOrder: false,
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<OrderMock[]>(INITIAL_ORDERS);
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [search, setSearch] = useState("");

  const updateOrderStatus = (orderId: string, newStatus: OrderMock["status"]) => {
    setOrders(prev =>
      prev.map(ord => {
        if (ord.id !== orderId) return ord;
        let newInvoiceStatus = ord.invoiceStatus;
        if (newStatus === "KISZALLITVA") {
          newInvoiceStatus = "VÉGSZÁMLA_NAV";
        } else if (newStatus === "ELOLEG_FIZETVE" || newStatus === "KONTENERBEN_UTON") {
          newInvoiceStatus = "ELŐLEGSZÁMLA_NAV";
        }
        return {
          ...ord,
          status: newStatus,
          invoiceStatus: newInvoiceStatus,
        };
      })
    );
  };

  const filteredOrders = orders.filter(ord => {
    const matchesSearch = 
      ord.customerName.toLowerCase().includes(search.toLowerCase()) ||
      ord.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      ord.item.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "ALL" || ord.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: OrderMock["status"]) => {
    switch (status) {
      case "UJ_RENDELES":
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-gray-100 text-gray-800 border border-gray-200">Új Rendelés</span>;
      case "ELOLEG_FIZETVE":
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">Előleg Fizetve (50%)</span>;
      case "KONTENERBEN_UTON":
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Konténerben Úton</span>;
      case "RAKTARON_ATVEHETO":
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">Raktáron (Kiszállításra kész)</span>;
      case "KISZALLITVA":
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Kiszállítva (Lezárva)</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#14171c]">Rendelések Kezelése</h1>
          <p className="text-xs text-[#684d39]">
            Vásárlói rendelések, előlegszámlák és 1-kattintásos kiszállítási státuszok
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold bg-white border border-[#e8ddcf] px-3.5 py-2 rounded-xl text-[#14171c] shadow-2xs">
            Összes: {orders.length} rendelés
          </span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 bg-white p-4 rounded-2xl border border-[#e8ddcf] shadow-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#805e43] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Keresés vevő neve, rendelésszám vagy bútor alapján..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto">
          {["ALL", "UJ_RENDELES", "ELOLEG_FIZETVE", "KONTENERBEN_UTON", "RAKTARON_ATVEHETO", "KISZALLITVA"].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                filterStatus === st
                  ? "bg-[#14171c] text-white"
                  : "bg-[#faf8f5] text-[#684d39] border border-[#e8ddcf] hover:bg-[#f4efe8]"
              }`}
            >
              {st === "ALL" ? "Összes" : st.replace(/_/g, " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl border border-[#e8ddcf] p-6 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#d7c4ac] transition"
          >
            {/* Left: Info */}
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono font-bold text-sm text-[#14171c]">
                  {order.orderNumber}
                </span>
                {getStatusBadge(order.status)}
                {order.isPreOrder && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#f4efe8] text-[#805e43] border border-[#d7c4ac]">
                    Konténeres Előrendelés
                  </span>
                )}
                <span className="text-[11px] text-[#805e43]">{order.date}</span>
              </div>

              <div>
                <h3 className="font-bold text-base text-[#14171c]">{order.item}</h3>
                <p className="text-xs text-[#805e43] mt-0.5">{order.variant}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#684d39] pt-1">
                <span className="font-bold text-[#14171c]">{order.customerName}</span>
                <span className="flex items-center gap-1 text-[#805e43]">
                  <Phone className="w-3.5 h-3.5" /> {order.customerPhone}
                </span>
                <span className="flex items-center gap-1 text-[#805e43]">
                  <MapPin className="w-3.5 h-3.5" /> {order.deliveryAddress}
                </span>
              </div>
            </div>

            {/* Right: Financials & 1-Click Status Trigger */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-[#f4efe8]">
              <div className="text-left lg:text-right">
                <span className="text-[10px] text-[#805e43] block">Végösszeg</span>
                <span className="text-xl font-bold text-[#14171c]">
                  {new Intl.NumberFormat("hu-HU").format(order.totalAmount)} Ft
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mt-1">
                  <Receipt className="w-3 h-3" /> {order.invoiceStatus}
                </span>
              </div>

              {/* Status Action Buttons for 1-Person Operation */}
              <div className="flex items-center gap-2">
                {order.status !== "KISZALLITVA" && (
                  <button
                    onClick={() => updateOrderStatus(order.id, "KISZALLITVA")}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14171c] text-white text-xs font-semibold hover:bg-emerald-700 transition shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Kiszállítva (1-Kattintás)</span>
                  </button>
                )}

                {order.status === "UJ_RENDELES" && (
                  <button
                    onClick={() => updateOrderStatus(order.id, "ELOLEG_FIZETVE")}
                    className="px-3 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
                  >
                    Előleg Beérkezett
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
