import { Star, ArrowUpRight } from "lucide-react";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";
import { GoogleIcon } from "@/components/BrandIcons";

function Stars() {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" strokeWidth={0} />
      ))}
    </div>
  );
}

function Card({ name, text, tag }: { name: string; text: string; tag?: string }) {
  return (
    <a
      href={site.rating.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-[var(--line)] bg-white p-5 transition-all hover:border-[var(--blau-hell)] hover:shadow-[0_12px_40px_-22px_rgba(33,137,229,0.4)]"
    >
      <div className="flex items-center justify-between">
        <Stars />
        <GoogleIcon className="h-4 w-4" />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--ink)]">
        {text}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3">
        <span className="text-sm font-semibold text-[var(--ink)]">{name}</span>
        {tag && <span className="data-label">{tag}</span>}
      </div>
    </a>
  );
}

function Row() {
  return (
    <div className="marquee">
      {reviews.map((r, i) => (
        <Card key={i} name={r.name} text={r.text} tag={r.tag} />
      ))}
    </div>
  );
}

export default function ReviewsMarquee() {
  return (
    <section className="bg-[var(--sand-2)] py-16 md:py-20">
      <div className="mx-auto mb-8 flex max-w-6xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow text-[var(--blau)]">Bewertungen</span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-[var(--ink)] md:text-3xl">
            Das sagen Kundinnen und Kunden über HLS
          </h2>
        </div>

        <a
          href={site.rating.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white px-4 py-3 transition-colors hover:border-[var(--blau)]"
        >
          <GoogleIcon className="h-5 w-5" />
          <span className="font-data text-sm text-[var(--ink)]">
            {site.rating.value.toFixed(1)} · {site.rating.count} Rezensionen
          </span>
          <ArrowUpRight className="h-4 w-4 text-[var(--muted)]" />
        </a>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex">
          <Row />
          <Row />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--sand-2)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--sand-2)] to-transparent" />
      </div>
    </section>
  );
}
