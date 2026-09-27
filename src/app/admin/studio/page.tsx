"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Upload, 
  Image as ImageIcon, 
  Sliders, 
  Camera, 
  Sun, 
  Layers, 
  Download, 
  Plus, 
  Check, 
  RefreshCw, 
  Wand2, 
  Gem, 
  Eye, 
  CheckCircle2,
  ArrowRight,
  Maximize2
} from "lucide-react";

interface StylePreset {
  id: string;
  name: string;
  subtitle: string;
  category: "Japandi" | "Villa" | "Penthouse" | "Studio" | "Gallery";
  bgDescription: string;
  gradient: string;
  tag: string;
}

const STYLE_PRESETS: StylePreset[] = [
  {
    id: "preset-japandi",
    name: "Japandi Wabi-Sabi Nappali",
    subtitle: "Mészvakolt falak, világos tölgy parketta, lenfüggönyök",
    category: "Japandi",
    bgDescription: "Meleg, lágy szűrt természetes napfény, texturált mészvakolat, organikus minimál enteriőr.",
    gradient: "from-[#f4efe8] via-[#eadecc] to-[#d7c4ac]",
    tag: "Legnépszerűbb",
  },
  {
    id: "preset-villa",
    name: "Mediterrán Travertin Villa",
    subtitle: "Monolit kő boltívek, meleg délutáni napsütés, olajfa részlet",
    category: "Villa",
    bgDescription: "Olasz toszkán villa enteriőr, világos travertin padlóburkolat, arany órás fények.",
    gradient: "from-[#faf5ee] via-[#f0e3d0] to-[#dfcca8]",
    tag: "TerraSilva Ikon",
  },
  {
    id: "preset-penthouse",
    name: "Milánói Luxus Penthouse",
    subtitle: "Óriási üvegfelületek, csiszolt beton, modern építészet",
    category: "Penthouse",
    bgDescription: "Kortárs high-end lakberendezés, drámai építészeti vonalak, diffúz nagyvárosi horizont.",
    gradient: "from-[#f0f2f5] via-[#e1e4e8] to-[#cbd2d9]",
    tag: "High-End Modern",
  },
  {
    id: "preset-studio",
    name: "Magazin Editorial Stúdió",
    subtitle: "Semleges homok stúdióháttér, lágy fénybox árnyékok",
    category: "Studio",
    bgDescription: "Tiszta prémium katalógus beállítás, professzionális fények, 100% termékfókusz.",
    gradient: "from-[#faf8f5] via-[#f2ece2] to-[#e6dccc]",
    tag: "Tiszta Katalógus",
  },
  {
    id: "preset-gallery",
    name: "Múzeumi Kőtalapzat & Galéria",
    subtitle: "Szoborszerű posztamens, fókuszált fénypászma",
    category: "Gallery",
    bgDescription: "Művészeti galéria tér, finom árnyékok, szoborszerű megvilágítás asztaloknak és kőbútoroknak.",
    gradient: "from-[#f8f6f0] via-[#ede8dc] to-[#ded5c2]",
    tag: "Exkluzív",
  },
];

const LIGHTING_OPTIONS = [
  { id: "golden-hour", name: "Arany Óra (Golden Hour)", desc: "Meleg, méz tónusú délutáni napsugarak" },
  { id: "soft-diffused", name: "Lágy Magazin Fény", desc: "Egyenletes, árnyékmentes stúdió megvilágítás" },
  { id: "cinematic", name: "Cinematic Kontraszt", desc: "Drámai fény-árnyék játék az erezetek kiemeléséhez" },
  { id: "nordic-daylight", name: "Északi Természetes Fény", desc: "Tiszta, semleges nappali színhőmérséklet" },
];

const CAMERA_ANGLES = [
  { id: "hero-front", name: "Fő Nézet (Front Hero)", desc: "Szemmagasságú fenséges beállítás" },
  { id: "perspective-45", name: "45° Perspektíva", desc: "Térhatást és mélységet bemutató szög" },
  { id: "top-flat", name: "Felső Rálátás (Top-Down)", desc: "Asztallapok és márványerezethez ideális" },
  { id: "macro-detail", name: "Makró Anyagfókusz", desc: "Közeli kő- és faerezet részletfotó" },
];

