-- ============================================
-- LPB Hub — Fonction Webhook pour leads Lovable
-- Executer dans Supabase SQL Editor
-- ============================================

-- Fonction RPC : cree contact + deal + activite en un seul appel
-- Compatible avec les leads du Simulateur Lovable
CREATE OR REPLACE FUNCTION create_lead_from_webhook(
  -- Champs contact
  p_first_name TEXT,
  p_last_name TEXT DEFAULT '',
  p_email TEXT DEFAULT NULL,
  p_phone TEXT DEFAULT NULL,
  p_message TEXT DEFAULT NULL,
  p_source TEXT DEFAULT 'site_lovable',
  p_city TEXT DEFAULT NULL,
  p_postal_code TEXT DEFAULT NULL,
  p_company TEXT DEFAULT NULL,
  -- Champs specifiques Lovable
  p_score INTEGER DEFAULT 0,
  p_projet TEXT DEFAULT NULL,
  p_budget TEXT DEFAULT NULL,
  p_terrain TEXT DEFAULT NULL,
  p_surface TEXT DEFAULT NULL,
  p_delais TEXT DEFAULT NULL,
  -- Champs deal
  p_deal_title TEXT DEFAULT NULL,
  p_deal_value NUMERIC DEFAULT 0,
  p_tags TEXT DEFAULT '[]'
)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_contact_id UUID;
  v_deal_id UUID;
  v_activity_id UUID;
  v_deal_title TEXT;
  v_notes TEXT;
BEGIN
  -- Construire les notes avec toutes les infos du lead
  v_notes := '';
  IF p_message IS NOT NULL THEN v_notes := v_notes || p_message || E'\n'; END IF;
  IF p_projet IS NOT NULL THEN v_notes := v_notes || 'Projet: ' || p_projet || E'\n'; END IF;
  IF p_budget IS NOT NULL THEN v_notes := v_notes || 'Budget: ' || p_budget || E'\n'; END IF;
  IF p_terrain IS NOT NULL THEN v_notes := v_notes || 'Terrain: ' || p_terrain || E'\n'; END IF;
  IF p_surface IS NOT NULL THEN v_notes := v_notes || 'Surface: ' || p_surface || E'\n'; END IF;
  IF p_delais IS NOT NULL THEN v_notes := v_notes || 'Delais: ' || p_delais || E'\n'; END IF;

  -- 1. Creer le contact
  INSERT INTO contacts (first_name, last_name, email, phone, source, status, score, notes, city, postal_code, company, tags)
  VALUES (p_first_name, p_last_name, p_email, p_phone, p_source, 'lead', p_score, NULLIF(TRIM(v_notes), ''), p_city, p_postal_code, p_company, p_tags)
  RETURNING id INTO v_contact_id;

  -- 2. Creer le deal dans le pipeline (colonne "Nouveaux leads")
  v_deal_title := COALESCE(
    p_deal_title,
    p_first_name || CASE WHEN p_last_name != '' THEN ' ' || p_last_name ELSE '' END
    || CASE WHEN p_score > 0 THEN ' — Score ' || p_score || '/100' ELSE '' END
  );

  INSERT INTO deals (contact_id, title, value, stage, probability, notes)
  VALUES (v_contact_id, v_deal_title, p_deal_value, 'nouveaux_leads', 10, NULLIF(TRIM(v_notes), ''))
  RETURNING id INTO v_deal_id;

  -- 3. Creer une activite de suivi
  INSERT INTO activities (contact_id, deal_id, type, description, scheduled_at, completed)
  VALUES (
    v_contact_id,
    v_deal_id,
    'note',
    'Lead recu via ' || p_source
    || CASE WHEN p_score > 0 THEN ' — Score: ' || p_score || '/100' ELSE '' END
    || CASE WHEN p_projet IS NOT NULL THEN ' — Projet: ' || p_projet ELSE '' END,
    NOW(),
    FALSE
  )
  RETURNING id INTO v_activity_id;

  -- Retourner les IDs crees
  RETURN json_build_object(
    'success', true,
    'contact_id', v_contact_id,
    'deal_id', v_deal_id,
    'activity_id', v_activity_id,
    'message', 'Lead cree avec succes dans LPB Hub'
  );
END;
$$;
