// Zentrale Konfiguration: Firmendaten an EINER Stelle pflegen.
// Wird von Layout (SEO/JSON-LD), Header, Footer, Kontakt und E-Mails genutzt.

export const site = {
  name: "HLS Haustechnik GmbH",
  shortName: "HLS Haustechnik",
  legalName: "HLS Haustechnik GmbH",

  phone: "+49 341 30875510",
  phoneHref: "tel:+4934130875510",
  // Optional: WhatsApp-Nummer im internationalen Format ohne + und ohne 0
  whatsapp: "4934130875510",

  email: "info@hls-haustechnik-leipzig.de",
  url: "https://www.hls-haustechnik-leipzig.de",

  address: {
    street: "Bornaische Str. 136b",
    postalCode: "04279",
    city: "Leipzig",
    region: "Sachsen",
    country: "DE",
    // Koordinaten Leipzig-Connewitz (grob); fuer Maps/JSON-LD bei Bedarf praezisieren
    lat: 51.298,
    lng: 12.385,
  },

  rating: {
    value: 5.0,
    count: 13,
    source: "Google",
    url: "https://share.google/0BRh8xLkeYsF8d14L",
  },

  // Einzugsgebiet (lokale SEO-Signale, Texte)
  serviceAreas: [
    "Leipzig",
    "Connewitz",
    "Gohlis",
    "Markkleeberg",
    "Schkeuditz",
    "Taucha",
    "Borna",
  ],

  social: {
    instagram: "https://www.instagram.com/hls.haustechnik.leipzig/",
    facebook: "https://www.facebook.com/profile.php?id=61581535720125",
    google: "https://share.google/0BRh8xLkeYsF8d14L",
  },

  // Logo: sobald eine scharfe Datei (idealerweise SVG) in /public liegt,
  // hier den Pfad setzen, z.B. "/logo.svg". Leer = saubere Text-Wortmarke.
  logoSrc: "/logo.svg",
} as const;

export type Site = typeof site;
