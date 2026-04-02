# Runtime

enthält die Laufzeitlogik des Orchestrators. Hier wird ein einzelner Run aufgebaut, durch die definierten Schritte geführt und mit Status, Grenzen und Ergebnissen versehen.

## Zweck

Dieses Modul übersetzt einen eingehenden Request in einen kontrollierten Ausführungslauf.

## Verantwortlich für

- Aufbau des Run Context
- Verwaltung des Run State
- Steuerung des Ablaufes eines einzelnen Runs
- Übergänge zwischen den einzelnen Orchestrator-Schritten
- Abbruch- und Endzustände eines Runs

## Nicht verantwortlich für

- konkrete Skill-Implementierungen
- Memory-Persistenz
- Prompt-Inhalte selbst
- Evaluierungslogik im Detail

## Typische Inhalte

Beispielhaft könnten hier später liegen:

- Run Context
- Run State
- Lifecycle Controller
- Status Model
- Execution Flow

## Referenzen

- `apps/orchestrator/README.md`
- `docs/architecture/04-runtime-patterns.qmd`
- `docs/architecture/05-rebuild-after-cost-failure.qmd`
