import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="blueprint relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center">
      <span className="data-label !text-[var(--blau-hell)]">Fehler 404</span>
      <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">
        Seite nicht gefunden
      </h1>
      <p className="mt-4 max-w-md text-white/70">
        Diese Seite gibt es nicht (mehr). Kein Problem — zurück zur Startseite
        oder rufen Sie uns direkt an.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--blau)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--blau-hell)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Zur Startseite
        </Link>
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
        >
          {site.phone}
        </a>
      </div>
    </main>
  );
}
