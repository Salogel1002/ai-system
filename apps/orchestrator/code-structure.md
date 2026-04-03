# Code Structure

Dieses Dokument übersetzt die bestehende Orchestrator-Architektur in eine konkrete technische Code-Struktur für den ersten MVP.

Ziel ist, dass Code und Architektur deckungsgleich bleiben.

## Zweck

Dieses Dokument stellt sicher, dass die Implementierung nicht von der Architektur wegdriftet und dass jedes Modul einen klaren Platz im Code erhält.

Ohne definierte Code-Struktur entstehen:
- verteilte Verantwortlichkeiten
- implizite Logik
- schwer testbarer Code
- Architekturbruch schon im MVP

## Grundprinzipien

### 1. Architektur spiegelt sich im Code
Jede Hauptverantwortung bekommt ein eigenes Modul.

### 2. Ein offizieller Ausführungspfad
Es gibt einen klaren Einstiegspunkt für einen Run.

### 3. Klein, aber sauber
Der erste MVP bleibt technisch klein, aber strukturell korrekt.

### 4. Erweiterung ohne Umordnung
Spätere Features werden ergänzt, nicht chaotisch angehängt.

## MVP-Code-Zuschnitt

Ein sinnvoller erster Zuschnitt ist:

```text
apps/orchestrator/
  README.md
  implementation-plan.md
  technical-mvp-scope.md
  code-structure.md

  runtime/
    README.md
    run-context.md
    run-state.md
    lifecycle.md
    execution-flow.md
    policy-checks.md
    run-context.schema.md
    run-context-builder.md
    run-context.example.json
    run-flow.example.md
    run-orchestrator.md
    response-object.md

  prompts/
    README.md
    prompt-builder.md
    prompt-minimization.md
    prompt.example.md

  evaluation/
    README.md
    result-decision.md
    failure-classification.md
    rebuild-trigger.md

  tracing/
    README.md
    run-trace.md
    event-types.md

  policies/
    README.md
    budget-policy.md
    skill-policy.md
    memory-access-policy.md
    execution-frequency-policy.md

  skills/
    README.md
    skill-registry.md
    skill-intake-flow.md
    skill-review-policy.md
    capability-matrix.md
    skill-adapters.md