export default function AIStudioPage() {
  const [selectedPreset, setSelectedPreset] = useState<StylePreset>(STYLE_PRESETS[0]);
  const [selectedLighting, setSelectedLighting] = useState(LIGHTING_OPTIONS[0].id);
  const [selectedAngle, setSelectedAngle] = useState(CAMERA_ANGLES[0].id);
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewGenerated, setPreviewGenerated] = useState(false);
  const [uploadedImageName, setUploadedImageName] = useState<string | null>("alibaba_travertine_raw.jpg");
  const [furnitureTitle, setFurnitureTitle] = useState("Aura Navona Travertin Dohányzóasztal");
  const [category, setCategory] = useState("Travertin Asztalok");
  const [addedToCatalog, setAddedToCatalog] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setAddedToCatalog(false);
    setTimeout(() => {
      setIsGenerating(false);
      setPreviewGenerated(true);
    }, 1800);
  };

  const handleSaveToCatalog = () => {
    setAddedToCatalog(true);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e8ddcf] shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf7f2] border border-[#d7c4ac] text-xs font-semibold text-[#805e43] mb-2">
            <Wand2 className="w-3.5 h-3.5 text-[#9e7753]" />
            <span>AI Fotóstúdió & Termékkatalógus Staging</span>
          </div>
          <h1 className="text-xl font-bold text-[#14171c]">Bútor Fotóstúdió & Környezetgeneráló</h1>
          <p className="text-xs text-[#684d39] mt-1">
            Tölts fel beszállítói vagy fehér hátterű nyers bútorfotókat, válassz prémium enteriőr preseteket, és hozd létre az egységes luxus katalógusodat 1 kattintással!
          </p>
        </div>

        <Link
          href="/admin/katalogus"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-semibold hover:bg-[#2e2118] transition shadow-xs self-start sm:self-auto"
        >
          <span>Termékkatalógus Megnyitása</span>
          <ArrowRight className="w-4 h-4 text-[#d7c4ac]" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Configuration Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Step 1: Upload / Select Image */}
          <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#14171c] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#14171c] text-white text-[11px] flex items-center justify-center font-mono">1</span>
                <span>Beszállítói Kép Feltöltése</span>
              </h2>
              <span className="text-[10px] text-[#9e7753] font-semibold bg-[#faf7f2] px-2 py-0.5 rounded border border-[#e8ddcf]">
                Alibaba / Gyári Fotó
              </span>
            </div>

            <div className="border-2 border-dashed border-[#d7c4ac] hover:border-[#9e7753] rounded-2xl p-6 text-center bg-[#faf8f5] transition cursor-pointer space-y-2 group">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#e8ddcf] mx-auto flex items-center justify-center text-[#9e7753] group-hover:scale-105 transition-transform shadow-xs">
                <Upload className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#14171c] block">Húzd ide a képet vagy tallózz</span>
                <span className="text-[11px] text-[#805e43]">PNG, JPG, WEBP • Akár fehér, akár gyári háttérrel</span>
              </div>
              {uploadedImageName && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 mt-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Kiválasztva: {uploadedImageName}</span>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-[11px] font-bold text-[#553f31] block mb-1">Bútor Neve</label>
                <input
                  type="text"
                  value={furnitureTitle}
                  onChange={(e) => setFurnitureTitle(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#553f31] block mb-1">Kategória</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#e8ddcf] bg-[#faf8f5] focus:outline-none focus:ring-2 focus:ring-[#9e7753]/30 font-medium"
                >
                  <option value="Travertin Asztalok">Travertin Asztalok & Dohányzók</option>
                  <option value="Márvány Bútorok">Márvány Étkezőasztalok & Konzolok</option>
                  <option value="Tömörfa Kollekció">Tömörfa & Kárpitozott Bútorok</option>
                  <option value="Kő & Alabástrom Lámpák">Természetes Kő Lámpatestek</option>
                  <option value="Szoborszerű Monolitok">Szoborszerű Kőmonolitok & Posztamensek</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 2: Environment Presets */}
          <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#14171c] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#14171c] text-white text-[11px] flex items-center justify-center font-mono">2</span>
                <span>Enteriőr & Háttér Preset</span>
              </h2>
              <span className="text-xs text-[#805e43] font-medium">{STYLE_PRESETS.length} stílus</span>
            </div>

            <div className="space-y-2.5">
              {STYLE_PRESETS.map((preset) => {
                const isSelected = selectedPreset.id === preset.id;
                return (
                  <div
                    key={preset.id}
                    onClick={() => setSelectedPreset(preset)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all text-left flex items-start justify-between gap-3 ${
                      isSelected
                        ? "bg-[#faf7f2] border-[#9e7753] ring-2 ring-[#9e7753]/20 shadow-xs"
                        : "bg-white border-[#e8ddcf] hover:border-[#d7c4ac]"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs text-[#14171c]">{preset.name}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#14171c] text-white">
                          {preset.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#684d39] leading-tight">{preset.subtitle}</p>
                    </div>

                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? "border-[#9e7753] bg-[#9e7753] text-white" : "border-[#d7c4ac]"
                    }`}>
                      {isSelected && <Check className="w-2.5 h-2.5" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Lighting & Camera Angles */}
          <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-4">
            <h2 className="text-sm font-bold text-[#14171c] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#14171c] text-white text-[11px] flex items-center justify-center font-mono">3</span>
              <span>Fénybeállítás & Fotószög</span>
            </h2>

            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-bold text-[#553f31] flex items-center gap-1.5 mb-2">
                  <Sun className="w-3.5 h-3.5 text-[#9e7753]" /> Megvilágítás Stílusa
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {LIGHTING_OPTIONS.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setSelectedLighting(l.id)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition ${
                        selectedLighting === l.id
                          ? "bg-[#14171c] text-white border-[#14171c]"
                          : "bg-[#faf8f5] text-[#553f31] border-[#e8ddcf] hover:bg-[#f4efe8]"
                      }`}
                    >
                      <span className="block truncate">{l.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-bold text-[#553f31] flex items-center gap-1.5 mb-2">
                  <Camera className="w-3.5 h-3.5 text-[#9e7753]" /> Kamera Szög & Perspektíva
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {CAMERA_ANGLES.map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setSelectedAngle(a.id)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition ${
                        selectedAngle === a.id
                          ? "bg-[#14171c] text-white border-[#14171c]"
                          : "bg-[#faf8f5] text-[#553f31] border-[#e8ddcf] hover:bg-[#f4efe8]"
                      }`}
                    >
                      <span className="block truncate">{a.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Studio Preview & Render Canvas (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border border-[#e8ddcf] p-6 shadow-xs space-y-6 flex flex-col justify-between min-h-[620px]">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#e8ddcf]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#14171c]">{furnitureTitle}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#faf7f2] text-[#805e43] border border-[#d7c4ac]">
                    {selectedPreset.name}
                  </span>
                </div>
                <p className="text-[11px] text-[#805e43] mt-0.5">
                  Ultra High-Res 4K Rendering • {selectedLighting} • {selectedAngle}
                </p>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#9e7753] transition shadow-md disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#d7c4ac]" />
                    <span>AI Renderelés folyamatban...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#d7c4ac]" />
                    <span>Fotó Generálása (1-Kattintás)</span>
                  </>
                )}
              </button>
            </div>

            {/* Visual Canvas Viewport */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-[#e8ddcf] bg-gradient-to-br from-[#faf7f2] via-[#f4efe8] to-[#e8ddcf] flex flex-col items-center justify-center p-8 text-center min-h-[380px]">
              {/* Architectural Backdrop Simulation */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#9e7753_1px,transparent_1px)] [background-size:16px_16px]" />

              {isGenerating ? (
                <div className="relative z-10 space-y-4 max-w-sm">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#9e7753] mx-auto flex items-center justify-center text-[#9e7753] shadow-lg animate-bounce">
                    <Wand2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#14171c]">Fotorealisztikus Enteriőr Felépítése</h3>
                    <p className="text-xs text-[#684d39]">
                      Háttér leválasztása, {selectedPreset.name} fényviszonyok és travertin textúra illesztése...
                    </p>
                  </div>
                </div>
              ) : previewGenerated ? (
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-6">
                  {/* Generated High-Res Staging Showcase */}
                  <div className="relative w-full max-w-md h-64 rounded-2xl bg-gradient-to-br from-[#faf5ee] via-[#f0e3d0] to-[#dfcca8] border border-[#d7c4ac] p-6 flex flex-col justify-between shadow-lg overflow-hidden group">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#14171c] text-white">
                        TerraSilva 4K Staging
                      </span>
                      <span className="text-[10px] font-bold text-[#805e43] bg-white/90 px-2 py-0.5 rounded border border-[#d7c4ac]">
                        {selectedPreset.category}
                      </span>
                    </div>

                    <div className="text-center py-4">
                      <div className="w-24 h-24 mx-auto rounded-3xl bg-white/80 border border-[#9e7753]/30 flex items-center justify-center text-[#9e7753] shadow-md group-hover:scale-105 transition-transform">
                        <Gem className="w-12 h-12" />
                      </div>
                      <span className="font-serif font-bold text-base text-[#14171c] block mt-2">
                        {furnitureTitle}
                      </span>
                      <span className="text-[11px] text-[#684d39] font-medium">
                        Természetes Navona Travertin • Matt Csiszolt Felület
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-semibold text-[#805e43]">
                      <span>{selectedLighting}</span>
                      <span>{selectedAngle}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Stúdió minőségű fotó sikeresen elkészült!</span>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 space-y-3 max-w-sm">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 border border-[#d7c4ac] mx-auto flex items-center justify-center text-[#9e7753] shadow-xs">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#14171c]">Előnézet Megjelenítése</h3>
                    <p className="text-xs text-[#684d39]">
                      Kattints a fenti <strong>"Fotó Generálása"</strong> gombra, hogy az AI beillessze a bútort a kiválasztott {selectedPreset.name} környezetbe!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#e8ddcf] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#805e43]">
                <span>Integrációk: </span>
                <strong className="text-[#14171c]">Adobe Firefly / Lovable / AI Pipeline Kompatibilis</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  disabled={!previewGenerated}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] text-xs font-semibold hover:bg-[#faf7f2] transition disabled:opacity-40"
                >
                  <Download className="w-4 h-4 text-[#9e7753]" />
                  <span>Kép Letöltése (4K)</span>
                </button>

                <button
                  onClick={handleSaveToCatalog}
                  disabled={!previewGenerated || addedToCatalog}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-emerald-700 transition shadow-md disabled:opacity-40"
                >
                  {addedToCatalog ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Hozzáadva a Katalógushoz!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#d7c4ac]" />
                      <span>Hozzáadás a Katalógushoz</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
