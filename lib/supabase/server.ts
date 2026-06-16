import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * SSR-Client mit Nutzer-Session (fuer den spaeteren Admin-Bereich /admin).
 * Liest/schreibt im Kontext des eingeloggten Admins -> RLS greift.
 * Fuer die oeffentliche Seite wird dieser Client noch nicht benoetigt.
 */
export async function supabaseServer() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(
          cookiesToSet: { name: string; value: string; options?: CookieOptions }[],
        ) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // In Server Components ohne Response-Kontext ignorierbar.
          }
        },
      },
    },
  );
}
