import type { Metadata } from "next";
import LegalShell from "@/components/sections/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz | HLS Haustechnik Leipzig",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalShell
      title="Datenschutzerklärung"
      intro="Informationen zur Verarbeitung personenbezogener Daten auf dieser Website nach DSGVO."
    >
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich im Sinne der DSGVO ist:
        <br />
        <strong>{site.legalName}</strong>, {site.address.street},{" "}
        {site.address.postalCode} {site.address.city}
        <br />
        Telefon: {site.phone} · E-Mail:{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei der Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA
        91789, USA) gehostet. Beim Aufruf werden technisch notwendige Daten
        (z. B. IP-Adresse, Zeitpunkt, abgerufene Seite, Browsertyp) in
        Server-Logfiles verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
        DSGVO (sicherer, stabiler Betrieb). Mit dem Anbieter besteht ein
        Auftragsverarbeitungsvertrag; Datenübermittlungen in die USA werden über
        die EU-Standardvertragsklauseln abgesichert.
      </p>

      <h2>3. Kontakt- und Angebotsanfragen</h2>
      <p>
        Wenn Sie das Kontaktformular, den Heizungs-Check oder die Anfrage per
        Telefon/E-Mail nutzen, verarbeiten wir die von Ihnen angegebenen Daten
        (z. B. Name, Telefon, E-Mail, PLZ, Angaben zum Vorhaben), um Ihre Anfrage
        zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
        (vorvertragliche Maßnahmen) bzw. lit. f DSGVO (Bearbeitung von Anfragen).
      </p>
      <h3>Speicherung der Anfragen (Supabase)</h3>
      <p>
        Die übermittelten Daten werden in einer Datenbank des Anbieters Supabase
        gespeichert. Anbieter:{" "}
        <span className="todo">[Supabase-Region/Anbieterangaben eintragen]</span>.
        Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag.
      </p>
      <h3>Benachrichtigung per E-Mail (Resend)</h3>
      <p>
        Zur internen Benachrichtigung über neue Anfragen nutzen wir den
        E-Mail-Dienst Resend (Resend, Inc., USA). Dabei werden die
        Anfragedaten verarbeitet. Datenübermittlungen in die USA werden über die
        EU-Standardvertragsklauseln abgesichert.
      </p>

      <h2>4. Bewerbungen</h2>
      <p>
        Über den Bewerbungs-Funnel verarbeiten wir Ihre Angaben (z. B. Name,
        Telefon, gewünschte Position) ausschließlich zur Durchführung des
        Bewerbungsverfahrens (§ 26 BDSG, Art. 6 Abs. 1 lit. b DSGVO). Die Daten
        werden nach Abschluss des Verfahrens gelöscht, sofern keine gesetzlichen
        Aufbewahrungspflichten bestehen oder Sie einer längeren Speicherung
        zugestimmt haben.
      </p>

      <h2>5. Google Maps</h2>
      <p>
        Zur Anzeige unseres Standorts binden wir eine Karte von Google Maps ein
        (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).
        Beim Laden der Karte kann Ihre IP-Adresse an Google übertragen werden.
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO bzw. Ihre Einwilligung
        nach Art. 6 Abs. 1 lit. a DSGVO.{" "}
        <span className="todo">
          [Falls ein Consent-Banner genutzt wird: Karte erst nach Einwilligung laden.]
        </span>
      </p>

      <h2>6. Schriftarten</h2>
      <p>
        Schriftarten werden über das Next.js-Font-System lokal vom eigenen Server
        ausgeliefert. Es besteht dabei keine Verbindung zu Google-Servern.
      </p>

      <h2>7. Social-Media-Verlinkungen</h2>
      <p>
        Die Verlinkungen zu Instagram, Facebook und Google sind reine Hyperlinks.
        Erst beim Klick werden Sie zum jeweiligen Anbieter weitergeleitet; vorher
        findet keine Datenübertragung an diese Dienste statt.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16),
        Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18),
        Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21 DSGVO). Sie
        können eine erteilte Einwilligung jederzeit widerrufen. Zudem steht Ihnen
        ein Beschwerderecht bei einer Aufsichtsbehörde zu (für Sachsen: Sächsische
        Datenschutz- und Transparenzbeauftragte).
      </p>

      <h2>9. Speicherdauer</h2>
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie es für die
        genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen
        es vorschreiben.
      </p>

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", opacity: 0.7 }}>
        Hinweis: Diese Datenschutzerklärung ist eine auf die eingesetzte Technik
        zugeschnittene Vorlage. Bitte vor dem Livegang prüfen (lassen) und die
        markierten Felder ergänzen.
      </p>
    </LegalShell>
  );
}
