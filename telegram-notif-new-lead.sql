-- ============================================
-- LPB Hub — Notification Telegram sur nouveau lead
-- A executer dans Supabase SQL Editor
-- ============================================
--
-- Envoie un message Telegram automatique des qu'un nouveau deal
-- est cree avec stage = 'nouveaux_leads' (quelle que soit la source :
-- Meta Lead Ads, site Lovable, import manuel, etc.)
--
-- Pre-requis :
--   1. Extension pg_net activee (Database > Extensions dans Supabase)
--   2. Avoir demarre une conversation avec le bot Telegram (envoyer /start)
--   3. Remplacer TELEGRAM_CHAT_ID ci-dessous par votre vrai chat_id
-- ============================================

-- 1. Activer pg_net (permet de faire du HTTP depuis Postgres)
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 2. Fonction trigger : construit le message et l'envoie a Telegram
CREATE OR REPLACE FUNCTION notify_telegram_new_lead()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  -- ⚠️ REMPLACEZ ces 2 valeurs par les votres
  v_bot_token TEXT := '8226256163:AAEPKOsluZb1hjQfRdhU7AXLVpPgdvlmHr4';
  v_chat_id   TEXT := 'TELEGRAM_CHAT_ID_A_REMPLIR';  -- ex: '123456789'

  v_contact   RECORD;
  v_source_emoji TEXT;
  v_source_label TEXT;
  v_message   TEXT;
  v_url       TEXT;
BEGIN
  -- Ne declencher que pour les nouveaux leads
  IF NEW.stage != 'nouveaux_leads' THEN
    RETURN NEW;
  END IF;

  -- Recuperer les infos du contact lie
  SELECT first_name, last_name, email, phone, source, city, postal_code, notes, score
  INTO v_contact
  FROM contacts
  WHERE id = NEW.contact_id;

  -- Choisir l'emoji + label selon la source
  CASE v_contact.source
    WHEN 'facebook'      THEN v_source_emoji := '🟠'; v_source_label := 'Facebook Ads';
    WHEN 'facebook_ads'  THEN v_source_emoji := '🟠'; v_source_label := 'Facebook Ads';
    WHEN 'site_lovable'  THEN v_source_emoji := '🟢'; v_source_label := 'Site internet';
    WHEN 'site'          THEN v_source_emoji := '🟢'; v_source_label := 'Site internet';
    WHEN 'google'        THEN v_source_emoji := '🔵'; v_source_label := 'Google Ads';
    ELSE                      v_source_emoji := '⚪'; v_source_label := COALESCE(v_contact.source, 'Inconnue');
  END CASE;

  -- Construire le message Telegram (format Markdown)
  v_message :=
    '🔔 *NOUVEAU LEAD LPB* ' || v_source_emoji || E'\n\n' ||
    '*Source :* ' || v_source_label || E'\n' ||
    '*Nom :* ' || COALESCE(v_contact.first_name, '') || ' ' || COALESCE(v_contact.last_name, '') || E'\n' ||
    CASE WHEN v_contact.phone IS NOT NULL THEN '*Tel :* ' || v_contact.phone || E'\n' ELSE '' END ||
    CASE WHEN v_contact.email IS NOT NULL THEN '*Email :* ' || v_contact.email || E'\n' ELSE '' END ||
    CASE WHEN v_contact.city  IS NOT NULL THEN '*Ville :* ' || v_contact.city || E'\n' ELSE '' END ||
    CASE WHEN v_contact.score > 0          THEN '*Score :* ' || v_contact.score || '/100' || E'\n' ELSE '' END ||
    E'\n*Deal :* ' || NEW.title || E'\n' ||
    CASE WHEN NEW.notes IS NOT NULL THEN E'\n📝 ' || SUBSTRING(NEW.notes FROM 1 FOR 400) ELSE '' END ||
    E'\n\n👉 Ouvrir le CRM : https://lpb.vercel.app/';

  -- 3. Envoyer via pg_net (asynchrone, ne bloque pas l'INSERT)
  v_url := 'https://api.telegram.org/bot' || v_bot_token || '/sendMessage';

  PERFORM net.http_post(
    url     := v_url,
    headers := jsonb_build_object('Content-Type', 'application/json'),
    body    := jsonb_build_object(
      'chat_id',    v_chat_id,
      'text',       v_message,
      'parse_mode', 'Markdown'
    )
  );

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- On ne veut JAMAIS qu'une erreur Telegram bloque la creation du lead
    RAISE WARNING 'Telegram notif failed: %', SQLERRM;
    RETURN NEW;
END;
$$;

-- 3. Creer le trigger AFTER INSERT sur la table deals
DROP TRIGGER IF EXISTS trg_telegram_new_lead ON deals;

CREATE TRIGGER trg_telegram_new_lead
  AFTER INSERT ON deals
  FOR EACH ROW
  EXECUTE FUNCTION notify_telegram_new_lead();

-- ============================================
-- TEST (a executer apres avoir rempli chat_id) :
-- ============================================
-- INSERT INTO contacts (first_name, last_name, phone, source, status, city)
-- VALUES ('Test', 'Notif', '+33600000000', 'facebook', 'lead', 'Soissons')
-- RETURNING id;
--
-- Puis avec l'id retourne :
-- INSERT INTO deals (contact_id, title, stage, probability)
-- VALUES ('<id_contact>', 'Test notif Telegram', 'nouveaux_leads', 10);
--
-- Vous devriez recevoir le message sur Telegram en moins de 2s.
-- ============================================
