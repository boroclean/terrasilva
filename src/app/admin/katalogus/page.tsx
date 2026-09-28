"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Boxes, 
  Plus, 
  Search, 
  Filter, 
  Sparkles, 
  Gem, 
  Layers, 
  Eye, 
  EyeOff,
  Edit3, 
  Trash2, 
  Check, 
  Wand2, 
  Camera, 
  ArrowRight,
  TrendingUp,
  Tag,
  DollarSign,
  Settings,
  X,
  CheckCircle2,
  AlertTriangle,
  FolderPlus,
  Palette
} from "lucide-react";
import { ROOM_CATEGORIES, MATERIALS, RoomCategory, MaterialOption } from "@/lib/categories";

export interface CatalogItem {
  id: string;
  sku: string;
  name: string;
  room: string;
  subType: string;
  materialType: string;
  materialDesc: string;
  dimensions: string;
  sellingPriceHuf: number;
  purchasePriceUsd: number;
  landedCostHuf: number;
  marginPercent: number;
  physicalStock: number;
  inTransitStock: number;
  cbm: number;
  isLive: boolean; // Megjelenítés a weboldalon (True = Éles, False = Rejtett)
  imageTag: string;
}

const INITIAL_CATALOG: CatalogItem[] = [
  {
    id: "ts-01",
    sku: "TS-TRAV-NAV-01",
    name: "Aura Navona Travertin Dohányzóasztal",
    room: "nappali",
    subType: "Dohányzóasztalok",
    materialType: "travertine",
    materialDesc: "100% Természetes Olasz Navona Travertin, Matt Csiszolt",
    dimensions: "110 x 60 x 38 cm",
    sellingPriceHuf: 389000,
    purchasePriceUsd: 140,
    landedCostHuf: 82000,
    marginPercent: 78.9,
    physicalStock: 2,
    inTransitStock: 25,
    cbm: 0.38,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-02",
    sku: "TS-TRAV-TV-02",
    name: "Monolit Travertin TV-Szekrény & Médiafal",
    room: "nappali",
    subType: "TV-szekrények",
    materialType: "travertine",
    materialDesc: "Romano Travertin Keret + Diófa Lamellás Front",
    dimensions: "200 x 45 x 50 cm",
    sellingPriceHuf: 649000,
    purchasePriceUsd: 260,
    landedCostHuf: 155000,
    marginPercent: 76.1,
    physicalStock: 1,
    inTransitStock: 10,
    cbm: 0.75,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-03",
    sku: "TS-MAR-CAR-03",
    name: "Silva Carrara Étkezőasztal (8 személyes)",
    room: "etkezo",
    subType: "Étkezőasztalok",
    materialType: "marble",
    materialDesc: "Fehér Carrara Márványlap + Tömör Amerikai Diófa Talapzat",
    dimensions: "220 x 100 x 76 cm",
    sellingPriceHuf: 749000,
    purchasePriceUsd: 380,
    landedCostHuf: 215000,
    marginPercent: 71.3,
    physicalStock: 1,
    inTransitStock: 12,
    cbm: 0.92,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-04",
    sku: "TS-WOOD-DIN-04",
    name: "Silva Tömör Diófa Étkezőasztal",
    room: "etkezo",
    subType: "Étkezőasztalok",
    materialType: "wood",
    materialDesc: "Tömör Amerikai Diófa Palló, Matt Kézműves Olajozás",
    dimensions: "200 x 95 x 76 cm",
    sellingPriceHuf: 489000,
    purchasePriceUsd: 210,
    landedCostHuf: 122000,
    marginPercent: 75.1,
    physicalStock: 3,
    inTransitStock: 15,
    cbm: 0.65,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-05",
    sku: "TS-MON-COL-05",
    name: "Monolit Fluted Travertin Oszlop Console",
    room: "eloszoba",
    subType: "Monolit Konzolok",
    materialType: "travertine",
    materialDesc: "Tömör Kannelúrázott Travertin Kőtömb Faragvány",
    dimensions: "120 x 40 x 85 cm",
    sellingPriceHuf: 289000,
    purchasePriceUsd: 110,
    landedCostHuf: 65000,
    marginPercent: 77.5,
    physicalStock: 3,
    inTransitStock: 18,
    cbm: 0.45,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-06",
    sku: "TS-FOT-BOU-06",
    name: "Silva Royale Lounge Fotel",
    room: "nappali",
    subType: "Fotelek",
    materialType: "upholstery",
    materialDesc: "Tömör Natúr Diófa Keret, Prémium Olasz Bouclé Kárpit",
    dimensions: "85 x 82 x 75 cm",
    sellingPriceHuf: 269000,
    purchasePriceUsd: 115,
    landedCostHuf: 68000,
    marginPercent: 74.7,
    physicalStock: 4,
    inTransitStock: 30,
    cbm: 0.35,
    isLive: true,
    imageTag: "4K Staging Kész",
  },
  {
    id: "ts-07",
    sku: "TS-LAMP-TRAV-07",
    name: "Aura Alabástrom & Travertin Asztali Lámpa",
    room: "vilagitas",
    subType: "Kő Lámpatestek",
    materialType: "travertine",
    materialDesc: "Faragott Travertin Talp, Átvilágítható Alabástrom Gömb",
    dimensions: "28 x 28 x 45 cm",
    sellingPriceHuf: 149000,
    purchasePriceUsd: 48,
    landedCostHuf: 29000,
    marginPercent: 80.5,
    physicalStock: 8,
    inTransitStock: 50,
    cbm: 0.08,
    isLive: true,
    imageTag: "Új Modell",
  },
];

