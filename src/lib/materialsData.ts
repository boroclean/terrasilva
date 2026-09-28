export interface StoneMaterial {
  id: string;
  name: string;
  originalName: string;
  category: "travertine" | "classic-marble" | "exotic-stone" | "onyx" | "dark-stone";
  categoryLabel: string;
  origin: string;
  accentColor: string;
  textureImage: string;
  showcaseImage?: string;
  description: string;
  visualCharacteristics: string;
  surfaceFinishes: {
    name: string;
    description: string;
  }[];
  specifications: {
    mohsHardness: string;
    density: string;
    waterAbsorption: string;
    acidResistance: string;
    recommendedUses: string[];
  };
  highlightBadge?: string;
}

export const STONE_MATERIALS: StoneMaterial[] = [
  {
    id: "beige-travertine",
    name: "Klasszikus Bézs Travertin",
    originalName: "Beige Travertine",
    category: "travertine",
    categoryLabel: "Travertin Mészkő",
    origin: "Tivoli / Római medence, Olaszország",
    accentColor: "#d8be9b",
    textureImage: "/kepek/materials/mat_beige_travertine_1790623921312.jpg",
    showcaseImage: "/kepek/travertin-etkezo/etkezo-1.png",
    description: "Az ókori római építészet örök érvényű szimbóluma. Meleg, földes bézs és krémszínű tónusok, organikus horizontális rétegződéssel és természetes pórusokkal.",
    visualCharacteristics: "Vízszintesen futó meleg bézs és capuccino rétegződés, mikropórusos természetes üregek, lágy, természetközeli tapintás.",
    highlightBadge: "Legnépszerűbb",
    surfaceFinishes: [
      { name: "Matt Csiszolt (Honed)", description: "Selymes, nem csillogó, modern tapintású felület zárt pórusokkal." },
      { name: "Natúr Pórusos (Open Pores)", description: "Természetes lyukacsos szerkezet, organikus wabi-sabi luxus." },
      { name: "Antikolt / Kefélt (Brushed)", description: "Finoman kidomborodó erezet, patinás textúra." }
    ],
    specifications: {
      mohsHardness: "3 - 3.5 (Kemény mészkő)",
      density: "2.45 - 2.55 g/cm³",
      waterAbsorption: "Alacsony-közepes (impregnálás javasolt)",
      acidResistance: "Közepes (citrom/ecet ellen védeni kell)",
      recommendedUses: ["Étkezőasztalok", "Dohányzóasztalok", "Konzolok", "Kőoszlopok"]
    }
  },
  {
    id: "white-travertine",
    name: "Elefántcsont Fehér Travertin",
    originalName: "White Travertine / Ivory Travertine",
    category: "travertine",
    categoryLabel: "Travertin Mészkő",
    origin: "Navona & Tivoli, Olaszország",
    accentColor: "#e6ded1",
    textureImage: "/kepek/materials/mat_white_travertine_1790623946487.jpg",
    showcaseImage: "/kepek/travertin-konzol/konzol-1.png",
    description: "Világos, légies és rendkívül elegáns kőzet. Krémfehér és törtfehér árnyalatok finom krémes erezettel, amely világosítja és tágítja a tereket.",
    visualCharacteristics: "Egységes elefántcsont-fehér alapszín, finom lineáris mikroszerkezet és nemes matt fény.",
    highlightBadge: "Prémium Választás",
    surfaceFinishes: [
      { name: "Matt Selyemfény", description: "Bársonyos érintés, tiszta minimalista kisugárzás." },
      { name: "Nyitott Pórusszerkezet", description: "Autentikus ókori mediterrán karakter." }
    ],
    specifications: {
      mohsHardness: "3.5",
      density: "2.50 g/cm³",
      waterAbsorption: "1.2%",
      acidResistance: "Közepes",
      recommendedUses: ["Dohányzóasztal garnitúrák", "Lebegő konzolok", "Szoborszerű talapzatok"]
    }
  },
  {
    id: "grey-travertine",
    name: "Titán Szürke / Ezüst Travertin",
    originalName: "Grey Travertine / Silver Travertine",
    category: "travertine",
    categoryLabel: "Travertin Mészkő",
    origin: "Toszkána / Lazio, Olaszország",
    accentColor: "#8f8b85",
    textureImage: "/kepek/materials/mat_grey_travertine_1790623991676.jpg",
    showcaseImage: "/kepek/materials/mat_grey_travertine_1790623991676.jpg",
    description: "Kortárs építészeti kedvenc. Palaszürke, titán és hamvas ezüst rétegződés ritka vízszintes ásványi sávokkal, indusztriális és modern otthonokba.",
    visualCharacteristics: "Dramatikus szürkés-ezüstös sávos struktúra, antracit árnyalatok és nemes ásványi szedimentáció.",
    highlightBadge: "Építészeti Kollekció",
    surfaceFinishes: [
      { name: "Matt Csiszolt", description: "Kiemeli a szürke árnyalatok közötti kontrasztot." },
      { name: "Strukturált / Kefélt", description: "Háromdimenziós mélységet ad a rétegeknek." }
    ],
    specifications: {
      mohsHardness: "3.5 - 4.0",
      density: "2.60 g/cm³",
      waterAbsorption: "0.9%",
      acidResistance: "Közepes",
      recommendedUses: ["Monolit dohányzóasztalok", "Médiafal kiegészítők", "Exkluzív étkezők"]
    }
  },
  {
    id: "arabescato-white",
    name: "Arabescato Olasz Márvány",
    originalName: "Arabescato White Marble",
    category: "classic-marble",
    categoryLabel: "Klasszikus Márvány",
    origin: "Apuan Alpok, Carrara, Olaszország",
    accentColor: "#4a4c50",
    textureImage: "/kepek/materials/mat_arabescato_marble_1790624038707.jpg",
    showcaseImage: "/kepek/materials/showcase_arabescato_console_1790624428919.jpg",
    description: "A világ egyik leghíresebb és legdrámaibb szobrászati márványa. Ragyogó fehér kristályos alapon sötétszürke és antracit ovális arabeszk erezet kavarog.",
    visualCharacteristics: "Ikonikus breccsa textúra, hálószerűen futó sötét szürke és grafit rajzolat a tiszta fehér alapon.",
    highlightBadge: "Múzeumi Minőség",
    surfaceFinishes: [
      { name: "Tükörpolírozott (Polished)", description: "Kristálytiszta mélység és maximális fényvisszaverődés." },
      { name: "Selyem Matt (Honed)", description: "Lágy, nem tükröződő kortárs felület." }
    ],
    specifications: {
      mohsHardness: "4.0",
      density: "2.71 g/cm³",
      waterAbsorption: "0.22%",
      acidResistance: "Márvány standard (Nano-védelemmel szállítva)",
      recommendedUses: ["Szoborszerű étkezőasztalok", "Monumentális konzolok", "Dohányzóasztalok"]
    }
  },
  {
    id: "calacatta-white",
    name: "Calacatta Gold Fehér Márvány",
    originalName: "Calatta White / Calacatta Gold",
    category: "classic-marble",
    categoryLabel: "Klasszikus Márvány",
    origin: "Carrara régió, Olaszország",
    accentColor: "#c9b38c",
    textureImage: "/kepek/materials/mat_calacatta_white_1790624099695.jpg",
    showcaseImage: "/kepek/materials/mat_calacatta_white_1790624099695.jpg",
    description: "A luxus megkérdőjelezhetetlen etalonja. Meleg tejfehér alapon finoman elomló szürkés-arany tollerezet, amely páratlan melegséget és gazdagságot sugároz.",
    visualCharacteristics: "Meleg fehér tónus, arany és méz-szürke lebegő erezetminták, magas kristályos tisztaság.",
    highlightBadge: "Ultra Luxus",
    surfaceFinishes: [
      { name: "Polírozott Fényes", description: "Megvilágításban fenséges aranyló csillogást nyújt." },
      { name: "Bársony Matt", description: "Finom tapintású, meleg hatású modern megmunkálás." }
    ],
    specifications: {
      mohsHardness: "4.0",
      density: "2.72 g/cm³",
      waterAbsorption: "0.18%",
      acidResistance: "Védőbevonattal kezelt",
      recommendedUses: ["Luxus étkezőasztal lapok", "Kisasztal szettek", "Konzolok"]
    }
  },
  {
    id: "calacatta-viola",
    name: "Calacatta Viola / Bordo Márvány",
    originalName: "Calacatta Viola / Rose Marble",
    category: "exotic-stone",
    categoryLabel: "Egzotikus Kőzet",
    origin: "Carrara, Olaszország",
    accentColor: "#581830",
    textureImage: "/kepek/materials/mat_calacatta_viola_1790624142697.jpg",
    showcaseImage: "/kepek/materials/mat_calacatta_viola_1790624142697.jpg",
    description: "A nemzetközi belsőépítészet legkeresettebb 'Statement' kőzete. Mély bordó, szilva és padlizsán árnyalatú dramatikus erezet, tiszta fehér kalcit kristályokkal határolva.",
    visualCharacteristics: "Erőteljes, színhangsúlyos bordó-lila erezet, organikus geometriai kontrasztok.",
    highlightBadge: "Design Ikon",
    surfaceFinishes: [
      { name: "Polírozott Fényes", description: "A mély borvörös és lila tónusok maximális intenzitása." },
      { name: "Matt Csiszolt", description: "Diszkrétebb, művészi galéria hangulat." }
    ],
    specifications: {
      mohsHardness: "3.8 - 4.0",
      density: "2.70 g/cm³",
      waterAbsorption: "0.25%",
      acidResistance: "Védőréteggel ellátott",
      recommendedUses: ["Hangsúlyos dohányzóasztalok", "Kocka és oszlop lerakók", "Konzolasztalok"]
    }
  },
  {
    id: "pink-onyx",
    name: "Rózsaszín Nemes Ónix",
    originalName: "Pink Onyx / Rose Quartz Stone",
    category: "onyx",
    categoryLabel: "Áttetsző Nemes Ónix",
    origin: "Irán / Törökország",
    accentColor: "#e5a7b6",
    textureImage: "/kepek/materials/mat_pink_onyx_1790624177330.jpg",
    showcaseImage: "/kepek/materials/mat_pink_onyx_1790624177330.jpg",
    description: "Különleges, félig áttetsző féldrágakő kőzet. Pasztell rózsaszín felhősávok, gyöngyház és barack tónusok, amelyek hátulról megvilágítva varázslatosan felragyognak.",
    visualCharacteristics: "Fényáteresztő kristályos szerkezet, lágy rózsaszín és tejes hullámok, ékszerszerű ragyogás.",
    highlightBadge: "Fényáteresztő Ónix",
    surfaceFinishes: [
      { name: "Kristály Polír", description: "Tökéletesen sima, ékszerhatású felület." }
    ],
    specifications: {
      mohsHardness: "3.0",
      density: "2.65 g/cm³",
      waterAbsorption: "0.10%",
      acidResistance: "Kíméletes tisztítás",
      recommendedUses: ["Hangulatvilágításos asztalok", "Egyedi dekor kőtálak", "Éjjeliszekrények"]
    }
  },
  {
    id: "green-onyx",
    name: "Zöld Jáde Ónix",
    originalName: "Green Onyx / Jade Onyx",
    category: "onyx",
    categoryLabel: "Áttetsző Nemes Ónix",
    origin: "Pakisztán / Törökország",
    accentColor: "#6ea07b",
    textureImage: "/kepek/materials/mat_green_onyx_1790624213495.jpg",
    showcaseImage: "/kepek/materials/mat_green_onyx_1790624213495.jpg",
    description: "Világos smaragd, menta és pisztácia tónusú áttetsző ónix, finom mézszínű ásványi sávokkal. A természet megismételhetetlen kristályos csodája.",
    visualCharacteristics: "Áttetsző mentazöld test, aranybarna és fehér koncentrikus növekedési sávok.",
    highlightBadge: "Fényáteresztő Ónix",
    surfaceFinishes: [
      { name: "Kristály Polír", description: "Maximális fényáteresztés és mély kristályos látvány." }
    ],
    specifications: {
      mohsHardness: "3.0 - 3.5",
      density: "2.68 g/cm³",
      waterAbsorption: "0.12%",
      acidResistance: "Kíméletes tisztítás",
      recommendedUses: ["Kisasztalok", "Lámpatalpak", "Díszítőoszlopok"]
    }
  },
  {
    id: "verde-cristallo",
    name: "Verde Cristallo Smaragdhullám Márvány",
    originalName: "Verde Cristallo / Ice Jade Marble",
    category: "exotic-stone",
    categoryLabel: "Egzotikus Kőzet",
    origin: "Kína / Brazília",
    accentColor: "#5b8c7b",
    textureImage: "/kepek/materials/mat_verde_cristallo_1790624266011.jpg",
    showcaseImage: "/kepek/materials/mat_verde_cristallo_1790624266011.jpg",
    description: "Hullámzó jégzöld és menta erezet tiszta kristályos kvarccal keverve. Olyan látványt nyújt, mintha a hegyi folyók zúgását zárták volna kőbe.",
    visualCharacteristics: "Dinamikus, zöldeskék és hófehér hullámzó erezetmintázat mély kristályos textúrával.",
    highlightBadge: "Egzotikus Ritkaság",
    surfaceFinishes: [
      { name: "Magasfényű Polírozás", description: "Kiemeli az ásványi hullámok háromdimenziós hatását." }
    ],
    specifications: {
      mohsHardness: "4.0 - 4.5",
      density: "2.75 g/cm³",
      waterAbsorption: "0.15%",
      acidResistance: "Nagy ellenállóképesség",
      recommendedUses: ["Egyedi dohányzóasztalok", "Konzolok", "Különleges kőtálak"]
    }
  },
  {
    id: "verde-alpi",
    name: "Verde Alpi Sötétzöld Márvány",
    originalName: "Verde Alpi / Guatemala Green",
    category: "exotic-stone",
    categoryLabel: "Egzotikus Kőzet",
    origin: "Aosta Völgy, Olasz Alpok",
    accentColor: "#1e3a29",
    textureImage: "/kepek/materials/mat_verde_alpi_1790624295041.jpg",
    showcaseImage: "/kepek/materials/mat_verde_alpi_1790624295041.jpg",
    description: "Mély fenyőzöld és méregzöld olasz alpesi márvány, amelyet éles fehér kalcit törésvonalak és fekete szerpentinit mélységek tesznek felejthetetlenné.",
    visualCharacteristics: "Sötét smaragdzöld alapszín finom, hálószerű fehér villámmintákkal és mély tónusokkal.",
    highlightBadge: "Alpin Elegancia",
    surfaceFinishes: [
      { name: "Tükörpolírozott", description: "Mélyfekete-zöld ragyogás, luxus kontraszt." },
      { name: "Matt Csiszolt", description: "Bársonyos, természetes erdei árnyalatok." }
    ],
    specifications: {
      mohsHardness: "4.0",
      density: "2.78 g/cm³",
      waterAbsorption: "0.20%",
      acidResistance: "Közepes-magas",
      recommendedUses: ["Étkezőasztalok", "Dohányzóasztalok", "Lounge bútorok"]
    }
  },
  {
    id: "nero-marquina",
    name: "Nero Marquina Fekete Márvány",
    originalName: "Nero Marquina / Black Marquina",
    category: "dark-stone",
    categoryLabel: "Sötét & Karakteres",
    origin: "Marquina régió, Baszkföld, Spanyolország",
    accentColor: "#1f2228",
    textureImage: "/kepek/materials/mat_nero_marquina_1790624329402.jpg",
    showcaseImage: "/kepek/materials/mat_nero_marquina_1790624329402.jpg",
    description: "A fekete márványok királya. Mély ébenfekete kőzet, amelyet éles, fehér fosszíliás villámerek hasítanak át dinamikus szögekben.",
    visualCharacteristics: "Mélyfekete bársonyos alap, ritka és éles fehér erezetkontraszt.",
    highlightBadge: "Örök Klasszikus",
    surfaceFinishes: [
      { name: "Polírozott Magasfény", description: "Mélyfekete zongoralakk hatású tükröződés." },
      { name: "Matt Selyemfény", description: "Diszkrét, skandináv és minimalista terekhez." }
    ],
    specifications: {
      mohsHardness: "3.5 - 4.0",
      density: "2.69 g/cm³",
      waterAbsorption: "0.17%",
      acidResistance: "Közepes",
      recommendedUses: ["Monolit kockák", "Étkezőasztalok", "Építészeti konzolok"]
    }
  },
  {
    id: "pietra-grey",
    name: "Pietra Szürke Grafit Márvány",
    originalName: "Pietra Grey Marble",
    category: "dark-stone",
    categoryLabel: "Sötét & Karakteres",
    origin: "Iszfahán, Perzsia",
    accentColor: "#3a3c40",
    textureImage: "/kepek/materials/mat_pietra_grey_1790624362328.jpg",
    showcaseImage: "/kepek/materials/mat_pietra_grey_1790624362328.jpg",
    description: "Kifinomult sötétszürke és antracit grafit márvány leheletfinom, hajszálvékony fehér kalcit vonalakkal. A modern elegancia visszafogott megtestesítője.",
    visualCharacteristics: "Egyenletes grafit-palaszürke felület finom fehér erezettel, minimális színeltéréssel.",
    highlightBadge: "Modern Minimalista",
    surfaceFinishes: [
      { name: "Matt Csiszolt", description: "Letisztult, tükröződésmentes luxus felület." },
      { name: "Selyemfényű Polír", description: "Finom mélységet ad a grafit árnyalatoknak." }
    ],
    specifications: {
      mohsHardness: "4.0",
      density: "2.70 g/cm³",
      waterAbsorption: "0.20%",
      acidResistance: "Közepes",
      recommendedUses: ["Konzolasztalok", "Médiabútor kőbetétek", "Dohányzóasztalok"]
    }
  }
];
