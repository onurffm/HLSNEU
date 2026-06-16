"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendNotification } from "@/lib/email/resend";
import { applicationEmailHtml } from "@/lib/email/templates";

export type ApplicationInput = {
  name: string;
  phone: string;
  position?: string;
  experienceLevel?: string;
  bestTime?: string;
  meta?: Record<string, unknown>;
};

export type ActionResult = { ok: true; id: string } | { ok: false; error: string };

export async function submitApplication(
  input: ApplicationInput,
): Promise<ActionResult> {
  const name = input.name?.trim();
  const phone = input.phone?.trim();

  if (!name) return { ok: false, error: "Bitte gib deinen Namen an." };
  if (!phone) return { ok: false, error: "Bitte gib deine Handynummer an." };

  try {
    const supabase = supabaseAdmin();

    const { data, error } = await supabase
      .from("job_applications")
      .insert({
        name,
        phone,
        position: input.position ?? null,
        experience_level: input.experienceLevel ?? null,
        best_time: input.bestTime ?? null,
        meta: input.meta ?? {},
      })
      .select("id")
      .single();

    if (error) throw error;

    await sendNotification({
      subject: `Neue Bewerbung: ${input.position ?? "Anlagenmechaniker"}`,
      html: applicationEmailHtml({
        name,
        phone,
        position: input.position,
        experienceLevel: input.experienceLevel,
        bestTime: input.bestTime,
      }),
    });

    return { ok: true, id: data.id };
  } catch (e) {
    console.error("[HLS] submitApplication-Fehler:", e);
    return {
      ok: false,
      error: "Senden fehlgeschlagen. Bitte versuch es gleich nochmal.",
    };
  }
}
