-- HLS Haustechnik – Lead-Gen & Recruiting Schema
-- Zielprojekt: lejwgcgazwwyhywsbltl  (Supabase SQL-Editor -> ausführen)
-- Idempotent & gefahrlos erneut ausführbar. Dient zugleich der Versionierung im Repo.

-- 1. Kundenanfragen / Leads
CREATE TABLE IF NOT EXISTS public.leads (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  name            VARCHAR(255) NOT NULL,
  email           VARCHAR(255),
  phone           VARCHAR(50),
  postal_code     VARCHAR(10),
  service_type    VARCHAR(100),
  building_type   VARCHAR(100),
  building_age    VARCHAR(50),
  current_heating VARCHAR(100),
  goal            VARCHAR(100),
  budget          VARCHAR(50),
  message         TEXT,
  meta            JSONB NOT NULL DEFAULT '{}'::jsonb,
  source          VARCHAR(100) NOT NULL DEFAULT 'website',
  status          VARCHAR(50) NOT NULL DEFAULT 'neu'
);

-- 2. Bewerbungen (Recruiting)
CREATE TABLE IF NOT EXISTS public.job_applications (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  name             VARCHAR(255) NOT NULL,
  phone            VARCHAR(50) NOT NULL,
  position         VARCHAR(100),
  experience_level VARCHAR(50),
  best_time        VARCHAR(50),
  meta             JSONB NOT NULL DEFAULT '{}'::jsonb,
  status           VARCHAR(50) NOT NULL DEFAULT 'ungelesen'
);

-- 3. Cookieless Analytics
CREATE TABLE IF NOT EXISTS public.analytics_visits (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visited_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  page_path    VARCHAR(255),
  referrer     VARCHAR(255),
  visitor_hash VARCHAR(64)
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at    ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status        ON public.leads (status);
CREATE INDEX IF NOT EXISTS idx_job_apps_created_at ON public.job_applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_visits_visited_at   ON public.analytics_visits (visited_at DESC);

ALTER TABLE public.leads            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_visits ENABLE ROW LEVEL SECURITY;

-- Anon-Key (Browser) hat KEINEN Zugriff. Inserts laufen serverseitig über den
-- service_role-Key. Lesen/Status ändern nur für eingeloggte Admins (Supabase Auth).
-- WICHTIG: Es gibt KEINE öffentliche Registrierung -> "authenticated" = Admin.
DROP POLICY IF EXISTS admin_read_leads   ON public.leads;
DROP POLICY IF EXISTS admin_update_leads ON public.leads;
CREATE POLICY admin_read_leads   ON public.leads
  FOR SELECT TO authenticated USING (true);
CREATE POLICY admin_update_leads ON public.leads
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS admin_read_apps   ON public.job_applications;
DROP POLICY IF EXISTS admin_update_apps ON public.job_applications;
CREATE POLICY admin_read_apps   ON public.job_applications
  FOR SELECT TO authenticated USING (true);
CREATE POLICY admin_update_apps ON public.job_applications
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS admin_read_visits ON public.analytics_visits;
CREATE POLICY admin_read_visits ON public.analytics_visits
  FOR SELECT TO authenticated USING (true);
