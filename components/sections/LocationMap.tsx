import { MapPin, Navigation } from "lucide-react";
import { site } from "@/lib/site";

const query = encodeURIComponent(
  `${site.name}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
);
const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
const routeHref = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

export default function LocationMap() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow text-[var(--blau)]">Standort</span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--ink)] md:text-3xl">
            So finden Sie uns in Leipzig
          </h2>
          <p className="mt-2 flex items-center gap-2 text-[var(--muted)]">
            <MapPin className="h-4 w-4 text-[var(--blau)]" strokeWidth={2.2} />
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
        </div>

        <a
          href={routeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--blau)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--blau-hell)]"
        >
          <Navigation className="h-4 w-4" strokeWidth={2.2} />
          Route planen
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)]">
        <iframe
          title={`Standort ${site.name}`}
          src={embedSrc}
          className="h-[380px] w-full md:h-[440px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </div>
    </section>
  );
}
