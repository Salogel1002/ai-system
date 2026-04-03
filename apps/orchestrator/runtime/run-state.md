# Run State

Der Run State beschreibt den aktuellen Zustand eines laufenden Orchestrator-Runs. Während der Run Context die statische Grundlage bildet, verändert sich der Run State während der Ausführung.

## Zweck

Der Run State macht den Fortschritt und Zustand eines Runs explizit und steuerbar.

Ohne klar definierten State entstehen:
- unklare Übergänge
- schwer nachvollziehbare Fehler
- inkonsistente Abbruchlogik

## Grundprinzipien

### 1. Zustandsbasiert
Ein Run befindet sich immer in genau einem klar definierten Zustand.

### 2. Explizite Übergänge
Zustandswechsel passieren nur über definierte Übergänge, nicht implizit.

### 3. Keine versteckte Logik
Der State beschreibt den Zustand, aber enthält keine Entscheidungslogik selbst.

## Typische Zustände

Ein minimaler Zustandsraum könnte sein:

```text
INIT
CONTEXT_BUILT
PROMPTS_LOADED
READY
RUNNING
EVALUATING
COMPLETED
FAILED
ABORTED
REBUILD_REQUIRED
