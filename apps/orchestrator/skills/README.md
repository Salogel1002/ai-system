# Skills

`skills/` beschreibt die Anbindung und Steuerung der Skills innerhalb des Orchestrators. Skills sind ausführbare, klar begrenzte Einheiten für definierte Aufgaben. Der Orchestrator ruft sie nicht beliebig auf, sondern nur innerhalb expliziter Regeln.

## Zweck

Dieses Modul stellt sicher, dass Skill-Nutzung kontrolliert, nachvollziehbar und begrenzt bleibt.

## Verantwortlich für

- Registrierung verfügbarer Skills
- Prüfung, welche Skills für einen Run zulässig sind
- kontrollierte Auswahl von Skills
- Übergabe des nötigen Kontexts an einen Skill
- Protokollierung von Skill-Nutzung innerhalb eines Runs

## Nicht verantwortlich für

- fachliche Implementierung einzelner Skills
- freie autonome Tool-Nutzung ohne Freigabe
- Memory-Persistenz
- Prompt-Definitionen

## Grundprinzip

Skills sind erlaubt, aber niemals implizit.  
Jede Skill-Nutzung braucht einen klaren Grund und muss durch Policies gedeckt sein.

## Typische Inhalte

Später könnten hier liegen:

- Skill Registry
- Skill Resolver
- Skill Invocation Rules
- Skill Context Builder
- Skill Trace Events

## Referenzen

- `skills/intake/SKILL.md`
- `skills/review/SKILL.md`
- `docs/adr/0003-thin-skills-only.qmd`
- `apps/orchestrator/policies/README.md`
