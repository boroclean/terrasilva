"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  Filter, 
  Sparkles, 
  Layers, 
  Eye, 
  EyeOff,
  Edit3, 
  Trash2, 
  Check, 
  Wand2, 
  Camera, 
  ArrowRight,
  Settings,
  X,
  CheckCircle2,
  AlertTriangle,
  FolderPlus,
  Palette,
  Globe,
  Languages
} from "lucide-react";
import { ROOM_CATEGORIES, MATERIALS, RoomCategory, MaterialOption } from "@/lib/categories";

export interface CatalogItem {
  id: string;
  sku: string;
  name: string;
  nameEn?: string;
  room: string;
  subType: string;
  subTypeEn?: string;
  materialType: string;
  materialDesc: string;
  materialDescEn?: string;
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
    nameEn: "Aura Navona Travertine Coffee Table",
    room: "nappali",
    subType: "Dohányzóasztalok",
    subTypeEn: "Coffee Tables",
    materialType: "travertine",
    materialDesc: "100% Természetes Olasz Navona Travertin, Matt Csiszolt",
    materialDescEn: "100% Authentic Italian Navona Travertine, Matte Honed",
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
    nameEn: "Monolith Travertine TV Console & Media Unit",
    room: "nappali",
    subType: "TV-szekrények",
    subTypeEn: "Media Consoles",
    materialType: "travertine",
    materialDesc: "Romano Travertin Keret + Diófa Lamellás Front",
    materialDescEn: "Solid Romano Travertine Shell + Walnut Slatted Front",
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
    nameEn: "Silva Bianco Carrara Dining Table (Seats 8)",
    room: "etkezo",
    subType: "Étkezőasztalok",
    subTypeEn: "Dining Tables",
    materialType: "marble",
    materialDesc: "Fehér Carrara Márványlap + Tömör Amerikai Diófa Talapzat",
    materialDescEn: "Bianco Carrara Marble Slab + American Walnut Pedestal",
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
    nameEn: "Silva Solid American Walnut Dining Table",
    room: "etkezo",
    subType: "Étkezőasztalok",
    subTypeEn: "Dining Tables",
    materialType: "wood",
    materialDesc: "Tömör Amerikai Diófa Palló, Matt Kézműves Olajozás",
    materialDescEn: "Solid American Walnut Planks, Handcrafted Organic Oil",
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
    nameEn: "Monolith Fluted Travertine Console Table",
    room: "eloszoba",
    subType: "Monolit Konzolok",
    subTypeEn: "Monolith Consoles",
    materialType: "travertine",
    materialDesc: "Tömör Kannelúrázott Travertin Kőtömb Faragvány",
    materialDescEn: "Hand-Carved Fluted Solid Travertine Monolith",
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
    nameEn: "Silva Royale Lounge Chair in Walnut & Bouclé",
    room: "nappali",
    subType: "Fotelek",
    subTypeEn: "Lounge Chairs",
    materialType: "upholstery",
    materialDesc: "Tömör Natúr Diófa Keret, Prémium Olasz Bouclé Kárpit",
    materialDescEn: "Solid Walnut Frame, Tactile Italian Wool Bouclé",
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
    nameEn: "Aura Translucent Alabaster & Travertine Lamp",
    room: "vilagitas",
    subType: "Kő Lámpatestek",
    subTypeEn: "Stone Lamps",
    materialType: "travertine",
    materialDesc: "Faragott Travertin Talp, Átvilágítható Alabástrom Gömb",
    materialDescEn: "Carved Travertine Base, Translucent Alabaster Orb",
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
  const [selectedSubType, setSelectedSubType] = useState<string>("all");
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

