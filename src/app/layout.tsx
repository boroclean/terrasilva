import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TerraSilva | Prémium Travertin, Márvány & Tömörfa Bútorok",
  description: "Exkluzív travertin mészkő, természetes márvány és tömörfa bútorok közvetlen gyártói importból. Időtálló luxus a természet erejével.",
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
