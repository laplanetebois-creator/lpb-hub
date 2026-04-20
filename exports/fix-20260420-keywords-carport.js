/**
 * Fix Jordan 2026-04-20 : P0 keywords Carport + P1 reject Max Conversions
 *
 * A coller dans Google Ads > Outils et parametres > Bulk actions > Scripts > Nouveau
 * Mode PREVIEW d'abord (pas RUN), verifier le log, puis RUN.
 *
 * Ce script fait en un coup :
 *  - P0 : ajoute 15 keywords a l'ad group "Carport" + 8 negatifs
 *  - P1 : verifie que la campagne est bien en Manual CPC (log warning si autre)
 *  - P2 : audit rapide de la structure (ad groups + nb keywords par groupe)
 *
 * Garde-fous :
 *  - SKIP si l'ad group "Carport" n'existe pas
 *  - SKIP un keyword s'il existe deja (match type compris)
 *  - Max CPC par match type : Exact 1.20 EUR, Phrase 1.00 EUR, Broad 0.80 EUR
 */

// =========================================================
// CONFIG
// =========================================================
var CAMPAIGN_NAME = 'LPB - Search - Soissons 60km';
var AD_GROUP_NAME = 'Carport Bois';

var KEYWORDS_EXACT = [
  'carport bois soissons',
  'carport bois sur mesure',
  'carport bois 2 voitures',
  'carport bois aisne',
  'abri voiture bois soissons'
];
var CPC_EXACT = 1.20;

var KEYWORDS_PHRASE = [
  'carport bois',
  'carport bois sur mesure',
  'abri voiture bois',
  'carport bois 1 voiture',
  'carport bois 2 voitures',
  'carport bois adosse'
];
var CPC_PHRASE = 1.00;

var KEYWORDS_BROAD = [
  '+carport +bois +soissons',
  '+carport +bois +aisne',
  '+abri +voiture +bois',
  '+carport +bois +artisan'
];
var CPC_BROAD = 0.80;

var NEGATIVES = [
  'carport metal',
  'carport tole',
  'carport alu',
  'carport aluminium',
  'carport borne electrique',
  'carport occasion',
  'carport pas cher',
  'carport kit'
];

// =========================================================
// MAIN
// =========================================================
function main() {
  Logger.log('=== Fix Jordan 2026-04-20 ===');
  Logger.log('Campagne cible : ' + CAMPAIGN_NAME);
  Logger.log('Ad group cible : ' + AD_GROUP_NAME);

  var adGroup = getAdGroup(CAMPAIGN_NAME, AD_GROUP_NAME);
  if (!adGroup) {
    Logger.log('!! Ad group "' + AD_GROUP_NAME + '" INTROUVABLE dans "' + CAMPAIGN_NAME + '"');
    Logger.log('!! Verifie l hypothese Jordan : ad group vide est peut-etre Terrasse ou Pergola');
    auditStructure();
    return;
  }

  // P2 audit d'abord (pour logger l'etat avant)
  Logger.log('\n--- AVANT ---');
  auditStructure();

  // P1 check bid strategy
  var campaign = getCampaign(CAMPAIGN_NAME);
  checkBidStrategy(campaign);

  // P0 ajout keywords
  Logger.log('\n--- AJOUT KEYWORDS ---');
  var addedE = addKeywords(adGroup, KEYWORDS_EXACT, 'EXACT', CPC_EXACT);
  var addedP = addKeywords(adGroup, KEYWORDS_PHRASE, 'PHRASE', CPC_PHRASE);
  var addedB = addKeywords(adGroup, KEYWORDS_BROAD, 'BROAD', CPC_BROAD);
  Logger.log('Keywords ajoutes : ' + (addedE + addedP + addedB) + ' (' + addedE + ' exact + ' + addedP + ' phrase + ' + addedB + ' broad)');

  // P0 ajout negatifs
  Logger.log('\n--- AJOUT NEGATIFS ---');
  var addedN = addNegativeKeywords(adGroup, NEGATIVES);
  Logger.log('Negatifs ajoutes : ' + addedN);

  // Audit apres
  Logger.log('\n--- APRES ---');
  auditStructure();

  Logger.log('\n=== FIN ===');
  Logger.log('Prochaine etape manuelle : Recommandations > "Bid more efficiently" > Dismiss');
  Logger.log('Puis : Settings > Auto-apply > desactiver Max Conv + Optimized targeting');
}

