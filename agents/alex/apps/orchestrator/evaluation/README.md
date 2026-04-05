# Evaluation

`evaluation/` beschreibt die Bewertung eines Runs innerhalb des Orchestrators. Die Evaluierung entscheidet, ob ein Ergebnis akzeptiert wird oder ein Rebuild bzw. Abbruch notwendig ist.

## Zweck

Dieses Modul stellt sicher, dass Ergebnisse nicht ungeprüft zurückgegeben werden.

## Verantwortlich für

- Übergabe des Ergebnisses an Evaluatoren
- Verarbeitung der Evaluierungsentscheidung
- Trennung zwischen akzeptiertem Ergebnis und Failure
- Grundlage für Rebuild-Entscheidungen
- Klassifikation von Fehlern

## Nicht verantwortlich für

- Ausführung des Runs
- Definition der Evaluator-Prompts selbst
- direkte Skill-Ausführung
- Memory-Persistenz

## Grundprinzip

Kein Ergebnis ohne Bewertung.

## Typische Inhalte

Später könnten hier liegen:

- Evaluator Runner
- Result Scoring
- Pass/Fail Decision Logic
- Failure Classification
- Rebuild Trigger Logic

## Referenzen

- `prompts/evaluators/default-evaluator.md`
- `docs/architecture/04-runtime-patterns.qmd`
- `docs/architecture/05-rebuild-after-cost-failure.qmd`
