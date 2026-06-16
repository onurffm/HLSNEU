"use server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendNotification } from "@/lib/email/resend";
import { leadEmailHtml } from "@/lib/email/templates";
import { serviceLabel } from "@/lib/options";

export type LeadInput = {
  name: string;
  email?: string;
  phone?: string;
  postalCode?: string;
  serviceType?: string;
  message?: string;
  // alle zusätzlichen Funnel-Antworten (Gebäudetyp, Baujahr, Heizung, Ziel, ...)
  meta?: Record<string, unknown>;
  source?: string;
};

export type ActionResult = { ok: true; id: string } | { ok: false; error: string };

export async function submitLead(input: LeadInput): Promise<ActionResult> {
  const name = input.name?.trim();
  const phone = input.phone?.trim();
  const email = input.email?.trim();

  if (!name) return { ok: false, error: "Bitte geben Sie Ihren Namen an." };
  if (!phone && !email) {
    return { ok: false, error: "Bitte hinterlassen Sie Telefon oder E-Mail." };
  }

  try {
    const supabase = supabaseAdmin();

    const { data, error } = await supabase
      .from("leads")
      .insert({
        name,
        email: email ?? null,
        phone: phone ?? null,
        postal_code: input.postalCode?.trim() ?? null,
        service_type: input.serviceType ?? null,
        building_type: (input.meta?.building_type as string) ?? null,
        building_age: (input.meta?.building_age as string) ?? null,
        current_heating: (input.meta?.current_heating as string) ?? null,
        goal: (input.meta?.goal as string) ?? null,
        budget: (input.meta?.budget as string) ?? null,
        message: input.message?.trim() ?? null,
        meta: input.meta ?? {},
        source: input.source ?? "website",
      })
      .select("id")
      .single();

    if (error) throw error;

    await sendNotification({
      subject: `Neue Anfrage: ${serviceLabel(input.serviceType)}`,
      html: leadEmailHtml({
        name,
        email,
        phone,
        postalCode: input.postalCode,
        serviceLabel: serviceLabel(input.serviceType),
        meta: input.meta,
      }),
      replyTo: email || undefined,
    });

    return { ok: true, id: data.id };
  } catch (e) {
    console.error("[HLS] submitLead-Fehler:", e);
    return {
      ok: false,
      error: "Speichern fehlgeschlagen. Bitte rufen Sie uns direkt an.",
    };
  }
}
