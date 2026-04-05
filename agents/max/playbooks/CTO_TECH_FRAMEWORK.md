# CTO Tech Framework — MAX Playbook
*Basiert auf AI CTO Best Practice Prompt | Aktiv: 2026-03-21*

## Wann aktivieren
- Neues Tool evaluieren (Kauf vs. Eigenbau?)
- Tool-Stack auditieren auf Redundanz
- Skalierbarkeit prüfen bevor Wachstum
- Tech-Schulden identifizieren
- Build vs. Buy Entscheidung

## Framework: Build vs. Buy Matrix + Scalability Assessment

### Build vs. Buy Matrix
| Kriterium | Buy | Build | Partner |
|-----------|-----|-------|---------|
| Standardfunktion? | ✅ Buy | | |
| Kern-Differenzierung? | | ✅ Build | |
| Zu komplex/teuer? | | | ✅ Partner |
| Schnell nötig? | ✅ Buy | | |
| Langfristig strategisch? | | ✅ Build | |

### Scalability Assessment
- **Jetzt:** Funktioniert es für aktuelle Größe?
- **3x:** Funktioniert es wenn wir 3x so groß sind?
- **10x:** Wird es zum Bottleneck?

## Output-Format

```
TECHNICAL BRIEF

KERNEMPFEHLUNG: [BUILD / BUY / PARTNER]
Begründung: [In 2 Sätzen]

KOSTENANALYSE:
Jahr 1: €[X] (Setup + Lizenz + Zeit)
Jahr 3: €[X] (Skaliert oder spart X?)
Vergleich Alternative: €[X] Differenz

MAINTENANCE DEBT:
Aufwand: [X Stunden/Monat]
Risiko bei Skalierung: [Niedrig/Mittel/Hoch]
Single Point of Failure: [Ja/Nein — warum]

3 ALTERNATIVEN (nach ROI):
1. [Tool/Ansatz] — Kosten: €[X] — ROI: [X] — Nachteil: [X]
2. [Tool/Ansatz] — Kosten: €[X] — ROI: [X] — Nachteil: [X]
3. [Tool/Ansatz] — Kosten: €[X] — ROI: [X] — Nachteil: [X]

EMPFEHLUNG: Option [X]
NÄCHSTER SCHRITT: [Konkrete Aktion]
```

## Regeln
- Kein Over-Engineering — Einfachheit schlägt Eleganz
- Kein Enterprise-Tool das Custom-Implementierung braucht
- Immer: bestehende Integrationen bevorzugen
- Redundante Tools sofort benennen
- Business-Logik > technische Reinheit

## EC Tool-Stack Audit (Aktuell)

| Tool | Funktion | Kosten/Mo | Redundanz? | Empfehlung |
|------|----------|-----------|-----------|-----------|
| OpenClaw | KI-Agenten-OS | ~€20 | Kern | ✅ Behalten |
| Microsoft 365 | Mail, Kalender, SharePoint | ~€15 | Kern | ✅ Behalten |
| EasyBill | Rechnungen | ~€20 | Kern | ✅ Behalten |
| HubSpot Free | CRM | €0 | Kern | ✅ Behalten |
| TeamViewer | Remote-Zugriff | Kostenlos | Einmalig | ✅ Behalten |
| Claude API | KI-Modelle | Pay-per-use | Kern | ✅ Behalten |
| Perplexity API | Web-Search | Pay-per-use | Kern | ✅ Behalten |

**Lücken im Stack:**
- Kein Monitoring/Alerting für Mac mini
- Kein automatisches Backup-System
- Kein zentrales Passwort-Management

## Für EC Kontext
Wir sind ein Lean-Team (1 Person + KI-Agenten).
Jedes neue Tool muss:
1. API-Integration haben (oder wir bauen sie)
2. Unter €50/Mo kosten oder einmalig
3. Einen bestehenden manuellen Prozess ersetzen
