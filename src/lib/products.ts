export interface ProductSizeOption {
  id: string;
  label: string;
  labelEn?: string;
  dimensions: string;
  priceDelta: number; // in HUF
  isDefault?: boolean;
}

export interface ProductMaterialOption {
  id: string;
  name: string;
  nameEn?: string;
  colorHex: string;
  materialType: "travertine" | "marble" | "wood" | "upholstery";
  priceDelta: number; // in HUF
  imageUrl?: string;
  description?: string;
  descriptionEn?: string;
}

export interface ProductFinishOption {
  id: string;
  name: string;
  nameEn?: string;
  priceDelta: number;
  description: string;
  descriptionEn?: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  nameEn?: string;
  room: "nappali" | "etkezo" | "eloszoba" | "vilagitas";
  subType: string;
  subTypeEn?: string;
  materialType: "travertine" | "marble" | "wood" | "upholstery";
  basePrice: number;
  materialDesc: string;
  materialDescEn?: string;
  dimensions: string;
  stockStatus: string;
  stockStatusEn?: string;
  tag: string;
  tagEn?: string;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  descriptionEn?: string;
  story: string;
  storyEn?: string;
  highlights: string[];
  highlightsEn?: string[];
  specs: {
    weightKg: number;
    tabletopThicknessCm: number;
    assemblyRequired: boolean;
    origin: string;
    originEn?: string;
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
    nameEn: "Aura Monolith Round Travertine Dining Table",
    room: "etkezo",
    subType: "etkezoasztal",
    subTypeEn: "Dining Table",
    materialType: "travertine",
    basePrice: 549000,
    materialDesc: "100% Természetes Olasz Navona Travertin, Monolit Kőoszlop Talapzat, Kerek Kőlap",
    materialDescEn: "100% Natural Italian Navona Travertine, Monolith Pillar Pedestal, Round Stone Top",
    dimensions: "Ø 120 x 76 cm",
    stockStatus: "Raktáron (2 db azonnal)",
    stockStatusEn: "In Stock (2 units ready to ship)",
    tag: "Új Kollekció",
    tagEn: "New Collection",
    rating: 5.0,
    reviewCount: 14,
    images: [
      "/kepek/products/p00_round_travertine_front.jpg",
      "/kepek/showcase/travertin_round_villa_staging.jpg",
      "/kepek/showcase/travertin_round_macro_staging.jpg",
      "/kepek/showcase/travertin_round_mono_pillar.png",
      "/kepek/standards/1_macro_8k_benchmark.jpg",
    ],
    description: "Az Aura Monolit kerek étkezőasztal a természetes kő építészeti tisztaságát ünnepli. A masszív, egyetlen tömbből faragott hengeres kőoszlop talapzat lágy domború ívvel támasztja alá a gondosan csiszolt, lekerekített élű kerek asztallapot. A természetes Navona travertin párhuzamos rétegződése minden darabot megismételhetetlenné tesz.",
    descriptionEn: "The Aura Monolith round dining table celebrates the architectural purity of natural stone. A monumental cylindrical stone pillar carved from a single limestone block gracefully supports the meticulously honed, round tabletop with soft bullnose edges. The organic horizontal veining of Italian Navona travertine ensures each piece is a one-of-a-kind sculpture.",
    story: "Közvetlenül az olaszországi Tivoli és Navona térségéből származó mészkőtömbökből faragva. Minden lap kézi felületkezelésen és mélyreható nanoporózus impregnáláson esik át.",
    storyEn: "Sculpted directly from authentic limestone blocks quarried in Tivoli and Navona, Italy. Every slab undergoes artisanal hand-finishing and deep nanoporous hydrophobic sealing.",
    highlights: [
      "100% tömör természetes Navona travertin mészkő",
      "Kézműves élcsiszolás kerekített biztonsági peremmel",
      "Víz- és olajtaszító mélyimpregnálás (nem foltosodik)",
      "Monolit kőoszlop talapzat maximális stabilitással",
      "10 év gyári kőgarancia és tanúsítvány",
    ],
    highlightsEn: [
      "100% solid natural Italian Navona travertine limestone",
      "Artisan edge profiling with rounded ergonomic safety perimeter",
      "Hydrophobic and oleophobic nano-impregnation (stain protected)",
      "Monolithic central pillar base ensuring maximum stability",
      "10-year official stone warranty and certificate of authenticity",
    ],
    specs: {
      weightKg: 145,
      tabletopThicknessCm: 3.5,
      assemblyRequired: false,
      origin: "Olaszország (Tivoli)",
      originEn: "Italy (Tivoli & Navona)",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-110", label: "Ø 110 cm (4 személyes)", labelEn: "Ø 110 cm (Seats 4)", dimensions: "Ø 110 x 76 cm", priceDelta: -40000 },
      { id: "s-120", label: "Ø 120 cm (4-6 személyes)", labelEn: "Ø 120 cm (Seats 4-6)", dimensions: "Ø 120 x 76 cm", priceDelta: 0, isDefault: true },
      { id: "s-140", label: "Ø 140 cm (6-8 személyes)", labelEn: "Ø 140 cm (Seats 6-8)", dimensions: "Ø 140 x 76 cm", priceDelta: 95000 },
      { id: "s-160", label: "Ø 160 cm (8 személyes)", labelEn: "Ø 160 cm (Seats 8)", dimensions: "Ø 160 x 76 cm", priceDelta: 180000 },
      { id: "s-custom", label: "Egyedi Méret Kérése", labelEn: "Request Custom Size", dimensions: "Custom size", priceDelta: 0 },
    ],
    availableMaterials: [
      { 
        id: "mat-navona", 
        name: "Olasz Navona Travertin (Matt Bézs)", 
        nameEn: "Italian Navona Travertine (Matte Beige)",
        colorHex: "#e8ddcf", 
        materialType: "travertine", 
        priceDelta: 0,
        description: "Világos homokbézs tónus, finom vízszintes rétegződéssel",
        descriptionEn: "Light warm sand-beige hue with gentle horizontal mineral stratification"
      },
      { 
        id: "mat-romano", 
        name: "Klasszikus Romano Travertin (Méz / Karakteres)", 
        nameEn: "Classic Romano Travertine (Warm Honey)",
        colorHex: "#d9c4aa", 
        materialType: "travertine", 
        priceDelta: 25000,
        description: "Kifejezőbb erezet, melegebb földes árnyalatok",
        descriptionEn: "Expressive natural veining with richer golden earth tones"
      },
      { 
        id: "mat-carrara", 
        name: "Carrara Márvány (Fehér / Szürke Erezet)", 
        nameEn: "Bianco Carrara Marble (White / Grey Veins)",
        colorHex: "#f2f2f2", 
        materialType: "marble", 
        priceDelta: 110000,
        description: "Klasszikus olasz hófehér márvány elegáns szürke füst-erezettel",
        descriptionEn: "Classic Tuscan white marble accented by subtle feather-like grey veining"
      },
      { 
        id: "mat-black", 
        name: "Nero Marquina Fekete Márvány", 
        nameEn: "Nero Marquina Black Marble",
        colorHex: "#222222", 
        materialType: "marble", 
        priceDelta: 135000,
        description: "Mélyfekete spanyol kő drámai fehér kalcit erezettel",
        descriptionEn: "Deep velvet-black Spanish marble with dramatic white calcite streaks"
      },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Csiszolt & Impregnált (Ajánlott)", nameEn: "Matte Honed & Sealed (Recommended)", priceDelta: 0, description: "Természetes tapintású, selymesen sima, védett a kávé és bor foltok ellen", descriptionEn: "Silky smooth natural touch, sealed against wine and coffee spills" },
      { id: "fin-honed", name: "Selyemfényű Finompolírozott", nameEn: "Semi-Polished Satin", priceDelta: 35000, description: "Enyhe lágy fényvisszaverődés, kiemeli az erezet kontrasztjait", descriptionEn: "Subtle luminous sheen highlighting geological vein contrasts" },
      { id: "fin-rustic", name: "Rusztikus Nyitott Pórusos", nameEn: "Rustic Open-Pore Texture", priceDelta: 0, description: "Autentikus ókori mediterrán textúra, megőrzött természetes üregekkel", descriptionEn: "Authentic Mediterranean tactile feel with preserved organic micro-pores" },
    ],
  },
  {
    id: "p-01",
    slug: "aura-navona-travertin-etkezoasztal",
    name: "Aura Navona Travertin Étkezőasztal (Kétoszlopos)",
    nameEn: "Aura Navona Two-Pillar Travertine Dining Table",
    room: "etkezo",
    subType: "etkezoasztal",
    subTypeEn: "Dining Table",
    materialType: "travertine",
    basePrice: 689000,
    materialDesc: "100% Természetes Olasz Navona Travertin, Két Monolit Pillar Talapzat, Lekerekített Élek",
    materialDescEn: "100% Natural Italian Navona Travertine, Dual Monolith Pillars, Rounded Bullnose Edges",
    dimensions: "200 x 100 x 76 cm",
    stockStatus: "Raktáron (2 db azonnal)",
    stockStatusEn: "In Stock (2 units ready to ship)",
    tag: "Legnépszerűbb",
    tagEn: "Bestseller",
    rating: 5.0,
    reviewCount: 28,
    images: [
      "/kepek/products/p01_two_pillar_table_front.jpg",
      "/kepek/showcase/travertin_dome_staged_hd.png",
      "/kepek/showcase/travertin_surface_macro_8k.jpg",
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
    ],
    description: "A TerraSilva zászlóshajó étkezőasztala. Két masszív, tömör travertin oszlop lábon nyugvó 3 cm vastag, lágyan lekerekített sarkú asztallap. Impozáns, szoborszerű megjelenése a modern luxus enteriőrök központi ékköve.",
    descriptionEn: "TerraSilva's iconic flagship dining piece. A generous 3.0 cm thick solid travertine top with softly rounded corners rests upon two monolithic stone pedestal columns. An imposing sculptural masterpiece designed to anchor modern luxury residences.",
    story: "A táblaerezethez igazított precíziós vágás biztosítja, hogy az asztallap és a kőoszlopok mintázata tökéletes harmóniában illeszkedjen egymáshoz.",
    storyEn: "Book-matched precision stone-cutting ensures the natural stratification of the tabletop flows organically into the supporting columns.",
    highlights: [
      "Két robusztus monolit kőoszlop talapzat",
      "Lekerekített sarkok és fózolt peremvédelem",
      "Kényelmes 6-10 személyes befogadóképesség",
      "Kétrétegű olasz hidrofób kővédő bevonat",
      "10 év garancia a kőszerkezetre",
    ],
    highlightsEn: [
      "Dual heavy-duty monolithic stone pillar bases",
      "Rounded safety radius and beveled stone edges",
      "Comfortably accommodates 6 to 10 dinner guests",
      "Double-layer Italian hydrophobic stone sealant",
      "10-year structural warranty on natural stone",
    ],
    specs: {
      weightKg: 210,
      tabletopThicknessCm: 3.0,
      assemblyRequired: true,
      origin: "Olaszország (Navona)",
      originEn: "Italy (Navona & Tivoli)",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-180", label: "180 x 90 cm (6 személyes)", labelEn: "180 x 90 cm (Seats 6)", dimensions: "180 x 90 x 76 cm", priceDelta: -50000 },
      { id: "s-200", label: "200 x 100 cm (6-8 személyes)", labelEn: "200 x 100 cm (Seats 6-8)", dimensions: "200 x 100 x 76 cm", priceDelta: 0, isDefault: true },
      { id: "s-220", label: "220 x 100 cm (8-10 személyes)", labelEn: "220 x 100 cm (Seats 8-10)", dimensions: "220 x 100 x 76 cm", priceDelta: 80000 },
      { id: "s-240", label: "240 x 110 cm (10-12 személyes)", labelEn: "240 x 110 cm (Seats 10-12)", dimensions: "240 x 110 x 76 cm", priceDelta: 160000 },
      { id: "s-custom", label: "Egyedi Méret Kérése", labelEn: "Request Custom Size", dimensions: "Custom size", priceDelta: 0 },
    ],
    availableMaterials: [
      { 
        id: "mat-navona", 
        name: "Olasz Navona Travertin (Matt Bézs)", 
        nameEn: "Italian Navona Travertine (Matte Beige)",
        colorHex: "#e8ddcf", 
        materialType: "travertine", 
        priceDelta: 0,
        description: "Krémes homokszín selymes tapintással",
        descriptionEn: "Creamy warm sand tone with silky tactile feel"
      },
      { 
        id: "mat-romano", 
        name: "Romano Travertin (Méz / Aranybarna)", 
        nameEn: "Romano Travertine (Honey / Golden)",
        colorHex: "#d9c4aa", 
        materialType: "travertine", 
        priceDelta: 30000,
        description: "Gazdag rétegződésű, meleg tónusú kőzet",
        descriptionEn: "Rich geological layering with warm amber undertones"
      },
      { 
        id: "mat-carrara", 
        name: "Carrara Márvány (Fehér)", 
        nameEn: "Bianco Carrara Marble (White)",
        colorHex: "#f2f2f2", 
        materialType: "marble", 
        priceDelta: 140000,
        description: "Hófehér Carrara márványlap szürke erezettel",
        descriptionEn: "Bright white Carrara marble with light grey feathering"
      },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Csiszolt & Impregnált (Alapértelmezett)", nameEn: "Matte Honed & Sealed (Standard)", priceDelta: 0, description: "Maximális foltvédelem természetes kőtapintással", descriptionEn: "Maximum stain protection with natural stone feel" },
      { id: "fin-honed", name: "Selyemfényű Polírozott", nameEn: "Satin Polished", priceDelta: 40000, description: "Lágy elegáns csillogás a fényben", descriptionEn: "Soft elegant glow reflecting ambient lighting" },
    ],
  },
  {
    id: "p-02",
    slug: "aura-navona-travertin-dohanzoasztal",
    name: "Aura Navona Travertin Dohányzóasztal",
    nameEn: "Aura Navona Travertine Coffee Table",
    room: "nappali",
    subType: "dohanzoasztal",
    subTypeEn: "Coffee Table",
    materialType: "travertine",
    basePrice: 389000,
    materialDesc: "100% Természetes Olasz Navona Travertin, Matt Csiszolt",
    materialDescEn: "100% Natural Italian Navona Travertine, Matte Honed Finish",
    dimensions: "110 x 60 x 38 cm",
    stockStatus: "Raktáron (3 db azonnal)",
    stockStatusEn: "In Stock (3 units ready to ship)",
    tag: "Bestseller",
    tagEn: "Bestseller",
    rating: 5.0,
    reviewCount: 32,
    images: [
      "/kepek/products/p02_coffee_table_front.jpg",
      "/kepek/showcase/travertin_surface_macro_8k.jpg",
      "/kepek/showcase/travertin_edge_macro.jpg",
      "/kepek/standards/1_macro_8k_benchmark.jpg",
    ],
    description: "Letisztult, organikus arányokkal rendelkező travertin dohányzóasztal. A 38 cm-es optimális magasság tökéletesen illeszkedik a mélyülő lounge fotelekhez és alacsony profilú kanapékhoz.",
    descriptionEn: "Minimalist travertine coffee table featuring organic architectural proportions. The low 38 cm height pairs seamlessly with deep lounge chairs and contemporary low-profile sofas.",
    story: "Kifejezetten modern minimalista és Japandi nappalik enteriőrjéhez megálmodott forma.",
    storyEn: "Engineered specifically for serene minimalist and Japandi living room interiors.",
    highlights: [
      "Kompakt, mégis tekintélyes súlyú és stabilitású kőtömb",
      "Mélyreható nanotechnológiás impregnálás",
      "Karc- és hőálló természetes felület",
      "10 év gyári garancia",
    ],
    highlightsEn: [
      "Compact footprint with substantial stone mass and stability",
      "Deep nanotech stone seal protecting from everyday living",
      "Scratch and heat resistant genuine stone surface",
      "10-year factory structural guarantee",
    ],
    specs: {
      weightKg: 85,
      tabletopThicknessCm: 3.0,
      assemblyRequired: false,
      origin: "Olaszország",
      originEn: "Italy (Navona)",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-90", label: "90 x 50 x 38 cm", labelEn: "90 x 50 x 38 cm", dimensions: "90 x 50 x 38 cm", priceDelta: -30000 },
      { id: "s-110", label: "110 x 60 x 38 cm", labelEn: "110 x 60 x 38 cm", dimensions: "110 x 60 x 38 cm", priceDelta: 0, isDefault: true },
      { id: "s-130", label: "130 x 70 x 38 cm", labelEn: "130 x 70 x 38 cm", dimensions: "130 x 70 x 38 cm", priceDelta: 45000 },
    ],
    availableMaterials: [
      { id: "mat-navona", name: "Navona Travertin (Matt Bézs)", nameEn: "Navona Travertine (Matte Beige)", colorHex: "#e8ddcf", materialType: "travertine", priceDelta: 0 },
      { id: "mat-carrara", name: "Carrara Márvány (Fehér)", nameEn: "Carrara Marble (White)", colorHex: "#f2f2f2", materialType: "marble", priceDelta: 60000 },
      { id: "mat-black", name: "Nero Marquina Fekete Márvány", nameEn: "Nero Marquina Black Marble", colorHex: "#222222", materialType: "marble", priceDelta: 75000 },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Csiszolt & Vízlepergető", nameEn: "Matte Honed & Water-Repellent", priceDelta: 0, description: "Alapértelmezett prémium matt kőtapintás", descriptionEn: "Signature velvety matte stone touch" },
    ],
  },
  {
    id: "p-03",
    slug: "monolit-travertin-tv-szekreny-mediafal",
    name: "Monolit Travertin TV-Szekrény & Médiafal",
    nameEn: "Monolith Travertine TV Console & Media Unit",
    room: "nappali",
    subType: "tv-szekreny",
    subTypeEn: "Media Console",
    materialType: "travertine",
    basePrice: 649000,
    materialDesc: "Tömör Romano Travertin Keret + Diófa Lamellás Front",
    materialDescEn: "Solid Romano Travertine Frame + American Walnut Slatted Facade",
    dimensions: "200 x 45 x 50 cm",
    stockStatus: "Érkező konténerben (Hamarosan)",
    stockStatusEn: "Arriving Soon (Pre-Order Available)",
    tag: "Új Modell",
    tagEn: "New Arrival",
    rating: 4.9,
    reviewCount: 19,
    images: [
      "/kepek/products/p03_tv_console_front.jpg",
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
      "/kepek/showcase/travertin_surface_macro_8k.jpg",
    ],
    description: "A természetes kő hideg eleganciája és a nemes tömör diófa melegsége találkozik ebben a mesterműben. Blum csillapított vasalatokkal, rejtett kábelvezetőkkel és masszív kőkerettel.",
    descriptionEn: "The cool architectural presence of travertine meets the rich tactile warmth of American walnut. Equipped with Blum soft-close mechanisms, integrated cable routing channels, and a monolithic stone shell.",
    story: "Egyedi gyártástechnológiával illesztett kőfalak és precíziós kézműves fafrontok.",
    storyEn: "Mitered stone joinery coupled with precision crafted solid wood tambour fronts.",
    highlights: [
      "Valódi tömör travertin kőkeret és fedlap",
      "Amerikai diófa lamellás tolóajtók és fiókok",
      "Beépített szellőző és rejtett médiakábel-csatornák",
      "Blum prémium soft-close vasalatok",
    ],
    highlightsEn: [
      "Authentic solid travertine perimeter frame and top slab",
      "American walnut slatted facade and drawers",
      "Integrated ventilation and concealed media wiring paths",
      "Premium Blum soft-closing hardware",
    ],
    specs: {
      weightKg: 130,
      tabletopThicknessCm: 2.5,
      assemblyRequired: false,
      origin: "Olaszország & Magyar Asztalosműhely",
      originEn: "Italy & Hungarian Cabinetmakers",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-180", label: "180 x 45 x 50 cm", labelEn: "180 x 45 x 50 cm", dimensions: "180 x 45 x 50 cm", priceDelta: -45000 },
      { id: "s-200", label: "200 x 45 x 50 cm", labelEn: "200 x 45 x 50 cm", dimensions: "200 x 45 x 50 cm", priceDelta: 0, isDefault: true },
      { id: "s-240", label: "240 x 45 x 50 cm", labelEn: "240 x 45 x 50 cm", dimensions: "240 x 45 x 50 cm", priceDelta: 90000 },
    ],
    availableMaterials: [
      { id: "mat-trav-walnut", name: "Travertin Keret + Amerikai Diófa", nameEn: "Travertine Frame + American Walnut", colorHex: "#684d39", materialType: "travertine", priceDelta: 0 },
      { id: "mat-trav-oak", name: "Travertin Keret + Natúr Fehér Tölgyfa", nameEn: "Travertine Frame + Natural White Oak", colorHex: "#c5a880", materialType: "wood", priceDelta: 0 },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Olajozott Fa & Impregnált Kő", nameEn: "Matte Oiled Wood & Sealed Stone", priceDelta: 0, description: "Természetes tapintású védőréteg", descriptionEn: "Natural tactile protective finish" },
    ],
  },
  {
    id: "p-04",
    slug: "silva-carrara-etkezoasztal",
    name: "Silva Carrara Étkezőasztal (8 személyes)",
    nameEn: "Silva Bianco Carrara Dining Table (Seats 8)",
    room: "etkezo",
    subType: "etkezoasztal",
    subTypeEn: "Dining Table",
    materialType: "marble",
    basePrice: 749000,
    materialDesc: "Fehér Carrara Márványlap + Tömör Amerikai Diófa Talapzat",
    materialDescEn: "Bianco Carrara Marble Slab + Sculptural American Walnut Base",
    dimensions: "220 x 100 x 76 cm",
    stockStatus: "Érkező konténerben",
    stockStatusEn: "Arriving Soon (Pre-Order -10%)",
    tag: "Előrendelhető",
    tagEn: "Pre-Order",
    rating: 4.9,
    reviewCount: 11,
    images: [
      "/kepek/products/p04_carrara_table_front.jpg",
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
      "/kepek/materials/marble.jpg",
    ],
    description: "Hófehér olasz Carrara márvány asztallap lágy szürke erezettel, kézzel faragott tömör amerikai diófa talapzaton.",
    descriptionEn: "Luminous white Italian Carrara marble tabletop with delicate smoke-grey veining, resting upon a hand-sculpted solid American walnut architectural base.",
    story: "A toszkán hegyek márványbányáiból válogatott prémium táblák.",
    storyEn: "Hand-selected from heritage marble quarries in the Apuan Alps of Tuscany, Italy.",
    highlights: [
      "Eredeti toszkán Carrara márvány",
      "Tömör amerikai diófa szoborszerű lábak",
      "Kettős víz- és zsírtaszító nano-impregnálás",
    ],
    highlightsEn: [
      "Authentic Tuscan Bianco Carrara marble slab",
      "Sculptural solid American walnut hardwood pedestal",
      "Dual-stage hydrophobic and oleophobic nano-sealer",
    ],
    specs: {
      weightKg: 190,
      tabletopThicknessCm: 2.8,
      assemblyRequired: true,
      origin: "Olaszország (Carrara)",
      originEn: "Italy (Carrara, Tuscany)",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-200", label: "200 x 100 cm (6-8 személyes)", labelEn: "200 x 100 cm (Seats 6-8)", dimensions: "200 x 100 x 76 cm", priceDelta: -60000 },
      { id: "s-220", label: "220 x 100 cm (8 személyes)", labelEn: "220 x 100 cm (Seats 8)", dimensions: "220 x 100 x 76 cm", priceDelta: 0, isDefault: true },
      { id: "s-240", label: "240 x 110 cm (10 személyes)", labelEn: "240 x 110 cm (Seats 10)", dimensions: "240 x 110 x 76 cm", priceDelta: 120000 },
    ],
    availableMaterials: [
      { id: "mat-carrara", name: "Carrara Márvány + Diófa Láb", nameEn: "Carrara Marble + Walnut Legs", colorHex: "#f2f2f2", materialType: "marble", priceDelta: 0 },
      { id: "mat-calacatta", name: "Calacatta Gold Márvány (Arany Erezet)", nameEn: "Calacatta Gold Marble (Golden Veining)", colorHex: "#eae5d8", materialType: "marble", priceDelta: 180000 },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Selymes Matt Csiszolt", nameEn: "Silky Matte Honed", priceDelta: 0, description: "Kifinomult modern matt tapintás", descriptionEn: "Sophisticated modern touch" },
      { id: "fin-polished", name: "Fényes Polírozott", nameEn: "High-Gloss Polished", priceDelta: 40000, description: "Magasfényű kristályos csillogás", descriptionEn: "High-shine crystalline reflection" },
    ],
  },
  {
    id: "p-05",
    slug: "silva-tomor-diofa-etkezoasztal",
    name: "Silva Tömör Diófa Étkezőasztal",
    nameEn: "Silva Solid American Walnut Dining Table",
    room: "etkezo",
    subType: "etkezoasztal",
    subTypeEn: "Dining Table",
    materialType: "wood",
    basePrice: 489000,
    materialDesc: "Tömör Amerikai Diófa Palló, Matt Kézműves Olajozás",
    materialDescEn: "Solid American Walnut Planks, Handcrafted Matte Natural Oil",
    dimensions: "200 x 95 x 76 cm",
    stockStatus: "Raktáron (3 db)",
    stockStatusEn: "In Stock (3 units ready)",
    tag: "Nemes Tömörfa",
    tagEn: "Noble Hardwood",
    rating: 5.0,
    reviewCount: 22,
    images: [
      "/kepek/products/p05_walnut_table_front.jpg",
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
      "/kepek/materials/wood.jpg",
    ],
    description: "Prémium amerikai diófa étkezőasztal természetes, hossztoldásmentes pallókból, svájci kézműves olajkezeléssel.",
    descriptionEn: "Premium American walnut dining table crafted from full-length solid planks treated with Swiss organic furniture oil for deep color saturation.",
    story: "Fenntartható erdőgazdálkodásból származó, gondosan szárított nemes keményfa.",
    storyEn: "Sourced from sustainably managed North American forests, kiln-dried to perfection.",
    highlights: [
      "100% tömör amerikai diófa (nem furnér)",
      "Természetes faerezet és bársonyos olajozás",
      "Masszív acél merevítéssel a vetemedés ellen",
    ],
    highlightsEn: [
      "100% solid American black walnut (no veneer)",
      "Rich organic grain with velvety matte oil finish",
      "Concealed steel reinforcement preventing warping",
    ],
    specs: {
      weightKg: 95,
      tabletopThicknessCm: 4.0,
      assemblyRequired: true,
      origin: "Észak-Amerika / Magyarország",
      originEn: "North America / Hungarian Joinery",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-180", label: "180 x 90 cm (6 személyes)", labelEn: "180 x 90 cm (Seats 6)", dimensions: "180 x 90 x 76 cm", priceDelta: -40000 },
      { id: "s-200", label: "200 x 95 cm (8 személyes)", labelEn: "200 x 95 cm (Seats 8)", dimensions: "200 x 95 x 76 cm", priceDelta: 0, isDefault: true },
      { id: "s-240", label: "240 x 100 cm (10 személyes)", labelEn: "240 x 100 cm (Seats 10)", dimensions: "240 x 100 x 76 cm", priceDelta: 110000 },
    ],
    availableMaterials: [
      { id: "mat-walnut", name: "Amerikai Fekete Diófa (Sötétbarna)", nameEn: "American Black Walnut (Rich Brown)", colorHex: "#5c3d2e", materialType: "wood", priceDelta: 0 },
      { id: "mat-oak", name: "Natúr Európai Tölgyfa (Világos)", nameEn: "Natural European Oak (Warm Blonde)", colorHex: "#c5a880", materialType: "wood", priceDelta: -50000 },
    ],
    availableFinishes: [
      { id: "fin-oil", name: "Matt Természetes Olaj", nameEn: "Matte Natural Organic Oil", priceDelta: 0, description: "Bársonyos tapintás, kiemeli a fa természetes mélységét", descriptionEn: "Silky touch accentuating natural wood grain depth" },
    ],
  },
  {
    id: "p-06",
    slug: "monolit-fluted-travertin-oszlop-console",
    name: "Monolit Fluted Travertin Oszlop Console",
    nameEn: "Monolith Fluted Travertine Console Table",
    room: "eloszoba",
    subType: "konzol",
    subTypeEn: "Console Table",
    materialType: "travertine",
    basePrice: 289000,
    materialDesc: "Faragott Kannelúrázott Travertin Kőtömb",
    materialDescEn: "Hand-Carved Fluted Solid Travertine Block",
    dimensions: "120 x 40 x 85 cm",
    stockStatus: "Raktáron (3 db)",
    stockStatusEn: "In Stock (3 units ready)",
    tag: "Kézműves Faragvány",
    tagEn: "Handcrafted Monolith",
    rating: 5.0,
    reviewCount: 16,
    images: [
      "/kepek/products/p06_console_table_front.jpg",
      "/kepek/travertin-konzol/4k_front_galeria.jpg",
      "/kepek/travertin-konzol/4k_enterior_stilus.jpg",
      "/kepek/showcase/travertin_surface_macro_8k.jpg",
    ],
    description: "Klasszikus antik oszlopkannelúrák inspirálta tömör travertin előszobai konzolasztal.",
    descriptionEn: "Inspired by classical Greco-Roman fluted columns, this solid travertine console table brings timeless architectural grandeur to foyers, hallways, and living spaces.",
    story: "Egyetlen kőtömbből faragott hullámos bordázat.",
    storyEn: "Sculpted with vertical architectural flutes that create dramatic shadow play in natural light.",
    highlights: [
      "Faragott vertikális bordázat",
      "Tökéletes előszobai és folyosói arányok",
      "Természetes kővédelemmel ellátva",
    ],
    highlightsEn: [
      "Precision carved vertical fluted texture",
      "Ideal proportions for entryways and galleries",
      "Factory sealed with invisible hydrophobic nano-coat",
    ],
    specs: {
      weightKg: 115,
      tabletopThicknessCm: 3.5,
      assemblyRequired: false,
      origin: "Olaszország",
      originEn: "Italy (Tivoli)",
      warrantyYears: 10,
    },
    availableSizes: [
      { id: "s-100", label: "100 x 35 x 85 cm", labelEn: "100 x 35 x 85 cm", dimensions: "100 x 35 x 85 cm", priceDelta: -25000 },
      { id: "s-120", label: "120 x 40 x 85 cm", labelEn: "120 x 40 x 85 cm", dimensions: "120 x 40 x 85 cm", priceDelta: 0, isDefault: true },
      { id: "s-150", label: "150 x 40 x 85 cm", labelEn: "150 x 40 x 85 cm", dimensions: "150 x 40 x 85 cm", priceDelta: 45000 },
    ],
    availableMaterials: [
      { id: "mat-navona", name: "Navona Travertin", nameEn: "Navona Travertine (Beige)", colorHex: "#e8ddcf", materialType: "travertine", priceDelta: 0 },
      { id: "mat-romano", name: "Romano Travertin", nameEn: "Romano Travertine (Amber)", colorHex: "#d9c4aa", materialType: "travertine", priceDelta: 15000 },
    ],
    availableFinishes: [
      { id: "fin-matt", name: "Matt Csiszolt", nameEn: "Matte Honed", priceDelta: 0, description: "Selymes tapintású védőréteggel", descriptionEn: "Silky tactile sealed surface" },
    ],
  },
  {
    id: "p-07",
    slug: "silva-lounge-fotel-diofa-vazzal",
    name: "Silva Lounge Fotel Diófa Vázzal",
    nameEn: "Silva Sculptural Lounge Chair in Walnut & Bouclé",
    room: "nappali",
    subType: "fotel",
    subTypeEn: "Lounge Chair",
    materialType: "upholstery",
    basePrice: 269000,
    materialDesc: "Tömör Natúr Diófa Keret, Prémium Olasz Bouclé Kárpit",
    materialDescEn: "Solid American Walnut Frame, Premium Italian Wool Bouclé",
    dimensions: "85 x 82 x 75 cm",
    stockStatus: "Raktáron (4 db)",
    stockStatusEn: "In Stock (4 units ready)",
    tag: "Skandináv & Japandi",
    tagEn: "Japandi Lounge",
    rating: 4.9,
    reviewCount: 25,
    images: [
      "/kepek/products/p07_lounge_chair_front.jpg",
      "/kepek/standards/2_architectural_staging_benchmark.jpg",
      "/kepek/materials/upholstery.jpg",
    ],
    description: "Kényeztető mélyülésű lounge fotel skandináv diófa vázzal és prémium olasz gyapjú-bouclé kárpitozással.",
    descriptionEn: "Deep-seated architectural lounge chair blending Scandinavian warmth with Japanese minimalism. Crafted with a solid American walnut frame and tactile Italian wool-blend bouclé upholstery.",
    story: "Ergonomikus szögben ívelt háttámla és nagy rugalmasságú HR habpárnázat.",
    storyEn: "Engineered with an ergonomic reclined posture and dual-density high-resilience memory cushioning.",
    highlights: [
      "Tömör amerikai diófa karfák és lábak",
      "Kopásálló 80.000 Martindale olasz bouclé",
      "Ergonomikus deréktámasz",
    ],
    highlightsEn: [
      "Solid American walnut sculpted arms and legs",
      "Heavy-duty 80,000 Martindale Italian wool bouclé",
      "Ergonomic lumbar curvature and deep lounging comfort",
    ],
    specs: {
      weightKg: 28,
      tabletopThicknessCm: 0,
      assemblyRequired: false,
      origin: "Olaszország / Magyarország",
      originEn: "Italy / Hungary",
      warrantyYears: 5,
    },
    availableSizes: [
      { id: "s-standard", label: "Standard Lounge (85 x 82 x 75 cm)", labelEn: "Standard Lounge (85 x 82 x 75 cm)", dimensions: "85 x 82 x 75 cm", priceDelta: 0, isDefault: true },
      { id: "s-wide", label: "Grand Lounge (95 x 90 x 75 cm)", labelEn: "Grand Lounge (95 x 90 x 75 cm)", dimensions: "95 x 90 x 75 cm", priceDelta: 40000 },
    ],
    availableMaterials: [
      { id: "mat-cream-boucle", name: "Krémszín Gyapjú Bouclé", nameEn: "Warm Cream Wool Bouclé", colorHex: "#f0ece1", materialType: "upholstery", priceDelta: 0 },
      { id: "mat-caramel-leather", name: "Konyak Bőr Kárpit", nameEn: "Cognac Full-Grain Leather", colorHex: "#995d3f", materialType: "upholstery", priceDelta: 65000 },
      { id: "mat-charcoal-velvet", name: "Antracit Bársony", nameEn: "Charcoal Luxe Velvet", colorHex: "#333333", materialType: "upholstery", priceDelta: 20000 },
    ],
    availableFinishes: [
      { id: "fin-standard", name: "Természetes Diófa Váz", nameEn: "Natural Matte Oiled Walnut", priceDelta: 0, description: "Matt selyemolajozással", descriptionEn: "Satin organic furniture oil" },
    ],
  },
  {
    id: "p-08",
    slug: "aura-alabastrom-travertin-asztali-lampa",
    name: "Aura Alabástrom & Travertin Asztali Lámpa",
    nameEn: "Aura Translucent Alabaster & Travertine Lamp",
    room: "vilagitas",
    subType: "asztali-lampa",
    subTypeEn: "Table Lamp",
    materialType: "travertine",
    basePrice: 149000,
    materialDesc: "Faragott Travertin Talp, Átvilágítható Természetes Alabástrom Gömb",
    materialDescEn: "Carved Travertine Base, Translucent Spanish Alabaster Orb",
    dimensions: "28 x 28 x 45 cm",
    stockStatus: "Raktáron (8 db)",
    stockStatusEn: "In Stock (8 units ready)",
    tag: "Hangulatvilágítás",
    tagEn: "Ambient Lighting",
    rating: 4.9,
    reviewCount: 38,
    images: [
      "/kepek/products/p08_table_lamp_front.jpg",
      "/kepek/standards/1_macro_8k_benchmark.jpg",
      "/kepek/showcase/travertin_surface_macro_8k.jpg",
    ],
    description: "Szoborszerű világítótest tömör travertin talapzaton és meleg fénnyel átvilágítható természetes spanyol alabástrom gömbbel.",
    descriptionEn: "A sculptural luminaire featuring a solid travertine cylinder base paired with an authentic Spanish translucent alabaster sphere emitting an ethereal warm glow.",
    story: "Minden lámpatest egyedi fényrajzolatot vetít a falakra a kő belső kristályszerkezetének köszönhetően.",
    storyEn: "Each alabaster dome projects a unique crystalline light halo into the surrounding room.",
    highlights: [
      "Faragott tömör travertin hengertalapzat",
      "Valódi átvilágítható alabástrom kőbúra",
      "Fokozatmentes meleg fényű LED dimmer",
    ],
    highlightsEn: [
      "Solid carved travertine cylinder pedestal",
      "Authentic translucent Spanish alabaster stone dome",
      "Stepless 2700K warm-white touch dimmer integration",
    ],
    specs: {
      weightKg: 12,
      tabletopThicknessCm: 0,
      assemblyRequired: false,
      origin: "Spanyolország & Olaszország",
      originEn: "Spain (Alabaster) & Italy (Travertine)",
      warrantyYears: 5,
    },
    availableSizes: [
      { id: "s-medium", label: "Medium (28 x 28 x 45 cm)", labelEn: "Medium (28 x 28 x 45 cm)", dimensions: "28 x 28 x 45 cm", priceDelta: 0, isDefault: true },
      { id: "s-large", label: "Grande (35 x 35 x 58 cm)", labelEn: "Grande (35 x 35 x 58 cm)", dimensions: "35 x 35 x 58 cm", priceDelta: 35000 },
    ],
    availableMaterials: [
      { id: "mat-trav-alabaster", name: "Navona Travertin + Alabástrom", nameEn: "Navona Travertine + Alabaster", colorHex: "#e8ddcf", materialType: "travertine", priceDelta: 0 },
      { id: "mat-black-alabaster", name: "Fekete Márvány + Alabástrom", nameEn: "Nero Marble + Alabaster", colorHex: "#222222", materialType: "marble", priceDelta: 20000 },
    ],
    availableFinishes: [
      { id: "fin-dimmer", name: "Beépített Érintős Fényerőszabályzó", nameEn: "Integrated Touch Dimmer (2700K)", priceDelta: 0, description: "2700K melegfehér hangulatvilágítás", descriptionEn: "2700K warm-white architectural ambient illumination" },
    ],
  },
];
