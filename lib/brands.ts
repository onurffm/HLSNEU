// Marken, die HLS verbaut – für den Logo-Marquee.
// Logos in /public/images/brands/ ablegen, exakt als "<slug>.png".
// Fehlt ein Logo, zeigt der Marquee automatisch den Namen als Text.

export type Brand = {
  name: string;
  slug: string;
  url: string;
};

export const brands: Brand[] = [
  { name: "Viessmann", slug: "viessmann", url: "https://www.viessmann.de" },
  { name: "Vaillant", slug: "vaillant", url: "https://www.vaillant.de" },
  { name: "Bosch", slug: "bosch", url: "https://www.bosch-homecomfort.com/de/de/" },
  { name: "Buderus", slug: "buderus", url: "https://www.buderus.de" },
  { name: "Stiebel Eltron", slug: "stiebel-eltron", url: "https://www.stiebel-eltron.de" },
  { name: "Wolf", slug: "wolf", url: "https://www.wolf.eu" },
  { name: "Daikin", slug: "daikin", url: "https://www.daikin.de" },
  { name: "Geberit", slug: "geberit", url: "https://www.geberit.de" },
  { name: "Grohe", slug: "grohe", url: "https://www.grohe.de" },
  { name: "SMA", slug: "sma", url: "https://www.sma.de" },
  { name: "Fronius", slug: "fronius", url: "https://www.fronius.com/de-de/germany" },
  { name: "LG", slug: "lg", url: "https://www.lg.com/de" },
];

export const brandLogo = (slug: string) => `/images/brands/${slug}.png`;
