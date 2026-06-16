// Gemeinsame Optionen für Funnel + Server Actions, damit Frontend und Backend
// dieselben Werte verwenden. Reine Daten – in Client- UND Server-Code nutzbar.

export const SERVICE_LABELS: Record<string, string> = {
  Waermepumpe: "Wärmepumpe",
  Komplettset_WP_PV: "Komplettsystem Wärmepumpe + PV",
  PV_Speicher: "Photovoltaik + Stromspeicher",
  Badsanierung: "Bad / Sanitär",
  Klima: "Klimatechnik",
  Heizung_Allgemein: "Heizung allgemein",
};

export function serviceLabel(key?: string | null): string {
  if (!key) return "Allgemeine Anfrage";
  return SERVICE_LABELS[key] ?? key;
}

// Heizungs-/Energie-Konfigurator
export const BUILDING_TYPES = [
  { value: "Einfamilienhaus", label: "Einfamilienhaus" },
  { value: "Mehrfamilienhaus", label: "Mehrfamilienhaus" },
  { value: "Gewerbe", label: "Gewerbe / Objekt" },
] as const;

export const BUILDING_AGES = [
  { value: "vor_1990", label: "Vor 1990" },
  { value: "1990_2005", label: "1990 – 2005" },
  { value: "nach_2005", label: "Nach 2005" },
] as const;

export const HEATING_NOW = [
  { value: "Gas", label: "Gas" },
  { value: "Oel", label: "Öl" },
  { value: "Strom", label: "Strom / Nachtspeicher" },
  { value: "Sonstiges", label: "Sonstiges" },
] as const;

export const GOALS = [
  { value: "Waermepumpe", label: "Wärmepumpe" },
  { value: "Komplettset_WP_PV", label: "Wärmepumpe + Solar" },
  { value: "Unentschlossen", label: "Noch unsicher" },
] as const;

// Recruiting-Funnel – echte offene Stellen von der HLS-Karriereseite
export const POSITIONS = [
  { value: "Anlagenmechaniker_SHK", label: "Anlagenmechaniker SHK (m/w/d)" },
  { value: "Elektriker", label: "Elektriker / Elektroinstallateur (m/w/d)" },
  {
    value: "Handelsvertreter_EE",
    label: "Handelsvertreter erneuerbare Energien (m/w/d)",
  },
  { value: "Quereinsteiger", label: "Quereinsteiger (m/w/d)" },
] as const;

export const EXPERIENCE = [
  { value: "ausgelernt", label: "Frisch ausgelernt" },
  { value: "1_3", label: "1 – 3 Jahre" },
  { value: "alter_hase", label: "Alter Hase" },
  { value: "quereinstieg", label: "Quereinstieg" },
] as const;

export const BEST_TIME = [
  { value: "vormittags", label: "Vormittags" },
  { value: "nachmittags", label: "Nachmittags" },
  { value: "abends", label: "Abends" },
] as const;
