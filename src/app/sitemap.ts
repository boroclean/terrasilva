import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://terrasilva.hu";

  const productUrls: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/termek/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...productUrls,
  ];
}
