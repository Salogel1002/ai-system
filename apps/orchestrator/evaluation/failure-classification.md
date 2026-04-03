# Failure Classification

Die Failure Classification beschreibt, wie Fehler innerhalb des Orchestrators eingeordnet werden. Nicht jeder Fehler ist gleich: Manche Fehler sind terminal, manche erlauben Rebuilds, manche erfordern einen sofortigen Abbruch.

## Zweck

Dieses Dokument trennt Fehlerarten sauber voneinander, damit der Orchestrator konsistent entscheiden kann, wie auf ein Failure reagiert wird.

Ohne Failure Classification entstehen:
- unklare Reaktionen auf Fehler
- falsche Rebuild-Entscheidungen
- inkonsistente Abbrüche
- schwer debugbare Failure-Pfade

## Grundprinzipien

### 1. Fehler müssen typisiert sein
Ein Fehler darf nicht nur „fehlgeschlagen“ sein. Er muss klassifiziert werden.

### 2. Klassifikation vor Reaktion
Erst wird bestimmt, welche Art von Failure vorliegt. Danach wird über Rebuild, Abort oder terminales Ende entschieden.

### 3. Terminal und nicht-terminal sauber trennen
Nicht jeder Fehler rechtfertigt einen neuen Lauf.

## Mögliche Failure-Klassen

Ein minimaler Satz könnte sein:

```text
POLICY_FAILURE
BUDGET_FAILURE
CONTEXT_FAILURE
EXECUTION_FAILURE
EVALUATION_FAILURE
DEPENDENCY_FAILURE
STATE_FAILURE