export default function CatalogManagerPage() {
  const [items, setItems] = useState<CatalogItem[]>(INITIAL_CATALOG);
  const [rooms, setRooms] = useState<RoomCategory[]>(ROOM_CATEGORIES);
  const [materials, setMaterials] = useState<MaterialOption[]>(MATERIALS);
  
  const [selectedRoom, setSelectedRoom] = useState<string>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [visibilityFilter, setVisibilityFilter] = useState<"all" | "live" | "draft">("all");
  const [search, setSearch] = useState("");

  // Modals
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showDeleteConfirmId, setShowDeleteConfirmId] = useState<string | null>(null);

  // Edit / Add Form State
  const [activeItem, setActiveItem] = useState<CatalogItem | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Category Manager Inputs
  const [newRoomName, setNewRoomName] = useState("");
  const [newMaterialName, setNewMaterialName] = useState("");
  const [newMaterialColor, setNewMaterialColor] = useState("#c5a880");

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("terrasilva_catalog");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {}
    }
    const savedRooms = localStorage.getItem("terrasilva_rooms");
    if (savedRooms) {
      try {
        setRooms(JSON.parse(savedRooms));
      } catch (e) {}
    }
    const savedMats = localStorage.getItem("terrasilva_materials");
    if (savedMats) {
      try {
        setMaterials(JSON.parse(savedMats));
      } catch (e) {}
    }
  }, []);

  // Save to LocalStorage on updates
  const saveCatalogState = (newItems: CatalogItem[]) => {
    setItems(newItems);
    localStorage.setItem("terrasilva_catalog", JSON.stringify(newItems));
  };

  const showNotification = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 3500);
  };

  // Toggle Live Status
  const toggleLiveStatus = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = items.map((it) => {
      if (it.id === id) {
        const newStatus = !it.isLive;
        showNotification(`"${it.name}" webshop státusza: ${newStatus ? "Éles (Látható a vásárlóknak)" : "Rejtett / Piszkozat"}`);
        return { ...it, isLive: newStatus };
      }
      return it;
    });
    saveCatalogState(updated);
  };

  // Delete Item
  const handleDeleteItem = (id: string) => {
    const itemToDelete = items.find((it) => it.id === id);
    const updated = items.filter((it) => it.id !== id);
    saveCatalogState(updated);
    setShowDeleteConfirmId(null);
    showNotification(`"${itemToDelete?.name || 'Termék'}" sikeresen törölve a katalógusból!`);
  };

  // Open Edit Modal
  const handleOpenEdit = (item: CatalogItem) => {
    setActiveItem({ ...item });
    setShowEditModal(true);
  };

  // Save Edited Item
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeItem) return;

    const landedHuf = Math.round(activeItem.purchasePriceUsd * 370 * 1.55);
    const margin = activeItem.sellingPriceHuf > 0 
      ? Math.round(((activeItem.sellingPriceHuf - landedHuf) / activeItem.sellingPriceHuf) * 1000) / 10 
      : 0;

    const updatedItem = {
      ...activeItem,
      landedCostHuf: landedHuf,
      marginPercent: margin,
    };

    const updated = items.map((it) => (it.id === updatedItem.id ? updatedItem : it));
    saveCatalogState(updated);
    setShowEditModal(false);
    showNotification(`"${updatedItem.name}" adatai sikeresen frissítve!`);
  };

  // Create New Product
  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeItem) return;

    const landedHuf = Math.round(activeItem.purchasePriceUsd * 370 * 1.55);
    const margin = activeItem.sellingPriceHuf > 0 
      ? Math.round(((activeItem.sellingPriceHuf - landedHuf) / activeItem.sellingPriceHuf) * 1000) / 10 
      : 0;

    const newItem: CatalogItem = {
      ...activeItem,
      id: `ts-${Date.now()}`,
      sku: activeItem.sku || `TS-${activeItem.materialType.substring(0, 4).toUpperCase()}-${Math.floor(10 + Math.random() * 90)}`,
      landedCostHuf: landedHuf,
      marginPercent: margin,
    };

    const updated = [newItem, ...items];
    saveCatalogState(updated);
    setShowAddModal(false);
    showNotification(`"${newItem.name}" sikeresen hozzáadva a katalógushoz!`);
  };

  // Add Custom Room Category
  const handleAddRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoomName.trim()) return;
    const slug = newRoomName.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newRoom: RoomCategory = {
      id: slug,
      name: newRoomName,
      slug: slug,
      iconName: "FolderPlus",
      subTypes: [{ id: "all", name: `Összes ${newRoomName}`, slug: "all" }],
    };
    const updated = [...rooms, newRoom];
    setRooms(updated);
    localStorage.setItem("terrasilva_rooms", JSON.stringify(updated));
    setNewRoomName("");
    showNotification(`Új kategória létrehozva: "${newRoomName}"`);
  };

  // Add Custom Material
  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMaterialName.trim()) return;
    const id = newMaterialName.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newMat: MaterialOption = {
      id: id,
      name: newMaterialName,
      colorHex: newMaterialColor,
    };
    const updated = [...materials, newMat];
    setMaterials(updated);
    localStorage.setItem("terrasilva_materials", JSON.stringify(updated));
    setNewMaterialName("");
    showNotification(`Új anyag felvéve: "${newMaterialName}"`);
  };

  // Filter items
  const filteredItems = items.filter((it) => {
    const matchesRoom = selectedRoom === "all" || it.room === selectedRoom;
    const matchesMaterial = selectedMaterial === "all" || it.materialType === selectedMaterial;
    const matchesVisibility = 
      visibilityFilter === "all" || 
      (visibilityFilter === "live" && it.isLive) || 
      (visibilityFilter === "draft" && !it.isLive);

    const matchesSearch = 
      it.name.toLowerCase().includes(search.toLowerCase()) ||
      it.sku.toLowerCase().includes(search.toLowerCase()) ||
      it.materialDesc.toLowerCase().includes(search.toLowerCase()) ||
      it.subType.toLowerCase().includes(search.toLowerCase());

    return matchesRoom && matchesMaterial && matchesVisibility && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Toast Alert */}
      {feedback && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-emerald-700 flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-bold">{feedback}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#e8ddcf] shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf7f2] border border-[#d7c4ac] text-xs font-semibold text-[#805e43] mb-2">
            <Gem className="w-3.5 h-3.5 text-[#9e7753]" />
            <span>TerraSilva Hivatalos Termékkatalógus & Bútorkezelő</span>
          </div>
          <h1 className="text-xl lg:text-2xl font-bold text-[#14171c]">Kategóriák, Típusok & Termékkezelés</h1>
          <p className="text-xs text-[#684d39] mt-1">
            Módosíts, törölj vagy adj hozzá bármilyen bútort, szobatípust, alapanyagot és kapcsold be a weboldali megjelenítést 1 kattintással.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowCategoryModal(true)}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-[#d7c4ac] bg-white text-[#553f31] text-xs font-semibold hover:bg-[#faf7f2] transition shadow-xs"
            title="Kategóriák & Anyagok Testreszabása"
          >
            <Settings className="w-4 h-4 text-[#9e7753]" />
            <span>Kategóriák & Anyagok Kezelése</span>
          </button>

          <Link
            href="/admin/studio"
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] text-xs font-semibold hover:bg-[#faf7f2] transition shadow-xs"
          >
            <Wand2 className="w-4 h-4 text-[#9e7753]" />
            <span>AI Fotóstúdió</span>
          </Link>

          <button
            onClick={() => {
              setActiveItem({
                id: "",
                sku: `TS-TRAV-${Math.floor(10 + Math.random() * 90)}`,
                name: "",
                room: rooms[0]?.id || "nappali",
                subType: "Dohányzóasztal",
                materialType: "travertine",
                materialDesc: "100% Természetes Olasz Navona Travertin, Matt Csiszolt",
                dimensions: "120 x 70 x 40 cm",
                sellingPriceHuf: 389000,
                purchasePriceUsd: 140,
                landedCostHuf: 82000,
                marginPercent: 78.9,
                physicalStock: 1,
                inTransitStock: 10,
                cbm: 0.35,
                isLive: true,
                imageTag: "Staging Szükséges",
              });
              setShowAddModal(true);
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#2e2118] transition shadow-xs"
          >
            <Plus className="w-4 h-4 text-[#d7c4ac]" />
            <span>+ Új Bútor Felvitele</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-5 rounded-3xl border border-[#e8ddcf] shadow-xs space-y-4">
        {/* Room Types */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-wider text-[#805e43] font-bold block">
              Szobatípus Szerinti Szűrés:
            </span>
            <button
              onClick={() => setShowCategoryModal(true)}
              className="text-[11px] text-[#9e7753] font-bold hover:underline flex items-center gap-1"
            >
              <Plus className="w-3 h-3" /> Új Kategória Hozzáadása
            </button>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedRoom("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedRoom === "all"
                  ? "bg-[#14171c] text-white shadow-xs"
                  : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
              }`}
            >
              Összes Szoba ({items.length})
            </button>
            {rooms.map((room) => {
              const count = items.filter((i) => i.room === room.id).length;
              return (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoom(room.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    selectedRoom === room.id
                      ? "bg-[#14171c] text-white shadow-xs"
                      : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
                  }`}
                >
                  {room.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Materials Filter */}
        <div className="pt-3 border-t border-[#f4ede4]">
          <span className="text-[11px] uppercase tracking-wider text-[#805e43] font-bold block mb-2">
            Anyaghasználat Szerinti Szűrés:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {materials.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                  selectedMaterial === mat.id
                    ? "bg-[#553f31] text-white shadow-xs"
                    : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
                }`}
              >
                {mat.colorHex && (
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/20"
                    style={{ backgroundColor: mat.colorHex }}
                  />
                )}
                <span>{mat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search & Webshop Visibility Status Filter */}
        <div className="pt-3 border-t border-[#f4ede4] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#805e43] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Keresés bútor név, cikkszám (SKU), travertin/márvány leírás alapján..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#805e43] mr-1">Weboldali Státusz:</span>
            <button
              onClick={() => setVisibilityFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                visibilityFilter === "all"
                  ? "bg-[#14171c] text-white"
                  : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
              }`}
            >
              Mind
            </button>
            <button
              onClick={() => setVisibilityFilter("live")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                visibilityFilter === "live"
                  ? "bg-emerald-700 text-white"
                  : "bg-emerald-50 text-emerald-800 border border-emerald-200"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Csak Éles ({items.filter((i) => i.isLive).length})</span>
            </button>
            <button
              onClick={() => setVisibilityFilter("draft")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                visibilityFilter === "draft"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-700 border border-gray-200"
              }`}
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Csak Rejtett ({items.filter((i) => !i.isLive).length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Catalog Table */}
      <div className="bg-white rounded-3xl border border-[#e8ddcf] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#14171c]">Bútorkatalógus Tételei</h2>
          <span className="text-xs text-[#805e43] font-medium">{filteredItems.length} bútor megjelenítve</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Bútor & Anyaghasználat</th>
                <th className="p-3 font-semibold">Szoba & Típus</th>
                <th className="p-3 font-semibold text-center">Fizikai Raktár</th>
                <th className="p-3 font-semibold text-center">Konténerben Úton</th>
                <th className="p-3 font-semibold text-right">Gyári Ár (USD)</th>
                <th className="p-3 font-semibold text-right">Landed Önköltség</th>
                <th className="p-3 font-semibold text-right">Eladási Ár (HUF)</th>
                <th className="p-3 font-semibold text-center">Árrés</th>
                <th className="p-3 font-semibold text-center">Weboldali Megjelenítés</th>
                <th className="p-3 font-semibold text-center rounded-r-lg">Műveletek</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-[#faf8f5] transition group">
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block text-sm">{item.name}</span>
                    <span className="text-[11px] text-[#805e43] block mt-0.5">{item.materialDesc}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-[10px] text-[#9e7753] font-semibold">{item.sku}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#faf7f2] text-[#805e43] border border-[#d7c4ac]">
                        {item.imageTag}
                      </span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block uppercase text-[10px] text-[#9e7753]">
                      {item.room}
                    </span>
                    <span className="font-semibold text-[#14171c] block text-xs">{item.subType}</span>
                    <span className="text-[11px] text-[#684d39] block">{item.dimensions}</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                      item.physicalStock > 0 ? "bg-emerald-100 text-emerald-800" : "bg-amber-50 text-amber-800"
                    }`}>
                      {item.physicalStock} db
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                      +{item.inTransitStock} db
                    </span>
                  </td>
                  <td className="p-3 text-right font-medium text-[#14171c]">
                    ${item.purchasePriceUsd}
                  </td>
                  <td className="p-3 text-right font-medium text-[#684d39]">
                    {new Intl.NumberFormat("hu-HU").format(item.landedCostHuf)} Ft
                  </td>
                  <td className="p-3 text-right font-bold text-[#14171c] text-sm">
                    {new Intl.NumberFormat("hu-HU").format(item.sellingPriceHuf)} Ft
                  </td>
                  <td className="p-3 text-center font-bold text-emerald-700">
                    <span className="bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {item.marginPercent}%
                    </span>
                  </td>
                  
                  {/* Webshop Visibility Switch */}
                  <td className="p-3 text-center">
                    <button
                      onClick={(e) => toggleLiveStatus(item.id, e)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold transition shadow-xs ${
                        item.isLive
                          ? "bg-emerald-100 text-emerald-900 border border-emerald-300 hover:bg-emerald-200"
                          : "bg-gray-100 text-gray-600 border border-gray-300 hover:bg-gray-200"
                      }`}
                      title="Kattints a láthatóság váltásához"
                    >
                      {item.isLive ? (
                        <>
                          <Eye className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Éles Webshopon</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3.5 h-3.5 text-gray-500" />
                          <span>Rejtett / Vázlat</span>
                        </>
                      )}
                    </button>
                  </td>

                  {/* Actions (Edit & Delete) */}
                  <td className="p-3 text-center">
                    <div className="inline-flex items-center gap-1">
                      <button
                        onClick={() => handleOpenEdit(item)}
                        className="p-1.5 rounded-lg text-[#553f31] hover:text-[#14171c] hover:bg-[#f4efe8] transition"
                        title="Bútor módosítása"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setShowDeleteConfirmId(item.id)}
                        className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Bútor törlése"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* EDIT PRODUCT MODAL */}
      {showEditModal && activeItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 border border-[#e8ddcf] shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8ddcf]">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#9e7753]" />
                <h3 className="font-bold text-base text-[#14171c]">Bútor Módosítása</h3>
              </div>
              <button
                onClick={() => setShowEditModal(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-[#553f31] block mb-1">Bútor Neve *</label>
                <input
                  type="text"
                  required
                  value={activeItem.name}
                  onChange={(e) => setActiveItem({ ...activeItem, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-bold text-[#14171c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Cikkszám (SKU)</label>
                  <input
                    type="text"
                    value={activeItem.sku}
                    onChange={(e) => setActiveItem({ ...activeItem, sku: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] font-mono"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Bútortípus</label>
                  <input
                    type="text"
                    value={activeItem.subType}
                    onChange={(e) => setActiveItem({ ...activeItem, subType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Szoba Kategória</label>
                  <select
                    value={activeItem.room}
                    onChange={(e) => setActiveItem({ ...activeItem, room: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  >
                    {rooms.map((r) => (
                      <option key={r.id} value={r.id}>{r.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Anyag Típus</label>
                  <select
                    value={activeItem.materialType}
                    onChange={(e) => setActiveItem({ ...activeItem, materialType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  >
                    {materials.filter((m) => m.id !== "all").map((m) => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-[#553f31] block mb-1">Részletes Anyagleírás</label>
                <input
                  type="text"
                  value={activeItem.materialDesc}
                  onChange={(e) => setActiveItem({ ...activeItem, materialDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Eladási Ár (HUF)</label>
                  <input
                    type="number"
                    value={activeItem.sellingPriceHuf}
                    onChange={(e) => setActiveItem({ ...activeItem, sellingPriceHuf: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Gyári Ár (USD)</label>
                  <input
                    type="number"
                    value={activeItem.purchasePriceUsd}
                    onChange={(e) => setActiveItem({ ...activeItem, purchasePriceUsd: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Méretek</label>
                  <input
                    type="text"
                    value={activeItem.dimensions}
                    onChange={(e) => setActiveItem({ ...activeItem, dimensions: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Fizikai Raktárkészlet (db)</label>
                  <input
                    type="number"
                    value={activeItem.physicalStock}
                    onChange={(e) => setActiveItem({ ...activeItem, physicalStock: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Konténerben Úton (db)</label>
                  <input
                    type="number"
                    value={activeItem.inTransitStock}
                    onChange={(e) => setActiveItem({ ...activeItem, inTransitStock: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  />
                </div>
              </div>

              {/* Webshop Visibility Toggle in Edit Modal */}
              <div className="p-3 rounded-2xl bg-[#faf7f2] border border-[#e8ddcf] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#14171c] block">Megjelenítés a Weboldalon</span>
                  <span className="text-[11px] text-[#805e43]">
                    {activeItem.isLive ? "A termék azonnal látható és rendelhető a látogatóknak" : "A termék elrejtve, csak adminisztrátorok látják"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveItem({ ...activeItem, isLive: !activeItem.isLive })}
                  className={`px-3.5 py-2 rounded-xl font-bold text-xs transition flex items-center gap-1.5 ${
                    activeItem.isLive
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {activeItem.isLive ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  <span>{activeItem.isLive ? "Éles (Bekapcsolva)" : "Kikapcsolva"}</span>
                </button>
              </div>

              <div className="pt-3 border-t border-[#e8ddcf] flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 rounded-xl border border-[#e8ddcf] text-xs font-semibold text-[#553f31] hover:bg-[#faf8f5]"
                >
                  Mégse
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#2e2118] shadow-xs flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Változtatások Mentése</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE NEW PRODUCT MODAL */}
      {showAddModal && activeItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 border border-[#e8ddcf] shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8ddcf]">
              <div className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#9e7753]" />
                <h3 className="font-bold text-base text-[#14171c]">Új Bútor Felvitele a Katalógusba</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold text-[#553f31] block mb-1">Bútor Neve *</label>
                <input
                  type="text"
                  required
                  placeholder="pl. Monolit Romano Travertin TV-Szekrény"
                  value={activeItem.name}
                  onChange={(e) => setActiveItem({ ...activeItem, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] font-bold text-[#14171c]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Szoba Kategória</label>
                  <select
                    value={activeItem.room}
                    onChange={(e) => setActiveItem({ ...activeItem, room: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  >
                    {rooms.map((r) => (
                      <option key={r.id} value={r.id}>{r.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Fő Anyag</label>
                  <select
                    value={activeItem.materialType}
                    onChange={(e) => setActiveItem({ ...activeItem, materialType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  >
                    {materials.filter((m) => m.id !== "all").map((m) => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Bútortípus</label>
                  <input
                    type="text"
                    placeholder="pl. TV-szekrény / Étkezőasztal"
                    value={activeItem.subType}
                    onChange={(e) => setActiveItem({ ...activeItem, subType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Méretek</label>
                  <input
                    type="text"
                    placeholder="pl. 200 x 45 x 50 cm"
                    value={activeItem.dimensions}
                    onChange={(e) => setActiveItem({ ...activeItem, dimensions: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Eladási Ár (HUF)</label>
                  <input
                    type="number"
                    value={activeItem.sellingPriceHuf}
                    onChange={(e) => setActiveItem({ ...activeItem, sellingPriceHuf: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Gyári Beszerzési Ár (USD)</label>
                  <input
                    type="number"
                    value={activeItem.purchasePriceUsd}
                    onChange={(e) => setActiveItem({ ...activeItem, purchasePriceUsd: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-[#553f31] block mb-1">Részletes Anyagleírás</label>
                <input
                  type="text"
                  placeholder="pl. 100% Natúr Romano Travertin Mészkő, Matt Impregnált"
                  value={activeItem.materialDesc}
                  onChange={(e) => setActiveItem({ ...activeItem, materialDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                />
              </div>

              {/* Webshop Visibility Toggle */}
              <div className="p-3 rounded-2xl bg-[#faf7f2] border border-[#e8ddcf] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#14171c] block">Azonnali Weboldali Megjelenítés</span>
                  <span className="text-[11px] text-[#805e43]">
                    {activeItem.isLive ? "A termék közzétéve a vásárlók felé" : "Rejtett vázlatként mentve"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveItem({ ...activeItem, isLive: !activeItem.isLive })}
                  className={`px-3.5 py-2 rounded-xl font-bold text-xs transition flex items-center gap-1.5 ${
                    activeItem.isLive
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {activeItem.isLive ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  <span>{activeItem.isLive ? "Éles Webshopon" : "Piszkozat"}</span>
                </button>
              </div>

              <div className="pt-3 border-t border-[#e8ddcf] flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl border border-[#e8ddcf] text-xs font-semibold text-[#553f31] hover:bg-[#faf8f5]"
                >
                  Mégse
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#2e2118] shadow-xs flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Bútor Mentése</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CATEGORY & MATERIAL MANAGER MODAL */}
      {showCategoryModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 border border-[#e8ddcf] shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8ddcf]">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#9e7753]" />
                <h3 className="font-bold text-base text-[#14171c]">Kategóriák & Alapanyagok Menedzsmentje</h3>
              </div>
              <button
                onClick={() => setShowCategoryModal(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* Room Categories */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#14171c]">
                  <FolderPlus className="w-4 h-4 text-[#9e7753]" />
                  <span>Szobatípus Kategóriák ({rooms.length})</span>
                </div>

                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {rooms.map((r) => (
                    <div key={r.id} className="flex items-center justify-between p-2 rounded-xl bg-[#faf8f5] border border-[#e8ddcf]">
                      <span className="font-bold text-[#553f31]">{r.name}</span>
                      <span className="text-[10px] text-gray-500 font-mono">#{r.id}</span>
                    </div>
                  ))}
                </div>

                {/* Add new Room form */}
                <form onSubmit={handleAddRoom} className="flex gap-2 pt-2">
                  <input
                    type="text"
                    placeholder="Új szoba (pl. Hálószoba)"
                    value={newRoomName}
                    onChange={(e) => setNewRoomName(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none text-xs"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-[#9e7753] text-white font-bold hover:bg-[#866343] transition"
                  >
                    + Hozzáad
                  </button>
                </form>
              </div>

              {/* Material Types */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#14171c]">
                  <Palette className="w-4 h-4 text-[#9e7753]" />
                  <span>Alapanyagok & Textúrák ({materials.length - 1})</span>
                </div>

                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {materials.filter((m) => m.id !== "all").map((m) => (
                    <div key={m.id} className="flex items-center justify-between p-2 rounded-xl bg-[#faf8f5] border border-[#e8ddcf]">
                      <div className="flex items-center gap-2">
                        {m.colorHex && (
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/20"
                            style={{ backgroundColor: m.colorHex }}
                          />
                        )}
                        <span className="font-bold text-[#553f31]">{m.name}</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-mono">#{m.id}</span>
                    </div>
                  ))}
                </div>

                {/* Add new Material form */}
                <form onSubmit={handleAddMaterial} className="flex gap-2 pt-2">
                  <input
                    type="color"
                    value={newMaterialColor}
                    onChange={(e) => setNewMaterialColor(e.target.value)}
                    className="w-9 h-9 p-0.5 rounded-xl border border-[#e8ddcf] cursor-pointer bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Új anyag (pl. Ónix Kő)"
                    value={newMaterialName}
                    onChange={(e) => setNewMaterialName(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none text-xs"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-[#9e7753] text-white font-bold hover:bg-[#866343] transition"
                  >
                    + Hozzáad
                  </button>
                </form>
              </div>
            </div>

            <div className="pt-3 border-t border-[#e8ddcf] flex justify-end">
              <button
                onClick={() => setShowCategoryModal(false)}
                className="px-5 py-2 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#2e2118]"
              >
                Kész
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION DIALOG */}
      {showDeleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 border border-rose-200 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-3 text-rose-600">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h3 className="font-bold text-base text-[#14171c]">Biztosan törlöd a bútort?</h3>
            </div>
            <p className="text-xs text-[#684d39]">
              Ez a művelet véglegesen eltávolítja a kiválasztott tételt a termékkatalógusból és a weboldalról is.
            </p>
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={() => setShowDeleteConfirmId(null)}
                className="px-4 py-2 rounded-xl bg-gray-100 text-gray-700 font-semibold text-xs hover:bg-gray-200"
              >
                Mégse
              </button>
              <button
                onClick={() => handleDeleteItem(showDeleteConfirmId)}
                className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 shadow-xs"
              >
                Igen, Törlés
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
