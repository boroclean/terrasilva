import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://terrasilva.hu"),
  title: {
    default: "TerraSilva | Prémium Travertin, Márvány & Tömörfa Bútorok",
    template: "%s | TerraSilva"
  },
  description: "Exkluzív olasz travertin mészkő, természetes Carrara márvány és nemes tömör diófa bútorok közvetlen gyártói importból. Időtálló luxus a természet erejével.",
  keywords: [
    "travertin bútor",
    "travertin étkezőasztal",
    "mészkő asztal",
    "márvány bútor",
    "tömörfa bútor",
    "diófa étkezőasztal",
    "dohányzóasztal travertin",
    "luxus lakberendezés",
    "TerraSilva"
  ],
  authors: [{ name: "Boronkay Bence", url: "https://terrasilva.hu" }],
  creator: "TerraSilva Living",
  publisher: "TerraSilva",
  alternates: {
    canonical: "https://terrasilva.hu"
  },
  openGraph: {
    title: "TerraSilva | Prémium Travertin, Márvány & Tömörfa Bútorok",
    description: "Exkluzív travertin mészkő, természetes márvány és tömörfa bútorok közvetlen gyártói importból.",
    url: "https://terrasilva.hu",
    siteName: "TerraSilva",
    locale: "hu_HU",
    type: "website",
    images: [
      {
        url: "/kepek/showcase/travertin_surface_macro_8k.jpg",
        width: 1200,
        height: 630,
        alt: "TerraSilva Prémium Travertin Bútorok"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TerraSilva | Prémium Travertin & Tömörfa Bútorok",
    description: "Exkluzív travertin mészkő és márvány étkezőasztalok közvetlen manufaktúra importból.",
    images: ["/kepek/showcase/travertin_surface_macro_8k.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="min-h-screen bg-[#faf8f5] text-[#14171c] antialiased">
        {children}
      </body>
    </html>
  );
}
