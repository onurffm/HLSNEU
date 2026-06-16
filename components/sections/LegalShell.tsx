import SiteHeader from "@/components/sections/SiteHeader";
import SiteFooter from "@/components/sections/SiteFooter";

export default function LegalShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <a
          href="/"
          className="data-label text-[var(--blau)] transition-colors hover:text-[var(--blau-tief)]"
        >
          ← Zur Startseite
        </a>
        <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-[var(--ink)] md:text-4xl">
          {title}
        </h1>
        {intro && <p className="mt-3 text-[var(--muted)]">{intro}</p>}
        <div className="legal mt-10">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
