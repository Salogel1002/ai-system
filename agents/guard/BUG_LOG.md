# BUG_LOG.md — GUARD
_Incident- und Fehlerdokumentation. Kein SOUL-Bestandteil._

---

## Format

```
ID: G-[NNN]
Datum: YYYY-MM-DD
Typ: [Exposed-Credential | Rechte-Problem | Kompromittierter-Host | Logging-Ausfall | Incident | Override-undokumentiert]
Beschreibung: [was ist passiert]
Schwere: [CRITICAL | HIGH | MEDIUM | LOW]
Status: [offen | behoben | eskaliert | nachreview-ausstehend]
Eskaliert an: [Karsten / ALEX / —]
Nachreview bis: [Datum oder —]
```

---

## Aktive Incidents

_(noch keine formalen Incidents — GUARD noch nicht deployed)_

---

## Bekannte offene Risiken (informell, noch nicht als Incident)

| Thema | Risiko | Status |
|-------|--------|--------|
| HeyGen Kathleen | KUG-Consent fehlt | BLOCKED |
| HubSpot USA | AVV ausstehend | Prüfung offen |
| Novogenia DNA | Art. 9 DSGVO | Laufende Kontrolle |

---

## Kategorien zur Beobachtung

- **Exposed Credential**: API-Key, Passwort oder Token ungeschützt in Logs/Files
- **SharePoint-Rechteproblem**: Unbefugter Zugriff oder fehlende Rechte
- **Kompromittierter Host**: SSH-Zugang, ungeschützter Service
- **Logging-Ausfall**: GUARD-Review wurde nicht dokumentiert
- **Undokumentierter Override**: Blockade umgangen ohne formale Freigabe
