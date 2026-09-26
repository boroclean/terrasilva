import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bútor | Prémium & Egyedi Bútorok",
  description: "Exkluzív, egyedi tervezésű bútorok közvetlen gyártói importból. Időtálló elegancia, prémium anyaghasználat.",
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
