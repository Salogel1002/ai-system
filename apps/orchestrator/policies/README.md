# Policies

`policies/` definiert die Regeln, die der Orchestrator vor und während eines Runs erzwingt. Ohne Policies gibt es keine kontrollierte Ausführung.

## Zweck

Dieses Modul stellt sicher, dass alle Aktionen innerhalb definierter Grenzen stattfinden.

## Verantwortlich für

- Kosten- und Tokenbudgets
- Freigabe oder Verbot von Skills
- Kontrolle von Memory-Zugriffen (read/write)
- Definition von Abbruchbedingungen
- Regeln für Rebuilds und Eskalationen

## Nicht verantwortlich für

- konkrete Ausführung von Runs
- Implementierung von Skills
- Speicherung von Memory

## Grundprinzip

Kein Zugriff ohne vorherige Policy-Prüfung.

## Typische Inhalte

Später könnten hier liegen:

- Budget Guards
- Skill Allow/Deny Lists
- Memory Access Rules
- Rebuild Policies
- Abort Conditions

## Referenzen

- `docs/architecture/03-cost-control.qmd`
- `docs/architecture/02-memory-policy.qmd`
- `docs/architecture/05-rebuild-after-cost-failure.qmd`
