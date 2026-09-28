export interface MaterialOption {
  id: string;
  name: string;
  colorHex?: string;
  imageUrl?: string;
  description?: string;
  tag?: string;
}

export interface FurnitureType {
  id: string;
  name: string;
  slug: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  imageUrl?: string;
  description?: string;
  subTypes: FurnitureType[];
}

export const MATERIALS: MaterialOption[] = [
  { 
    id: "all", 
    name: "Összes Anyag",
    description: "Kő, fa és kárpit kollekciók"
  },
  { 
    id: "travertine", 
    name: "Travertin Mészkő", 
    colorHex: "#e8ddcf",
    imageUrl: "/kepek/materials/travertine.jpg",
    description: "100% Olasz Navona & Romano pórusos natúr mészkő",
    tag: "Fő Anyagunk"
  },
  { 
    id: "wood", 
    name: "Tömör Dió- & Tölgyfa", 
    colorHex: "#684d39",
    imageUrl: "/kepek/materials/wood.jpg",
    description: "Kézműves matt olajozott amerikai dió és tölgyfa pallók",
    tag: "Nemes Tömörfa"
  },
  { 
    id: "marble", 
    name: "Természetes Márvány", 
    colorHex: "#f0f0f0",
    imageUrl: "/kepek/materials/marble.jpg",
    description: "Eredeti Fehér Carrara és Spanyol Nero Marquina márvány",
    tag: "Prémium Kőzet"
  },
  { 
    id: "upholstery", 
    name: "Bouclé & Bársony Kárpit", 
    colorHex: "#c2a585",
    imageUrl: "/kepek/materials/upholstery.jpg",
    description: "Tapinthatóan lágy olasz bouclé szövetek és bársony",
    tag: "Lounge Kényelem"
  },
];

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "nappali",
    name: "Nappali Bútorok",
    slug: "nappali",
    iconName: "Armchair",
    imageUrl: "/kepek/categories/nappali.jpg",
    description: "Dohányzóasztalok, médiafalak, lounge fotelek és moduláris kanapék",
    subTypes: [
      { id: "all", name: "Összes Nappali Bútor", slug: "all" },
      { id: "dohanzoasztal", name: "Dohányzóasztalok", slug: "dohanzoasztal" },
      { id: "tv-szekreny", name: "TV-szekrények & Médiabútorok", slug: "tv-szekreny" },
      { id: "fotel", name: "Lounge Fotelek", slug: "fotel" },
      { id: "kanape", name: "Moduláris Kanapék", slug: "kanape" },
      { id: "kisasztal", name: "Kisasztalok & Lerakók", slug: "kisasztal" },
    ],
  },
  {
    id: "etkezo",
    name: "Étkező Bútorok",
    slug: "etkezo",
    iconName: "Utensils",
    imageUrl: "/kepek/categories/etkezo.jpg",
    description: "Monolit kerek és szögletes travertin étkezőasztalok, székek",
    subTypes: [
      { id: "all", name: "Összes Étkező Bútor", slug: "all" },
      { id: "etkezoasztal", name: "Étkezőasztalok (Kő & Fa)", slug: "etkezoasztal" },
      { id: "etkezoszek", name: "Étkezőszék Szettek", slug: "etkezoszek" },
      { id: "talaloszekreny", name: "Tálalók & Sideboardok", slug: "talaloszekreny" },
    ],
  },
  {
    id: "eloszoba",
    name: "Előszoba & Monolitok",
    slug: "eloszoba",
    iconName: "Columns",
    imageUrl: "/kepek/categories/eloszoba.jpg",
    description: "Kannelúrázott kőoszlopok, lebegő konzolok és állótükrök",
    subTypes: [
      { id: "all", name: "Összes Konzol & Oszlop", slug: "all" },
      { id: "konzol", name: "Monolit Konzolasztalok", slug: "konzol" },
      { id: "oszlop", name: "Kannelúrázott Kőoszlopok", slug: "oszlop" },
      { id: "tukor", name: "Kőkeretes Állótükrök", slug: "tukor" },
    ],
  },
  {
    id: "vilagitas",
    name: "Világítás & Kiegészítők",
    slug: "vilagitas",
    iconName: "Lamp",
    imageUrl: "/kepek/categories/vilagitas.jpg",
    description: "Alabástrom gömbök, faragott travertin asztali lámpák & szobrok",
    subTypes: [
      { id: "all", name: "Összes Lámpa & Dekor", slug: "all" },
      { id: "asztali-lampa", name: "Travertin & Alabástrom Lámpák", slug: "asztali-lampa" },
      { id: "csillar", name: "Függesztett Kőcsillárok", slug: "csillar" },
      { id: "dekor", name: "Szoborszerű Kőtálak & Vázák", slug: "dekor" },
    ],
  },
];
