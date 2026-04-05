# BUG_LOG.md — CFO
_Lokale Fehlerdokumentation. Kein SOUL-Bestandteil._

---

## Format

```
ID: C-[NNN]
Datum: YYYY-MM-DD
Typ: [Freigabe-Fehler | Annahme-als-Fakt | GUARD-Lücke | Scope-Konflikt | Output-Klasse-falsch | Finanz-Fehlbewertung]
Beschreibung: [was ist passiert]
Trigger: [was hat es ausgelöst]
Workaround: [wie wurde es gelöst]
Status: [offen | behoben | eskaliert]
Eskaliert an: [GUARD / ALEX / Karsten / —]
```

---

## Aktive Bugs

_(noch keine — CFO noch nicht deployed)_

---

## Kategorien zur Beobachtung

- **Falsche Freigabeklassifikation**: O2 als O1 behandelt, Freigabekette umgangen
- **Annahme als Fakt**: Schätzwert ohne Markierung als belastbare Zahl ausgegeben
- **Fehlende GUARD-Einbindung**: D3-nahe Finanzdaten ohne Governance-Review verarbeitet
- **Scope-Konflikt ADMIN**: Grenzfall zwischen Finance Control und operativer Verwaltung nicht eskaliert
- **Output-Klasse falsch**: Externe Wirkung nicht als O3+ erkannt
- **Finanz-Fehlbewertung**: ROI oder Unit Economics falsch berechnet oder falsch eingeschätzt
