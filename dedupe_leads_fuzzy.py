"""
Passe 2 — dedup fuzzy sur leads_consolide.json deja passe par dedupe_leads.py.

Regle de matching (en plus de la passe 1) :
  meme ville normalisee  ET
  le nom normalise de l'un est CONTENU dans l'autre (len du plus court >= 8)

Rationale :
  "jardideco" ⊂ "jardidecomondialpiscine"   -> meme boite, suffixe = specification
  "alphaarchitecture" ⊂ "eurlalphaarchitecture" -> meme boite, prefixe = forme juridique
  "sitecitearchitecture" ⊂ "agencesitecitearchitecture" -> meme boite

On reutilise pick_winner() de dedupe_leads.py (option B : fusion).

Usage :
    python dedupe_leads_fuzzy.py           # dry-run
    python dedupe_leads_fuzzy.py --apply
"""

import json
import re
import sys
import shutil
import unicodedata
from collections import defaultdict
from datetime import datetime
from pathlib import Path

from dedupe_leads import UF, pick_winner, norm_phone, norm_text, SRC


def fuzzy_groups(records, min_len=8):
    """On strippe la ville du nom normalise pour eviter les faux positifs
    type 'Immo Laon' vs 'Quentimmo Laon' ou la ville sert de matching fortuit."""
    uf = UF(len(records))
    by_city = defaultdict(list)
    for i, r in enumerate(records):
        ci = norm_text(r.get("ville"))
        nm = norm_text(r.get("entreprise"))
        if ci and nm:
            nm = nm.replace(ci, "")
        if ci and nm and len(nm) >= min_len:
            by_city[ci].append((i, nm))

    for ci, items in by_city.items():
        items.sort(key=lambda x: len(x[1]))
        for a_idx in range(len(items)):
            i_a, nm_a = items[a_idx]
            for b_idx in range(a_idx + 1, len(items)):
                i_b, nm_b = items[b_idx]
                if nm_a in nm_b:
                    uf.union(i_a, i_b)

    groups = defaultdict(list)
    for i in range(len(records)):
        groups[uf.find(i)].append(i)
    return [g for g in groups.values() if len(g) > 1]


def main(apply_changes=False):
    with open(SRC, "r", encoding="utf-8") as f:
        records = json.load(f)

    groups = fuzzy_groups(records)
    print(f"Entrees totales    : {len(records)}")
    print(f"Groupes fuzzy      : {len(groups)}")
    print(f"Lignes redondantes : {sum(len(g) - 1 for g in groups)}")
    print()

    print("--- Tous les groupes fuzzy detectes ---")
    for g in sorted(groups, key=lambda g: -len(g)):
        first = records[g[0]]
        print(f"[{len(g)}x]  ville={first.get('ville')!r}")
        for idx in g:
            r = records[idx]
            print(f"    #{idx:4d}  {r.get('entreprise')!s:<55}  "
                  f"tel={r.get('telephone')!s:<16}  email={r.get('email')}")
        print()

    if not apply_changes:
        print("Dry-run. Relance avec --apply pour ecrire le fichier.")
        return

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

    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup = SRC.with_suffix(f".backup_fuzzy_{ts}.json")
    shutil.copy2(SRC, backup)
    print(f"Backup : {backup.name}")

    with open(SRC, "w", encoding="utf-8") as f:
        json.dump(kept, f, ensure_ascii=False, indent=2)
    print(f"Ecrit  : {SRC.name}  ({len(records)} -> {len(kept)} lignes, "
          f"-{len(records) - len(kept)})")


if __name__ == "__main__":
    main(apply_changes="--apply" in sys.argv)
