# Memory

`memory/` beschreibt die kontrollierte Nutzung von Memory innerhalb des Orchestrators. Der Orchestrator speichert keine Daten selbst, sondern erzwingt die Regeln für Zugriff und Schreiben.

## Zweck

Dieses Modul stellt sicher, dass Memory nur entlang definierter Kategorien und Policies verwendet wird.

## Verantwortlich für

- kontrollierte Memory-Reads
- kontrollierte Memory-Writes
- Durchsetzung von Schreibregeln
- Auswahl relevanter Memory-Kategorien
- Verhinderung von unkontrolliertem Memory-Wachstum

## Nicht verantwortlich für

- physische Speicherung von Memory
- Definition der Memory-Schemata
- freie oder implizite Memory-Nutzung

## Grundprinzip

Kein Memory-Zugriff ohne klare Regelbasis.

## Typische Inhalte

Später könnten hier liegen:

- Memory Access Layer
- Category Resolver
- Write Guards
- Read Filters

## Referenzen

- `memory/schemas/memory-categories.qmd`
- `memory/policies/write-rules.qmd`
- `docs/architecture/02-memory-policy.qmd`
