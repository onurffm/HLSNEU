import { Star, ShieldCheck, Layers, BadgeEuro, Instagram, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import BeforeAfterShowcase from "@/components/configurators/BeforeAfterShowcase";

// Ehrliche Trust-Signale statt erfundener Zitate.
// Echte Kundenstimmen lassen sich später als Google-Embed ergänzen (siehe README).
const trust = [
  { icon: ShieldCheck, label: "Meisterbetrieb aus Leipzig" },
  { icon: Layers, label: "Komplett aus einer Hand" },
  { icon: BadgeEuro, label: "Förderung & Finanzierung inklusive" },
];

export default function SocialProofGallery() {
  return (
    <section id="referenzen" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="eyebrow text-[var(--blau)]">Referenzen</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[var(--ink)] md:text-4xl">
            Im Handwerk zählt das Ergebnis
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Vom dunklen Ölkeller zur blitzsauberen Wärmepumpe. Ziehen Sie den
            Regler — so sieht eine Modernisierung von HLS aus.
          </p>
        </div>

        <a
          href={site.rating.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white px-4 py-3 transition-colors hover:border-[var(--blau)]"
        >
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" strokeWidth={0} />
            ))}
          </div>
          <span className="font-data text-sm text-[var(--ink)]">
            {site.rating.value.toFixed(1)} · {site.rating.count} {site.rating.source}
          </span>
          <ArrowUpRight className="h-4 w-4 text-[var(--muted)]" />
        </a>
      </div>

      {/* Vorher-Nachher */}
      <div className="mt-10">
        <BeforeAfterShowcase />
        <p className="mt-2 text-center text-xs text-[var(--muted)]">
          Beispielprojekt — Bilder in /public/images/showcase/ ersetzen.
        </p>
      </div>

      {/* Ehrliche Trust-Leiste */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
        {trust.map((t) => (
          <div key={t.label} className="flex items-center gap-3 bg-white p-6">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[var(--blau-50)]">
              <t.icon className="h-5 w-5 text-[var(--blau)]" strokeWidth={2} />
            </span>
            <span className="font-display font-semibold text-[var(--ink)]">
              {t.label}
            </span>
          </div>
        ))}
      </div>

      {/* Instagram-Slot */}
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-between rounded-2xl border border-dashed border-[var(--line)] bg-[var(--sand-2)] p-6 transition-colors hover:border-[var(--blau)]"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
            <Instagram className="h-6 w-6 text-[var(--kupfer)]" />
          </span>
          <div>
            <div className="font-display font-bold text-[var(--ink)]">
              Vorher-Nachher auf Instagram
            </div>
            <div className="text-sm text-[var(--muted)]">
              Sauber verlegte Rohre, modernisierte Heizungskeller, echte Baustellen.
            </div>
          </div>
        </div>
        <span className="hidden text-sm font-semibold text-[var(--blau)] sm:inline">
          Profil ansehen
        </span>
      </a>
      {/* Hinweis: Für echte Kundenstimmen später ein Google-Reviews-Embed
          (z.B. Elfsight / Trustindex) oder die Places-API einbinden. */}
    </section>
  );
}
