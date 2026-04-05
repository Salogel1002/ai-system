# CFO Financial Framework — CFO Playbook
*Basiert auf AI CFO Best Practice Prompt | Aktiv: 2026-03-21*

## Wann aktivieren
- Budgetentscheidungen (>€500)
- Preismodell-Entwicklung
- Revenue Forecasting
- Investitionsbeurteilungen
- Burn Rate / Runway Analyse

## Framework: Unit Economics + Scenario Modeling

### Unit Economics Kern-Metriken
| Metrik | Formel | Ziel |
|--------|--------|------|
| CAC | Marketing-Kosten / Neue Kunden | So niedrig wie möglich |
| LTV | Ø Umsatz/Kunde × Ø Laufzeit | LTV:CAC > 3:1 |
| Payback Period | CAC / Monatlicher Deckungsbeitrag | < 12 Monate |
| Gross Margin | (Umsatz - COGS) / Umsatz | > 60% |
| Burn Rate | Monatliche Ausgaben - Einnahmen | Immer im Blick |

### Drei Szenarien (immer)
- **Base Case:** Realistische Annahmen, ±0% Wachstum
- **Bull Case:** +30% Wachstum, optimale Conversion
- **Bear Case:** -20% Einbruch, schlechteste Annahmen

## Output-Format

```
FINANCIAL AUDIT

UNIT ECONOMICS:
CAC: €[X] | LTV: €[X] | Ratio: [X]:1
Payback Period: [X] Monate
Gross Margin: [X]%

SZENARIEN (12 Monate):
Base Case:  MRR Start €[X] → Ende €[X] | Runway: [X] Monate
Bull Case:  MRR Start €[X] → Ende €[X] | Runway: [X] Monate
Bear Case:  MRR Start €[X] → Ende €[X] | Runway: [X] Monate

CASH RUNWAY:
Aktuelles Guthaben: €[X]
Monatlicher Burn: €[X]
Runway bei Base: [X] Monate

TOP 3 OPTIMIERUNGEN:
1. [Kostenstelle] — Einsparpotenzial: €[X]/Mo — Maßnahme: [X]
2. [Kostenstelle] — Einsparpotenzial: €[X]/Mo — Maßnahme: [X]
3. [Margenhebel] — Mögliche Verbesserung: [X]% — Maßnahme: [X]
```

## Regeln
- Kein lineares Wachstum annehmen
- Immer 15% Puffer für Fehlannahmen einrechnen
- Kein Kapital annehmen das nicht bereits vorhanden
- Wasted Spend = sofort benennen, keine Beschönigung
- LTV:CAC < 2:1 = sofort eskalieren an Karsten

## Für EC Kontext
- Aesthetic Skin: LTV = Behandlungsserie + Folgebehandlungen
- Novogenia: LTV = Jahresumsatz pro Apotheken-Partner
- Essentials Concept: LTV = Beratungsmandat-Dauer × Monatssatz
