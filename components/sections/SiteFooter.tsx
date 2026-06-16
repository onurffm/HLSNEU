import { Phone, Mail, MapPin, Star } from "lucide-react";
import { site } from "@/lib/site";
import { InstagramIcon, FacebookIcon, GoogleIcon } from "@/components/BrandIcons";

const footerNav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#konfigurator", label: "Heizungs-Check" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#karriere", label: "Karriere" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="blueprint relative overflow-hidden border-t border-[rgba(255,255,255,0.08)]">
      <div className="relative mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marke + NAP */}
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                HLS
              </span>
              <span className="text-sm text-white/50">Haustechnik Leipzig</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Meisterbetrieb für Heizung, Sanitär und Klimatechnik in Leipzig.
              Wärmepumpen, Photovoltaik und hochwertiger Badbau aus einer Hand.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
              <Star
                className="h-4 w-4 fill-[var(--blau-hell)] text-[var(--blau-hell)]"
                strokeWidth={1.5}
              />
              <span className="text-sm font-semibold text-white">
                {site.rating.value.toFixed(1)}
              </span>
              <span className="data-label !text-white/50">
                {site.rating.count} {site.rating.source}-Rezensionen
              </span>
            </div>

            {/* Social-Links mit Original-Markenicons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HLS auf Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/5 transition-colors hover:bg-white/10"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HLS auf Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/5 transition-colors hover:bg-white/10"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HLS bei Google bewerten"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/5 transition-colors hover:bg-white/10"
              >
                <GoogleIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span className="data-label !text-white/40">Navigation</span>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <span className="data-label !text-white/40">Direkt</span>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[var(--blau-hell)]" strokeWidth={2} />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[var(--blau-hell)]" strokeWidth={2} />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin
                  className="mt-0.5 h-4 w-4 flex-none text-[var(--blau-hell)]"
                  strokeWidth={2}
                />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Einzugsgebiet */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <span className="data-label !text-white/40">Einzugsgebiet</span>
          <p className="mt-3 text-sm text-white/50">
            {site.serviceAreas.join(" · ")}
          </p>
        </div>

        {/* Untere Leiste */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="/impressum" className="transition-colors hover:text-white/70">
              Impressum
            </a>
            <a href="/datenschutz" className="transition-colors hover:text-white/70">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
