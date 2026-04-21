"""
Déduplication de leads_consolide.json

Stratégie de matching : on groupe les entrées qui partagent au moins un
identifiant fort (téléphone normalisé, email, ou nom+ville normalisés).
Le groupement est transitif via union-find : si A~B (phone) et B~C (nom+ville),
alors A, B, C forment un seul groupe.

Pour chaque groupe, on réduit à UNE seule entrée via pick_winner() (ci-dessous).
Les autres entrées du groupe sont ajoutées à "removed" pour audit.

Usage :
    python dedupe_leads.py           # dry-run : affiche ce qui serait fait
    python dedupe_leads.py --apply   # écrit leads_consolide.json + backup
"""

import json
import re
import sys
import shutil
import unicodedata
from collections import defaultdict
from datetime import datetime
from pathlib import Path

SRC = Path(__file__).parent / "leads_consolide.json"


# ---------- normalisation ----------

def norm_phone(p):
    if not p:
        return ""
    d = re.sub(r"\D", "", str(p))
    if d.startswith("33") and len(d) == 11:
        d = "0" + d[2:]
    return d if len(d) >= 9 else ""


def norm_text(s):
    if not s:
        return ""
    s = unicodedata.normalize("NFKD", str(s)).encode("ascii", "ignore").decode("ascii")
    return re.sub(r"[^a-z0-9]+", "", s.lower())


def norm_email(e):
    return str(e or "").strip().lower()


# ---------- union-find ----------

class UF:
    def __init__(self, n):
        self.p = list(range(n))

    def find(self, x):
        while self.p[x] != x:
            self.p[x] = self.p[self.p[x]]
            x = self.p[x]
        return x

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra != rb:
            self.p[ra] = rb


def build_groups(records):
    """Regroupe les doublons via union-find sur phone/email/nom+ville."""
    uf = UF(len(records))
    by_phone = defaultdict(list)
    by_email = defaultdict(list)
    by_name_city = defaultdict(list)

    for i, r in enumerate(records):
        ph = norm_phone(r.get("telephone"))
        em = norm_email(r.get("email"))
        nm = norm_text(r.get("entreprise"))
        ci = norm_text(r.get("ville"))
        if ph:
            by_phone[ph].append(i)
        if em:
            by_email[em].append(i)
        if nm and ci:
            by_name_city[(nm, ci)].append(i)

    for bucket in (by_phone, by_email, by_name_city):
        for indices in bucket.values():
            for j in indices[1:]:
                uf.union(indices[0], j)

    groups = defaultdict(list)
    for i in range(len(records)):
        groups[uf.find(i)].append(i)
    return [idxs for idxs in groups.values() if len(idxs) > 1]


# ---------- DÉCISION UTILISATEUR ----------

def pick_winner(group, records):
    """
    TODO (à vous) : parmi `group` (liste d'index de lignes qui sont des
    doublons de la même entreprise), retournez :
        - l'index (int) de la ligne gagnante à conserver
        - un dict représentant la ligne finale (possiblement fusionnée)

    Champs disponibles dans chaque record :
      priorite (A/B/C), score (str num), categorie, entreprise, ville, cp,
      telephone, email, site, contact, adresse, siret, source, statut,
      canal, notes, date_ajout

    Exemples de stratégies possibles :
      - garder la ligne avec la priorité la plus haute (A > B > C)
      - à priorité égale, garder le score le plus élevé
      - ou : fusionner les champs non-vides de toutes les lignes du groupe

    Retournez (winner_index, winner_record).
    """
    prio_rank = {"A": 0, "B": 1, "C": 2, "": 3, None: 3}
    base_idx = min(
        group,
        key=lambda i: (
            prio_rank.get(records[i].get("priorite"), 3),
            -int(records[i].get("score") or 0),
        ),
    )
    merged = dict(records[base_idx])
    for i in group:
        for k, v in records[i].items():
            if not merged.get(k) and v:
                merged[k] = v
    return base_idx, merged


# ---------- pipeline ----------

def main(apply_changes=False):
    with open(SRC, "r", encoding="utf-8") as f:
        records = json.load(f)

    groups = build_groups(records)
    print(f"Entrées totales   : {len(records)}")
    print(f"Groupes doublons  : {len(groups)}")
    print(f"Lignes redondantes: {sum(len(g) - 1 for g in groups)}")
    print()

    # Aperçu : les 5 plus gros groupes
    groups_sorted = sorted(groups, key=lambda g: -len(g))
    print("--- Top 5 gros groupes ---")
    for g in groups_sorted[:5]:
        first = records[g[0]]
        print(f"[{len(g)}x] {first.get('entreprise')!r} / {first.get('ville')!r}")
        for idx in g:
            r = records[idx]
            print(f"    #{idx:4d}  tel={r.get('telephone'):<16}  "
                  f"email={r.get('email'):<35}  source={r.get('source')!r}")
    print()

    if not apply_changes:
        print("Dry-run. Relance avec --apply pour écrire le fichier.")
        return

    # Fusion
    to_remove = set()
    merged = {}
    for g in groups:
        winner_idx, winner_rec = pick_winner(g, records)
        merged[winner_idx] = winner_rec
        for idx in g:
            if idx != winner_idx:
                to_remove.add(idx)

    kept = []
    for i, r in enumerate(records):
        if i in to_remove:
            continue
        kept.append(merged.get(i, r))

    # Backup
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup = SRC.with_suffix(f".backup_{ts}.json")
    shutil.copy2(SRC, backup)
    print(f"Backup : {backup.name}")

    # Écriture
    with open(SRC, "w", encoding="utf-8") as f:
        json.dump(kept, f, ensure_ascii=False, indent=2)
    print(f"Ecrit  : {SRC.name}  ({len(records)} -> {len(kept)} lignes, "
          f"-{len(records) - len(kept)})")


if __name__ == "__main__":
    main(apply_changes="--apply" in sys.argv)
