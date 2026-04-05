# Budget Policy

Die Budget Policy definiert die Grenzen für Kosten, Tokens und Laufzeit innerhalb eines Orchestrator-Runs. Sie ist eine der zentralen Schutzmechanismen gegen unkontrollierte Ausführung.

## Zweck

Dieses Dokument stellt sicher, dass jeder Run innerhalb klar definierter Ressourcenlimits bleibt.

Ohne Budget Policy entstehen:
- unkontrollierte Kosten
- endlose Runs
- ineffiziente Rebuild-Schleifen
- fehlende Planbarkeit

## Grundprinzipien

### 1. Budget ist verbindlich
Ein Budget ist kein Richtwert, sondern eine harte Grenze.

### 2. Budget vor Ausführung prüfen
Vor jedem kritischen Schritt muss geprüft werden, ob ausreichend Budget vorhanden ist.

### 3. Keine stillschweigende Überschreitung
Budgetverletzungen müssen zu klaren Entscheidungen führen (Abort oder Failure).

### 4. Rebuild ist budgetabhängig
Ein neuer Run darf nur gestartet werden, wenn Budget verfügbar ist.

## Budget-Dimensionen

Ein Run kann mehrere Budgetarten haben:

```text
TOKEN_BUDGET
COST_BUDGET
TIME_BUDGET
REBUILD_BUDGET
