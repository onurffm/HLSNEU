import { Check } from "lucide-react";

const punkte = [
  "Heizung, Sanitär, Klima und Elektro aus einem Haus",
  "Meisterbetrieb mit fester Mannschaft aus Leipzig",
  "Von der Förderung bis zur Übergabe ein Ansprechpartner",
];

export default function ShkIntro() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Bild aus /public/shk.png */}
        <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--sand-2)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/shk.png"
            alt="HLS Haustechnik – SHK-Meisterbetrieb aus Leipzig"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <span className="eyebrow text-[var(--blau)]">SHK-Meisterbetrieb</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--ink)] md:text-4xl">
            Handwerk, das zusammen gedacht ist
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Sanitär, Heizung, Klima — bei HLS greift alles ineinander. Wir planen
            und montieren mit eigener Mannschaft, sauber und termintreu, und
            denken Wärme, Strom und Wasser als ein System statt als Einzelteile.
          </p>

          <ul className="mt-6 space-y-3">
            {punkte.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--blau-50)]">
                  <Check className="h-3.5 w-3.5 text-[var(--blau)]" strokeWidth={2.6} />
                </span>
                <span className="text-[15px] text-[var(--ink)]">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