  // Category Manager Inputs (with English support)
  const [newRoomName, setNewRoomName] = useState("");
  const [newRoomNameEn, setNewRoomNameEn] = useState("");
  const [newMaterialName, setNewMaterialName] = useState("");
  const [newMaterialNameEn, setNewMaterialNameEn] = useState("");
  const [newMaterialColor, setNewMaterialColor] = useState("#c5a880");
  const [targetRoomForSubType, setTargetRoomForSubType] = useState<string>("nappali");
  const [newSubTypeName, setNewSubTypeName] = useState("");
  const [newSubTypeNameEn, setNewSubTypeNameEn] = useState("");

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("terrasilva_catalog");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved catalog", e);
      }
    }
  }, []);

  // Save to LocalStorage whenever items change
  const saveItems = (updated: CatalogItem[]) => {
    setItems(updated);
    localStorage.setItem("terrasilva_catalog", JSON.stringify(updated));
  };

  const showFeedbackMsg = (msg: string) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(null), 3000);
  };

  // Helper to Auto-Generate Luxury English Name
  const autoGenerateEnglishName = () => {
    if (!activeItem) return;
    let enName = activeItem.name
      .replace(/Étkezőasztal/gi, "Dining Table")
      .replace(/Dohányzóasztal/gi, "Coffee Table")
      .replace(/TV-Szekrény/gi, "TV Console")
      .replace(/Médiafal/gi, "Media Wall")
      .replace(/Fotel/gi, "Lounge Chair")
      .replace(/Asztali Lámpa/gi, "Table Lamp")
      .replace(/Konzol/gi, "Console Table")
      .replace(/Oszlop/gi, "Column Pedestal")
      .replace(/Travertin/gi, "Travertine")
      .replace(/Márvány/gi, "Marble")
      .replace(/Diófa/gi, "American Walnut")
      .replace(/Tölgyfa/gi, "Oak");

    let enDesc = activeItem.materialDesc
      .replace(/Természetes/gi, "Natural")
      .replace(/Olasz/gi, "Italian")
      .replace(/Mészkő/gi, "Limestone")
      .replace(/Matt Csiszolt/gi, "Matte Honed")
      .replace(/Tömör/gi, "Solid")
      .replace(/Márvány/gi, "Marble");

    setActiveItem({
      ...activeItem,
      nameEn: enName,
      materialDescEn: enDesc,
    });
    showFeedbackMsg("✨ Angol elnevezés és anyagleírás automatikusan legenerálva!");
  };

  // Quick 1-Click Toggle for Webshop Visibility
  const handleToggleLive = (id: string) => {
    const updated = items.map((item) => {
      if (item.id === id) {
        const nextState = !item.isLive;
        showFeedbackMsg(
          nextState 
            ? `🟢 "${item.name}" közzétéve a termékkatalógusban!` 
            : `⚪ "${item.name}" rejtve lett (Piszkozat).`
        );
        return { ...item, isLive: nextState };
      }
      return item;
    });
    saveItems(updated);
  };

  // Open Edit Modal
  const handleEditClick = (item: CatalogItem) => {
    setActiveItem({ ...item });
    setShowEditModal(true);
  };

  // Save Edited Product
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeItem) return;

    const updated = items.map((i) => (i.id === activeItem.id ? activeItem : i));
    saveItems(updated);
    setShowEditModal(false);
    showFeedbackMsg(`✓ "${activeItem.name}" és angol adatai frissítve!`);
  };

  // Open Add Product Modal
  const handleOpenAdd = () => {
    const newSkuNum = items.length + 1;
    const newItem: CatalogItem = {
      id: `ts-${Date.now().toString().slice(-4)}`,
      sku: `TS-PROD-${String(newSkuNum).padStart(2, "0")}`,
      name: "",
      nameEn: "",
      room: selectedRoom === "all" ? "nappali" : selectedRoom,
      subType: selectedSubType === "all" ? "Dohányzóasztalok" : selectedSubType,
      subTypeEn: "",
      materialType: selectedMaterial === "all" ? "travertine" : selectedMaterial,
      materialDesc: "100% Természetes Olasz Travertin",
      materialDescEn: "100% Natural Italian Travertine",
      dimensions: "120 x 60 x 40 cm",
      sellingPriceHuf: 299000,
      purchasePriceUsd: 120,
      landedCostHuf: 75000,
      marginPercent: 74.9,
      physicalStock: 1,
      inTransitStock: 0,
      cbm: 0.4,
      isLive: true,
      imageTag: "Staging Folyamatban",
    };
    setActiveItem(newItem);
    setShowAddModal(true);
  };

  // Create New Product
  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeItem || !activeItem.name) return;

    const updated = [activeItem, ...items];
    saveItems(updated);
    setShowAddModal(false);
    showFeedbackMsg(`🎉 "${activeItem.name}" sikeresen felvéve a katalógusba!`);
  };

  // Delete Product
  const handleDeleteItem = (id: string) => {
    const target = items.find((i) => i.id === id);
    const updated = items.filter((i) => i.id !== id);
    saveItems(updated);
    setShowDeleteConfirmId(null);
    showFeedbackMsg(`🗑️ "${target?.name || "Termék"}" törölve.`);
  };

  // Add New Subtype to a Room Category
  const handleAddSubType = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubTypeName) return;

    const newSlug = newSubTypeName.toLowerCase().replace(/\s+/g, "-");
    const updatedRooms = rooms.map((r) => {
      if (r.id === targetRoomForSubType) {
        return {
          ...r,
          subTypes: [
            ...r.subTypes,
            { id: newSlug, name: newSubTypeName, nameEn: newSubTypeNameEn || newSubTypeName, slug: newSlug }
          ]
        };
      }
      return r;
    });

    setRooms(updatedRooms);
    setNewSubTypeName("");
    setNewSubTypeNameEn("");
    showFeedbackMsg(`✓ Új bútortípus hozzáadva: "${newSubTypeName}"`);
  };

  // Delete Subtype from a Room
  const handleDeleteSubType = (roomId: string, subTypeId: string) => {
    const updatedRooms = rooms.map((r) => {
      if (r.id === roomId) {
        return {
          ...r,
          subTypes: r.subTypes.filter((st) => st.id !== subTypeId)
        };
      }
      return r;
    });
    setRooms(updatedRooms);
    showFeedbackMsg("✓ Bútortípus eltávolítva a kategóriából.");
  };

  // Add New Room Category
  const handleAddRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoomName) return;

    const newSlug = newRoomName.toLowerCase().replace(/\s+/g, "-");
    const newRoom: RoomCategory = {
      id: newSlug,
      name: newRoomName,
      nameEn: newRoomNameEn || newRoomName,
      slug: newSlug,
      iconName: "Boxes",
      imageUrl: "/kepek/categories/nappali.jpg",
      description: "Egyedi kategória bútorai",
      descriptionEn: "Custom room collection pieces",
      subTypes: [
        { id: "all", name: `Összes ${newRoomName}`, nameEn: `All ${newRoomNameEn || newRoomName}`, slug: "all" },
        { id: "alap-tipus", name: "Alap Bútortípus", nameEn: "Standard Piece", slug: "alap-tipus" }
      ]
    };

    setRooms([...rooms, newRoom]);
    setNewRoomName("");
    setNewRoomNameEn("");
    showFeedbackMsg(`✓ Új fő kategória hozzáadva: "${newRoomName}"`);
  };

  // Add New Material
  const handleAddMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMaterialName) return;

    const newSlug = newMaterialName.toLowerCase().replace(/\s+/g, "-");
    const newMat: MaterialOption = {
      id: newSlug,
      name: newMaterialName,
      nameEn: newMaterialNameEn || newMaterialName,
      colorHex: newMaterialColor,
      description: "Egyedi felület & prémium minőség",
      descriptionEn: "Custom surface & premium quality",
    };

    setMaterials([...materials, newMat]);
    setNewMaterialName("");
    setNewMaterialNameEn("");
    showFeedbackMsg(`✓ Új anyag hozzáadva: "${newMaterialName}"`);
  };

  // Filter Items
  const filteredItems = items.filter((item) => {
    const matchesRoom = selectedRoom === "all" || item.room === selectedRoom;
    const matchesSubType = 
      selectedSubType === "all" || 
      item.subType.toLowerCase().includes(selectedSubType.toLowerCase()) ||
      (selectedSubType === "dohanzoasztal" && item.subType.toLowerCase().includes("dohányzó"));
    const matchesMaterial = selectedMaterial === "all" || item.materialType === selectedMaterial;
    
    const matchesVisibility = 
      visibilityFilter === "all" || 
      (visibilityFilter === "live" && item.isLive) || 
      (visibilityFilter === "draft" && !item.isLive);

    const matchesSearch = 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      (item.nameEn && item.nameEn.toLowerCase().includes(search.toLowerCase())) ||
      item.sku.toLowerCase().includes(search.toLowerCase()) ||
      item.materialDesc.toLowerCase().includes(search.toLowerCase());

    return matchesRoom && matchesSubType && matchesMaterial && matchesVisibility && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Toast Feedback Notification */}
      {feedback && (
        <div className="fixed top-20 right-6 z-50 bg-[#14171c] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#9e7753] flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-top duration-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#9e7753] font-bold">
            Bútor Kereskedelmi & Webshop Rendszer
          </span>
          <h1 className="text-2xl md:text-3xl font-bold font-serif text-[#14171c]">
            Termékkatalógus & Kétnyelvű Tartalomkezelő (HU / EN)
          </h1>
          <p className="text-xs text-[#805e43] mt-1">
            Kezeld a webshopban megjelenő bútorokat, magyar és angol elnevezéseket, szobakategóriákat és azonnali élő megjelenítést.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowCategoryModal(true)}
            className="px-3.5 py-2.5 rounded-xl border border-[#d7c4ac] bg-white text-[#805e43] font-semibold text-xs hover:bg-[#faf7f2] transition flex items-center gap-1.5 shadow-2xs"
          >
            <Settings className="w-3.5 h-3.5 text-[#9e7753]" />
            <span>Kategóriák & Angol Nevek</span>
          </button>

          <button
            onClick={handleOpenAdd}
            className="px-4 py-2.5 rounded-xl bg-[#14171c] text-white font-bold text-xs hover:bg-[#2e2118] transition flex items-center gap-1.5 shadow-xs"
          >
            <Plus className="w-4 h-4 text-[#d7c4ac]" />
            <span>+ Új Bútor Felvitele</span>
          </button>
        </div>
      </div>

      {/* Multi-Level Filtering Panel */}
      <div className="bg-white rounded-3xl border border-[#e8ddcf] p-5 shadow-xs space-y-4">
        {/* 1. Room Level */}
        <div>
          <span className="text-[11px] uppercase tracking-wider text-[#805e43] font-bold block mb-2">
            1. Szobatípus Kategória:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => {
                setSelectedRoom("all");
                setSelectedSubType("all");
              }}
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
                  onClick={() => {
                    setSelectedRoom(room.id);
                    setSelectedSubType("all");
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-1.5 ${
                    selectedRoom === room.id
                      ? "bg-[#14171c] text-white shadow-xs"
                      : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
                  }`}
                >
                  <span>{room.name}</span>
                  {room.nameEn && <span className="text-[10px] opacity-70 font-normal">({room.nameEn})</span>}
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedRoom === room.id ? "bg-white/20 text-white" : "bg-white text-[#805e43] border border-[#e8ddcf]"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Subtypes in Room */}
        <div className="pt-3 border-t border-[#f4ede4]">
          <span className="text-[11px] uppercase tracking-wider text-[#805e43] font-bold block mb-2">
            2. Bútortípus (Szűrés):
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setSelectedSubType("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedSubType === "all"
                  ? "bg-[#9e7753] text-white shadow-xs"
                  : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
              }`}
            >
              Összes Típus
            </button>
            {rooms.find(r => r.id === selectedRoom)?.subTypes.filter(st => st.id !== "all").map((sub) => {
              const count = items.filter((i) => {
                const matchesRoom = selectedRoom === "all" || i.room === selectedRoom;
                const itemSub = (i.subType || "").toLowerCase();
                const subName = sub.name.toLowerCase();
                return matchesRoom && (itemSub === sub.slug || itemSub.includes(subName) || subName.includes(itemSub));
              }).length;

              return (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubType(sub.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                    selectedSubType === sub.id
                      ? "bg-[#9e7753] text-white shadow-xs"
                      : "bg-[#faf7f2] text-[#553f31] border border-[#e8ddcf] hover:bg-[#f4efe8]"
                  }`}
                >
                  {sub.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Search & Webshop Visibility Status Filter */}
        <div className="pt-3 border-t border-[#f4ede4] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#805e43] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Keresés magyar vagy angol név, cikkszám (SKU), leírás alapján..."
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
          <h2 className="text-sm font-bold text-[#14171c]">Bútorkatalógus Tételei (Kétnyelvű Rendszer)</h2>
          <span className="text-xs text-[#805e43] font-medium">{filteredItems.length} bútor megjelenítve</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#f4efe8] text-[#553f31]">
              <tr>
                <th className="p-3 font-semibold rounded-l-lg">Bútor (HU & EN)</th>
                <th className="p-3 font-semibold">Szoba & Típus</th>
                <th className="p-3 font-semibold text-center">Fizikai Raktár</th>
                <th className="p-3 font-semibold text-center">Konténerben Úton</th>
                <th className="p-3 font-semibold text-right">Eladási Ár (HUF)</th>
                <th className="p-3 font-semibold text-center">Weboldali Megjelenítés</th>
                <th className="p-3 font-semibold text-center rounded-r-lg">Műveletek</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f4efe8]">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-[#faf8f5] transition group">
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block text-sm">{item.name}</span>
                    {item.nameEn ? (
                      <span className="text-[11px] text-[#9e7753] font-semibold flex items-center gap-1 mt-0.5">
                        <span>🇬🇧</span>
                        <span>{item.nameEn}</span>
                      </span>
                    ) : (
                      <span className="text-[10px] text-amber-600 italic mt-0.5 block">
                        ⚠️ Nincs megadva angol név
                      </span>
                    )}
                    <span className="text-[11px] text-[#805e43] block mt-1">{item.materialDesc}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-[10px] text-[#9e7753] font-semibold">{item.sku}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#faf7f2] text-[#805e43] border border-[#d7c4ac]">
                        {item.imageTag}
                      </span>
                    </div>
                  </td>
                  <td className="p-3">
                    <span className="font-bold text-[#14171c] block uppercase text-[10px] text-[#9e7753]">
                      {rooms.find(r => r.id === item.room)?.name || item.room}
                    </span>
                    <span className="font-semibold text-[#14171c] block text-xs bg-[#faf8f5] px-2 py-0.5 rounded border border-[#e8ddcf] inline-block mt-0.5">
                      {item.subType}
                    </span>
                    <span className="text-[11px] text-[#684d39] block mt-0.5">{item.dimensions}</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                      item.physicalStock > 0 ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
                    }`}>
                      {item.physicalStock} db
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                      +{item.inTransitStock} db
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span className="font-bold text-[#14171c] text-sm font-serif block">
                      {item.sellingPriceHuf.toLocaleString("hu-HU")} Ft
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      +{item.marginPercent}% árrés
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleToggleLive(item.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 mx-auto ${
                        item.isLive
                          ? "bg-emerald-600 text-white shadow-xs hover:bg-emerald-700"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      title={item.isLive ? "Kattints az elrejtéshez" : "Kattints az élesítéshez"}
                    >
                      {item.isLive ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      <span>{item.isLive ? "Éles" : "Piszkozat"}</span>
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => handleEditClick(item)}
                        className="p-2 rounded-xl bg-[#faf7f2] hover:bg-[#9e7753] hover:text-white text-[#553f31] transition border border-[#e8ddcf]"
                        title="Bútor & Angol Név Szerkesztése"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirmId(item.id)}
                        className="p-2 rounded-xl bg-[#faf7f2] hover:bg-rose-600 hover:text-white text-[#553f31] transition border border-[#e8ddcf]"
                        title="Törlés"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* EDIT MODAL WITH BILINGUAL HU / EN FIELDS */}
      {showEditModal && activeItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 border border-[#e8ddcf] shadow-2xl space-y-4 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8ddcf]">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#9e7753]" />
                <h3 className="font-bold text-base text-[#14171c]">
                  Bútor és Angol Megnevezések Szerkesztése
                </h3>
              </div>
              <button
                onClick={() => setShowEditModal(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              
              {/* Multilingual Names Box */}
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8ddcf] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#14171c] flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#9e7753]" />
                    <span>Kétnyelvű Terméknév (HU / EN)</span>
                  </span>
                  <button
                    type="button"
                    onClick={autoGenerateEnglishName}
                    className="px-2.5 py-1 rounded-lg bg-white border border-[#d7c4ac] text-[11px] font-bold text-[#805e43] hover:bg-[#14171c] hover:text-white transition flex items-center gap-1"
                  >
                    <Wand2 className="w-3 h-3 text-[#9e7753]" />
                    <span>✨ Angol név AI kitöltése</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-[#553f31] block mb-1">🇭🇺 Név (Magyar) *</label>
                    <input
                      type="text"
                      required
                      value={activeItem.name}
                      onChange={(e) => setActiveItem({ ...activeItem, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-white font-bold text-[#14171c]"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#553f31] block mb-1">🇬🇧 Név (Angol / English Name)</label>
                    <input
                      type="text"
                      placeholder="e.g. Aura Monolith Travertine Dining Table"
                      value={activeItem.nameEn || ""}
                      onChange={(e) => setActiveItem({ ...activeItem, nameEn: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-white font-bold text-[#14171c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="font-bold text-[#553f31] block mb-1">🇭🇺 Anyagleírás (Magyar)</label>
                    <input
                      type="text"
                      value={activeItem.materialDesc}
                      onChange={(e) => setActiveItem({ ...activeItem, materialDesc: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[#553f31] block mb-1">🇬🇧 Anyagleírás (Angol)</label>
                    <input
                      type="text"
                      placeholder="e.g. 100% Authentic Italian Travertine, Honed"
                      value={activeItem.materialDescEn || ""}
                      onChange={(e) => setActiveItem({ ...activeItem, materialDescEn: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-white text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Category and SubType */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Szoba Kategória</label>
                  <select
                    value={activeItem.room}
                    onChange={(e) => setActiveItem({ ...activeItem, room: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  >
                    {rooms.map((r) => (
                      <option key={r.id} value={r.id}>{r.name} ({r.nameEn || r.id})</option>
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
                    value={activeItem.subType}
                    onChange={(e) => setActiveItem({ ...activeItem, subType: e.target.value })}
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

              {/* Price and Stock */}
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
                  <label className="font-bold text-[#553f31] block mb-1">Raktárkészlet (db)</label>
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

              {/* Webshop Visibility Toggle */}
              <div className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[#e8ddcf] flex items-center justify-between">
                <div>
                  <span className="font-bold text-[#14171c] block">Weboldali Megjelenítés</span>
                  <span className="text-[11px] text-[#805e43]">
                    {activeItem.isLive ? "A termék azonnal látható a vásárlóknak" : "Rejtve (piszkozat állapotban)"}
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
                  <span>{activeItem.isLive ? "Éles" : "Piszkozat"}</span>
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

      {/* CREATE MODAL */}
      {showAddModal && activeItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 border border-[#e8ddcf] shadow-2xl space-y-4 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8ddcf]">
              <div className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#9e7753]" />
                <h3 className="font-bold text-base text-[#14171c]">Új Bútor Felvitele (Kétnyelvű Támogatással)</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8ddcf] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#14171c] flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-[#9e7753]" />
                    <span>Termék Megnevezése (HU & EN)</span>
                  </span>
                  <button
                    type="button"
                    onClick={autoGenerateEnglishName}
                    className="px-2.5 py-1 rounded-lg bg-white border border-[#d7c4ac] text-[11px] font-bold text-[#805e43] hover:bg-[#14171c] hover:text-white transition flex items-center gap-1"
                  >
                    <Wand2 className="w-3 h-3 text-[#9e7753]" />
                    <span>✨ Angol név AI kitöltése</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-[#553f31] block mb-1">🇭🇺 Bútor Neve (Magyar) *</label>
                    <input
                      type="text"
                      required
                      placeholder="pl. Aura Monolit Travertin Étkezőasztal"
                      value={activeItem.name}
                      onChange={(e) => setActiveItem({ ...activeItem, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-white font-bold text-[#14171c]"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-[#553f31] block mb-1">🇬🇧 Bútor Neve (Angol)</label>
                    <input
                      type="text"
                      placeholder="pl. Aura Monolith Travertine Dining Table"
                      value={activeItem.nameEn || ""}
                      onChange={(e) => setActiveItem({ ...activeItem, nameEn: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-white font-bold text-[#14171c]"
                    />
                  </div>
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
                      <option key={r.id} value={r.id}>{r.name} ({r.nameEn || r.id})</option>
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
                  <label className="font-bold text-[#553f31] block mb-1">Eladási Ár (HUF)</label>
                  <input
                    type="number"
                    value={activeItem.sellingPriceHuf}
                    onChange={(e) => setActiveItem({ ...activeItem, sellingPriceHuf: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">Méretek</label>
                  <input
                    type="text"
                    placeholder="pl. 200 x 100 x 76 cm"
                    value={activeItem.dimensions}
                    onChange={(e) => setActiveItem({ ...activeItem, dimensions: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5]"
                  />
                </div>
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

      {/* CATEGORY & SUBTYPES & MATERIAL MANAGER MODAL */}
      {showCategoryModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 border border-[#e8ddcf] shadow-2xl space-y-5 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8ddcf]">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#9e7753]" />
                <h3 className="font-bold text-base text-[#14171c]">
                  Kategóriák, Bútortípusok & Angol Nevek Kezelése
                </h3>
              </div>
              <button
                onClick={() => setShowCategoryModal(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              {/* SECTION 1: SubTypes Manager */}
              <div className="space-y-3 md:col-span-2 bg-[#faf7f2] p-4 rounded-2xl border border-[#e8ddcf]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-bold text-[#14171c]">
                    <Layers className="w-4 h-4 text-[#9e7753]" />
                    <span>Szobán Belüli Bútortípusok (HU / EN)</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#805e43]">Szoba:</span>
                    <select
                      value={targetRoomForSubType}
                      onChange={(e) => setTargetRoomForSubType(e.target.value)}
                      className="px-3 py-1.5 rounded-xl border border-[#e8ddcf] bg-white font-bold text-[#14171c]"
                    >
                      {rooms.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                  {rooms
                    .find((r) => r.id === targetRoomForSubType)
                    ?.subTypes.filter((st) => st.id !== "all")
                    .map((st) => (
                      <div
                        key={st.id}
                        className="flex items-center justify-between p-2 rounded-xl bg-white border border-[#e8ddcf]"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#14171c]">{st.name}</span>
                          {st.nameEn && (
                            <span className="text-[10px] text-[#9e7753] font-semibold">🇬🇧 {st.nameEn}</span>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteSubType(targetRoomForSubType, st.id)}
                          className="p-1 text-gray-400 hover:text-rose-600 rounded"
                          title="Bútortípus törlése"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                </div>

                {/* Add new Subtype form with HU and EN */}
                <form onSubmit={handleAddSubType} className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-2 border-t border-[#e8ddcf]">
                  <input
                    type="text"
                    required
                    placeholder="Magyar név (pl. TV-állvány)"
                    value={newSubTypeName}
                    onChange={(e) => setNewSubTypeName(e.target.value)}
                    className="sm:col-span-5 px-3 py-2 rounded-xl border border-[#e8ddcf] bg-white text-xs font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="Angol név (pl. TV Console)"
                    value={newSubTypeNameEn}
                    onChange={(e) => setNewSubTypeNameEn(e.target.value)}
                    className="sm:col-span-4 px-3 py-2 rounded-xl border border-[#e8ddcf] bg-white text-xs font-semibold"
                  />
                  <button
                    type="submit"
                    className="sm:col-span-3 px-3 py-2 rounded-xl bg-[#14171c] text-white font-bold hover:bg-[#2e2118] transition flex items-center justify-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#d7c4ac]" />
                    <span>+ Hozzáad</span>
                  </button>
                </form>
              </div>

              {/* SECTION 2: Room Categories */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#14171c]">
                  <FolderPlus className="w-4 h-4 text-[#9e7753]" />
                  <span>Fő Szobatípus Kategóriák ({rooms.length})</span>
                </div>

                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {rooms.map((r) => (
                    <div key={r.id} className="flex items-center justify-between p-2 rounded-xl bg-[#faf8f5] border border-[#e8ddcf]">
                      <div>
                        <span className="font-bold text-[#553f31]">{r.name}</span>
                        {r.nameEn && <span className="text-[10px] text-[#9e7753] block">🇬🇧 {r.nameEn}</span>}
                      </div>
                      <span className="text-[10px] text-gray-500 font-mono">#{r.id}</span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAddRoom} className="space-y-2 pt-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Magyar név (pl. Háló)"
                      value={newRoomName}
                      onChange={(e) => setNewRoomName(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Angol név (Bedroom)"
                      value={newRoomNameEn}
                      onChange={(e) => setNewRoomNameEn(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] text-xs"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-[#9e7753] text-white font-bold hover:bg-[#866343] transition"
                  >
                    + Új Szoba Kategória
                  </button>
                </form>
              </div>

              {/* SECTION 3: Material Types */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#14171c]">
                  <Palette className="w-4 h-4 text-[#9e7753]" />
                  <span>Alapanyagok & Textúrák ({materials.length - 1})</span>
                </div>

                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {materials.filter((m) => m.id !== "all").map((m) => (
                    <div key={m.id} className="flex items-center justify-between p-2 rounded-xl bg-[#faf8f5] border border-[#e8ddcf]">
                      <div className="flex items-center gap-2">
                        {m.colorHex && (
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/20"
                            style={{ backgroundColor: m.colorHex }}
                          />
                        )}
                        <div>
                          <span className="font-bold text-[#553f31]">{m.name}</span>
                          {m.nameEn && <span className="text-[10px] text-[#9e7753] block">🇬🇧 {m.nameEn}</span>}
                        </div>
                      </div>
                      <span className="text-[10px] text-gray-500 font-mono">#{m.id}</span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAddMaterial} className="space-y-2 pt-1">
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={newMaterialColor}
                      onChange={(e) => setNewMaterialColor(e.target.value)}
                      className="w-9 h-9 p-0.5 rounded-xl border border-[#e8ddcf] cursor-pointer bg-white shrink-0"
                    />
                    <input
                      type="text"
                      placeholder="Magyar név (pl. Ónix Kő)"
                      value={newMaterialName}
                      onChange={(e) => setNewMaterialName(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Angol név (Onyx)"
                      value={newMaterialNameEn}
                      onChange={(e) => setNewMaterialNameEn(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] text-xs"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-[#9e7753] text-white font-bold hover:bg-[#866343] transition"
                  >
                    + Új Anyagtípus
                  </button>
                </form>
              </div>
            </div>

            <div className="pt-3 border-t border-[#e8ddcf] flex justify-end">
              <button
                onClick={() => setShowCategoryModal(false)}
                className="px-6 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#2e2118]"
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
