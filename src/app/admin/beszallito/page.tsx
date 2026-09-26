"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Boxes, 
  ArrowLeft, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Truck, 
  ShieldAlert, 
  FileSpreadsheet, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Search,
  Filter,
  Check,
  ChevronRight
} from "lucide-react";

interface ShipmentMock {
  id: string;
  containerNumber: string;
  supplier: string;
  origin: string;
  destination: string;
  eta: string;
  status: "IN_TRANSIT" | "CUSTOMS" | "ARRIVED" | "STOCKED";
  totalCbm: number;
  totalItems: number;
  totalValueHuf: number;
  items: {
    sku: string;
    name: string;
    variant: string;
    qty: number;
    receivedQty: number;
    unitPriceUsd: number;
    cbm: number;
  }[];
}

const INITIAL_SHIPMENTS: ShipmentMock[] = [
  {
    id: "cont-01",
    containerNumber: "MSCU-8923041",
    supplier: "Foshan Grand Lux Furniture Co.",
    origin: "Nansha Port, Kína",
    destination: "Budapest Központi Raktár",
    eta: "2026-10-15",
    status: "IN_TRANSIT",
    totalCbm: 64.2,
    totalItems: 142,
    totalValueHuf: 18450000,
    items: [
      {
        sku: "BUTOR-FOT-01-GRN",
        name: "Aura Royale Lounge Fotel",
        variant: "Smaragdzöld Olasz Bársony + Matt Arany Láb",
        qty: 40,
        receivedQty: 0,
        unitPriceUsd: 110,
        cbm: 0.35,
      },
      {
        sku: "BUTOR-FOT-01-BEI",
        name: "Aura Royale Lounge Fotel",
        variant: "Bézs Bouclé Kárpit + Tömör Tölgy Láb",
        qty: 30,
        receivedQty: 0,
        unitPriceUsd: 115,
        cbm: 0.35,
      },
      {
        sku: "BUTOR-ASZT-02-MAR",
        name: "Novara Carrara Étkezőasztal",
        variant: "180x90cm Természetes Márvány + Fekete Fém",
        qty: 12,
        receivedQty: 0,
        unitPriceUsd: 320,
        cbm: 0.85,
      },
      {
        sku: "BUTOR-SZEK-04-BLK",
        name: "Verona Velvet Étkezőszék (4 db / doboz)",
        variant: "Antracit Bársony + Fekete Karcsú Lábak",
        qty: 60,
        receivedQty: 0,
        unitPriceUsd: 42,
        cbm: 0.18,
      },
    ],
  },
  {
    id: "cont-02",
    containerNumber: "CMAU-4102948",
    supplier: "Guangzhou Artisan Living Ltd.",
    origin: "Shenzhen Port, Kína",
    destination: "Budapest Központi Raktár",
    eta: "2026-09-28",
    status: "CUSTOMS",
    totalCbm: 31.5,
    totalItems: 55,
    totalValueHuf: 9200000,
    items: [
      {
        sku: "BUTOR-KAN-03-TER",
        name: "Velluto Moduláris Sarokkanapé",
        variant: "Terrakotta Prémium Szövet (3 részes modul)",
        qty: 15,
        receivedQty: 0,
        unitPriceUsd: 480,
        cbm: 1.45,
      },
      {
        sku: "BUTOR-DOH-01-WAL",
        name: "Lignum Organikus Dohányzóasztal",
        variant: "Tömör Amerikai Diófa",
        qty: 40,
        receivedQty: 0,
        unitPriceUsd: 75,
        cbm: 0.22,
      },
    ],
  },
];

