import { Star, ShieldCheck, ArrowRight, Wrench, Check } from "lucide-react";
import { site } from "@/lib/site";

const usps = [
  "Kostenlose Erstberatung",
  "Förderung & Finanzierung inklusive",
  "Meisterbetrieb",
];

export default function TrustHero() {
  return (
    <section id="top" className="blueprint relative overflow-hidden">
      {/* dezente technische Linien als Hintergrund-Vektor */}
      <svg
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.12]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="300" cy="120" r="90" stroke="#5AA9EE" strokeWidth="1" />
        <circle cx="300" cy="120" r="55" stroke="#5AA9EE" strokeWidth="1" />
        <path d="M60 300 H300 V120" stroke="#5AA9EE" strokeWidth="1" />
        <path d="M60 340 H260" stroke="#AF7F35" strokeWidth="1" />
        <rect x="40" y="280" width="40" height="40" stroke="#5AA9EE" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.05)] px-3 py-1.5">
          <ShieldCheck className="h-4 w-4 text-[var(--blau-hell)]" strokeWidth={2.2} />
          <span className="text-xs text-white/85">
            Meisterbetrieb · Komplett aus einer Hand · Leipzig
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-white md:text-6xl">
          Energiekosten senken.
          <span className="text-[var(--blau-hell)]"> Zuhause zukunftssicher machen.</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
          Wärmepumpen, Heizungsanlagen, Photovoltaik und Badsanierung vom
          Meisterbetrieb — energieeffizient, förderfähig und komplett aus einer
          Hand. Von der Förderung bis zur Übergabe ein Ansprechpartner: wir.
        </p>

        {/* USP-Chips (echte Leistungsversprechen) */}
        <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
          {usps.map((u) => (
            <li key={u} className="flex items-center gap-2 text-sm text-white/85">
              <Check className="h-4 w-4 text-[var(--blau-hell)]" strokeWidth={2.6} />
              {u}
            </li>
          ))}
        </ul>

        {/* Google-Trust-Block */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.04)] px-4 py-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-[#FBBF24] text-[#FBBF24]"
                  strokeWidth={0}
                />
              ))}
            </div>
            <div className="leading-tight">
              <div className="font-data text-lg font-medium text-white">
                {site.rating.value.toFixed(1)}
              </div>
              <div className="text-xs text-white/60">
                {site.rating.count} Google-Rezensionen
              </div>
            </div>
          </div>

          <div className="data-label !text-white/55">
            Wärmepumpe · Heizung · Photovoltaik · Bad · Sanierung
          </div>
        </div>

        {/* Doppel-CTA */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#konfigurator"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blau)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[var(--blau-hell)]"
          >
            Jetzt Angebot sichern
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#karriere"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.22)] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[rgba(255,255,255,0.06)]"
          >
            <Wrench className="h-4 w-4 text-[var(--kupfer-hell)]" />
            Karriere bei HLS
          </a>
        </div>
      </div>
    </section>
  );
}
