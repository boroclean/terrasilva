"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "hu" | "en";

export interface Translations {
  [key: string]: string;
}

const TRANSLATIONS: Record<Language, Translations> = {
  hu: {
    // Navigation
    "nav.brandSub": "Prémium Kő & Nemesfa Bútorok",
    "nav.collections": "Kollekciók",
    "nav.materials": "Anyagok & Kőminták",
    "nav.customization": "Testreszabás",
    "nav.benefits": "Miért a TerraSilva?",
    "nav.contact": "Kapcsolat",
    "nav.showroom": "Bemutatóterem",
    "nav.comingSoon": "Hamarosan",
    "nav.directImport": "Közvetlen Manufaktúra Import",
    "nav.callNow": "Hívjon most",
    "nav.adminLogin": "Admin Belépés",

    // Hero
    "hero.badge": "100% Természetes Kő & Nemes Fa Lakberendezés",
    "hero.title1": "Építészeti Luxus",
    "hero.title2": "a Természet Alkotásaiból.",
    "hero.lead": "Közvetlen olasz manufaktúra importból származó természetes Navona travertin mészkő, Carrara márvány és tömör amerikai diófa bútorok – kompromisszummentes eleganciával és 10 év kőgaranciával.",
    "hero.ctaCatalog": "Bútor Kollekció Megtekintése",
    "hero.ctaMaterials": "Kőminták Felfedezése",
    "hero.stoneZoom": "100% Eredeti Navona Travertin Pórustextúra (8K Makró)",
    "hero.stoneOrigin": "Tivoli & Navona Kőbánya, Olaszország",
    "hero.stoneDesc": "Minden darab egyedi geológiai ujjlenyomat, nem gépi másolat.",

    // Trust Badges
    "trust.warrantyTitle": "10 Év Kőgarancia",
    "trust.warrantyDesc": "Tanúsítvánnyal ellátott tömör olasz travertin és márvány kőzetek",
    "trust.deliveryTitle": "Prémium Kiszállítás",
    "trust.deliveryDesc": "Kétszemélyes fehérkesztyűs szállítás és gondos helyszíni elhelyezés",
    "trust.customTitle": "Egyedi Méretgyártás",
    "trust.customDesc": "Bútortervezés milliméteres pontossággal belsőépítészeknek és magánszemélyeknek",
    "trust.directTitle": "Közvetlen Import",
    "trust.directDesc": "Közvetítői lánc nélkül, a bányától egyenesen az Ön otthonába",

    // Catalog & Filter
    "catalog.title": "Exkluzív Kollekciók",
    "catalog.subtitle": "Fedezze fel kézzel válogatott kőtömbökből és nemes fákból épített bútorainkat.",
    "catalog.filterRoom": "Helyiségek",
    "catalog.filterMaterial": "Anyagtípus",
    "catalog.allRooms": "Összes Helyiség",
    "catalog.allMaterials": "Összes Anyag",
    "catalog.inStockFilter": "Csak raktáron lévők",
    "catalog.itemsCount": "bútor megjelenítve",
    "catalog.viewDetails": "Részletek & Konfigurálás",
    "catalog.fromPrice": "-tól",
    "catalog.inStockBadge": "Raktáron",
    "catalog.preorderBadge": "Érkező konténerben",
    "catalog.customBadge": "Egyedi gyártás",

    // Product Card
    "card.viewProduct": "Részletek & 3D Enteriőr",
    "card.quickView": "Gyorsnézet",
    "card.basePrice": "Alapár:",

    // Product Detail Page
    "product.home": "Főoldal",
    "product.catalog": "Katalógus",
    "product.selectSize": "1. Méret Kiválasztása",
    "product.selectMaterial": "2. Anyag & Kőtípus",
    "product.selectFinish": "3. Felületkezelés",
    "product.priceSummary": "Összesített Irányár",
    "product.vatIncluded": "27% ÁFA-val együtt",
    "product.consultationBtn": "Ajánlatkérés & Konzultáció",
    "product.consultationSub": "Azonnali kapcsolat: +36 20 407 6858 (Boronkay Bence)",
    "product.specsTitle": "Műszaki Paraméterek & Kőjellemzők",
    "product.weight": "Össztömeg",
    "product.tabletopThickness": "Lapvastagság",
    "product.assembly": "Összeszerelés",
    "product.assemblyNotReq": "Nem igényel (monolit / készre szerelt)",
    "product.assemblyReq": "Helyszíni egyszerű összeállítás",
    "product.origin": "Származási Hely",
    "product.warranty": "Gyári Garancia",
    "product.warrantyYears": "év szerkezeti garancia",
    "product.storyTitle": "A Kőzet Története & Származása",
    "product.highlightsTitle": "Kiemelt Építészeti Előnyök",
    "product.relatedTitle": "Hasonló Prémium Termékek",
    "product.roomViews": "Enteriőr & Textúra Látószögek",

    // Materials Page
    "materials.badge": "100% Természetes Kő Kollekció",
    "materials.title": "Anyagok & Kőminták",
    "materials.lead": "Ismerje meg a TerraSilva bútorokhoz választható 12 prémium olasz és nemzetközi kőzetet, mészkövet, márványt és ónixot.",
    "materials.all": "Összes Kőzet",
    "materials.travertines": "Travertin Mészkövek",
    "materials.marbles": "Klasszikus Márványok",
    "materials.exotics": "Egzotikus Kőzetek & Ónix",
    "materials.originLabel": "Származás",
    "materials.hardnessLabel": "Mohs Keménység",
    "materials.absorptionLabel": "Vízfelvétel",
    "materials.acidLabel": "Savállóság",
    "materials.finishesLabel": "Választható Felületek",
    "materials.recommendedLabel": "Javasolt Bútortípusok",
    "materials.requestSample": "Kőminta Rendelés & Ajánlat",

    // Consultation Modal
    "modal.title": "Egyedi Ajánlatkérés & Konzultáció",
    "modal.subtitle": "Személyre szabott ajánlat közvetlenül Boronkay Bence alapítótól.",
    "modal.name": "Az Ön Neve",
    "modal.phone": "Telefonszám",
    "modal.email": "E-mail cím",
    "modal.message": "Megjegyzés / Egyedi Méret Igény",
    "modal.submit": "Ajánlatkérés Elküldése",
    "modal.success": "Köszönjük! 24 órán belül felvesszük Önnel a kapcsolatot.",
    "modal.callDirect": "Vagy hívjon közvetlenül telefonon:",

    // Footer
    "footer.tagline": "Építészeti luxus természetes kőből és nemes keményfából.",
    "footer.links": "Hasznos Linkek",
    "footer.contact": "Kapcsolattartás",
    "footer.rights": "Minden jog fenntartva.",
    "footer.owner": "Vezető Fejlesztő & Tulajdonos: Boronkay Bence"
  },
  en: {
    // Navigation
    "nav.brandSub": "Luxury Stone & Solid Hardwood Living",
    "nav.collections": "Collections",
    "nav.materials": "Materials & Slabs",
    "nav.customization": "Custom Sizing",
    "nav.benefits": "Why TerraSilva?",
    "nav.contact": "Contact",
    "nav.showroom": "Showroom",
    "nav.comingSoon": "Coming Soon",
    "nav.directImport": "Direct Artisan Import",
    "nav.callNow": "Call directly",
    "nav.adminLogin": "Admin Portal",

    // Hero
    "hero.badge": "100% Natural Stone & Solid Hardwood Living",
    "hero.title1": "Architectural Luxury",
    "hero.title2": "Sculpted by Nature.",
    "hero.lead": "Authentic Italian Navona travertine, natural Carrara marble, and solid American walnut furniture directly imported from artisan stone quarries – uncompromising architectural elegance with a 10-year stone guarantee.",
    "hero.ctaCatalog": "Explore Furniture Catalog",
    "hero.ctaMaterials": "Discover Stone Slabs",
    "hero.stoneZoom": "100% Authentic Navona Travertine Pore Texture (8K Macro)",
    "hero.stoneOrigin": "Tivoli & Navona Quarry, Italy",
    "hero.stoneDesc": "Every single piece carries its unique geological fingerprint, never an engineered imitation.",

    // Trust Badges
    "trust.warrantyTitle": "10-Year Stone Warranty",
    "trust.warrantyDesc": "Certified solid Italian travertine, natural marble, and seasoned hardwood",
    "trust.deliveryTitle": "White-Glove Delivery",
    "trust.deliveryDesc": "Insured two-man handling, room-of-choice placement, and packaging removal",
    "trust.customTitle": "Bespoke Sizing",
    "trust.customDesc": "Millimeter-precise stonecutting tailored for architects, interior designers, and discerning clients",
    "trust.directTitle": "Direct Factory Import",
    "trust.directDesc": "Direct from quarry to your home without middleman markups",

    // Catalog & Filter
    "catalog.title": "Exclusive Collections",
    "catalog.subtitle": "Explore our handcrafted furniture sculpted from curated stone blocks and premium hardwood.",
    "catalog.filterRoom": "Spaces",
    "catalog.filterMaterial": "Material Type",
    "catalog.allRooms": "All Spaces",
    "catalog.allMaterials": "All Materials",
    "catalog.inStockFilter": "In Stock Only",
    "catalog.itemsCount": "pieces displayed",
    "catalog.viewDetails": "Details & Configure",
    "catalog.fromPrice": "from",
    "catalog.inStockBadge": "In Stock",
    "catalog.preorderBadge": "Arriving Soon",
    "catalog.customBadge": "Made to Order",

    // Product Card
    "card.viewProduct": "Details & 3D Staging",
    "card.quickView": "Quick View",
    "card.basePrice": "Base Price:",

    // Product Detail Page
    "product.home": "Home",
    "product.catalog": "Catalog",
    "product.selectSize": "1. Select Dimensions",
    "product.selectMaterial": "2. Stone & Material Type",
    "product.selectFinish": "3. Surface Finish",
    "product.priceSummary": "Estimated Total Price",
    "product.vatIncluded": "Incl. 27% VAT",
    "product.consultationBtn": "Request Bespoke Quote",
    "product.consultationSub": "Direct Line: +36 20 407 6858 (Bence Boronkay)",
    "product.specsTitle": "Technical Specifications & Material Properties",
    "product.weight": "Total Weight",
    "product.tabletopThickness": "Top Thickness",
    "product.assembly": "Assembly",
    "product.assemblyNotReq": "None required (monolithic / fully assembled)",
    "product.assemblyReq": "Simple on-site positioning",
    "product.origin": "Geological Origin",
    "product.warranty": "Factory Warranty",
    "product.warrantyYears": "years structural warranty",
    "product.storyTitle": "Geological Heritage & Sourcing",
    "product.highlightsTitle": "Architectural Highlights",
    "product.relatedTitle": "You May Also Like",
    "product.roomViews": "Staging & Macro Perspectives",

    // Materials Page
    "materials.badge": "100% Authentic Natural Stone Library",
    "materials.title": "Materials & Stone Slabs",
    "materials.lead": "Explore 12 authentic natural stone varieties, Italian travertines, and exotic marbles available for custom TerraSilva furniture.",
    "materials.all": "All Stones",
    "materials.travertines": "Travertine Limestone",
    "materials.marbles": "Classic Marbles",
    "materials.exotics": "Exotic Stones & Onyx",
    "materials.originLabel": "Origin",
    "materials.hardnessLabel": "Mohs Hardness",
    "materials.absorptionLabel": "Water Absorption",
    "materials.acidLabel": "Acid Resistance",
    "materials.finishesLabel": "Surface Finishes",
    "materials.recommendedLabel": "Recommended Uses",
    "materials.requestSample": "Order Stone Sample & Quote",

    // Consultation Modal
    "modal.title": "Bespoke Inquiry & Direct Consultation",
    "modal.subtitle": "Get a personalized consultation directly from founder Bence Boronkay.",
    "modal.name": "Your Name",
    "modal.phone": "Phone Number",
    "modal.email": "Email Address",
    "modal.message": "Custom Sizing or Special Requirements",
    "modal.submit": "Send Inquiry",
    "modal.success": "Thank you! We will get back to you within 24 hours.",
    "modal.callDirect": "Or call directly via phone:",

    // Footer
    "footer.tagline": "Architectural luxury sculpted from natural stone and noble hardwood.",
    "footer.links": "Useful Links",
    "footer.contact": "Get in Touch",
    "footer.rights": "All rights reserved.",
    "footer.owner": "Lead Developer & Owner: Bence Boronkay"
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "hu",
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("hu");

  useEffect(() => {
    const saved = localStorage.getItem("terrasilva_lang") as Language | null;
    if (saved && (saved === "hu" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("terrasilva_lang", lang);
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): string => {
    return TRANSLATIONS[language]?.[key] || TRANSLATIONS.hu[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
