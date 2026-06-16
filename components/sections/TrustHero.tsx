import {
  Star,
  ShieldCheck,
  ArrowRight,
  Wrench,
  Check,
  ChevronRight,
} from "lucide-react";
import { site } from "@/lib/site";
import { media } from "@/lib/media";
import Reveal from "@/components/animation/Reveal";

const usps = [
  "Kostenlose Erstberatung",
  "Förderung & Finanzierung inklusive",
  "3D-Planung & feste Ansprechpartner",
];

const chain = ["Beratung", "Förderung", "Planung", "Installation", "Wartung"];

export default function TrustHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--ink)] bg-cover bg-center"
      style={{ backgroundImage: `url(${media.heroTeam})` }}
    >
      {/* Lesbarkeits-Overlay: links dunkel, nach rechts transparenter */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(16,24,33,0.94) 0%, rgba(16,24,33,0.86) 42%, rgba(16,24,33,0.62) 70%, rgba(16,24,33,0.45) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24"
        style={{
          background:
            "linear-gradient(to bottom, rgba(16,24,33,0.55), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <Reveal y={14}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.06)] px-3 py-1.5 backdrop-blur">
              <ShieldCheck
                className="h-4 w-4 text-[var(--blau-hell)]"
                strokeWidth={2.2}
              />
              <span className="text-xs text-white/85">
                Meisterbetrieb · Komplett aus einer Hand · Leipzig & Umgebung
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white md:text-6xl">
              Energiekosten senken.
              <span className="text-[var(--blau-hell)]">
                {" "}
                Zuhause zukunftssicher machen.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Wärmepumpen, Heizung, Photovoltaik und Badsanierung vom
              Meisterbetrieb — energieeffizient, förderfähig und komplett aus
              einer Hand. Von der Förderung bis zur Übergabe ein
              Ansprechpartner: wir.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {usps.map((u) => (
                <li
                  key={u}
                  className="flex items-center gap-2 text-sm text-white/85"
                >
                  <Check
                    className="h-4 w-4 text-[var(--blau-hell)]"
                    strokeWidth={2.6}
                  />
                  {u}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.rating.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] px-4 py-3 backdrop-blur transition-colors hover:border-[var(--blau-hell)]"
              >
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
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#konfigurator"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blau)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-18px_rgba(33,137,229,0.8)] transition-colors hover:bg-[var(--blau-hell)]"
              >
                Jetzt Angebot sichern
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#karriere"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.28)] px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-[rgba(255,255,255,0.08)]"
              >
                <Wrench className="h-4 w-4 text-[var(--kupfer-hell)]" />
                Karriere bei HLS
              </a>
            </div>
          </Reveal>

          {/* Leistungskette "aus einer Hand" */}
          <Reveal delay={0.48}>
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
              {chain.map((step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="data-label !text-white/55">{step}</span>
                  {i < chain.length - 1 && (
                    <ChevronRight className="h-3.5 w-3.5 text-white/25" />
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
