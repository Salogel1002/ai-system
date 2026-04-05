# Run Orchestrator

Der Run Orchestrator ist die operative Hauptkomponente des minimalen MVP-Laufs. Er verbindet die bereits definierten Bausteine zu einer konkreten Ausführungsreihenfolge.

Er ist der erste technische Einstiegspunkt für einen einzelnen Run.

## Zweck

Dieses Dokument beschreibt, wie der Orchestrator im MVP einen Request verarbeitet, ohne bereits die volle Komplexität des Gesamtsystems zu aktivieren.

## Grundprinzipien

### 1. Ein offizieller Laufpfad
Der MVP hat genau einen kontrollierten Ausführungspfad.

### 2. Orchestrieren, nicht „smart improvisieren“
Der Run Orchestrator verbindet Komponenten, trifft aber keine versteckte Fachlogik.

### 3. Minimal, aber echt
Der Lauf soll real ausführbar gedacht sein, auch wenn einzelne Teile zunächst noch einfach oder gemockt sind.

### 4. Erweiterbar ohne Umbau
Spätere Policy-, Skill- und Memory-Schichten sollen ergänzt werden können, ohne den Kernfluss neu zu erfinden.

## MVP-Verantwortung

Der Run Orchestrator ist im ersten Schritt verantwortlich für:

- Annahme eines Requests
- Aufruf des Run Context Builders
- Aufruf des Prompt Builders
- Start des Modelllaufs
- Übergabe an eine minimale Result Decision
- Rückgabe der Response
- Schreiben eines minimalen Traces

## Nicht verantwortlich für

Im MVP ist der Run Orchestrator noch nicht verantwortlich für:

- externe Skill-Ausführung
- Memory-Retrieval
- Rebuild-Schleifen
- Heartbeats
- komplexe Policy-Engines
- Subagent-Kaskaden

## Minimaler Ablauf

```text
receive request
-> build run context
-> build prompt
-> execute model call
-> evaluate minimal result
-> write trace
-> return response
