# 🛋️ Bútor Kereskedelmi & ERP Rendszer - Projekt Irányelvek

---

## 1. Alapadatok & Céginformációk
- **Projekt & Márkanév:** `TerraSilva` (Prémium Travertin, Márvány, Kő & Tömörfa Bútorok)
- **Irányultság:** High-end D2C lakberendezés (természetes kő, travertin, márvány, tölgy/dió tömörfa bútorok) közvetlen gyártói importtal, raktárkezeléssel és automatizált számlázással.
- **Cégméret & Működési Modell:** 
  - **1 fős induló vállalkozás:** Maximális automatizáció, minimális adminisztrációs teher.
  - **High-End, magas kosárértékű termékek:** Exkluzív természetes anyagok, magas árrés.
- **Vezető Fejlesztő & Tulajdonos:** Boronkay Bence (Bence Boronkay)
- **Kapcsolattartási telefonszám:** +36 20 407 6858

---

## 2. Építési Alapelv: Moduláris Skálázhatóság (Feature Toggles & 1-Kattintásos Működés)
- **Alapértelmezett 1 fős egyszerűsített ügymenet:**
  - Kiszállítás / státuszváltás 1 kattintással (nem kötelező sofőr appot vagy bonyolult protokollokat használni az induláskor).
  - Számlázás teljesen automatikus (Számlázz.hu / Billingo API) a háttérben.
- **Bármikor bekapcsolható haladó modulok:**
  - Sofőr e-POD és idősáv-foglaló beépítve, de opcionálisan használható / átugorható.
  - Konténer CBM és Landed-Cost kalkulátorok segítik a pontos beszerzési döntéseket.

---

## 3. Rendszerarchitektúra & Technológiák (Ahkem Meat Mintára)
- **Frontend & Admin:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React
- **Adatbázis & ORM:** PostgreSQL + Prisma ORM
- **Számlázás:** Billingo / Számlázz.hu REST API (automatikus e-számla & NAV adatszolgáltatás)
- **Készletkezelés (WMS):** Konténeres és raktári árubeérkezés (Ahkem beszállítói modul mintájára)
- **Infrastruktúra:** Railway Cloud Hosting

---

## 4. Kommunikációs Szabályok
- A fejlesztőnek adott minden válasz és magyarázat **angol nyelven** történik.
- A felhasználói felület (UI szövegek, számlák, értesítések) magyar nyelvű.
