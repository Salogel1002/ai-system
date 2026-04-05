# Event Types

Die Event Types definieren die standardisierten Ereignisklassen, die im Run Trace verwendet werden. Sie sorgen dafür, dass Tracing nicht aus freien Textfragmenten besteht, sondern aus konsistenten, maschinenlesbaren Ereignissen.

## Zweck

Dieses Dokument stellt sicher, dass alle Trace-Einträge klar typisiert, vergleichbar und auswertbar sind.

Ohne definierte Event Types entstehen:
- inkonsistente Trace-Daten
- schlechte Debugbarkeit
- unklare Auswertungen
- schwer vergleichbare Runs

## Grundprinzipien

### 1. Standardisierung
Jedes relevante Ereignis erhält einen klar definierten Typ.

### 2. Maschinenlesbarkeit
Event Types müssen so strukturiert sein, dass sie später gefiltert, aggregiert und analysiert werden können.

### 3. Trennung von Typ und Payload
Der Event Type beschreibt die Klasse des Ereignisses.  
Die Detailinformationen liegen im Payload.

### 4. Keine redundanten Sondertypen
Nur Ereignisse mit echtem Steuerungs- oder Analysewert bekommen einen eigenen Typ.

## Minimaler Satz von Event Types

Ein erster sinnvoller Satz ist:

```text
REQUEST_RECEIVED
CONTEXT_BUILT
PROMPTS_LOADED
SKILLS_RESOLVED
MEMORY_ACCESS_CHECKED
RUN_STARTED
SKILL_CALLED
RUN_COMPLETED
EVALUATION_DONE
DECISION_MADE
FAILURE_CLASSIFIED
REBUILD_TRIGGERED
RUN_ABORTED
