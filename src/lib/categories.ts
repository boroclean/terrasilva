export interface MaterialOption {
  id: string;
  name: string;
  colorHex?: string;
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
  subTypes: FurnitureType[];
}

export const MATERIALS: MaterialOption[] = [
  { id: "all", name: "Összes Anyag" },
  { id: "travertine", name: "Travertin Mészkő", colorHex: "#e8ddcf" },
  { id: "marble", name: "Természetes Márvány", colorHex: "#f0f0f0" },
  { id: "wood", name: "Tömör Dió- & Tölgyfa", colorHex: "#684d39" },
  { id: "upholstery", name: "Bouclé & Bársony Kárpit", colorHex: "#c2a585" },
];

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: "nappali",
    name: "Nappali Bútorok",
    slug: "nappali",
    iconName: "Armchair",
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
    subTypes: [
      { id: "all", name: "Összes Lámpa & Dekor", slug: "all" },
      { id: "asztali-lampa", name: "Travertin & Alabástrom Lámpák", slug: "asztali-lampa" },
      { id: "csillar", name: "Függesztett Kőcsillárok", slug: "csillar" },
      { id: "dekor", name: "Szoborszerű Kőtálak & Vázák", slug: "dekor" },
    ],
  },
];