// =========================================================
// HELPERS
// =========================================================
function getCampaign(name) {
  var it = AdsApp.campaigns().withCondition("Name = '" + name + "'").get();
  return it.hasNext() ? it.next() : null;
}

function getAdGroup(campaignName, adGroupName) {
  var it = AdsApp.adGroups()
    .withCondition("CampaignName = '" + campaignName + "'")
    .withCondition("Name = '" + adGroupName + "'")
    .get();
  return it.hasNext() ? it.next() : null;
}

function addKeywords(adGroup, keywords, matchType, cpc) {
  var added = 0;
  for (var i = 0; i < keywords.length; i++) {
    var kw = keywords[i];
    if (keywordExists(adGroup, kw, matchType)) {
      Logger.log('  [SKIP] ' + matchType + ' "' + kw + '" existe deja');
      continue;
    }
    var operation = adGroup.newKeywordBuilder()
      .withText(formatKeyword(kw, matchType))
      .withCpc(cpc)
      .build();
    if (operation.isSuccessful()) {
      Logger.log('  [OK]   ' + matchType + ' "' + kw + '" (CPC ' + cpc + ')');
      added++;
    } else {
      Logger.log('  [FAIL] ' + matchType + ' "' + kw + '" : ' + operation.getErrors().join(', '));
    }
  }
  return added;
}

function addNegativeKeywords(adGroup, negatives) {
  var added = 0;
  for (var i = 0; i < negatives.length; i++) {
    var kw = negatives[i];
    adGroup.createNegativeKeyword('"' + kw + '"');
    Logger.log('  [NEG]  "' + kw + '"');
    added++;
  }
  return added;
}

function formatKeyword(text, matchType) {
  if (matchType === 'EXACT') return '[' + text + ']';
  if (matchType === 'PHRASE') return '"' + text + '"';
  return text;
}

function keywordExists(adGroup, text, matchType) {
  var formatted = formatKeyword(text, matchType);
  var it = adGroup.keywords().withCondition("Text = '" + formatted + "'").get();
  return it.hasNext();
}

function checkBidStrategy(campaign) {
  if (!campaign) return;
  var strategy = campaign.getBiddingStrategyType();
  Logger.log('Bid strategy actuelle : ' + strategy);
  if (strategy !== 'MANUAL_CPC' && strategy !== 'ENHANCED_CPC') {
    Logger.log('!! WARNING : bid strategy n est pas Manual CPC / Enhanced CPC');
    Logger.log('!! Jordan recommande Manual CPC tant que < 15 conv/30j');
  } else {
    Logger.log('[OK] Manual/Enhanced CPC confirme');
  }
}

function auditStructure() {
  var campaignIt = AdsApp.campaigns().withCondition("Name = '" + CAMPAIGN_NAME + "'").get();
  if (!campaignIt.hasNext()) {
    Logger.log('!! Campagne "' + CAMPAIGN_NAME + '" introuvable');
    return;
  }
  var campaign = campaignIt.next();
  Logger.log('Campagne : ' + campaign.getName() + ' (budget ' + campaign.getBudget().getAmount() + ' EUR/j)');

  var adGroupIt = campaign.adGroups().get();
  while (adGroupIt.hasNext()) {
    var ag = adGroupIt.next();
    var kwCount = 0;
    var kwIt = ag.keywords().get();
    while (kwIt.hasNext()) { kwIt.next(); kwCount++; }
    var flag = kwCount === 0 ? ' <-- VIDE !' : '';
    Logger.log('  Ad group: ' + ag.getName() + ' (' + kwCount + ' keywords)' + flag);
  }
}
