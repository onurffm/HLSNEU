# HLS Haustechnik – Website (Lead-Gen & Recruiting)

Premium One-Pager mit echtem HLS-Brandkit, Heizungs-Konfigurator (Lead-Funnel),
60-Sekunden-Bewerbungsfunnel, Supabase-Anbindung und E-Mail-Benachrichtigung.

Stack: **Next.js 14 (App Router) · Supabase · Tailwind · framer-motion · lucide-react · Resend**

---

## Update (Stand 2) – neu in dieser Lieferung

- **Echte Google-Rezensionen** (5,0 · 13) als auto-scrollende, klickbare
  Marquee (`ReviewsMarquee`) → führt aufs Google-Profil.
- **Marken-Marquee klickbar** zu den Herstellern (`lib/brands.ts`).
- **Original Social-Icons** (Instagram, Facebook, Google) im Footer, klickbar
  zu den echten Profilen (`components/BrandIcons.tsx`).
- **Google-Maps-Standort** (`LocationMap`) – Embed ohne API-Key + „Route planen".
- **shk.png-Sektion** früh auf der Seite (`ShkIntro`, Bild aus `/public/shk.png`).
- **Logo konfigurierbar**: `site.logoSrc` in `lib/site.ts` setzen (am besten SVG),
  sonst saubere Text-Wortmarke. Damit ist das „low-res"-Logo gelöst, ohne ein
  unscharfes PNG zu verwenden.

### Was ich von dir noch brauche (kurz)

1. **Supabase-URL/Projekt-Ref des NEUEN Projekts** (Dashboard → Project Settings →
   Data API, oder die `…​.supabase.co`-URL). Den Publishable-Key habe ich:
   `sb_publishable_K2uQFLXhWdeRJWpR75RdZg_Ty4JA4cg`. Ohne die URL kann ich
   `NEXT_PUBLIC_SUPABASE_URL` nicht final setzen.
2. **Dateinamen in `/public`** (einmal `ls public` reicht) – für: echtes Logo
   (`site.logoSrc`), Marken-Logos (dann statt Schriftzug in `lib/brands.ts`
   eintragen), und Kontrolle von `shk.png` / `before.jpg` / `after.jpg`.
3. **Logo scharf**: am besten die **SVG**-Version eures Logos nach `/public`
   pushen (vektorbasiert = nie pixelig). Falls du nur ein PNG hast, lade es
   mir hier hoch – dann schärfe/vergrößere ich es über Higgsfield.

---

## Komplett lauffähiges Projekt – Quickstart

Dieses Paket ist jetzt ein **vollständiges Next.js-14-Projekt** (inkl.
`package.json`, `tsconfig.json`, Tailwind/PostCSS-Config, `next.config.mjs`,
Robots/Sitemap, 404-Seite sowie **Impressum & Datenschutz**).

```bash
npm install
cp .env.local.example .env.local   # Werte eintragen (Punkt 5)
npm run dev                        # http://localhost:3000
```

> **WICHTIG, wenn dein v0-/GitHub-Repo bereits eine `package.json`,
> `tsconfig.json`, `tailwind.config.*` oder `next.config.*` hat:** diese Dateien
> NICHT blind überschreiben, sondern **zusammenführen**. Konkret sicherstellen:
> 1. Dependencies aus meiner `package.json` sind vorhanden
>    (`@supabase/supabase-js`, `@supabase/ssr`, `resend`, `framer-motion`,
>    `lucide-react`).
> 2. In `tsconfig.json` existiert der Alias `"@/*"` (bei `src/`-Layout auf
>    `./src/*`, sonst `./*`).
> 3. In `tailwind.config.*` deckt `content` die Ordner `app/`, `components/`
>    und `lib/` ab.
> Die `app/`-, `components/`- und `lib/`-Dateien sowie die neuen Seiten
> (`app/impressum`, `app/datenschutz`, `app/robots.ts`, `app/sitemap.ts`,
> `app/not-found.tsx`) kannst du gefahrlos übernehmen.

Die im Footer verlinkten Seiten **/impressum** und **/datenschutz** sind jetzt
angelegt (vorher 404). Beides sind auf die echte Technik zugeschnittene Vorlagen
mit klar markierten Pflicht-Platzhaltern (Geschäftsführer, HRB, USt-IdNr.) – vor
dem Livegang ausfüllen und rechtlich prüfen lassen.

