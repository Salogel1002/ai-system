# Run Trace

Der Run Trace dokumentiert den vollständigen Ablauf eines Orchestrator-Runs. Er dient der Nachvollziehbarkeit, Analyse und Fehlerdiagnose.

## Zweck

Der Run Trace stellt sicher, dass jeder Run technisch und logisch nachvollzogen werden kann.

Ohne Trace entstehen:
- intransparente Abläufe
- schwer debugbare Fehler
- keine belastbare Analyse von Entscheidungen
- fehlende Grundlage für Optimierung

## Grundprinzipien

### 1. Vollständigkeit
Alle relevanten Ereignisse eines Runs müssen erfasst werden.

### 2. Zeitliche Ordnung
Der Trace folgt der tatsächlichen Reihenfolge der Ereignisse.

### 3. Keine versteckte Logik
Der Trace beschreibt, was passiert ist — nicht warum es „eigentlich hätte passieren sollen“.

### 4. Geringe Invasivität
Tracing darf den Ablauf nicht verfälschen oder wesentlich verlangsamen.

## Was wird erfasst

Ein Run Trace enthält typischerweise:

- Run-ID
- Zeitstempel (Start, Schritte, Ende)
- State-Übergänge
- geladene Prompts
- zugelassene Skills
- ausgeführte Skill-Aufrufe
- Memory-Zugriffe (read/write, erlaubt/verweigert)
- Evaluierungsergebnisse
- Result Decision
- Failure-Klassifikation (falls vorhanden)
- Rebuild-Entscheidungen

## Struktur (Beispiel)

```text
RunTrace
- run_id
- events[]
  - timestamp
  - type
  - payload
