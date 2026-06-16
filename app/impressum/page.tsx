import type { Metadata } from "next";
import LegalShell from "@/components/sections/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum | HLS Haustechnik Leipzig",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalShell title="Impressum" intro="Angaben gemäß § 5 DDG (ehem. TMG).">
      <h2>Anbieter</h2>
      <p>
        <strong>{site.legalName}</strong>
        <br />
        {site.address.street}
        <br />
        {site.address.postalCode} {site.address.city}
      </p>

      <h2>Vertreten durch</h2>
      <p>
        Geschäftsführer: <span className="todo">[Name des Geschäftsführers eintragen]</span>
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {site.phone}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Web: <a href={site.url}>{site.url.replace("https://", "")}</a>
      </p>

      <h2>Registereintrag</h2>
      <p>
        Registergericht: <span className="todo">[Amtsgericht eintragen]</span>
        <br />
        Registernummer: <span className="todo">[HRB-Nummer eintragen]</span>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:{" "}
        <span className="todo">[USt-IdNr. eintragen]</span>
      </p>

      <h2>Berufshaftpflicht / Kammer (falls zutreffend)</h2>
      <p>
        Zuständige Handwerkskammer:{" "}
        <span className="todo">[z. B. Handwerkskammer zu Leipzig]</span>
        <br />
        Verliehen in: Deutschland
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        <span className="todo">[Name]</span>, Anschrift wie oben.
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen. Plattform der
        EU-Kommission zur Online-Streitbeilegung:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.7 }}>
        Hinweis: Die markierten Felder sind vor dem Livegang auszufüllen. Lass das
        Impressum im Zweifel rechtlich prüfen.
      </p>
    </LegalShell>
  );
}
