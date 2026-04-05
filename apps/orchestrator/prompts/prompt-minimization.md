# Prompt Minimization

Die Prompt Minimization definiert, wie der Orchestrator den Kontext für jeden Modell-Run auf das absolut notwendige Minimum reduziert.

Sie ist ein zentraler Mechanismus zur Kostenkontrolle und verhindert Token-Explosion durch unnötige Kontextüberladung.

## Zweck

Dieses Dokument stellt sicher, dass pro Anfrage nur die tatsächlich benötigten Informationen in den Modellkontext gelangen.

Ohne Prompt Minimization entstehen:
- extrem hohe Tokenkosten
- langsame Antworten
- unnötige Wiederholung von Informationen
- schlechte Skalierbarkeit
- Kostenexplosion bei vielen Subagenten oder Heartbeats

## Grundprinzipien

### 1. Minimaler Kontext statt maximaler Sicherheit
Es wird nicht „vorsichtshalber alles“ geladen, sondern nur das, was wirklich benötigt wird.

### 2. Ableitungen statt Rohdaten
Regeln und Policies werden nicht vollständig in den Prompt geschrieben, sondern vorher ausgewertet und als Ergebnis übergeben.

### 3. Lazy Loading
Zusätzlicher Kontext (z. B. Skill-Details oder Memory) wird erst geladen, wenn er wirklich gebraucht wird.

### 4. Kein globaler Kontext
Es gibt keinen festen „alles umfassenden“ Prompt.

Jeder Run erhält seinen eigenen, spezifischen Kontext.

## Was nicht in den Standard-Prompt gehört

Die folgenden Inhalte dürfen **nicht pauschal** in jeden Run geladen werden:

- vollständige Skill-Dokumentationen
- komplette Capability Matrix
- vollständige Policy-Texte
- alle Soul-Definitionen
- gesamte Memory-Historie
- alle möglichen Task-Varianten
- vollständige Trace-Historien

## Was stattdessen übergeben wird

Der Orchestrator übergibt nur abgeleitete, kompakte Informationen:

```text
active_role
task_type
allowed_skills
memory_read_allowed
memory_write_allowed
budget_status
rebuild_allowed
relevant_memory_snippets
