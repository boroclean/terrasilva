"use client";

import { useState, useRef } from "react";
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
  Maximize2,
  Trash2,
  FileImage,
  Scan,
  Grid,
  CheckSquare,
  Square,
  PackageCheck,
  FolderDown,
  X
} from "lucide-react";

interface StylePreset {
  id: string;
  name: string;
  subtitle: string;
  category: "Japandi" | "Villa" | "Penthouse" | "Studio" | "Gallery";
  bgDescription: string;
  gradient: string;
  tag: string;
  sampleImage: string;
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
    sampleImage: "/kepek/travertin-konzol/4k_enterior_stilus.jpg",
  },
  {
    id: "preset-villa",
    name: "Mediterrán Travertin Villa",
    subtitle: "Monolit kő boltívek, meleg délutáni napsütés, olajfa részlet",
    category: "Villa",
    bgDescription: "Olasz toszkán villa enteriőr, világos travertin padlóburkolat, arany órás fények.",
    gradient: "from-[#faf5ee] via-[#f0e3d0] to-[#dfcca8]",
    tag: "TerraSilva Ikon",
    sampleImage: "/kepek/travertin-konzol/4k_front_galeria.jpg",
  },
  {
    id: "preset-penthouse",
    name: "Milánói Luxus Penthouse",
    subtitle: "Óriási üvegfelületek, csiszolt beton, modern építészet",
    category: "Penthouse",
    bgDescription: "Kortárs high-end lakberendezés, drámai építészeti vonalak, diffúz nagyvárosi horizont.",
    gradient: "from-[#f0f2f5] via-[#e1e4e8] to-[#cbd2d9]",
    tag: "High-End Modern",
    sampleImage: "/kepek/travertin-konzol/4k_penthouse_staging.jpg",
  },
  {
    id: "preset-studio",
    name: "Magazin Editorial Stúdió",
    subtitle: "Semleges homok stúdióháttér, lágy fénybox árnyékok",
    category: "Studio",
    bgDescription: "Tiszta prémium katalógus beállítás, professzionális fények, 100% termékfókusz.",
    gradient: "from-[#faf8f5] via-[#f2ece2] to-[#e6dccc]",
    tag: "Tiszta Katalógus",
    sampleImage: "/kepek/travertin-konzol/4k_macro_reszlet.jpg",
  },
  {
    id: "preset-gallery",
    name: "Múzeumi Kőtalapzat & Galéria",
    subtitle: "Szoborszerű posztamens, fókuszált fénypászma",
    category: "Gallery",
    bgDescription: "Művészeti galéria tér, finom árnyékok, szoborszerű megvilágítás asztaloknak és kőbútoroknak.",
    gradient: "from-[#f8f6f0] via-[#ede8dc] to-[#ded5c2]",
    tag: "Exkluzív",
    sampleImage: "/kepek/travertin-konzol/4k_front_galeria.jpg",
  },
];

const LIGHTING_OPTIONS = [
  { id: "golden-hour", name: "Arany Óra", desc: "Meleg, méz tónusú délutáni napsugarak" },
  { id: "soft-diffused", name: "Lágy Magazin Fény", desc: "Egyenletes, árnyékmentes stúdió megvilágítás" },
  { id: "cinematic", name: "Cinematic Kontraszt", desc: "Drámai fény-árnyék játék az erezetek kiemeléséhez" },
  { id: "nordic-daylight", name: "Északi Természetes Fény", desc: "Tiszta, semleges nappali színhőmérséklet" },
];

const CAMERA_ANGLES = [
  { id: "hero-front", name: "Fő Nézet (Front Hero)", desc: "Szemmagasságú fenséges beállítás", img: "/kepek/travertin-konzol/4k_front_galeria.jpg" },
  { id: "perspective-45", name: "45° Perspektíva", desc: "Térhatást és mélységet bemutató szög", img: "/kepek/travertin-konzol/4k_enterior_stilus.jpg" },
  { id: "top-flat", name: "Felső Rálátás", desc: "Asztallapok és márványerezethez ideális", img: "/kepek/travertin-konzol/4k_penthouse_staging.jpg" },
  { id: "macro-detail", name: "Makró Anyagfókusz", desc: "Közeli kő- és faerezet részletfotó", img: "/kepek/travertin-konzol/4k_macro_reszlet.jpg" },
];

interface GeneratedItem {
  id: string;
  presetName: string;
  presetCategory: string;
  angleName: string;
  lightingName: string;
  imageSrc: string;
  bgDesc: string;
}

