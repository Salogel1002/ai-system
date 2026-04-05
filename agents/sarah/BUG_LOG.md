# BUG_LOG.md — SARAH
_Lokale Fehlerdokumentation. Kein SOUL-Bestandteil._

---

## Format

```
ID: S-[NNN]
Datum: YYYY-MM-DD
Typ: [Claim-Fehler | Routing-Fehler | Evidenzlücke | Freigabe-unklar | Briefing-Defekt]
Beschreibung: [was ist passiert]
Trigger: [was hat es ausgelöst]
Workaround: [wie wurde es gelöst]
Status: [offen | behoben | eskaliert]
Eskaliert an: [EMMA / GUARD / ALEX / —]
```

---

## Aktive Bugs

_(noch keine — SARAH noch nicht deployed)_

---

## Kategorien zur Beobachtung

- **Claim-Fehlformulierung**: Aussage hat Heil- oder Garantiecharakter impliziert — Claim-Screening verbessern
- **Falsches Routing an Peers**: SARAH hat direkt an EXEC/SOPHIE übergeben ohne EMMA-Gate
- **Wiederkehrende Evidenzlücke**: Bestimmtes Thema hat wiederholt keinen belastbaren Proof — Proof-Stack erweitern
- **Unklarer Freigabestatus**: Output war unklar ob intern oder extern — Freigabelogik schärfen
- **Briefing-Template-Defekt**: Downstream-Agents konnten mit SARAH-Output nicht arbeiten — Template anpassen
