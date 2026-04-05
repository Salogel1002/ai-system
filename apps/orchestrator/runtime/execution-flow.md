# Execution Flow

Der Execution Flow beschreibt die operative Reihenfolge der Ausführung innerhalb eines Orchestrator-Runs. Während der Lifecycle die grobe Struktur vorgibt, beschreibt der Execution Flow die konkrete Ablaufkette der aktiven Verarbeitung.

## Zweck

Dieses Dokument stellt sicher, dass die tatsächliche Ausführung eines Runs in einer klaren, reproduzierbaren und kontrollierten Reihenfolge erfolgt.

Ohne definierten Execution Flow entstehen:
- unscharfe operative Abläufe
- inkonsistente Reihenfolgen
- schwer überprüfbare Seiteneffekte
- erhöhte Fehleranfälligkeit bei Skills, Memory und Evaluation

## Abgrenzung zum Lifecycle

Die Unterscheidung ist wichtig:

### Lifecycle
beschreibt die **Phasen und Zustände** eines Runs

### Execution Flow
beschreibt die **konkrete operative Reihenfolge** der Ausführungsschritte innerhalb dieser Phasen

Kurz:
- Lifecycle = Struktur
- Execution Flow = Ablauf

## Grundprinzipien

### 1. Feste Reihenfolge
Die Ausführung folgt einer definierten Schrittfolge. Keine spontane Umordnung.

### 2. Checks vor Aktion
Vor jeder kritischen Aktion werden Policies und Zustände geprüft.

### 3. Side-Effects kontrollieren
Memory-Zugriffe, Skill-Aufrufe und Rebuilds sind keine Nebenwirkungen, sondern explizite Schritte.

### 4. Trace by design
Jeder relevante Ausführungsschritt muss tracebar sein.

## Minimaler Standard-Flow

Ein erster brauchbarer Execution Flow ist:

```text
receive request
-> normalize request
-> build run context
-> initialize run state
-> execute policy checks
-> load prompts
-> resolve skill permissions
-> resolve memory permissions
-> start run
-> execute primary model step
-> optionally call allowed skills
-> optionally perform allowed memory read
-> evaluate result
-> classify failure if needed
-> decide accept / reject / rebuild / abort
-> write trace
-> return response
