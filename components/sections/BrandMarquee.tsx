import { brands } from "@/lib/brands";

// Marquee der Markentechnik, die HLS verbaut – klickbar zu den Herstellern.
// Rendert ein Logo, falls in lib/brands.ts ein `logo`-Pfad gesetzt ist,
// sonst den Schriftzug (so gibt es nie kaputte Grafiken).

function Item({
  name,
  url,
  logo,
}: {
  name: string;
  url: string;
  logo?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex shrink-0 items-center transition-opacity hover:opacity-100 focus-visible:opacity-100"
      aria-label={`Hersteller ${name} – Website öffnen`}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={name}
          className="h-7 w-auto object-contain opacity-70 transition-opacity hover:opacity-100"
        />
      ) : (
        <span className="whitespace-nowrap font-display text-sm font-semibold tracking-[0.14em] text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
          {name}
        </span>
      )}
    </a>
  );
}

function Row() {
  return (
    <div className="marquee">
      {brands.map((b, i) => (
        <Item key={i} name={b.name} url={b.url} logo={b.logo} />
      ))}
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper)] py-6">
      <div className="mb-3 text-center">
        <span className="eyebrow text-[var(--muted)]">
          Markentechnik, die wir verbauen
        </span>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex">
          <Row />
          <Row />
        </div>
        {/* Rand-Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--paper)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--paper)] to-transparent" />
      </div>
    </section>
  );
}
