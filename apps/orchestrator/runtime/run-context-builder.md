# Run Context Builder

Der Run Context Builder beschreibt, wie ein vollständiger und gültiger Run Context aus einem eingehenden Request erzeugt wird.

Er ist die erste operative Komponente im Orchestrator-Lifecycle und entscheidet maßgeblich über:

- Kosten
- erlaubte Fähigkeiten
- Memory-Zugriff
- spätere Run-Qualität

## Zweck

Dieses Dokument stellt sicher, dass der Run Context nicht zufällig entsteht, sondern systematisch und kontrolliert aufgebaut wird.

Ohne klaren Builder entstehen:
- inkonsistente Runs
- falsche Skill-Freigaben
- unnötiger Kontext (→ hohe Kosten)
- schwer debugbare Fehler

## Grundprinzipien

### 1. Deterministischer Aufbau
Der gleiche Input führt zum gleichen Context (so weit möglich).

### 2. Minimaler Kontext
Nur notwendige Informationen werden gesetzt (siehe Prompt Minimization).

### 3. Policy-aware Konstruktion
Der Builder berücksichtigt bereits:
- Skill Policy
- Memory Access Policy
- Budget Policy
- Capability Matrix

### 4. Keine impliziten Defaults
Alle gesetzten Werte sind bewusst entschieden.

## Eingaben

Der Builder erhält typischerweise:

```text
request_input
session_context
tenant_context
available_prompts
available_skills (Registry)
capability_matrix
policy_definitions
