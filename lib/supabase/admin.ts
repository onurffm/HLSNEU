import { createClient } from "@supabase/supabase-js";

/**
 * Service-Role-Client – NUR serverseitig (Server Actions, Route Handler).
 * Umgeht RLS und darf NIEMALS in einer Client-Komponente importiert werden.
 * Der SUPABASE_SERVICE_ROLE_KEY ist geheim und gehoert ausschliesslich in die
 * Server-Umgebungsvariablen (Vercel / .env.local), nie ins Frontend.
 */
export function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Supabase-Konfiguration fehlt: NEXT_PUBLIC_SUPABASE_URL oder SUPABASE_SERVICE_ROLE_KEY ist nicht gesetzt.",
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
