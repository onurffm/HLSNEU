import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#konfigurator", label: "Heizungs-Check" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#karriere", label: "Karriere" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          {site.logoSrc ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.logoSrc}
                alt="HLS Haustechnik Leipzig Logo"
                className="h-9 w-9 object-contain"
              />
              <span className="flex items-baseline gap-2">
                <span className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
                  HLS
                </span>
                <span className="hidden text-sm text-[var(--muted)] sm:inline">
                  Haustechnik Leipzig
                </span>
              </span>
            </>
          ) : (
            <span className="flex items-baseline gap-2">
              <span className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
                HLS
              </span>
              <span className="hidden text-sm text-[var(--muted)] sm:inline">
                Haustechnik Leipzig
              </span>
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[var(--steel)] transition-colors hover:text-[var(--blau)]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-[var(--ink)] sm:flex"
          >
            <Phone className="h-4 w-4 text-[var(--blau)]" strokeWidth={2.2} />
            {site.phone}
          </a>
          <a
            href="/#konfigurator"
            className="rounded-full bg-[var(--blau)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--blau-hell)]"
          >
            Jetzt Angebot sichern
          </a>
        </div>
      </div>
    </header>
  );
}
