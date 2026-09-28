"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Star, 
  Check, 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  Phone, 
  Palette, 
  Sparkles, 
  Maximize2,
  CheckCircle2,
  X,
  ShoppingBag
} from "lucide-react";
import { PRODUCTS, ProductSizeOption, ProductMaterialOption, ProductFinishOption } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const { language, setLanguage, t } = useLanguage();
  const isEn = language === "en";

  const product = PRODUCTS.find((p) => p.id === productId || p.slug === productId);

  if (!product) {
    notFound();
  }

  // Active Gallery Image
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Active Configuration
  const [selectedSize, setSelectedSize] = useState<ProductSizeOption>(
    product.availableSizes.find((s) => s.isDefault) || product.availableSizes[0]
  );
  const [selectedMaterial, setSelectedMaterial] = useState<ProductMaterialOption>(
    product.availableMaterials[0]
  );
  const [selectedFinish, setSelectedFinish] = useState<ProductFinishOption>(
    product.availableFinishes[0]
  );

  // Modal State for Order / Consultation Request
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    deliveryRequired: true,
    notes: "",
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<"specs" | "care" | "delivery" | "warranty">("specs");

  // Calculated Dynamic Price
  const totalPrice = product.basePrice + (selectedSize?.priceDelta || 0) + (selectedMaterial?.priceDelta || 0) + (selectedFinish?.priceDelta || 0);

  // Related Products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && (p.room === product.room || p.materialType === product.materialType)).slice(0, 4);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  const displayName = (isEn && product.nameEn) ? product.nameEn : product.name;
  const displayDescription = (isEn && product.descriptionEn) ? product.descriptionEn : product.description;
  const displayTag = (isEn && product.tagEn) ? product.tagEn : product.tag;
  const displaySubType = (isEn && product.subTypeEn) ? product.subTypeEn : product.subType;
  const displayStock = (isEn && product.stockStatusEn) ? product.stockStatusEn : product.stockStatus;
  const displayHighlights = (isEn && product.highlightsEn) ? product.highlightsEn : product.highlights;
  const displayOrigin = (isEn && product.specs.originEn) ? product.specs.originEn : product.specs.origin;

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#14171c] pb-24">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="bg-white border-b border-[#e8ddcf] px-6 py-3.5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-[#805e43]">
            <Link href="/" className="hover:text-[#14171c] flex items-center gap-1 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t("product.home")}</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <Link href="/#katalogus" className="hover:text-[#14171c] capitalize font-medium">
              {product.room}
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="font-bold text-[#14171c] line-clamp-1">{displayName}</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold">
            {/* Language Switcher Pill */}
            <div className="flex items-center p-0.5 rounded-xl bg-[#faf8f5] border border-[#e8ddcf] text-[11px] font-bold">
              <button
                onClick={() => setLanguage("hu")}
                className={`px-2 py-0.5 rounded-lg transition ${
                  language === "hu" ? "bg-[#14171c] text-white" : "text-[#805e43]"
                }`}
              >
                HU
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-lg transition ${
                  language === "en" ? "bg-[#14171c] text-white" : "text-[#805e43]"
                }`}
              >
                EN
              </button>
            </div>

            <span className="hidden sm:inline-block text-[#805e43]">
              {isEn ? "Direct Contact:" : "Közvetlen Kapcsolat:"} <strong className="text-[#14171c]">+36 20 407 6858</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Product Showcase & Configurator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT 7 COLS: Photo Gallery & Zoom Viewer */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div 
              onClick={() => setIsZoomOpen(true)}
              className="relative aspect-[4/3] w-full bg-[#f4ede4] rounded-3xl overflow-hidden border border-[#e8ddcf] shadow-md cursor-zoom-in group"
            >
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={displayName}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#14171c]/90 text-white backdrop-blur-md shadow-xs border border-white/10">
                  {displayTag}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#805e43] backdrop-blur-md shadow-xs border border-[#d7c4ac]">
                  {isEn ? "100% Authentic Italian Stone" : "100% Eredeti Olasz Kő"}
                </span>
              </div>

              {/* Zoom Trigger Button */}
              <button 
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-white/50 text-[#14171c] shadow-md group-hover:bg-[#9e7753] group-hover:text-white transition"
                title={isEn ? "Click to zoom" : "Kattints a nagyításhoz"}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail Carousel */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden border transition-all ${
                      selectedImageIndex === idx
                        ? "border-[#9e7753] ring-2 ring-[#9e7753]/30 shadow-md scale-102"
                        : "border-[#e8ddcf] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${displayName} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Highlight Badges Under Gallery */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-[#e8ddcf] text-center space-y-1 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-700 mx-auto" />
                <span className="text-[11px] font-bold text-[#14171c] block">
                  {t("trust.warrantyTitle")}
                </span>
                <span className="text-[10px] text-[#805e43] block">
                  {isEn ? "Solid natural stone" : "Tömör kőszerkezetre"}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#e8ddcf] text-center space-y-1 shadow-2xs">
                <Truck className="w-5 h-5 text-[#9e7753] mx-auto" />
                <span className="text-[11px] font-bold text-[#14171c] block">
                  {t("trust.deliveryTitle")}
                </span>
                <span className="text-[10px] text-[#805e43] block">
                  {isEn ? "Room of choice setup" : "Emeletre felvitel & szerelés"}
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#e8ddcf] text-center space-y-1 shadow-2xs">
                <Sparkles className="w-5 h-5 text-amber-600 mx-auto" />
                <span className="text-[11px] font-bold text-[#14171c] block">
                  {isEn ? "Nano Hydrophobic Seal" : "Kézi Impregnálás"}
                </span>
                <span className="text-[10px] text-[#805e43] block">
                  {isEn ? "Stain & liquid repellent" : "Folt- és víztaszító"}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: Interactive Live Configurator & Purchase Actions */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#e8ddcf] p-6 lg:p-8 shadow-sm space-y-6">
            {/* Title & Rating */}
            <div className="space-y-2 border-b border-[#f4ede4] pb-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-[#9e7753] tracking-widest">
                  {product.room} • {displaySubType}
                </span>
                <div className="flex items-center gap-1 bg-[#faf7f2] px-2.5 py-1 rounded-full border border-[#e8ddcf] text-xs font-bold text-[#553f31]">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="text-gray-400 font-normal">({product.reviewCount} {isEn ? "reviews" : "vélemény"})</span>
                </div>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold font-serif text-[#14171c] leading-tight">
                {displayName}
              </h1>

              <p className="text-xs text-[#684d39] leading-relaxed">
                {displayDescription}
              </p>
            </div>

            {/* CONFIGURATOR 1: MÉRET KIVÁLASZTÁSA (Size Selector) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#14171c] flex items-center gap-1.5 uppercase tracking-wider">
                  <span>{t("product.selectSize")}:</span>
                </label>
                <span className="text-xs font-bold text-[#9e7753]">
                  {selectedSize?.dimensions}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.availableSizes.map((size) => {
                  const isSelected = selectedSize?.id === size.id;
                  const sizeLabel = (isEn && size.labelEn) ? size.labelEn : size.label;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? "border-[#9e7753] bg-[#faf7f2] ring-2 ring-[#9e7753]/20 shadow-xs"
                          : "border-[#e8ddcf] bg-white hover:border-[#9e7753]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#14171c] block">
                          {sizeLabel}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#9e7753]" />}
                      </div>
                      <span className="text-[11px] text-[#805e43] font-medium block mt-0.5">
                        {size.priceDelta === 0 
                          ? (isEn ? "Base Price" : "Alapárban") 
                          : size.priceDelta > 0 ? `+${size.priceDelta.toLocaleString("hu-HU")} Ft` : `${size.priceDelta.toLocaleString("hu-HU")} Ft`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONFIGURATOR 2: ANYAG & SZÍNVÁLASZTÓ (Color & Stone Swatches) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#14171c] flex items-center gap-1.5 uppercase tracking-wider">
                  <Palette className="w-3.5 h-3.5 text-[#9e7753]" />
                  <span>{t("product.selectMaterial")}:</span>
                </label>
                <span className="text-xs font-bold text-[#9e7753]">
                  {(isEn && selectedMaterial?.nameEn) ? selectedMaterial.nameEn : selectedMaterial?.name}
                </span>
              </div>

              <div className="space-y-2">
                {product.availableMaterials.map((mat) => {
                  const isSelected = selectedMaterial?.id === mat.id;
                  const matName = (isEn && mat.nameEn) ? mat.nameEn : mat.name;
                  const matDesc = (isEn && mat.descriptionEn) ? mat.descriptionEn : mat.description;
                  return (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setSelectedMaterial(mat)}
                      className={`w-full p-3 rounded-2xl border flex items-center justify-between transition-all ${
                        isSelected
                          ? "border-[#9e7753] bg-[#faf7f2] ring-2 ring-[#9e7753]/20 shadow-xs"
                          : "border-[#e8ddcf] bg-white hover:border-[#9e7753]/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded-full border border-black/20 shadow-xs shrink-0"
                          style={{ backgroundColor: mat.colorHex }}
                        />
                        <div className="text-left">
                          <span className="text-xs font-bold text-[#14171c] block">{matName}</span>
                          {matDesc && (
                            <span className="text-[10px] text-[#805e43] block">{matDesc}</span>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[11px] font-bold text-[#553f31]">
                          {mat.priceDelta === 0 ? (isEn ? "Included" : "Tartalmazza") : `+${mat.priceDelta.toLocaleString("hu-HU")} Ft`}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONFIGURATOR 3: FELÜLETKEZELÉS (Surface Finish) */}
            {product.availableFinishes?.length > 1 && (
              <div className="space-y-2.5 pt-2">
                <label className="text-xs font-bold text-[#14171c] block uppercase tracking-wider">
                  {t("product.selectFinish")}:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {product.availableFinishes.map((finish) => {
                    const isSelected = selectedFinish?.id === finish.id;
                    const finishName = (isEn && finish.nameEn) ? finish.nameEn : finish.name;
                    const finishDesc = (isEn && finish.descriptionEn) ? finish.descriptionEn : finish.description;
                    return (
                      <button
                        key={finish.id}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className={`p-2.5 rounded-xl border text-left transition ${
                          isSelected
                            ? "border-[#9e7753] bg-[#faf7f2] text-[#14171c]"
                            : "border-[#e8ddcf] text-[#553f31] hover:border-[#9e7753]/40"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{finishName}</span>
                          <span className="text-[11px] font-bold">
                            {finish.priceDelta === 0 ? (isEn ? "Complimentary" : "Díjmentes") : `+${finish.priceDelta.toLocaleString("hu-HU")} Ft`}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#805e43] mt-0.5">{finishDesc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* DYNAMIC TOTAL PRICE & CALL TO ACTION */}
            <div className="p-5 rounded-2xl bg-[#14171c] text-white space-y-4 shadow-lg border border-[#262c36]">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#d7c4ac] tracking-wider block">
                    {t("product.priceSummary")} ({t("product.vatIncluded")})
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl lg:text-3xl font-extrabold text-white font-serif">
                      {totalPrice.toLocaleString("hu-HU")} Ft
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {displayStock.split("(")[0]}
                </span>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setOrderSubmitted(false);
                    setIsOrderModalOpen(true);
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#9e7753] hover:bg-[#b08c65] text-white font-bold text-sm transition shadow-md flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t("product.consultationBtn")}</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/#mintacsomag"
                    className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#d7c4ac] text-xs font-semibold transition text-center flex items-center justify-center gap-1.5"
                  >
                    <Palette className="w-3.5 h-3.5 text-[#9e7753]" />
                    <span>{isEn ? "Stone Samples" : "Anyagminta (1.990 Ft)"}</span>
                  </Link>

                  <a
                    href="tel:+36204076858"
                    className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#d7c4ac] text-xs font-semibold transition text-center flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{isEn ? "Call: Bence" : "Hívás: Bence"}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* DETAILED SPECIFICATIONS TABS SECTION */}
        <div className="mt-16 bg-white rounded-3xl border border-[#e8ddcf] p-6 lg:p-10 shadow-xs space-y-6">
          {/* Tab Headers */}
          <div className="flex items-center gap-3 border-b border-[#f4ede4] overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                activeTab === "specs"
                  ? "bg-[#14171c] text-white shadow-xs"
                  : "text-[#684d39] hover:bg-[#faf7f2]"
              }`}
            >
              {isEn ? "Specifications & Dimensions" : "Műszaki Adatok & Méretek"}
            </button>
            <button
              onClick={() => setActiveTab("care")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                activeTab === "care"
                  ? "bg-[#14171c] text-white shadow-xs"
                  : "text-[#684d39] hover:bg-[#faf7f2]"
              }`}
            >
              {isEn ? "Care & Stone Sealing" : "Ápolás & Nanokerámia Impregnálás"}
            </button>
            <button
              onClick={() => setActiveTab("delivery")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                activeTab === "delivery"
                  ? "bg-[#14171c] text-white shadow-xs"
                  : "text-[#684d39] hover:bg-[#faf7f2]"
              }`}
            >
              {isEn ? "White-Glove Delivery & Setup" : "Szállítás & Kőfaragó Összeszerelés"}
            </button>
            <button
              onClick={() => setActiveTab("warranty")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                activeTab === "warranty"
                  ? "bg-[#14171c] text-white shadow-xs"
                  : "text-[#684d39] hover:bg-[#faf7f2]"
              }`}
            >
              {isEn ? "10-Year Stone Guarantee" : "10 Év Kőgarancia"}
            </button>
          </div>

          {/* Tab Contents */}
          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-bold text-sm text-[#14171c]">
                  {t("product.highlightsTitle")}
                </h3>
                <ul className="space-y-2 text-[#553f31]">
                  {displayHighlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 bg-[#faf8f5] p-5 rounded-2xl border border-[#e8ddcf]">
                <h3 className="font-bold text-sm text-[#14171c]">
                  {t("product.specsTitle")}
                </h3>
                <div className="space-y-2 divide-y divide-[#f4efe8]">
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#805e43]">{t("product.weight")}:</span>
                    <span className="font-bold text-[#14171c]">{product.specs.weightKg} kg</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#805e43]">{t("product.tabletopThickness")}:</span>
                    <span className="font-bold text-[#14171c]">{product.specs.tabletopThicknessCm} cm {isEn ? "solid stone" : "tömör kő"}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#805e43]">{t("product.origin")}:</span>
                    <span className="font-bold text-[#14171c]">{displayOrigin}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#805e43]">{t("product.warranty")}:</span>
                    <span className="font-bold text-emerald-700">{product.specs.warrantyYears} {t("product.warrantyYears")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "care" && (
            <div className="space-y-3 text-xs text-[#553f31] leading-relaxed max-w-3xl">
              <h3 className="font-bold text-sm text-[#14171c]">
                {isEn ? "How to clean and preserve natural travertine furniture" : "Hogyan tisztítsd és ápold a természetes travertin bútorokat?"}
              </h3>
              <p>
                {isEn
                  ? "Every TerraSilva piece is factory treated with a deep nanotechnological hydrophobic seal. This invisible layer closes the micro-pores to protect against coffee, red wine, and oil spills."
                  : "Minden TerraSilva bútor gyárilag mélyreható olasz nanotechnológiás impregnálást kap. Ez a láthatatlan védőréteg lezárja a mikropórusokat, így megakadályozza, hogy a kávé, vörösbor vagy olaj mélyen beszívódjon a kőbe."}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <h4 className="font-bold text-emerald-900 mb-1">{isEn ? "✓ Recommended Care" : "✓ Ajánlott Tisztítás"}</h4>
                  <p className="text-emerald-800 text-[11px]">
                    {isEn ? "Wipe clean with a soft microfiber cloth and lukewarm water with neutral pH soap or natural stone cleaner." : "Puha mikroszálas kendővel és semleges pH-jú langyos vízzel vagy természetes kőtisztítóval töröld át."}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                  <h4 className="font-bold text-rose-900 mb-1">{isEn ? "✕ Avoid Acidic Cleaners" : "✕ Kerülendő Szerek"}</h4>
                  <p className="text-rose-800 text-[11px]">
                    {isEn ? "Do not use harsh acids (vinegar, lemon juice, bleach) or abrasive scouring pads." : "Ne használj savas tisztítószereket (ecet, citromsav, sósav) vagy agresszív súrolószereket."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "delivery" && (
            <div className="space-y-3 text-xs text-[#553f31] leading-relaxed max-w-3xl">
              <h3 className="font-bold text-sm text-[#14171c]">
                {isEn ? "Insured Two-Man Handling & Room Placement" : "Biztonságos Kiszállítás és Szakszerű Beépítés"}
              </h3>
              <p>
                {isEn
                  ? "Solid stone furniture pieces are substantial in weight (100–250 kg). Our dedicated two-man logistics team delivers the piece in reinforced timber crate packaging, carries it to your desired room/floor, and performs leveling and positioning."
                  : "A tömör kőbútorok jelentős súlyúak (100–250 kg). Ezért saját kétszemélyes logisztikai csapatunk szállítja ki a bútort speciális élvédő csomagolásban, felviszi a kívánt emeletre és szobába, majd a helyszínen szakszerűen összeszereli és vízszintezi."}
              </p>
            </div>
          )}

          {activeTab === "warranty" && (
            <div className="space-y-3 text-xs text-[#553f31] leading-relaxed max-w-3xl">
              <h3 className="font-bold text-sm text-[#14171c]">
                {isEn ? "10-Year Comprehensive Stone Guarantee" : "10 Éves Teljeskörű Kőgarancia"}
              </h3>
              <p>
                {isEn
                  ? "Formed over millions of years, natural stone is engineered by Earth to last generations. Every TerraSilva travertine and marble piece includes an authentic 10-year structural warranty certificate."
                  : "A természetes kő évmilliók alatt képződött, és megfelelő gondoskodás mellett generációkat szolgál ki. Minden TerraSilva tömör travertin és márvány bútorra 10 év strukturális garanciát és eredetiségigazolást biztosítunk."}
              </p>
            </div>
          )}
        </div>

        {/* RELATED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#9e7753] font-bold block">
                  {isEn ? "Harmonizing Pieces" : "Harmonizáló Darabok"}
                </span>
                <h2 className="text-2xl font-bold font-serif text-[#14171c]">
                  {t("product.relatedTitle")}
                </h2>
              </div>
              <Link
                href="/#katalogus"
                className="text-xs font-bold text-[#805e43] hover:text-[#14171c] flex items-center gap-1"
              >
                <span>{isEn ? "Full Catalog" : "Teljes Katalógus"}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FULLSCREEN IMAGE ZOOM MODAL */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white text-black text-white transition z-50"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={displayName}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* ORDER / QUOTE REQUEST MODAL */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 lg:p-8 border border-[#e8ddcf] shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-[#f4ede4]">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#14171c]">
                  {orderSubmitted 
                    ? (isEn ? "Inquiry Received!" : "Megrendelés Rögzítve!") 
                    : (isEn ? "Bespoke Quote & Consultation" : "Megrendelés / Ajánlatkérés")}
                </h3>
                <p className="text-[11px] text-[#805e43]">
                  {orderSubmitted 
                    ? (isEn ? "We will reach out to you shortly" : "Hamarosan keresünk a részletekkel") 
                    : (isEn ? "Direct consultation with owner Bence Boronkay" : "Konfigurált bútor egyeztetése")}
                </p>
              </div>
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {orderSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-base text-[#14171c]">
                  {isEn ? `Thank you, ${orderForm.name}!` : `Köszönjük, ${orderForm.name}!`}
                </h4>
                <p className="text-xs text-[#684d39] max-w-sm mx-auto">
                  {isEn
                    ? `We have registered your inquiry for ${displayName} (${(selectedSize?.labelEn || selectedSize?.label)}, ${(selectedMaterial?.nameEn || selectedMaterial?.name)}). Bence Boronkay will personally contact you.`
                    : `Rögzítettük a(z) ${displayName} megrendelési igényedet (${selectedSize?.label}, ${selectedMaterial?.name}). Boronkay Bence személyesen felveszi veled a kapcsolatot a megadott telefonszámon.`}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsOrderModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#14171c] text-white font-bold text-xs hover:bg-[#2e2118]"
                  >
                    {isEn ? "Close" : "Rendben, bezárás"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleOrderSubmit} className="space-y-4 text-xs">
                {/* Config Summary Box */}
                <div className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[#e8ddcf] space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#14171c]">
                    <span>{displayName}</span>
                    <span className="text-[#9e7753] font-serif text-sm">
                      {totalPrice.toLocaleString("hu-HU")} Ft
                    </span>
                  </div>
                  <p className="text-[11px] text-[#805e43]">
                    • {isEn ? "Size:" : "Méret:"} <strong>{(isEn && selectedSize?.labelEn) ? selectedSize.labelEn : selectedSize?.label}</strong> ({selectedSize?.dimensions})<br />
                    • {isEn ? "Material:" : "Anyag:"} <strong>{(isEn && selectedMaterial?.nameEn) ? selectedMaterial.nameEn : selectedMaterial?.name}</strong><br />
                    • {isEn ? "Finish:" : "Felület:"} <strong>{(isEn && selectedFinish?.nameEn) ? selectedFinish.nameEn : selectedFinish?.name}</strong>
                  </p>
                </div>

                {/* Form Inputs */}
                <div>
                  <label className="font-bold text-[#553f31] block mb-1">
                    {t("modal.name")} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={isEn ? "John Doe" : "Kovács János"}
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:border-[#9e7753]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-[#553f31] block mb-1">
                      {t("modal.phone")} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+36 20 123 4567"
                      value={orderForm.phone}
                      onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:border-[#9e7753]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[#553f31] block mb-1">
                      {t("modal.email")} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={orderForm.email}
                      onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:border-[#9e7753]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[#553f31] block mb-1">
                    {isEn ? "Delivery City / Address" : "Kiszállítási Település / Utca"}
                  </label>
                  <input
                    type="text"
                    placeholder={isEn ? "e.g. Budapest or Vienna" : "pl. Budapest, II. kerület vagy Debrecen"}
                    value={orderForm.city}
                    onChange={(e) => setOrderForm({ ...orderForm, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:border-[#9e7753]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#553f31] block mb-1">
                    {t("modal.message")}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={isEn ? "e.g. 3rd floor delivery / preferred delivery timing" : "pl. Emeletre felvitelt kérünk / szombati kiszállítás lenne ideális"}
                    value={orderForm.notes}
                    onChange={(e) => setOrderForm({ ...orderForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:border-[#9e7753]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsOrderModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-[#e8ddcf] text-xs font-semibold text-[#553f31]"
                  >
                    {isEn ? "Cancel" : "Mégse"}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#14171c] text-white font-bold text-xs hover:bg-[#2e2118] transition flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{t("modal.submit")}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Mobile Sticky Bottom Floating Price & CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-3.5 bg-white/95 backdrop-blur-md border-t border-[#e8ddcf] z-40 flex items-center justify-between shadow-xl">
        <div>
          <span className="text-[10px] text-[#805e43] uppercase tracking-wider block font-semibold">
            {((isEn && selectedSize?.labelEn) ? selectedSize.labelEn : selectedSize?.label).split(" ")[0]} • {((isEn && selectedMaterial?.nameEn) ? selectedMaterial.nameEn : selectedMaterial?.name).split(" ")[0]}
          </span>
          <span className="text-base font-bold font-serif text-[#14171c]">
            {new Intl.NumberFormat("hu-HU").format(totalPrice)} Ft
          </span>
        </div>
        <button
          onClick={() => setIsOrderModalOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#9e7753] transition shadow-md flex items-center gap-1.5"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
          <span>{isEn ? "Inquire" : "Ajánlatkérés"}</span>
        </button>
      </div>
    </main>
  );
}