---

## 1. Was in dieser Lieferung steckt

- **Brandkit aus deiner echten Seite übernommen:** Azurblau `#2189E5`, Beige
  `#F2EBDC`, Bronze/Gold `#AF7F35`, Textfarben fast-schwarz, Hausschrift
  **Open Sans** (als Fließtext). Headlines in Space Grotesk für den Premium-Look.
- **Echte Inhalte** statt Platzhalter: Positionierung („Energiekosten senken.
  Zuhause zukunftssicher machen."), die 4 Leistungsbereiche, die „Rundum-sorglos"-
  USPs (Förderung & Finanzierung, 3D-Planung, HLS-Projektmappe, Monitoring/
  Fernwartung) und die echten offenen Stellen aus deiner Karriereseite.
- **Keine erfundenen Kundenzitate.** Statt Fake-Reviews gibt es einen ehrlichen
  Google-Bewertungsblock (5,0 · 13) + Trust-Signale. Echte Reviews kannst du
  später per Embed nachrüsten (siehe Punkt 7).
- **Datenbank-Schema** als SQL (idempotent) zum Selbst-Ausführen.

---

## 2. Dateien ins GitHub-Repo einsortieren

Lege die Dateien **im Repo-Root** ab (so wie hier im ZIP). `@/...`-Importe zeigen
auf den Projekt-Root.

```
app/
  layout.tsx
  page.tsx
  globals.css
  actions/
    lead.ts
    application.ts
components/
  RecruitingStickyBanner.tsx
  sections/
    SiteHeader.tsx
    TrustHero.tsx
    BrandMarquee.tsx
    GewerkHub.tsx
    WhyHLS.tsx
    SocialProofGallery.tsx
    RecruitingSection.tsx
    ContactSection.tsx
    SiteFooter.tsx
  configurators/
    HeatingConfigurator.tsx
    BeforeAfterShowcase.tsx
    RecruitingFunnel.tsx
lib/
  site.ts
  options.ts
  email/{templates.ts, resend.ts}
  supabase/{admin.ts, server.ts}
supabase/
  migrations/0001_hls_init.sql
.env.local.example
```

> **Falls dein v0-Projekt einen `src/`-Ordner nutzt:** dann `app/`, `components/`
> und `lib/` nach `src/` legen und sicherstellen, dass in `tsconfig.json` der Alias
> `"@/*": ["./src/*"]` steht (sonst `"@/*": ["./*"]`). Nur eines von beiden.

---

## 3. Pakete installieren

```bash
npm install @supabase/supabase-js @supabase/ssr resend framer-motion lucide-react
```

(Next.js, React und Tailwind sind in deinem v0-Projekt schon vorhanden.)

---

## 4. Supabase – richtiges Projekt `lejwgcgazwwyhywsbltl`

**Wichtiger Hinweis:** Mein Supabase-Zugang in diesem Chat hängt noch am
falschen Account (dort lag nur das alte OLEA-Projekt). Auf dein Projekt
`lejwgcgazwwyhywsbltl` habe ich von hier aus **keine Berechtigung**. Deshalb
führst du das Schema einmal selbst aus – dauert 30 Sekunden:

1. Supabase Dashboard → Projekt **lejwgcgazwwyhywsbltl** → **SQL Editor**.
2. Inhalt von `supabase/migrations/0001_hls_init.sql` einfügen → **Run**.
   (Legt die Tabellen `leads`, `job_applications`, `analytics_visits` inkl.
   Indizes + RLS an. Idempotent – mehrfaches Ausführen schadet nicht.)
3. Keys holen: Project Settings → **API**
   - `anon` / `publishable` Key → für `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` Secret → für `SUPABASE_SERVICE_ROLE_KEY` (**geheim**)

**Sicherheitsmodell:** Der Browser-Key darf nichts. Eintragungen laufen
serverseitig über den `service_role`-Key (Server Actions). Lesen/Status ändern
kann nur ein eingeloggter Admin (Supabase Auth, keine öffentliche Registrierung).

> Die RLS-Update-Policies nutzen `USING (true)`. Der Supabase-Advisor markiert
> das als WARN. Für ein internes Ein-Admin-CRM ist das bewusst so gewählt und
> unkritisch (es gibt keine öffentlichen authenticated-User).

---

## 5. Umgebungsvariablen

`.env.local.example` → nach **`.env.local`** kopieren und ausfüllen. Dieselben
Werte zusätzlich in **Vercel → Settings → Environment Variables** eintragen.

| Variable | Wert |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://lejwgcgazwwyhywsbltl.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | anon/publishable Key |
| `SUPABASE_SERVICE_ROLE_KEY` | service_role Secret (geheim) |
| `RESEND_API_KEY` | optional (siehe Punkt 6) |
| `RESEND_FROM` | `HLS Website <onboarding@resend.dev>` bis Domain verifiziert |
| `RESEND_TO` | `info@hls-haustechnik-leipzig.de` |

---

## 6. Vercel – das ist dein eine-Klick-Schritt

Dein Vercel-Team ist verbunden (sichtbar), aber das HLS-Repo ist **noch nicht als
Projekt importiert** (0 Projekte). Vercel muss **nicht** neu verbunden werden.

1. Vercel → **Add New… → Project** → GitHub-Repo `onurffm/HLS` importieren.
2. Framework: Next.js (erkennt Vercel automatisch).
3. Die Env-Variablen aus Punkt 5 eintragen → **Deploy**.
4. Danach deployt jeder `git push` automatisch.

E-Mail (Resend) ist optional: ohne `RESEND_API_KEY` funktioniert das Formular
weiter, nur der Mailversand wird übersprungen – der Lead landet trotzdem in
Supabase. Für echten Versand: bei [resend.com](https://resend.com) API-Key holen
und später `hls-haustechnik-leipzig.de` als Absender-Domain verifizieren.

---

## 7. Inhalte/Assets, die du noch setzt

- **Vorher-Nachher-Bilder:** unter `public/images/showcase/before.jpg` und
  `after.jpg` ablegen (liegen die Bilder anders im Repo, Pfade in
  `BeforeAfterShowcase` anpassen – das Component nimmt auch Props).
- **Instagram-Handle:** in `lib/site.ts` → `social.instagram` eintragen.
- **Google-Bewertungslink:** in `lib/site.ts` → `rating.url` den echten
  Profil-Link setzen (aktuell Such-Platzhalter).
- **Marken-Leiste:** Framing ist „Markentechnik, die wir verbauen". Auf deiner
  Seite waren nur **LG** und **SMA** belegt – die Liste in `BrandMarquee.tsx`
  bitte auf das kürzen, was ihr wirklich verbaut.
- **Echte Reviews (optional):** in `SocialProofGallery` per Embed nachrüstbar
  (z. B. Elfsight / Trustindex / Google Places API).
- **Impressum/Datenschutz:** Footer verlinkt `/impressum` und `/datenschutz` –
  diese Seiten noch anlegen (Pflicht in DE).

---

## 8. Brand-Tokens (Referenz, in `app/globals.css`)

| Token | Wert | Einsatz |
|---|---|---|
| `--blau` | `#2189E5` | Primär (Buttons, Links, Akzente) |
| `--blau-hell` | `#5AA9EE` | Akzent auf dunklem Grund |
| `--blau-50` | `#E7F2FC` | Icon-Badges, Flächen |
| `--sand` / `--paper` | `#F2EBDC` | Beige Sektionsflächen |
| `--sand-2` | `#F8F3EA` | helleres Creme |
| `--gold` | `#AF7F35` | Bronze-Akzent, sehr sparsam |
| `--kupfer` | `#C0512B` | Wärme-/Heizungs-Akzent |
| `--ink` | `#16202B` | Text + dunkle Sektionen |
| `--line` | `#E6DCC8` | warme Haarlinien |

> Möchtest du die **komplette** Seite in Open Sans statt Space-Grotesk-Headlines?
> In `app/layout.tsx` einfach `--font-display` auf Open Sans zeigen lassen – eine
> Zeile. Aktuell bewusst gemischt, weil die Grotesk-Headlines den Premium-Eindruck
> heben.

---

## 9. Phase 2 (auf Wunsch als Nächstes)

- **Admin-CRM unter `/admin`** (Supabase Auth + Middleware): Leads & Bewerbungen
  ansehen, Status setzen, einfache Statistik.
- **EnergySystem-Konfigurator** (Wärmepumpe + PV + Speicher als ein System).
- **Premium-Bad-Konfigurator** und **Sektorenkopplungs-Infografik**.

Sag Bescheid, dann baue ich Phase 2 im gleichen Stil obendrauf.
