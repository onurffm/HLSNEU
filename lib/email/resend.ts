import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

/**
 * Sendet eine Benachrichtigung ans Büro.
 * Ohne RESEND_API_KEY wird der Versand sauber übersprungen (Formular bleibt
 * funktionsfähig, der Lead landet trotzdem in Supabase).
 */
export async function sendNotification(opts: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  if (!resend) {
    console.warn("[HLS] RESEND_API_KEY fehlt – E-Mail-Versand übersprungen.");
    return { skipped: true as const };
  }

  // RESEND_FROM muss eine in Resend verifizierte Absenderdomain sein.
  // Vor der Domain-Verifizierung funktioniert nur "onboarding@resend.dev".
  const from = process.env.RESEND_FROM ?? "HLS Website <onboarding@resend.dev>";
  const to = (process.env.RESEND_TO ?? "info@hls-haustechnik-leipzig.de")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      subject: opts.subject,
      html: opts.html,
      replyTo: opts.replyTo,
    });
    if (error) {
      console.error("[HLS] Resend-Fehler:", error);
      return { error };
    }
    return { ok: true as const };
  } catch (e) {
    console.error("[HLS] Resend-Ausnahme:", e);
    return { error: e };
  }
}
