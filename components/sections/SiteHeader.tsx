import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { InstagramIcon, FacebookIcon, GoogleIcon } from "@/components/BrandIcons";

const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#konfigurator", label: "Heizungs-Check" },
  { href: "/#referenzen", label: "Referenzen" },
  { href: "/#karriere", label: "Karriere" },
  { href: "/#kontakt", label: "Kontakt" },
];

const socials = [
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.google, label: "Google-Bewertungen", Icon: GoogleIcon },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo (deine hochgeladene Datei -> als /public/logo.png ablegen) */}
        <Link href="/" className="flex items-center" aria-label="HLS Haustechnik Leipzig – Startseite">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="HLS Haustechnik Leipzig"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            
              key={n.href}
              href={n.href}
              className="text-sm text-[var(--steel)] transition-colors hover:text-[var(--blau)]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            {socials.map(({ href, label, Icon }) => (
              
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-[var(--ink)] md:flex"
          >
            <Phone className="h-4 w-4 text-[var(--blau)]" strokeWidth={2.2} />
            {site.phone}
          </a>
          
            href="/#konfigurator"
            className="rounded-full bg-[var(--blau)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--blau-hell)]"
          >
            Angebot sichern
          </a>
        </div>
      </div>
    </header>
  );
}
