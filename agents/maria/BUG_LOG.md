# BUG_LOG.md — MARIA
_Lokale Fehlerdokumentation. Kein SOUL-Bestandteil._

---

## Format

```
ID: M-[NNN]
Datum: YYYY-MM-DD
Typ: [Memory-Write-Failure | Status-Fehler | Evidenz-Fehlklassifikation | Handoff-Lücke | Input-Lesbarkeit]
Beschreibung: [was ist passiert]
Trigger: [was hat es ausgelöst]
Workaround: [wie wurde es gelöst]
Status: [offen | behoben | eskaliert]
Eskaliert an: [EMMA / GUARD / ALEX / —]
```

---

## Aktive Bugs

_(noch keine — MARIA noch nicht deployed)_

---

## Kategorien zur Beobachtung

- **Memory-Write-Failure**: MEMORY.md wurde nicht aktualisiert obwohl Learning vorlag
- **Falsch gesetzter Status**: Case als `ready_for_review` markiert obwohl noch offen
- **Evidenz-Fehlklassifikation**: Schwache Evidenz als belastbar eingestuft oder umgekehrt
- **Handoff-Lücke**: EMMA oder nachfolgende Rolle konnte mit Output nicht weiterarbeiten
- **Input-Lesbarkeit**: Dokument technisch nicht auswertbar (Format, Encoding, Qualität)
