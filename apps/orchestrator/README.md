# Orchestrator

Der Orchestrator ist die zentrale Steuerungsschicht des Systems. Er koordiniert den Ablauf zwischen Request, Prompting, Skill-Nutzung, Memory-Zugriff, Evaluierung und Fehlerbehandlung.

Er enthält keine Fachlogik und speichert keine Memory-Daten selbst. Seine Aufgabe ist Steuerung, Begrenzung und Nachvollziehbarkeit.

## Zweck

Der Orchestrator soll:

- Requests in einen kontrollierten Lauf überführen
- den benötigten Laufzeitkontext aufbauen
- passende Prompts laden
- Skill-Nutzung begrenzen und steuern
- Memory-Zugriffe nur entlang definierter Regeln erlauben
- Ergebnisse evaluieren
- bei Fehlern oder Budgetproblemen sauber abbrechen oder an Rebuild-Logik übergeben

## Verantwortung

Der Orchestrator ist verantwortlich für:

- Request-Normalisierung
- Aufbau des Runtime Context
- Laden von System-, Task- und Evaluator-Prompts
- Auswahl zulässiger Skills
- kontrollierte Memory-Reads und Memory-Writes
- Kosten- und Token-Grenzen
- Evaluierungsübergabe
- Trace- und Run-Metadaten
- kontrollierte Eskalation bei Failure

## Nicht-Ziele

Der Orchestrator ist nicht verantwortlich für:

- Geschäftslogik
- inhaltliche Skill-Implementierung
- Memory-Speicherung selbst
- unkontrollierte autonome Schleifen
- verdeckte Sonderlogik außerhalb definierter Policies

## Rolle im System

Vereinfacht liegt der Orchestrator zwischen Entry Point und ausführenden Komponenten:

```text
request
  -> normalize
  -> build context
  -> load prompts
  -> allow skills
  -> allow memory access
  -> execute run
  -> evaluate result
  -> accept / reject / rebuild
  -> return response
