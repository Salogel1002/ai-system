# Result Decision

Die Result Decision ist die formale Entscheidung nach der Evaluierung eines Runs. Sie legt fest, ob ein Ergebnis akzeptiert, verworfen, zum Rebuild markiert oder mit einem klaren Failure beendet wird.

## Zweck

Diese Komponente trennt die reine Bewertung eines Ergebnisses von der operativen Entscheidung, wie der Orchestrator weiter verfährt.

Ohne diese Trennung entstehen:
- unsaubere Vermischung von Bewertung und Steuerung
- schwer nachvollziehbare Failure-Pfade
- inkonsistente Rebuild-Entscheidungen

## Grundprinzipien

### 1. Bewertung ist nicht Entscheidung
Ein Evaluator liefert eine Einschätzung.  
Die Result Decision übersetzt diese Einschätzung in eine verbindliche Orchestrator-Entscheidung.

### 2. Nur explizite Outcomes
Es darf keine impliziten oder „halb erfolgreichen“ Rückgaben geben.

### 3. Deterministische Anschlusslogik
Jede Decision muss klar definieren, was als Nächstes geschieht.

## Mögliche Entscheidungen

Ein minimaler Entscheidungsraum könnte sein:

```text
ACCEPT
REJECT
REBUILD_REQUIRED
FAIL
ABORT