export default function SupplierArrivalPage() {
  const [shipments, setShipments] = useState<ShipmentMock[]>(INITIAL_SHIPMENTS);
  const [selectedShipment, setSelectedShipment] = useState<ShipmentMock>(INITIAL_SHIPMENTS[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleReceiveItem = (shipmentId: string, sku: string) => {
    setShipments(prev =>
      prev.map(shipment => {
        if (shipment.id !== shipmentId) return shipment;
        const updatedItems = shipment.items.map(item => {
          if (item.sku === sku) {
            return { ...item, receivedQty: item.qty };
          }
          return item;
        });
        const allReceived = updatedItems.every(i => i.receivedQty === i.qty);
        return {
          ...shipment,
          items: updatedItems,
          status: allReceived ? "STOCKED" : shipment.status,
        };
      })
    );

    setSelectedShipment(prev => {
      const updatedItems = prev.items.map(item => {
        if (item.sku === sku) {
          return { ...item, receivedQty: item.qty };
        }
        return item;
      });
      return { ...prev, items: updatedItems };
    });
  };

  const getStatusBadge = (status: ShipmentMock["status"]) => {
    switch (status) {
      case "IN_TRANSIT":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <Truck className="w-3.5 h-3.5" />
            Úton (Hajón)
          </span>
        );
      case "CUSTOMS":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Clock className="w-3.5 h-3.5" />
            Vámkezelés alatt
          </span>
        );
      case "ARRIVED":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
            <Boxes className="w-3.5 h-3.5" />
            Beérkezett a Raktárba
          </span>
        );
      case "STOCKED":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Bevételezve (Készleten)
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b border-[#e8ddcf] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-lg text-[#684d39] hover:bg-[#f4efe8] transition flex items-center gap-1 text-xs font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Vissza a Főoldalra</span>
            </Link>
            <div className="h-5 w-[1px] bg-[#e8ddcf]" />
            <div className="flex items-center gap-2">
              <Boxes className="w-5 h-5 text-[#9e7753]" />
              <h1 className="text-base font-bold text-[#14171c]">
                Beszállítói Árubeérkezés & Konténer WMS
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#805e43] font-medium bg-[#f4efe8] px-3 py-1.5 rounded-lg border border-[#e8ddcf]">
              Ahkem Rendszer Struktúra
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 w-full flex-1 space-y-6">
        {/* KPI Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-white border border-[#e8ddcf] shadow-xs">
            <span className="text-xs font-medium text-[#805e43]">Aktív Konténerek</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-[#14171c]">{shipments.length} db</span>
              <span className="text-xs text-[#9e7753] font-semibold">95.7 CBM össztérfogat</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#e8ddcf] shadow-xs">
            <span className="text-xs font-medium text-[#805e43]">Úton lévő Bútorok</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-[#14171c]">197 db</span>
              <span className="text-xs text-amber-700 font-semibold">2 konténerben</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#e8ddcf] shadow-xs">
            <span className="text-xs font-medium text-[#805e43]">Import Érték (Beszerzés)</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-[#14171c]">27.65 M Ft</span>
              <span className="text-xs text-[#9e7753] font-semibold">68 400 USD</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#e8ddcf] shadow-xs">
            <span className="text-xs font-medium text-[#805e43]">Automatizált Státusz</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-emerald-700">1-Kattintás</span>
              <span className="text-xs text-emerald-800 font-semibold">Számla & Készletszinkron</span>
            </div>
          </div>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Container List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between pb-1">
              <h2 className="text-sm font-bold text-[#14171c]">Beérkező Szállítmányok</h2>
              <span className="text-xs text-[#805e43] font-medium">{shipments.length} konténer listázva</span>
            </div>

            <div className="space-y-3">
              {shipments.map(s => {
                const isSelected = selectedShipment.id === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setSelectedShipment(s)}
                    className={`p-5 rounded-xl border cursor-pointer transition-all text-left shadow-xs ${
                      isSelected
                        ? "bg-white border-[#9e7753] ring-2 ring-[#9e7753]/20"
                        : "bg-white border-[#e8ddcf] hover:border-[#d7c4ac]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#14171c] text-sm">{s.containerNumber}</span>
                          {getStatusBadge(s.status)}
                        </div>
                        <p className="text-xs text-[#684d39] font-medium mt-1">{s.supplier}</p>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-[#9e7753] transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#f4efe8] grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-[#805e43] block">Várható Érkezés:</span>
                        <span className="font-semibold text-[#14171c]">{s.eta}</span>
                      </div>
                      <div>
                        <span className="text-[#805e43] block">Térfogat:</span>
                        <span className="font-semibold text-[#14171c]">{s.totalCbm} CBM</span>
                      </div>
                      <div>
                        <span className="text-[#805e43] block">Darabszám:</span>
                        <span className="font-semibold text-[#14171c]">{s.totalItems} db</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Container Items & 1-Click Receiving */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#e8ddcf] p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#e8ddcf]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-[#14171c]">{selectedShipment.containerNumber}</span>
                  {getStatusBadge(selectedShipment.status)}
                </div>
                <p className="text-xs text-[#684d39] mt-0.5">
                  Indulás: {selectedShipment.origin} ➔ Érkezés: {selectedShipment.destination}
                </p>
              </div>

              <button
                onClick={() => {
                  selectedShipment.items.forEach(item => {
                    handleReceiveItem(selectedShipment.id, item.sku);
                  });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#14171c] text-white text-xs font-semibold hover:bg-[#2e2118] transition shadow-xs self-start sm:self-auto"
              >
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Teljes Konténer Bevételezése (1-Kattintás)</span>
              </button>
            </div>

            {/* Items Table */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#805e43]">
                Konténerben Lévő Bútorok Tételei
              </h3>

              <div className="overflow-x-auto border border-[#e8ddcf] rounded-lg">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#f4efe8] text-[#553f31] border-b border-[#e8ddcf]">
                    <tr>
                      <th className="p-3 font-semibold">Cikkszám & Név</th>
                      <th className="p-3 font-semibold text-center">Mennyiség</th>
                      <th className="p-3 font-semibold text-right">Egységár (USD)</th>
                      <th className="p-3 font-semibold text-center">Státusz</th>
                      <th className="p-3 font-semibold text-right">Művelet</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e8ddcf]">
                    {selectedShipment.items.map(item => {
                      const isReceived = item.receivedQty >= item.qty;
                      return (
                        <tr key={item.sku} className="hover:bg-[#faf8f5] transition">
                          <td className="p-3">
                            <span className="font-bold text-[#14171c] block">{item.name}</span>
                            <span className="text-[11px] text-[#805e43] block">{item.variant}</span>
                            <span className="font-mono text-[10px] text-[#9e7753]">{item.sku}</span>
                          </td>
                          <td className="p-3 text-center font-bold text-[#14171c]">
                            {item.receivedQty} / {item.qty} db
                          </td>
                          <td className="p-3 text-right font-medium text-[#14171c]">
                            ${item.unitPriceUsd}
                          </td>
                          <td className="p-3 text-center">
                            {isReceived ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                <CheckCircle2 className="w-3 h-3" /> Bevételezve
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                                <Clock className="w-3 h-3" /> Várakozik
                              </span>
                            )}
                          </td>
                          <td className="p-3 text-right">
                            {!isReceived ? (
                              <button
                                onClick={() => handleReceiveItem(selectedShipment.id, item.sku)}
                                className="px-2.5 py-1 rounded bg-[#9e7753] text-white hover:bg-[#805e43] text-[11px] font-semibold transition shadow-2xs"
                              >
                                Átvétel
                              </button>
                            ) : (
                              <span className="text-emerald-700 text-[11px] font-semibold">Készleten</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
