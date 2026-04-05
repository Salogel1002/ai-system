# Prompt Builder

Der Prompt Builder beschreibt, wie aus einem bestehenden Run Context der tatsächliche Modell-Prompt erzeugt wird.

Er ist die letzte Instanz vor dem Modellaufruf und entscheidet direkt über:

- Tokenverbrauch
- Antwortqualität
- Stabilität des Systems

## Zweck

Dieses Dokument stellt sicher, dass Prompts nicht unkontrolliert wachsen, sondern gezielt, minimal und strukturiert aufgebaut werden.

Ohne Prompt Builder entstehen:
- überladene Prompts
- hohe Kosten
- redundante Informationen
- inkonsistente Modellantworten

## Grundprinzipien

### 1. Kontext ist Auswahl, nicht Sammlung
Der Prompt enthält nur das, was für den aktuellen Run notwendig ist.

### 2. Keine Roh-Policies im Prompt
Policies werden vorher ausgewertet.  
Der Prompt enthält nur die Ergebnisse, nicht die Regeln selbst.

### 3. Lazy Inclusion
Zusätzliche Informationen (Skills, Memory, Constraints) werden nur bei Bedarf eingefügt.

### 4. Struktur vor Freitext
Der Prompt folgt einer klaren, wiederholbaren Struktur.

## Eingaben

Der Prompt Builder arbeitet auf Basis von:

```text
run_context
selected_prompt_templates
resolved_capabilities
filtered_memory_snippets
