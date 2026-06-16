import { BadgeEuro, Boxes, FileCheck2, MonitorSmartphone } from "lucide-react";

const leistungen = [
  {
    icon: BadgeEuro,
    title: "Förderung & Finanzierung inklusive",
    text: "Wir übernehmen Antrag und Abwicklung der Fördermittel und kümmern uns auf Wunsch um die Finanzierung — Sie müssen sich um nichts kümmern.",
  },
  {
    icon: Boxes,
    title: "Professionelle 3D-Planung",
    text: "Ihr Projekt wird digital visualisiert, bevor der erste Handgriff passiert. So sehen Sie das Ergebnis, bevor gebaut wird.",
  },
  {
    icon: FileCheck2,
    title: "HLS-Projektmappe",
    text: "Abnahme und Übergabe inklusive Projektmappe — alles dokumentiert, transparent und verständlich aufbereitet.",
  },
  {
    icon: MonitorSmartphone,
    title: "Monitoring & Fernwartung",
    text: "Wir bleiben auch nach der Installation digital an Ihrer Seite und behalten die Anlage im Blick.",
  },
];

export default function WhyHLS() {
  return (
    <section className="bg-[var(--sand-2)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="eyebrow text-[var(--blau)]">Rundum-sorglos</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--ink)] md:text-4xl">
            Ein Ansprechpartner — von der Förderung bis zur Fernwartung
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            HLS ist kein klassischer Handwerksbetrieb, sondern ein technologie-
            und serviceorientierter Komplettanbieter. Von der ersten Idee bis
            zum laufenden Betrieb kümmern wir uns um alles.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {leistungen.map((l) => (
            <div key={l.title} className="bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--blau-50)]">
                <l.icon
                  className="h-6 w-6 text-[var(--blau)]"
                  strokeWidth={1.9}
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-[var(--ink)]">
                {l.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {l.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
