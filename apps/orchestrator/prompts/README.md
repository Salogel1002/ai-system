# Prompts

`prompts/` ist verantwortlich für das Laden und Zusammenstellen aller Prompt-Bausteine, die im Orchestrator verwendet werden.

## Zweck

Dieses Modul stellt sicher, dass jeder Run mit den richtigen Prompt-Komponenten ausgeführt wird.

## Verantwortlich für

- Laden des System-Prompts
- Laden des Task-Prompts
- Laden des Evaluator-Prompts
- Zusammenführen der Prompt-Bausteine
- Bereitstellung eines konsistenten Prompt-Sets für den Run

## Nicht verantwortlich für

- Inhaltliche Definition der Prompts
- Ausführung des Runs
- Evaluierungsentscheidungen

## Grundprinzip

Prompts werden nicht ad hoc gebaut, sondern aus definierten Bausteinen zusammengesetzt.

## Typische Inhalte

Später könnten hier liegen:

- Prompt Loader
- Prompt Composer
- Prompt Registry
- Versionierung von Prompt-Sets

## Referenzen

- `prompts/system/base-system-prompt.md`
- `prompts/tasks/default-task-prompt.md`
- `prompts/evaluators/default-evaluator.md`