export default function AIStudioPage() {
  // Multi-selection states
  const [selectedPresets, setSelectedPresets] = useState<string[]>([
    "preset-japandi",
    "preset-villa",
    "preset-penthouse"
  ]);
  const [selectedAngles, setSelectedAngles] = useState<string[]>([
    "hero-front",
    "perspective-45"
  ]);
  const [selectedLighting, setSelectedLighting] = useState<string>("golden-hour");

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResults, setGeneratedResults] = useState<GeneratedItem[]>([]);
  const [activeModalItem, setActiveModalItem] = useState<GeneratedItem | null>(null);

  // File upload state
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);
  const [uploadedImageName, setUploadedImageName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [furnitureTitle, setFurnitureTitle] = useState("Monolit Travertin Konzol");
  const [category, setCategory] = useState("Travertin Asztalok");
  const [addedToCatalog, setAddedToCatalog] = useState(false);

  // Toggle Preset
  const togglePreset = (id: string) => {
    if (selectedPresets.includes(id)) {
      if (selectedPresets.length > 1) {
        setSelectedPresets(selectedPresets.filter(p => p !== id));
      }
    } else {
      setSelectedPresets([...selectedPresets, id]);
    }
  };

  // Toggle All Presets
  const toggleAllPresets = () => {
    if (selectedPresets.length === STYLE_PRESETS.length) {
      setSelectedPresets([STYLE_PRESETS[0].id]);
    } else {
      setSelectedPresets(STYLE_PRESETS.map(p => p.id));
    }
  };

  // Toggle Angle
  const toggleAngle = (id: string) => {
    if (selectedAngles.includes(id)) {
      if (selectedAngles.length > 1) {
        setSelectedAngles(selectedAngles.filter(a => a !== id));
      }
    } else {
      setSelectedAngles([...selectedAngles, id]);
    }
  };

  // Toggle All Angles
  const toggleAllAngles = () => {
    if (selectedAngles.length === CAMERA_ANGLES.length) {
      setSelectedAngles([CAMERA_ANGLES[0].id]);
    } else {
      setSelectedAngles(CAMERA_ANGLES.map(a => a.id));
    }
  };

  // Total combinations
  const totalVariations = selectedPresets.length * selectedAngles.length;

  // File upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    setUploadedImageName(file.name);
    setAddedToCatalog(false);
    setGeneratedResults([]);
    
    // Auto-detect title from filename
    const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
    if (cleanName && cleanName.length > 3) {
      setFurnitureTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImagePreview(null);
    setUploadedImageName(null);
    setGeneratedResults([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Batch Generation
  const handleBatchGenerate = () => {
    setIsGenerating(true);
    setAddedToCatalog(false);

    setTimeout(() => {
      const results: GeneratedItem[] = [];

      selectedPresets.forEach((presetId) => {
        const preset = STYLE_PRESETS.find(p => p.id === presetId)!;
        selectedAngles.forEach((angleId) => {
          const angle = CAMERA_ANGLES.find(a => a.id === angleId)!;
          const lighting = LIGHTING_OPTIONS.find(l => l.id === selectedLighting)!;

          // Pick appropriate image based on angle & preset or uploaded image
          let chosenImage = preset.sampleImage;
          if (angle.id === "macro-detail") {
            chosenImage = "/kepek/travertin-konzol/4k_macro_reszlet.jpg";
          } else if (angle.id === "hero-front") {
            chosenImage = preset.sampleImage;
          } else if (angle.id === "perspective-45") {
            chosenImage = "/kepek/travertin-konzol/4k_enterior_stilus.jpg";
          } else if (angle.id === "top-flat") {
            chosenImage = "/kepek/travertin-konzol/4k_penthouse_staging.jpg";
          }

          results.push({
            id: `${preset.id}-${angle.id}`,
            presetName: preset.name,
            presetCategory: preset.category,
            angleName: angle.name,
            lightingName: lighting.name,
            imageSrc: uploadedImagePreview || chosenImage,
            bgDesc: preset.bgDescription,
          });
        });
      });

      setGeneratedResults(results);
      setIsGenerating(false);
    }, 1600);
  };

  const handleSaveToCatalog = () => {
    setAddedToCatalog(true);
  };

  return (
    <div className="space-y-8">
      {/* Hidden Native File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/webp, image/avif"
        className="hidden"
      />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#e8ddcf] shadow-xs">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf7f2] border border-[#d7c4ac] text-xs font-semibold text-[#805e43] mb-2">
            <Wand2 className="w-3.5 h-3.5 text-[#9e7753]" />
            <span>AI Fotóstúdió • Multi-Select Batch Generálás</span>
          </div>
          <h1 className="text-xl font-bold text-[#14171c]">Bútor Fotóstúdió & Csoportos Képgeneráló</h1>
          <p className="text-xs text-[#684d39] mt-1">
            Válassz ki egyszerre több enteriőr stílust és fotószöget: a rendszer egyetlen kattintással legenerálja az összes kívánt variációt!
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

            {/* Interactive Dropzone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`border-2 border-dashed rounded-2xl p-6 text-center transition cursor-pointer space-y-3 group ${
                isDragging 
                  ? "border-[#9e7753] bg-[#faf5ee] scale-[1.01]" 
                  : uploadedImagePreview
                  ? "border-emerald-300 bg-emerald-50/30"
                  : "border-[#d7c4ac] hover:border-[#9e7753] bg-[#faf8f5]"
              }`}
            >
              {uploadedImagePreview ? (
                <div className="space-y-3">
                  <div className="relative w-36 h-36 mx-auto rounded-xl overflow-hidden border border-[#e8ddcf] shadow-md bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={uploadedImagePreview}
                      alt="Feltöltött bútor"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100/80 text-emerald-800 text-xs font-semibold">
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="truncate max-w-[200px]">{uploadedImageName}</span>
                    </div>
                    <p className="text-[10px] text-[#805e43] mt-1">Kattints a képre másik fotó feltöltéséhez</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleClearImage}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 hover:text-rose-800 hover:underline pt-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Fotó eltávolítása</span>
                  </button>
                </div>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#e8ddcf] mx-auto flex items-center justify-center text-[#9e7753] group-hover:scale-110 transition-transform shadow-xs">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#14171c] block">
                      Kattints ide a feltöltéshez vagy húzd be a képet
                    </span>
                    <span className="text-[11px] text-[#805e43]">
                      PNG, JPG, WEBP • Fehér vagy gyári beszállítói háttérrel
                    </span>
                  </div>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#d7c4ac] text-xs font-bold text-[#14171c] shadow-xs group-hover:bg-[#14171c] group-hover:text-white transition">
                      <FileImage className="w-4 h-4 text-[#9e7753] group-hover:text-white" />
                      Tallózás a gépről...
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-[11px] font-bold text-[#553f31] block mb-1">Bútor Neve</label>
                <input
                  type="text"
                  value={furnitureTitle}
                  onChange={(e) => setFurnitureTitle(e.target.value)}
                  placeholder="pl. Monolit Travertin Konzol"
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

          {/* Step 2: Environment Presets (Multi-Select) */}
          <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#14171c] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#14171c] text-white text-[11px] flex items-center justify-center font-mono">2</span>
                <span>Enteriőr Preset Kiválasztás</span>
              </h2>
              <button
                type="button"
                onClick={toggleAllPresets}
                className="text-[11px] font-bold text-[#9e7753] hover:underline flex items-center gap-1"
              >
                {selectedPresets.length === STYLE_PRESETS.length ? "Alaphelyzet" : "Mindet kijelöl"}
              </button>
            </div>

            <div className="space-y-2.5">
              {STYLE_PRESETS.map((preset) => {
                const isSelected = selectedPresets.includes(preset.id);
                return (
                  <div
                    key={preset.id}
                    onClick={() => togglePreset(preset.id)}
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

                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition ${
                      isSelected ? "border-[#9e7753] bg-[#9e7753] text-white" : "border-[#d7c4ac] bg-white"
                    }`}>
                      {isSelected ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5 text-[#d7c4ac]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Lighting & Camera Angles (Multi-Select) */}
          <div className="p-6 rounded-2xl bg-white border border-[#e8ddcf] shadow-xs space-y-4">
            <h2 className="text-sm font-bold text-[#14171c] flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#14171c] text-white text-[11px] flex items-center justify-center font-mono">3</span>
              <span>Fotószögek & Megvilágítás</span>
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#553f31] flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-[#9e7753]" /> Kamera Szögek (Több is választható)
                  </span>
                  <button
                    type="button"
                    onClick={toggleAllAngles}
                    className="text-[10px] font-bold text-[#9e7753] hover:underline"
                  >
                    {selectedAngles.length === CAMERA_ANGLES.length ? "1 szög" : "Mindet kijelöl"}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {CAMERA_ANGLES.map((a) => {
                    const isSelected = selectedAngles.includes(a.id);
                    return (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => toggleAngle(a.id)}
                        className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition flex items-center justify-between ${
                          isSelected
                            ? "bg-[#14171c] text-white border-[#14171c] shadow-xs"
                            : "bg-[#faf8f5] text-[#553f31] border-[#e8ddcf] hover:bg-[#f4efe8]"
                        }`}
                      >
                        <span className="block truncate">{a.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#d7c4ac] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-bold text-[#553f31] flex items-center gap-1.5 mb-2">
                  <Sun className="w-3.5 h-3.5 text-[#9e7753]" /> Fő Fényhangulat
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {LIGHTING_OPTIONS.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setSelectedLighting(l.id)}
                      className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition ${
                        selectedLighting === l.id
                          ? "bg-[#9e7753] text-white border-[#9e7753]"
                          : "bg-[#faf8f5] text-[#553f31] border-[#e8ddcf] hover:bg-[#f4efe8]"
                      }`}
                    >
                      <span className="block truncate">{l.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Fidelity & Scale Lock Guarantee */}
            <div className="mt-4 p-3 rounded-xl bg-[#faf7f2] border border-[#d7c4ac] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#14171c] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9e7753]" /> Termékhűség & Arány Zárolás
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#9e7753] text-white uppercase tracking-wider">
                  Aktív
                </span>
              </div>
              <p className="text-[10px] text-[#684d39] leading-tight">
                A rendszer 100%-ban megőrzi a beküldött bútor eredeti méretarányait (1:1 geometria) és a természetes kő / fa valódi színvilágát és textúráját.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Live Studio Preview & Multi-Image Render Grid (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border border-[#e8ddcf] p-6 shadow-xs space-y-6 flex flex-col justify-between min-h-[640px]">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#e8ddcf]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-[#14171c]">{furnitureTitle}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#14171c] text-white">
                    {totalVariations} db Kép Csomag
                  </span>
                </div>
                <p className="text-[11px] text-[#805e43] mt-0.5">
                  {selectedPresets.length} stílus preset × {selectedAngles.length} kameraállás = <strong>{totalVariations} db 4K fotó</strong>
                </p>
              </div>

              <button
                onClick={handleBatchGenerate}
                disabled={isGenerating}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#9e7753] transition shadow-md disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#d7c4ac]" />
                    <span>AI Renderelés ({totalVariations} kép)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#d7c4ac]" />
                    <span>Összes Generálása ({totalVariations} db fotó)</span>
                  </>
                )}
              </button>
            </div>

            {/* Visual Canvas Viewport / Multi-Image Grid */}
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-[#e8ddcf] bg-gradient-to-br from-[#faf7f2] via-[#f4efe8] to-[#e8ddcf] p-6 min-h-[440px] flex flex-col justify-center">
              {/* Subtle Grid */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#9e7753_1px,transparent_1px)] [background-size:16px_16px]" />

              {isGenerating ? (
                <div className="relative z-10 space-y-4 max-w-sm mx-auto text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#9e7753] mx-auto flex items-center justify-center text-[#9e7753] shadow-lg animate-bounce">
                    <Wand2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#14171c]">
                      {totalVariations} db Stúdió Fotó Renderelése
                    </h3>
                    <p className="text-xs text-[#684d39]">
                      Háttér leválasztása, 1:1 méretarány rögzítése és a kiválasztott {selectedPresets.length} preset felépítése...
                    </p>
                  </div>
                </div>
              ) : generatedResults.length > 0 ? (
                <div className="relative z-10 space-y-4 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#14171c] flex items-center gap-1.5">
                      <Grid className="w-4 h-4 text-[#9e7753]" />
                      Legenerált Képek ({generatedResults.length} db)
                    </span>
                    <span className="text-[11px] text-[#805e43] font-medium">
                      Kattints bármelyikre a teljes méretű megtekintéshez
                    </span>
                  </div>

                  {/* Multi-Image Grid */}
                  <div className={`grid gap-4 ${
                    generatedResults.length === 1 
                      ? "grid-cols-1 max-w-md mx-auto" 
                      : generatedResults.length <= 4 
                      ? "grid-cols-2" 
                      : "grid-cols-2 md:grid-cols-3"
                  }`}>
                    {generatedResults.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => setActiveModalItem(item)}
                        className="group relative rounded-2xl overflow-hidden border border-[#d7c4ac] bg-white shadow-md hover:shadow-xl transition-all cursor-pointer aspect-square"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.imageSrc}
                          alt={item.presetName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Badges Overlay */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-[#14171c]/90 text-white backdrop-blur-xs">
                            #{idx + 1} • {item.presetCategory}
                          </span>
                          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-white/90 text-[#805e43] backdrop-blur-xs">
                            {item.angleName}
                          </span>
                        </div>

                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-7 h-7 rounded-lg bg-[#14171c] text-white flex items-center justify-center shadow-md">
                            <Maximize2 className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-2.5 text-white text-left opacity-90">
                          <p className="font-bold text-[11px] truncate">{item.presetName}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Mind a {generatedResults.length} db variáció elkészült 4K felbontásban!</span>
                  </div>
                </div>
              ) : uploadedImagePreview ? (
                <div className="relative z-10 space-y-4 max-w-sm mx-auto text-center">
                  <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-2 border-[#9e7753] shadow-lg bg-white p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={uploadedImagePreview}
                      alt="Feltöltött fotó"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-2 inset-x-2 bg-[#14171c]/80 text-white text-[10px] font-semibold py-1 rounded-lg backdrop-blur-xs flex items-center justify-center gap-1">
                      <Scan className="w-3 h-3 text-[#d7c4ac]" />
                      <span>Feltöltött Forrás Kép</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#14171c]">Kép Betöltve ({totalVariations} variáció beállítva)</h3>
                    <p className="text-xs text-[#684d39]">
                      Kattints a fenti <strong>"Összes Generálása ({totalVariations} db fotó)"</strong> gombra!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 space-y-3 max-w-sm mx-auto text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 border border-[#d7c4ac] mx-auto flex items-center justify-center text-[#9e7753] shadow-xs">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-[#14171c]">Csoportos Képgeneráló Canvas</h3>
                    <p className="text-xs text-[#684d39]">
                      Jelenleg <strong>{selectedPresets.length} stílus</strong> és <strong>{selectedAngles.length} fotószög</strong> van kijelölve. Kattints az <strong>"Összes Generálása"</strong> gombra a {totalVariations} kép egyidejű létrehozásához!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#e8ddcf] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#805e43]">
                <span>Csoportos Export: </span>
                <strong className="text-[#14171c]">{generatedResults.length > 0 ? `${generatedResults.length} db 4K fotó készen áll` : "Válassz ki több stílust & fotószöget"}</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={generatedResults[0]?.imageSrc || "/kepek/travertin-konzol/4k_enterior_stilus.jpg"}
                  download={`terrasilva-csomag-${furnitureTitle.toLowerCase().replace(/\s+/g, "-")}.zip`}
                  className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#d7c4ac] bg-white text-[#14171c] text-xs font-semibold hover:bg-[#faf7f2] transition ${
                    generatedResults.length === 0 ? "opacity-40 pointer-events-none" : ""
                  }`}
                >
                  <FolderDown className="w-4 h-4 text-[#9e7753]" />
                  <span>Összes Letöltése ({generatedResults.length} db 4K)</span>
                </a>

                <button
                  onClick={handleSaveToCatalog}
                  disabled={generatedResults.length === 0 || addedToCatalog}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-emerald-700 transition shadow-md disabled:opacity-40"
                >
                  {addedToCatalog ? (
                    <>
                      <PackageCheck className="w-4 h-4 text-emerald-400" />
                      <span>{generatedResults.length} fotó mentve a Katalógusba!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-[#d7c4ac]" />
                      <span>Összes Kép Mentése a Katalógusba</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Image Modal */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full border border-[#e8ddcf] shadow-2xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#e8ddcf]">
              <div>
                <h3 className="font-serif font-bold text-base text-[#14171c]">{furnitureTitle}</h3>
                <p className="text-xs text-[#805e43]">
                  {activeModalItem.presetName} • {activeModalItem.angleName} • {activeModalItem.lightingName}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="w-8 h-8 rounded-full bg-[#faf7f2] border border-[#d7c4ac] flex items-center justify-center text-[#14171c] hover:bg-[#14171c] hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-square max-h-[500px] w-full rounded-2xl overflow-hidden bg-black/5 mx-auto border border-[#e8ddcf]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeModalItem.imageSrc}
                alt={activeModalItem.presetName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-[#684d39] max-w-md">{activeModalItem.bgDesc}</p>
              <a
                href={activeModalItem.imageSrc}
                download={`${furnitureTitle}-${activeModalItem.presetCategory}-${activeModalItem.angleName}.jpg`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#9e7753] transition"
              >
                <Download className="w-3.5 h-3.5 text-[#d7c4ac]" />
                <span>Letöltés Eredeti 4K Méretben</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

