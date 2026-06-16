// Echte Google-Rezensionen (gekürzt, Namen wie öffentlich bei Google sichtbar).
// Quelle: Google-Profil HLS Haustechnik GmbH (5,0 · 13 Rezensionen).
export type Review = { name: string; text: string; tag?: string };

export const reviews: Review[] = [
  {
    name: "HG Automobile",
    text: "Von der ersten Kontaktaufnahme bis zur finalen Umsetzung war alles erstklassig.",
    tag: "SHK",
  },
  {
    name: "laurine",
    text: "Installation von Photovoltaik und Wärmepumpe verlief reibungslos und professionell.",
    tag: "PV + Wärmepumpe",
  },
  {
    name: "Ryan Höppner",
    text: "Von der ersten Beratung bis zur Umsetzung absolut professionell. Klare Empfehlung!",
    tag: "Beratung",
  },
  {
    name: "Thomas Oster",
    text: "Sauber und schnell gearbeitet. Wir haben jetzt eine 7 kW Wärmepumpe von Bosch.",
    tag: "Wärmepumpe",
  },
  {
    name: "Daniel Richter",
    text: "Kompetente Beratung, saubere Ausführung und ein Team, das mitdenkt.",
    tag: "Handwerk",
  },
  {
    name: "Lenja Gehre",
    text: "Badezimmer renovieren lassen — professionell, sauber, zuverlässig und pünktlich.",
    tag: "Bad",
  },
  {
    name: "H. Ullrich",
    text: "Von der Planung bis zur Inbetriebnahme hat alles wunderbar funktioniert.",
    tag: "Inbetriebnahme",
  },
  {
    name: "Udo Spörrer",
    text: "Selten trifft man auf so nette und professionelle Leute. Unsere Empfehlung habt ihr!",
    tag: "Empfehlung",
  },
  {
    name: "Bernd Köhler",
    text: "Von der Planung bis zur Inbetriebnahme unserer Bosch Wärmepumpe alles super gelaufen.",
    tag: "Wärmepumpe",
  },
  {
    name: "Karl",
    text: "Alles professionell, zuverlässig und termingerecht. Fachlich kompetent und freundlich.",
    tag: "Installation",
  },
  {
    name: "Martin Jordan",
    text: "Handwerker pünktlich, freundlich, sauber gearbeitet. Die Heizung läuft perfekt.",
    tag: "Heizung",
  },
  {
    name: "Ludwig Jauch",
    text: "Nach ausführlicher Beratung durch Herrn Steuernagel: durchweg Positives zu berichten.",
    tag: "Beratung",
  },
];
