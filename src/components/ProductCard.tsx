"use client";

import Link from "next/link";
import { Star, Gem, ArrowRight, Eye, Sparkles } from "lucide-react";
import { ProductItem } from "@/lib/products";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.images?.[0] || "/kepek/showcase/travertin_top_detail.jpg";

  return (
    <div className="group rounded-3xl bg-white border border-[#e8ddcf] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Product Image Frame (Unified 4:3 Aspect Ratio) */}
      <Link 
        href={`/termek/${product.id}`}
        className="block relative aspect-[4/3] w-full bg-[#f4ede4] overflow-hidden"
      >
        <img
          src={primaryImage}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
        />

        {/* Subtle Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#14171c]/90 backdrop-blur-md text-white shadow-xs border border-white/10">
            {product.tag}
          </span>
          <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#553f31] shadow-xs">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="text-[10px] text-gray-400 font-normal">({product.reviewCount})</span>
          </div>
        </div>

        {/* Bottom Stock Badge */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span className="text-[11px] font-semibold text-[#14171c] bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#e8ddcf] shadow-2xs">
            {product.stockStatus}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 group-hover:bg-[#9e7753] transition">
            <span>Részletek</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </Link>

      {/* Card Body & Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#9e7753] tracking-wider">
            <span>{product.room} • {product.subType}</span>
            <span className="text-[#805e43] font-mono lowercase">{product.dimensions}</span>
          </div>

          <Link href={`/termek/${product.id}`} className="block group-hover:text-[#9e7753] transition">
            <h3 className="font-serif font-bold text-base md:text-lg text-[#14171c] line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#684d39] line-clamp-2 leading-relaxed">
            {product.materialDesc}
          </p>

          {/* Color & Size Variant Indicators */}
          <div className="pt-2 flex items-center gap-2">
            <span className="text-[10px] text-[#805e43] font-semibold">Választható színek:</span>
            <div className="flex items-center gap-1.5">
              {product.availableMaterials?.slice(0, 4).map((m) => (
                <span
                  key={m.id}
                  title={m.name}
                  className="w-3.5 h-3.5 rounded-full border border-black/20 shadow-2xs"
                  style={{ backgroundColor: m.colorHex }}
                />
              ))}
              {product.availableMaterials?.length > 4 && (
                <span className="text-[10px] text-[#805e43] font-bold">
                  +{product.availableMaterials.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-[#f4ede4] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#805e43] uppercase tracking-wider block font-semibold">
              Kezdőár ({product.availableSizes?.[0]?.label.split(" ")[0] || "alapméret"})
            </span>
            <span className="text-lg md:text-xl font-bold text-[#14171c] font-serif">
              {new Intl.NumberFormat("hu-HU").format(product.basePrice)} Ft
            </span>
          </div>

          <Link
            href={`/termek/${product.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#14171c] text-white text-xs font-bold hover:bg-[#9e7753] transition shadow-xs group-hover:shadow-md"
          >
            <span>Konfigurálás</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#d7c4ac]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
