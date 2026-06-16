import { Flame, Bath, Hammer, Sun, ArrowUpRight } from "lucide-react";

const gewerke = [
  {
    icon: Flame,
    title: "Wärmepumpen & Heizung",
    teaser:
      "Energieeffiziente Heizlösungen mit Solar-, PV- und Hybridtechnik — staatlich gefördert und als saubere Alternative zu Öl- und Gasheizung.",
    facts: ["Förderfähig", "Hybridtechnik", "Aus einer Hand"],
    accent: "var(--kupfer)",
  },
  {
    icon: Bath,
    title: "Bad & Sanitär",
    teaser:
      "Badmodernisierung vom Fachmann: Designbäder, barrierefreie Lösungen und fugenlose Bäder mit Mikrozement — sauber geplant, sauber umgesetzt.",
    facts: ["Barrierefrei", "Fugenlos / Mikrozement", "Designbad"],
    accent: "var(--blau)",
  },
  {
    icon: Hammer,
    title: "Wohnungssanierung",
    teaser:
      "Komplettlösungen für Umbau, altersgerechten Umbau und energetische Modernisierung — Trockenbau, Maler und Elektroinstallation inklusive.",
    facts: ["Komplett aus einer Hand", "Altersgerecht", "Energetisch"],
    accent: "var(--blau)",
  },
  {
    icon: Sun,
    title: "Photovoltaik & Energietechnik",
    teaser:
      "Photovoltaik vom Dach, ideal kombiniert mit Wärmepumpe. Dazu smarte Elektroinstallation: Wallbox, Stromspeicher und Smart-Home.",
    facts: ["PV + Speicher", "Wallbox-ready", "Smart-Home"],
    accent: "var(--kupfer)",
  },
];

export default function GewerkHub() {
  return (
    <section id="leistungen" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow text-[var(--blau)]">Leistungen</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--ink)] md:text-4xl">
          Ein Betrieb für das gesamte Energiesystem
        </h2>
        <p className="mt-4 text-[var(--muted)]">
          Wer heute modernisiert, denkt das Haus als Ganzes. Wir planen und
          realisieren Wärme, Strom und Wasser so, dass die Komponenten
          zusammenarbeiten — effizient, förderfähig und auf Ihr Zuhause
          abgestimmt.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {gewerke.map((g) => (
          <div
            key={g.title}
            className="group relative rounded-2xl border border-[var(--line)] bg-white p-7 transition-all hover:border-[var(--blau-hell)] hover:shadow-[0_12px_40px_-18px_rgba(33,137,229,0.35)]"
          >
            <div className="flex items-start justify-between">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: "var(--blau-50)" }}
              >
                <g.icon
                  className="h-6 w-6"
                  style={{ color: g.accent }}
                  strokeWidth={2}
                />
              </div>
              <ArrowUpRight className="h-5 w-5 text-[var(--line)] transition-colors group-hover:text-[var(--blau)]" />
            </div>

            <h3 className="mt-5 font-display text-xl font-bold text-[var(--ink)]">
              {g.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {g.teaser}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {g.facts.map((f) => (
                <span
                  key={f}
                  className="data-label rounded-md border border-[var(--line)] bg-[var(--sand-2)] px-2 py-1 !text-[var(--steel)]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
