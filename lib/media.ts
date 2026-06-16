// Zentrale Bild-Pfade. Echte Fotos einfach unter /public/images/ ablegen –
// exakt unter diesen Dateinamen, dann erscheinen sie automatisch.
// Fehlt eine Datei, greift im UI ein gestalteter Fallback (kein kaputtes Bild).

export const media = {
  // Quer-Format, mind. 1600px breit, zeigt das HLS-Team (Hero-Hintergrund).
  heroTeam: "/images/team.jpg",

  // Social-Sharing-Vorschau (WhatsApp/LinkedIn), 1200 x 630 px.
  ogImage: "/images/og.jpg",

  // Bestehendes Intro-Bild (SHK).
  shkIntro: "/shk.png",

  // Referenz-/Projektfotos (Galerie). Quer, mind. 1200px breit.
  projects: [
    { src: "/images/projekt-1.jpg", label: "Wärmepumpe & Heizung" },
    { src: "/images/projekt-2.jpg", label: "Bad & Sanitär" },
    { src: "/images/projekt-3.jpg", label: "Photovoltaik" },
  ],

  // Vorher/Nachher (z.B. Badsanierung).
  beforeAfter: { before: "/images/vorher.jpg", after: "/images/nachher.jpg" },
} as const;
