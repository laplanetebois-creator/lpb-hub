-- ============================================
-- LPB Hub — Setup Database
-- La Planète Bois — Dashboard unifié
-- Exécuter ce script dans Supabase SQL Editor
-- ============================================

-- =====================
-- CRM : Contacts
-- =====================
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  job_title TEXT,
  source TEXT DEFAULT 'manual',
  status TEXT DEFAULT 'lead',
  score INTEGER DEFAULT 0,
  tags TEXT DEFAULT '[]',
  notes TEXT,
  address TEXT,
  city TEXT,
  postal_code TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- CRM : Deals / Pipeline
-- =====================
CREATE TABLE IF NOT EXISTS deals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  value NUMERIC DEFAULT 0,
  stage TEXT DEFAULT 'nouveaux_leads',
  probability INTEGER DEFAULT 0,
  expected_close DATE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- CRM : Activités
-- =====================
CREATE TABLE IF NOT EXISTS activities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_id UUID REFERENCES contacts(id) ON DELETE CASCADE,
  deal_id UUID REFERENCES deals(id) ON DELETE SET NULL,
  type TEXT NOT NULL,
  description TEXT,
  scheduled_at TIMESTAMPTZ,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- PUBLICITÉS : Campagnes
-- =====================
CREATE TABLE IF NOT EXISTS ad_campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  platform TEXT NOT NULL,
  objective TEXT,
  status TEXT DEFAULT 'brouillon',
  budget_daily NUMERIC DEFAULT 0,
  budget_total NUMERIC DEFAULT 0,
  spent NUMERIC DEFAULT 0,
  start_date DATE,
  end_date DATE,
  target_audience TEXT,
  target_location TEXT,
  ad_copy TEXT,
  landing_url TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- PUBLICITÉS : Métriques
-- =====================
CREATE TABLE IF NOT EXISTS ad_metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id UUID REFERENCES ad_campaigns(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  cost NUMERIC DEFAULT 0,
  revenue NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- SEO : Mots-clés
-- =====================
CREATE TABLE IF NOT EXISTS seo_keywords (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  keyword TEXT NOT NULL,
  position INTEGER,
  previous_position INTEGER,
  search_volume INTEGER DEFAULT 0,
  difficulty INTEGER DEFAULT 0,
  target_url TEXT,
  status TEXT DEFAULT 'suivi',
  category TEXT,
  notes TEXT,
  last_checked TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- SEO : Tâches
-- =====================
CREATE TABLE IF NOT EXISTS seo_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  priority TEXT DEFAULT 'moyenne',
  status TEXT DEFAULT 'a_faire',
  description TEXT,
  target_url TEXT,
  due_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- SEO : Pages auditées
-- =====================
CREATE TABLE IF NOT EXISTS seo_pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  title TEXT,
  meta_description TEXT,
  h1 TEXT,
  word_count INTEGER DEFAULT 0,
  score INTEGER DEFAULT 0,
  issues TEXT DEFAULT '[]',
  last_audit TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- DEVIS
-- =====================
CREATE TABLE IF NOT EXISTS devis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
  deal_id UUID REFERENCES deals(id) ON DELETE SET NULL,
  numero TEXT NOT NULL,
  objet TEXT,
  lignes TEXT DEFAULT '[]',
  sous_total NUMERIC DEFAULT 0,
  tva NUMERIC DEFAULT 0,
  total NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'brouillon',
  valid_until DATE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- COMMANDES
-- =====================
CREATE TABLE IF NOT EXISTS commandes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
  devis_id UUID REFERENCES devis(id) ON DELETE SET NULL,
  numero TEXT NOT NULL,
  objet TEXT,
  total NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'en_attente',
  date_livraison DATE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- PLANNING
-- =====================
CREATE TABLE IF NOT EXISTS planning (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT DEFAULT 'tache',
  contact_id UUID REFERENCES contacts(id) ON DELETE SET NULL,
  commande_id UUID REFERENCES commandes(id) ON DELETE SET NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  all_day BOOLEAN DEFAULT TRUE,
  color TEXT DEFAULT '#2d6a4f',
  status TEXT DEFAULT 'planifie',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- GOOGLE ADS (données réelles via Windsor.ai)
-- =====================
CREATE TABLE IF NOT EXISTS google_ads_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  campaign TEXT,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  spend NUMERIC DEFAULT 0,
  conversions INTEGER DEFAULT 0,
  ctr NUMERIC DEFAULT 0,
  cpc NUMERIC DEFAULT 0,
  synced_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(date, campaign)
);

-- =====================
-- GOOGLE ANALYTICS 4 (données réelles via Windsor.ai)
-- =====================
CREATE TABLE IF NOT EXISTS ga4_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  sessions INTEGER DEFAULT 0,
  users INTEGER DEFAULT 0,
  source TEXT DEFAULT 'direct',
  bounce_rate NUMERIC DEFAULT 0,
  avg_session_duration NUMERIC DEFAULT 0,
  events INTEGER DEFAULT 0,
  synced_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(date, source)
);

-- =====================
-- SEARCH CONSOLE (données réelles via Windsor.ai)
-- =====================
CREATE TABLE IF NOT EXISTS search_console_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  query TEXT NOT NULL,
  clicks INTEGER DEFAULT 0,
  impressions INTEGER DEFAULT 0,
  ctr NUMERIC DEFAULT 0,
  position NUMERIC DEFAULT 0,
  page TEXT,
  device TEXT,
  synced_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(date, query)
);

