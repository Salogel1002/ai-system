# Run Flow Example

Dieses Beispiel zeigt einen minimalen vollständigen End-to-End-Run des Orchestrators auf Basis der bisher definierten Architektur.

Es ist der erste Referenzlauf, der den Weg von Request bis Result konkret abbildet.

## Ziel

Dieses Beispiel soll zeigen:

- wie ein Request verarbeitet wird
- wie der Run Context entsteht
- wie daraus ein Prompt gebaut wird
- wie ein Ergebnis zurückkommt
- wie der Ablauf strukturiert nachvollzogen werden kann

## Beispiel-Request

```text
Summarize this proposal and identify the main risks.
