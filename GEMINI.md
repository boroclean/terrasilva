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

---

## 5. Szabályok & AI Fotóstúdió Alapelvek
- **Élethűség & 100%-os Termékhűség (Pattern, Color, Scale Lock):** A fotóstúdiónak és az AI képgenerálási / renderelési folyamatoknak **kötelezően és megalkuvás nélkül mindig 100%-os élethűséget és azonosságot kell biztosítaniuk** a beküldött bútortárggyal:
  - **Minta & Textúra:** A természetes kő pórusai, márvány erezete, faerezet iránya és felületkezelése (matt csiszolt / polírozott) pontosan egyezik.
  - **Színvilág:** A bútor természetes árnyalata, tónusa és fényvisszaverődése változatlan marad.
  - **Méret & Geometria (1:1 Proporciók):** A fizikai arányok (láb vastagság, lap vastagság, átmérő, hosszúság, sziluett) torzításmentesen zárolva vannak.
  - **Kizárólagos megengedett változás:** Csak a környező enteriőr (helyiség, háttér, dekoráció, világítási hangulat) és a kameraállás / látószög változhat!