-- =====================
-- GOOGLE MY BUSINESS (données réelles via Windsor.ai)
-- =====================
CREATE TABLE IF NOT EXISTS gmb_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  impressions INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  call_clicks INTEGER DEFAULT 0,
  direction_requests INTEGER DEFAULT 0,
  website_clicks INTEGER DEFAULT 0,
  reviews INTEGER DEFAULT 0,
  avg_rating NUMERIC DEFAULT 0,
  synced_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(date)
);

-- =====================
-- ROW LEVEL SECURITY
-- =====================
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "contacts_all" ON contacts FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE deals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "deals_all" ON deals FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "activities_all" ON activities FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE ad_campaigns ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ad_campaigns_all" ON ad_campaigns FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE ad_metrics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ad_metrics_all" ON ad_metrics FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE seo_keywords ENABLE ROW LEVEL SECURITY;
CREATE POLICY "seo_keywords_all" ON seo_keywords FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE seo_tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "seo_tasks_all" ON seo_tasks FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE seo_pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "seo_pages_all" ON seo_pages FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE devis ENABLE ROW LEVEL SECURITY;
CREATE POLICY "devis_all" ON devis FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE commandes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "commandes_all" ON commandes FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE planning ENABLE ROW LEVEL SECURITY;
CREATE POLICY "planning_all" ON planning FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE google_ads_data ENABLE ROW LEVEL SECURITY;
CREATE POLICY "google_ads_data_all" ON google_ads_data FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE ga4_data ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ga4_data_all" ON ga4_data FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE search_console_data ENABLE ROW LEVEL SECURITY;
CREATE POLICY "search_console_data_all" ON search_console_data FOR ALL USING (true) WITH CHECK (true);

ALTER TABLE gmb_data ENABLE ROW LEVEL SECURITY;
CREATE POLICY "gmb_data_all" ON gmb_data FOR ALL USING (true) WITH CHECK (true);

-- =====================
-- INDEX pour performance
-- =====================
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_source ON contacts(source);
CREATE INDEX IF NOT EXISTS idx_deals_stage ON deals(stage);
CREATE INDEX IF NOT EXISTS idx_deals_contact ON deals(contact_id);
CREATE INDEX IF NOT EXISTS idx_activities_contact ON activities(contact_id);
CREATE INDEX IF NOT EXISTS idx_activities_scheduled ON activities(scheduled_at);
CREATE INDEX IF NOT EXISTS idx_ad_campaigns_status ON ad_campaigns(status);
CREATE INDEX IF NOT EXISTS idx_ad_campaigns_platform ON ad_campaigns(platform);
CREATE INDEX IF NOT EXISTS idx_ad_metrics_campaign ON ad_metrics(campaign_id);
CREATE INDEX IF NOT EXISTS idx_ad_metrics_date ON ad_metrics(date);
CREATE INDEX IF NOT EXISTS idx_seo_keywords_status ON seo_keywords(status);
CREATE INDEX IF NOT EXISTS idx_seo_tasks_status ON seo_tasks(status);
CREATE INDEX IF NOT EXISTS idx_devis_contact ON devis(contact_id);
CREATE INDEX IF NOT EXISTS idx_devis_status ON devis(status);
CREATE INDEX IF NOT EXISTS idx_commandes_contact ON commandes(contact_id);
CREATE INDEX IF NOT EXISTS idx_commandes_status ON commandes(status);
CREATE INDEX IF NOT EXISTS idx_planning_start ON planning(start_date);
CREATE INDEX IF NOT EXISTS idx_planning_contact ON planning(contact_id);
CREATE INDEX IF NOT EXISTS idx_google_ads_date ON google_ads_data(date);
CREATE INDEX IF NOT EXISTS idx_ga4_date ON ga4_data(date);
CREATE INDEX IF NOT EXISTS idx_search_console_date ON search_console_data(date);
CREATE INDEX IF NOT EXISTS idx_search_console_query ON search_console_data(query);
CREATE INDEX IF NOT EXISTS idx_gmb_date ON gmb_data(date);

-- =====================
-- MIGRATION : Ajout colonnes Windsor.ai v2
-- (safe to re-run, ADD COLUMN IF NOT EXISTS)
-- =====================
ALTER TABLE ga4_data ADD COLUMN IF NOT EXISTS bounce_rate NUMERIC DEFAULT 0;
ALTER TABLE ga4_data ADD COLUMN IF NOT EXISTS avg_session_duration NUMERIC DEFAULT 0;
ALTER TABLE ga4_data ADD COLUMN IF NOT EXISTS events INTEGER DEFAULT 0;
ALTER TABLE search_console_data ADD COLUMN IF NOT EXISTS page TEXT;
ALTER TABLE search_console_data ADD COLUMN IF NOT EXISTS device TEXT;
ALTER TABLE gmb_data ADD COLUMN IF NOT EXISTS call_clicks INTEGER DEFAULT 0;
ALTER TABLE gmb_data ADD COLUMN IF NOT EXISTS reviews INTEGER DEFAULT 0;
ALTER TABLE gmb_data ADD COLUMN IF NOT EXISTS avg_rating NUMERIC DEFAULT 0;
