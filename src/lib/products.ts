export interface ProductSizeOption {
  id: string;
  label: string;
  dimensions: string;
  priceDelta: number; // in HUF
  isDefault?: boolean;
}

export interface ProductMaterialOption {
  id: string;
  name: string;
  colorHex: string;
  materialType: "travertine" | "marble" | "wood" | "upholstery";
  priceDelta: number; // in HUF
  imageUrl?: string;
  description?: string;
}

export interface ProductFinishOption {
  id: string;
  name: string;
  priceDelta: number;
  description: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  room: "nappali" | "etkezo" | "eloszoba" | "vilagitas";
  subType: string;
  materialType: "travertine" | "marble" | "wood" | "upholstery";
  basePrice: number;
  materialDesc: string;
  dimensions: string;
  stockStatus: string;
  tag: string;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  story: string;
  highlights: string[];
  specs: {
    weightKg: number;
    tabletopThicknessCm: number;
    assemblyRequired: boolean;
    origin: string;
    warrantyYears: number;
  };
  availableSizes: ProductSizeOption[];
  availableMaterials: ProductMaterialOption[];
  availableFinishes: ProductFinishOption[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "p-00",
    slug: "aura-monolit-kerek-travertin-etkezoasztal",
    name: "Aura Monolit Kerek Travertin Étkezőasztal",
    room: "etkezo",
    subType: "etkezoasztal",
    materialType: "travertine",
    basePrice: 549000,
    materialDesc: "100% Természetes Olasz Navona Travertin, Monolit Kőoszlop Talapzat, Kerek Kőlap",
    dimensions: "Ø 120 x 76 cm",
    stockStatus: "Raktáron (2 db azonnal)",
    tag: "Új Kollekció",
    rating: 5.0,
    reviewCount: 14,
    images: [
      "/kepek/showcase/travertin_round_villa_staging.jpg",
      "/kepek/showcase/travertin_round_macro_staging.jpg",
      "/kepek/showcase/travertin_round_mono_pillar.png",
      "/kepek/standards/1_macro_8k_benchmark.jpg",
    ],
    description: "Az Aura Monolit kerek étkezőasztal a természetes kő építészeti tisztaságát ünnepli. A masszív, egyetlen tömbből faragott hengeres kőoszlop talapzat lágy domború ívvel támasztja alá a gondosan csiszolt, lekerekített élű kerek asztallapot. A természetes Navona travertin párhuzamos rétegződése minden darabot megismételhetetlenné tesz.",
    story: "Közvetlenül az olaszországi Tivoli és Navona térségéből származó mészkőtömbökből faragva. Minden lap kézi felületkezelésen és mélyreható nanoporózus impregnáláson esik át.",
    highlights: [
      "100% tömör természetes Navona travertin mészkő",
      "Kézműves élcsiszolás kerekített biztonsági peremmel",
      "Víz- és olajtaszító mélyimpregnálás (nem foltosodik)",
      "Monolit kőoszlop talapzat maximális stabilitással",
      "10 év gyári kőgarancia és tanúsítvány",
    ],
    specs: {
      weightKg: 145,
      tabletopThicknessCm: 3.5,
      assemblyRequired: false,
      origin: "Olaszország (Tivoli)",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-110", label: "Ø 110 cm (4 személyes)", dimensions: "Ø 110 x 76 cm", priceDelta: -40000 },
      { id: "s-120", label: "Ø 120 cm (4-6 személyes)", dimensions: "Ø 120 x 76 cm", priceDelta: 0, isDefault: true },
      { id: "s-140", label: "Ø 140 cm (6-8 személyes)", dimensions: "Ø 140 x 76 cm", priceDelta: 95000 },
      { id: "s-160", label: "Ø 160 cm (8 személyes)", dimensions: "Ø 160 x 76 cm", priceDelta: 180000 },
      { id: "s-custom", label: "Egyedi Méret Kérése", dimensions: "Egyedi méret", priceDelta: 0 },
    ],
    availableMaterials: [
      { 
        id: "mat-navona", 
        name: "Olasz Navona Travertin (Matt Bézs)", 
        colorHex: "#e8ddcf", 
        materialType: "travertine", 
        priceDelta: 0,
        description: "Világos homokbézs tónus, finom vízszintes rétegződéssel"
      },
      { 
        id: "mat-romano", 
        name: "Klasszikus Romano Travertin (Méz / Karakteres)", 
        colorHex: "#d9c4aa", 
        materialType: "travertine", 
        priceDelta: 25000,
        description: "Kifejezőbb erezet, melegebb földes árnyalatok"
      },
      { 
        id: "mat-carrara", 
        name: "Carrara Márvány (Fehér / Szürke Erezet)", 
        colorHex: "#f2f2f2", 
        materialType: "marble", 
        priceDelta: 110000,
        description: "Klasszikus olasz hófehér márvány elegáns szürke füst-erezettel"
      },
      { 
        id: "mat-black", 
        name: "Nero Marquina Fekete Márvány", 
        colorHex: "#222222", 
        materialType: "marble", 
        priceDelta: 135000,
        description: "Mélyfekete spanyol kő drámai fehér kalcit erezettel"
      },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Csiszolt & Impregnált (Ajánlott)", priceDelta: 0, description: "Természetes tapintású, selymesen sima, védett a kávé és bor foltok ellen" },
      { id: "fin-honed", name: "Selyemfényű Finompolírozott", priceDelta: 35000, description: "Enyhe lágy fényvisszaverődés, kiemeli az erezet kontrasztjait" },
      { id: "fin-rustic", name: "Rusztikus Nyitott Pórusos", priceDelta: 0, description: "Autentikus ókori mediterrán textúra, megőrzött természetes üregekkel" },
    ],
  },
  {
    id: "p-01",
    slug: "aura-navona-travertin-etkezoasztal",
    name: "Aura Navona Travertin Étkezőasztal (Kétoszlopos)",
    room: "etkezo",
    subType: "etkezoasztal",
    materialType: "travertine",
    basePrice: 689000,
    materialDesc: "100% Természetes Olasz Navona Travertin, Két Monolit Pillar Talapzat, Lekerekített Élek",
    dimensions: "200 x 100 x 76 cm",
    stockStatus: "Raktáron (2 db azonnal)",
    tag: "Legnépszerűbb",
    rating: 5.0,
    reviewCount: 28,
    images: [
      "/kepek/showcase/travertin_dome_front.png",
      "/kepek/showcase/travertin_dome_top.jpg",
      "/kepek/showcase/travertin_edge_macro.jpg",
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
    ],
    description: "A TerraSilva zászlóshajó étkezőasztala. Két masszív, tömör travertin oszlop lábon nyugvó 3 cm vastag, lágyan lekerekített sarkú asztallap. Impozáns, szoborszerű megjelenése a modern luxus enteriőrök központi ékköve.",
    story: "A táblaerezethez igazított precíziós vágás biztosítja, hogy az asztallap és a kőoszlopok mintázata tökéletes harmóniában illeszkedjen egymáshoz.",
    highlights: [
      "Két robusztus monolit kőoszlop talapzat",
      "Lekerekített sarkok és fózolt peremvédelem",
      "Kényelmes 6-10 személyes befogadóképesség",
      "Kétrétegű olasz hidrofób kővédő bevonat",
      "10 év garancia a kőszerkezetre",
    ],
    specs: {
      weightKg: 210,
      tabletopThicknessCm: 3.0,
      assemblyRequired: true,
      origin: "Olaszország (Navona)",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-180", label: "180 x 90 cm (6 személyes)", dimensions: "180 x 90 x 76 cm", priceDelta: -50000 },
      { id: "s-200", label: "200 x 100 cm (6-8 személyes)", dimensions: "200 x 100 x 76 cm", priceDelta: 0, isDefault: true },
      { id: "s-220", label: "220 x 100 cm (8-10 személyes)", dimensions: "220 x 100 x 76 cm", priceDelta: 80000 },
      { id: "s-240", label: "240 x 110 cm (10-12 személyes)", dimensions: "240 x 110 x 76 cm", priceDelta: 160000 },
      { id: "s-custom", label: "Egyedi Méret Kérése", dimensions: "Egyedi méret", priceDelta: 0 },
    ],
    availableMaterials: [
      { 
        id: "mat-navona", 
        name: "Olasz Navona Travertin (Matt Bézs)", 
        colorHex: "#e8ddcf", 
        materialType: "travertine", 
        priceDelta: 0,
        description: "Krémes homokszín selymes tapintással"
      },
      { 
        id: "mat-romano", 
        name: "Romano Travertin (Méz / Aranybarna)", 
        colorHex: "#d9c4aa", 
        materialType: "travertine", 
        priceDelta: 30000,
        description: "Gazdag rétegződésű, meleg tónusú kőzet"
      },
      { 
        id: "mat-carrara", 
        name: "Carrara Márvány (Fehér)", 
        colorHex: "#f2f2f2", 
        materialType: "marble", 
        priceDelta: 140000,
        description: "Hófehér Carrara márványlap szürke erezettel"
      },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Csiszolt & Impregnált (Alapértelmezett)", priceDelta: 0, description: "Maximális foltvédelem természetes kőtapintással" },
      { id: "fin-honed", name: "Selyemfényű Polírozott", priceDelta: 40000, description: "Lágy elegáns csillogás a fényben" },
    ],
  },
  {
    id: "p-02",
    slug: "aura-navona-travertin-dohanzoasztal",
    name: "Aura Navona Travertin Dohányzóasztal",
    room: "nappali",
    subType: "dohanzoasztal",
    materialType: "travertine",
    basePrice: 389000,
    materialDesc: "100% Természetes Olasz Navona Travertin, Matt Csiszolt",
    dimensions: "110 x 60 x 38 cm",
    stockStatus: "Raktáron (3 db azonnal)",
    tag: "Bestseller",
    rating: 5.0,
    reviewCount: 32,
    images: [
      "/kepek/showcase/travertin_edge_macro.jpg",
      "/kepek/showcase/travertin_top_detail.jpg",
      "/kepek/standards/1_macro_8k_benchmark.jpg",
    ],
    description: "Letisztult, organikus arányokkal rendelkező travertin dohányzóasztal. A 38 cm-es optimális magasság tökéletesen illeszkedik a mélyülő lounge fotelekhez és alacsony profilú kanapékhoz.",
    story: "Kifejezetten modern minimalista és Japandi nappalik enteriőrjéhez megálmodott forma.",
    highlights: [
      "Kompakt, mégis tekintélyes súlyú és stabilitású kőtömb",
      "Mélyreható nanotechnológiás impregnálás",
      "Karc- és hőálló természetes felület",
      "10 év gyári garancia",
    ],
    specs: {
      weightKg: 85,
      tabletopThicknessCm: 3.0,
      assemblyRequired: false,
      origin: "Olaszország",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-90", label: "90 x 50 x 38 cm", dimensions: "90 x 50 x 38 cm", priceDelta: -30000 },
      { id: "s-110", label: "110 x 60 x 38 cm", dimensions: "110 x 60 x 38 cm", priceDelta: 0, isDefault: true },
      { id: "s-130", label: "130 x 70 x 38 cm", dimensions: "130 x 70 x 38 cm", priceDelta: 45000 },
    ],
    availableMaterials: [
      { id: "mat-navona", name: "Navona Travertin (Matt Bézs)", colorHex: "#e8ddcf", materialType: "travertine", priceDelta: 0 },
      { id: "mat-carrara", name: "Carrara Márvány (Fehér)", colorHex: "#f2f2f2", materialType: "marble", priceDelta: 60000 },
      { id: "mat-black", name: "Nero Marquina Fekete Márvány", colorHex: "#222222", materialType: "marble", priceDelta: 75000 },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Csiszolt & Vízlepergető", priceDelta: 0, description: "Alapértelmezett prémium matt kőtapintás" },
    ],
  },
  {
    id: "p-03",
    slug: "monolit-travertin-tv-szekreny-mediafal",
    name: "Monolit Travertin TV-Szekrény & Médiafal",
    room: "nappali",
    subType: "tv-szekreny",
    materialType: "travertine",
    basePrice: 649000,
    materialDesc: "Tömör Romano Travertin Keret + Diófa Lamellás Front",
    dimensions: "200 x 45 x 50 cm",
    stockStatus: "Érkező konténerben (Nov. 15)",
    tag: "Új Modell",
    rating: 4.9,
    reviewCount: 19,
    images: [
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
      "/kepek/showcase/travertin_top_detail.jpg",
    ],
    description: "A természetes kő hideg eleganciája és a nemes tömör diófa melegsége találkozik ebben a mesterműben. Blum csillapított vasalatokkal, rejtett kábelvezetőkkel és masszív kőkerettel.",
    story: "Egyedi gyártástechnológiával illesztett kőfalak és precíziós kézműves fafrontok.",
    highlights: [
      "Valódi tömör travertin kőkeret és fedlap",
      "Amerikai diófa lamellás tolóajtók és fiókok",
      "Beépített szellőző és rejtett médiakábel-csatornák",
      "Blum prémium soft-close vasalatok",
    ],
    specs: {
      weightKg: 130,
      tabletopThicknessCm: 2.5,
      assemblyRequired: false,
      origin: "Olaszország & Magyar Asztalosműhely",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-180", label: "180 x 45 x 50 cm", dimensions: "180 x 45 x 50 cm", priceDelta: -45000 },
      { id: "s-200", label: "200 x 45 x 50 cm", dimensions: "200 x 45 x 50 cm", priceDelta: 0, isDefault: true },
      { id: "s-240", label: "240 x 45 x 50 cm", dimensions: "240 x 45 x 50 cm", priceDelta: 90000 },
    ],
    availableMaterials: [
      { id: "mat-trav-walnut", name: "Travertin Keret + Amerikai Diófa", colorHex: "#684d39", materialType: "travertine", priceDelta: 0 },
      { id: "mat-trav-oak", name: "Travertin Keret + Natúr Fehér Tölgyfa", colorHex: "#c5a880", materialType: "wood", priceDelta: 0 },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Olajozott Fa & Impregnált Kő", priceDelta: 0, description: "Természetes tapintású védőréteg" },
    ],
  },
  {
    id: "p-04",
    slug: "silva-carrara-etkezoasztal",
    name: "Silva Carrara Étkezőasztal (8 személyes)",
    room: "etkezo",
    subType: "etkezoasztal",
    materialType: "marble",
    basePrice: 749000,
    materialDesc: "Fehér Carrara Márványlap + Tömör Amerikai Diófa Talapzat",
    dimensions: "220 x 100 x 76 cm",
    stockStatus: "Érkező konténerben (Nov. 12)",
    tag: "Előrendelhető -10%",
    rating: 4.9,
    reviewCount: 11,
    images: [
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
      "/kepek/showcase/travertin_top_detail.jpg",
    ],
    description: "Hófehér olasz Carrara márvány asztallap lágy szürke erezettel, kézzel faragott tömör amerikai diófa talapzaton.",
    story: "A toszkán hegyek márványbányáiból válogatott prémium táblák.",
    highlights: [
      "Eredeti toszkán Carrara márvány",
      "Tömör amerikai diófa szoborszerű lábak",
      "Kettős víz- és zsírtaszító nano-impregnálás",
    ],
    specs: {
      weightKg: 190,
      tabletopThicknessCm: 2.8,
      assemblyRequired: true,
      origin: "Olaszország (Carrara)",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-200", label: "200 x 100 cm (6-8 személyes)", dimensions: "200 x 100 x 76 cm", priceDelta: -60000 },
      { id: "s-220", label: "220 x 100 cm (8 személyes)", dimensions: "220 x 100 x 76 cm", priceDelta: 0, isDefault: true },
      { id: "s-240", label: "240 x 110 cm (10 személyes)", dimensions: "240 x 110 x 76 cm", priceDelta: 120000 },
    ],
    availableMaterials: [
      { id: "mat-carrara", name: "Carrara Márvány + Diófa Láb", colorHex: "#f2f2f2", materialType: "marble", priceDelta: 0 },
      { id: "mat-calacatta", name: "Calacatta Gold Márvány (Arany Erezet)", colorHex: "#eae5d8", materialType: "marble", priceDelta: 180000 },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Selymes Matt Csiszolt", priceDelta: 0, description: "Kifinomult modern matt tapintás" },
      { id: "fin-polished", name: "Fényes Polírozott", priceDelta: 40000, description: "Magasfényű kristályos csillogás" },
    ],
  },
  {
    id: "p-05",
    slug: "silva-tomor-diofa-etkezoasztal",
    name: "Silva Tömör Diófa Étkezőasztal",
    room: "etkezo",
    subType: "etkezoasztal",
    materialType: "wood",
    basePrice: 489000,
    materialDesc: "Tömör Amerikai Diófa Palló, Matt Kézműves Olajozás",
    dimensions: "200 x 95 x 76 cm",
    stockStatus: "Raktáron (3 db)",
    tag: "Nemes Tömörfa",
    rating: 5.0,
    reviewCount: 22,
    images: [
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
    ],
    description: "Prémium amerikai diófa étkezőasztal természetes, hossztoldásmentes pallókból, svájci kézműves olajkezeléssel.",
    story: "Fenntartható erdőgazdálkodásból származó, gondosan szárított nemes keményfa.",
    highlights: [
      "100% tömör amerikai diófa (nem furnér)",
      "Természetes faerezet és bársonyos olajozás",
      "Masszív acél merevítéssel a vetemedés ellen",
    ],
    specs: {
      weightKg: 95,
      tabletopThicknessCm: 4.0,
      assemblyRequired: true,
      origin: "Észak-Amerika / Magyarország",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-180", label: "180 x 90 cm (6 személyes)", dimensions: "180 x 90 x 76 cm", priceDelta: -40000 },
      { id: "s-200", label: "200 x 95 cm (8 személyes)", dimensions: "200 x 95 x 76 cm", priceDelta: 0, isDefault: true },
      { id: "s-240", label: "240 x 100 cm (10 személyes)", dimensions: "240 x 100 x 76 cm", priceDelta: 110000 },
    ],
    availableMaterials: [
      { id: "mat-walnut", name: "Amerikai Fekete Diófa (Sötétbarna)", colorHex: "#5c3d2e", materialType: "wood", priceDelta: 0 },
      { id: "mat-oak", name: "Natúr Európai Tölgyfa (Világos)", colorHex: "#c5a880", materialType: "wood", priceDelta: -50000 },
    ],
    availableFinishes: [
      { id: "fin-oil", name: "Matt Természetes Olaj", priceDelta: 0, description: "Bársonyos tapintás, kiemeli a fa természetes mélységét" },
    ],
  },
  {
    id: "p-06",
    slug: "monolit-fluted-travertin-oszlop-console",
    name: "Monolit Fluted Travertin Oszlop Console",
    room: "eloszoba",
    subType: "konzol",
    materialType: "travertine",
    basePrice: 289000,
    materialDesc: "Faragott Kannelúrázott Travertin Kőtömb",
    dimensions: "120 x 40 x 85 cm",
    stockStatus: "Raktáron (3 db)",
    tag: "Kézműves Faragvány",
    rating: 5.0,
    reviewCount: 16,
    images: [
      "/kepek/showcase/travertin_edge_macro.jpg",
      "/kepek/showcase/travertin_top_detail.jpg",
    ],
    description: "Klasszikus antik oszlopkannelúrák inspirálta tömör travertin előszobai konzolasztal.",
    story: "Egyetlen kőtömbből faragott hullámos bordázat.",
    highlights: [
      "Faragott vertikális bordázat",
      "Tökéletes előszobai és folyosói arányok",
      "Természetes kővédelemmel ellátva",
    ],
    specs: {
      weightKg: 115,
      tabletopThicknessCm: 3.5,
      assemblyRequired: false,
      origin: "Olaszország",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-100", label: "100 x 35 x 85 cm", dimensions: "100 x 35 x 85 cm", priceDelta: -25000 },
      { id: "s-120", label: "120 x 40 x 85 cm", dimensions: "120 x 40 x 85 cm", priceDelta: 0, isDefault: true },
      { id: "s-150", label: "150 x 40 x 85 cm", dimensions: "150 x 40 x 85 cm", priceDelta: 45000 },
    ],
    availableMaterials: [
      { id: "mat-navona", name: "Navona Travertin", colorHex: "#e8ddcf", materialType: "travertine", priceDelta: 0 },
      { id: "mat-romano", name: "Romano Travertin", colorHex: "#d9c4aa", materialType: "travertine", priceDelta: 15000 },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Csiszolt", priceDelta: 0, description: "Selymes tapintású védőréteggel" },
    ],
  },
  {
    id: "p-07",
    slug: "silva-lounge-fotel-diofa-vazzal",
    name: "Silva Lounge Fotel Diófa Vázzal",
    room: "nappali",
    subType: "fotel",
    materialType: "upholstery",
    basePrice: 269000,
    materialDesc: "Tömör Natúr Diófa Keret, Prémium Olasz Bouclé Kárpit",
    dimensions: "85 x 82 x 75 cm",
    stockStatus: "Raktáron (4 db)",
    tag: "Skandináv & Japandi",
    rating: 4.9,
    reviewCount: 25,
    images: [
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
    ],
    description: "Kényeztető mélyülésű lounge fotel skandináv diófa vázzal és prémium olasz gyapjú-bouclé kárpitozással.",
    story: "Ergonomikus szögben ívelt háttámla és nagy rugalmasságú HR habpárnázat.",
    highlights: [
      "Tömör amerikai diófa karfák és lábak",
      "Kopásálló 80.000 Martindale olasz bouclé",
      "Ergonomikus deréktámasz",
    ],
    specs: {
      weightKg: 28,
      tabletopThicknessCm: 0,
      assemblyRequired: false,
      origin: "Olaszország / Magyarország",
      warrantyYears: 5,
    },
    availableSizes: [
      { id: "s-standard", label: "Standard Lounge (85 x 82 x 75 cm)", dimensions: "85 x 82 x 75 cm", priceDelta: 0, isDefault: true },
      { id: "s-wide", label: "Grand Lounge (95 x 90 x 75 cm)", dimensions: "95 x 90 x 75 cm", priceDelta: 40000 },
    ],
    availableMaterials: [
      { id: "mat-cream-boucle", name: "Krémszín Gyapjú Bouclé", colorHex: "#f0ece1", materialType: "upholstery", priceDelta: 0 },
      { id: "mat-caramel-leather", name: "Konyak Bőr Kárpit", colorHex: "#995d3f", materialType: "upholstery", priceDelta: 65000 },
      { id: "mat-charcoal-velvet", name: "Antracit Bársony", colorHex: "#333333", materialType: "upholstery", priceDelta: 20000 },
    ],
    availableFinishes: [
      { id: "fin-standard", name: "Természetes Diófa Váz", priceDelta: 0, description: "Matt selyemolajozással" },
    ],
  },
  {
    id: "p-08",
    slug: "aura-alabastrom-travertin-asztali-lampa",
    name: "Aura Alabástrom & Travertin Asztali Lámpa",
    room: "vilagitas",
    subType: "asztali-lampa",
    materialType: "travertine",
    basePrice: 149000,
    materialDesc: "Faragott Travertin Talp, Átvilágítható Természetes Alabástrom Gömb",
    dimensions: "28 x 28 x 45 cm",
    stockStatus: "Raktáron (8 db)",
    tag: "Hangulatvilágítás",
    rating: 4.9,
    reviewCount: 38,
    images: [
      "/kepek/standards/1_macro_8k_benchmark.jpg",
      "/kepek/showcase/travertin_edge_macro.jpg",
    ],
    description: "Szoborszerű világítótest tömör travertin talapzaton és meleg fénnyel átvilágítható természetes spanyol alabástrom gömbbel.",
    story: "Minden lámpatest egyedi fényrajzolatot vetít a falakra a kő belső kristályszerkezetének köszönhetően.",
    highlights: [
      "Faragott tömör travertin hengertalapzat",
      "Valódi átvilágítható alabástrom kőbúra",
      "Fokozatmentes meleg fényű LED dimmer",
    ],
    specs: {
      weightKg: 12,
      tabletopThicknessCm: 0,
      assemblyRequired: false,
      origin: "Spanyolország & Olaszország",
      warrantyYears: 5,
    },
    availableSizes: [
      { id: "s-medium", label: "Medium (28 x 28 x 45 cm)", dimensions: "28 x 28 x 45 cm", priceDelta: 0, isDefault: true },
      { id: "s-large", label: "Grande (35 x 35 x 58 cm)", dimensions: "35 x 35 x 58 cm", priceDelta: 35000 },
    ],
    availableMaterials: [
      { id: "mat-trav-alabaster", name: "Navona Travertin + Alabástrom", colorHex: "#e8ddcf", materialType: "travertine", priceDelta: 0 },
      { id: "mat-black-alabaster", name: "Fekete Márvány + Alabástrom", colorHex: "#222222", materialType: "marble", priceDelta: 20000 },
    ],
    availableFinishes: [
      { id: "fin-dimmer", name: "Beépített Érintős Fényerőszabályzó", priceDelta: 0, description: "2700K melegfehér hangulatvilágítás" },
    ],
  },
];
