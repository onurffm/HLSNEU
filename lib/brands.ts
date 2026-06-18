// Marken, die HLS verbaut – für den Logo-Marquee.
// Standard: Logo liegt unter /public/images/brands/<slug>.png
// Ausnahme: weicht ein Dateiname/Format ab (z.B. Würth als .svg), wird der
// Pfad direkt im Feld "logo" gesetzt. Fehlt ein Logo, zeigt der Marquee
// automatisch den Markennamen als Text – nie ein kaputtes Bild.

export type Brand = {
  name: string;
  slug: string;
  url: string;
  logo?: string; // optionaler Direkt-Pfad, überschreibt die <slug>.png-Regel
};

export const brands: Brand[] = [
  // Wärme & Energie
  { name: "Viessmann", slug: "viessmann", url: "https://www.viessmann.de" },
  { name: "Vaillant", slug: "vaillant", url: "https://www.vaillant.de" },
  { name: "Bosch", slug: "bosch", url: "https://www.bosch-homecomfort.com/de/de/" },
  { name: "Buderus", slug: "buderus", url: "https://www.buderus.de" },
  { name: "Stiebel Eltron", slug: "stiebel-eltron", url: "https://www.stiebel-eltron.de" },
  { name: "Wolf", slug: "wolf", url: "https://www.wolf.eu" },
  { name: "Daikin", slug: "daikin", url: "https://www.daikin.de" },
  { name: "LG", slug: "lg", url: "https://www.lg.com/de" },
  { name: "SMA", slug: "sma", url: "https://www.sma.de" },
  { name: "Fronius", slug: "fronius", url: "https://www.fronius.com/de-de/germany" },

  // Bad & Sanitär
  { name: "Geberit", slug: "geberit", url: "https://www.geberit.de" },
  { name: "Grohe", slug: "grohe", url: "https://www.grohe.de" },
  { name: "Hansgrohe", slug: "hansgrohe", url: "https://www.hansgrohe.de" },
  { name: "Axor", slug: "axor", url: "https://www.axor-design.com" },
  { name: "Dornbracht", slug: "dornbracht", url: "https://www.dornbracht.com" },
  { name: "Kaldewei", slug: "kaldewei", url: "https://www.kaldewei.de" },
  { name: "Viega · Kermi · Tece", slug: "viegakermitece", url: "https://www.viega.de" },
  { name: "Villeroy & Boch · Duravit", slug: "villeroyduravit", url: "https://www.villeroy-boch.com" },

  // Befestigung & Werkzeug
  { name: "Würth", slug: "wuerth", url: "https://www.wuerth.de", logo: "/images/brands/wuerth.svg" },
];

export const brandLogo = (slug: string) => `/images/brands/${slug}.png`;
