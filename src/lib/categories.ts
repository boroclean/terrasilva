export interface MaterialOption {
  id: string;
  name: string;
  nameEn?: string;
  colorHex?: string;
  imageUrl?: string;
  description?: string;
  descriptionEn?: string;
  tag?: string;
  tagEn?: string;
}

export interface FurnitureType {
  id: string;
  name: string;
  nameEn?: string;
  slug: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  nameEn?: string;
  slug: string;
  iconName: string;
  imageUrl?: string;
  description?: string;
  descriptionEn?: string;
  subTypes: FurnitureType[];
}

export const MATERIALS: MaterialOption[] = [
  { 
    id: "all", 
    name: "Összes Anyag",
    nameEn: "All Materials",
    description: "Kő, fa és kárpit kollekciók",
    descriptionEn: "Stone, hardwood, and upholstery collections"
  },
  { 
    id: "travertine", 
    name: "Travertin Mészkő", 
    nameEn: "Travertine Limestone",
    colorHex: "#e8ddcf",
    imageUrl: "/kepek/materials/travertine.jpg",
    description: "100% Olasz Navona & Romano pórusos natúr mészkő",
    descriptionEn: "100% Authentic Italian Navona & Romano porous limestone",
    tag: "Fő Anyagunk",
    tagEn: "Core Material"
  },
  { 
    id: "wood", 
    name: "Tömör Dió- & Tölgyfa", 
    nameEn: "Solid Walnut & Oak",
    colorHex: "#684d39",
    imageUrl: "/kepek/materials/wood.jpg",
    description: "Kézműves matt olajozott amerikai dió és tölgyfa pallók",
    descriptionEn: "Handcrafted matte-oiled American walnut and European oak slabs",
    tag: "Nemes Tömörfa",
    tagEn: "Noble Hardwood"
  },
  { 
    id: "marble", 
    name: "Természetes Márvány", 
    nameEn: "Natural Marble",
    colorHex: "#f0f0f0",
    imageUrl: "/kepek/materials/marble.jpg",
    description: "Eredeti Fehér Carrara és Spanyol Nero Marquina márvány",
    descriptionEn: "Authentic White Carrara and Spanish Nero Marquina marble",
    tag: "Prémium Kőzet",
    tagEn: "Premium Marble"
  },
  { 
    id: "upholstery", 
    name: "Bouclé & Bársony Kárpit", 
    nameEn: "Bouclé & Velvet Fabric",
    colorHex: "#c2a585",
    imageUrl: "/kepek/materials/upholstery.jpg",
    description: "Tapinthatóan lágy olasz bouclé szövetek és bársony",
    descriptionEn: "Sensory soft Italian bouclé fabrics and rich velvet",
    tag: "Lounge Kényelem",
    tagEn: "Lounge Comfort"
  },
];

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "nappali",
    name: "Nappali Bútorok",
    nameEn: "Living Room",
    slug: "nappali",
    iconName: "Armchair",
    imageUrl: "/kepek/categories/nappali.jpg",
    description: "Dohányzóasztalok, médiafalak, lounge fotelek és moduláris kanapék",
    descriptionEn: "Coffee tables, media consoles, sculptural lounge chairs, and accent tables",
    subTypes: [
      { id: "all", name: "Összes Nappali Bútor", nameEn: "All Living Pieces", slug: "all" },
      { id: "dohanzoasztal", name: "Dohányzóasztalok", nameEn: "Coffee Tables", slug: "dohanzoasztal" },
      { id: "tv-szekreny", name: "TV-szekrények & Médiabútorok", nameEn: "TV Consoles & Media Walls", slug: "tv-szekreny" },
      { id: "fotel", name: "Lounge Fotelek", nameEn: "Lounge Chairs", slug: "fotel" },
      { id: "kanape", name: "Moduláris Kanapék", nameEn: "Modular Sofas", slug: "kanape" },
      { id: "kisasztal", name: "Kisasztalok & Lerakók", nameEn: "Side & End Tables", slug: "kisasztal" },
    ],
  },
  {
    id: "etkezo",
    name: "Étkező Bútorok",
    nameEn: "Dining Room",
    slug: "etkezo",
    iconName: "Utensils",
    imageUrl: "/kepek/categories/etkezo.jpg",
    description: "Monolit kerek és szögletes travertin étkezőasztalok, székek",
    descriptionEn: "Monolith round and rectangular travertine dining tables, seating sets",
    subTypes: [
      { id: "all", name: "Összes Étkező Bútor", nameEn: "All Dining Pieces", slug: "all" },
      { id: "etkezoasztal", name: "Étkezőasztalok (Kő & Fa)", nameEn: "Dining Tables (Stone & Wood)", slug: "etkezoasztal" },
      { id: "etkezoszek", name: "Étkezőszék Szettek", nameEn: "Dining Chair Sets", slug: "etkezoszek" },
      { id: "talaloszekreny", name: "Tálalók & Sideboardok", nameEn: "Sideboards & Credenzas", slug: "talaloszekreny" },
    ],
  },
  {
    id: "eloszoba",
    name: "Előszoba & Monolitok",
    nameEn: "Hallway & Consoles",
    slug: "eloszoba",
    iconName: "Columns",
    imageUrl: "/kepek/categories/eloszoba.jpg",
    description: "Kannelúrázott kőoszlopok, lebegő konzolok és állótükrök",
    descriptionEn: "Fluted stone pedestals, floating console tables, and architectural mirrors",
    subTypes: [
      { id: "all", name: "Összes Konzol & Oszlop", nameEn: "All Consoles & Columns", slug: "all" },
      { id: "konzol", name: "Monolit Konzolasztalok", nameEn: "Monolith Console Tables", slug: "konzol" },
      { id: "oszlop", name: "Kannelúrázott Kőoszlopok", nameEn: "Fluted Stone Pedestals", slug: "oszlop" },
      { id: "tukor", name: "Kőkeretes Állótükrök", nameEn: "Stone-Framed Mirrors", slug: "tukor" },
    ],
  },
  {
    id: "vilagitas",
    name: "Világítás & Kiegészítők",
    nameEn: "Lighting & Accents",
    slug: "vilagitas",
    iconName: "Lamp",
    imageUrl: "/kepek/categories/vilagitas.jpg",
    description: "Alabástrom gömbök, faragott travertin asztali lámpák & szobrok",
    descriptionEn: "Translucent alabaster orbs, carved travertine table lamps, and sculptural accents",
    subTypes: [
      { id: "all", name: "Összes Lámpa & Dekor", nameEn: "All Lighting & Decor", slug: "all" },
      { id: "asztali-lampa", name: "Travertin & Alabástrom Lámpák", nameEn: "Travertine & Alabaster Lamps", slug: "asztali-lampa" },
      { id: "csillar", name: "Függesztett Kőcsillárok", nameEn: "Pendant Stone Chandeliers", slug: "csillar" },
      { id: "dekor", name: "Szoborszerű Kőtálak & Vázák", nameEn: "Sculptural Stone Bowls & Vases", slug: "dekor" },
    ],
  },
];
