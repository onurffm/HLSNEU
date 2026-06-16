import { site } from "@/lib/site";

const wrap = (title: string, rows: string) => `
<div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;border:1px solid #DCE3EB;border-radius:14px;overflow:hidden">
  <div style="background:#141B22;padding:20px 24px">
    <div style="color:#ffffff;font-size:14px;letter-spacing:1px;text-transform:uppercase">HLS Haustechnik</div>
    <div style="color:#2E86F0;font-size:20px;font-weight:700;margin-top:4px">${title}</div>
  </div>
  <table style="width:100%;border-collapse:collapse;background:#ffffff">
    ${rows}
  </table>
  <div style="background:#F4F7FA;padding:14px 24px;color:#5B6B7A;font-size:12px">
    Automatisch erzeugt von der HLS-Website. Daten liegen zusätzlich im Admin-Bereich (/admin).
  </div>
</div>`;

const row = (label: string, value?: string | null) =>
  value
    ? `<tr>
        <td style="padding:10px 24px;border-bottom:1px solid #EAF0F6;color:#5B6B7A;font-size:13px;width:42%">${label}</td>
        <td style="padding:10px 24px;border-bottom:1px solid #EAF0F6;color:#141B22;font-size:14px;font-weight:600">${value}</td>
      </tr>`
    : "";

export function leadEmailHtml(input: {
  name: string;
  email?: string | null;
  phone?: string | null;
  postalCode?: string | null;
  serviceLabel?: string | null;
  meta?: Record<string, unknown>;
}) {
  const metaRows = input.meta
    ? Object.entries(input.meta)
        .filter(([, v]) => v != null && v !== "")
        .map(([k, v]) => row(k, String(v)))
        .join("")
    : "";

  return wrap(
    "Neue Kundenanfrage",
    [
      row("Leistung", input.serviceLabel),
      row("Name", input.name),
      row(
        "Telefon",
        input.phone ? `<a href="tel:${input.phone}" style="color:#0C4DA2">${input.phone}</a>` : null,
      ),
      row(
        "E-Mail",
        input.email ? `<a href="mailto:${input.email}" style="color:#0C4DA2">${input.email}</a>` : null,
      ),
      row("PLZ", input.postalCode),
      metaRows,
    ].join(""),
  );
}

export function applicationEmailHtml(input: {
  name: string;
  phone: string;
  position?: string | null;
  experienceLevel?: string | null;
  bestTime?: string | null;
}) {
  return wrap(
    "Neue Bewerbung (60-Sekunden-Funnel)",
    [
      row("Schwerpunkt", input.position),
      row("Name", input.name),
      row("Telefon", `<a href="tel:${input.phone}" style="color:#0C4DA2">${input.phone}</a>`),
      row("Erfahrung", input.experienceLevel),
      row("Erreichbar", input.bestTime),
    ].join(""),
  );
}

// Re-Export, damit Templates und Absenderdaten zentral bleiben.
export const company = site;
