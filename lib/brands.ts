// Markentechnik, die HLS verbaut. Klickbar zu den Herstellern.
// logo optional: sobald die Logo-Dateien in /public liegen, hier den Pfad
// eintragen (z.B. logo: "/viessmann.svg"); dann rendert die Marquee das Bild
// statt des Schriftzugs.
export type Brand = { name: string; url: string; logo?: string };

export const brands: Brand[] = [
  { name: "VIESSMANN", url: "https://www.viessmann.de" },
  { name: "VAILLANT", url: "https://www.vaillant.de" },
  { name: "BOSCH", url: "https://www.bosch-homecomfort.com/de/de/" },
  { name: "BUDERUS", url: "https://www.buderus.de" },
  { name: "DAIKIN", url: "https://www.daikin.de" },
  { name: "STIEBEL ELTRON", url: "https://www.stiebel-eltron.de" },
  { name: "WOLF", url: "https://www.wolf.eu" },
  { name: "GEBERIT", url: "https://www.geberit.de" },
  { name: "GROHE", url: "https://www.grohe.de" },
  { name: "SMA", url: "https://www.sma.de" },
  { name: "FRONIUS", url: "https://www.fronius.com/de-de/germany" },
  { name: "LG", url: "https://www.lg.com/de" },
];
