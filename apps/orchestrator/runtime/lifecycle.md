# Lifecycle

Der Lifecycle beschreibt den vollständigen Ablauf eines Orchestrator-Runs – von der Annahme eines Requests bis zur finalen Entscheidung (Ergebnis, Abbruch oder Rebuild).

Er definiert die **Reihenfolge der Schritte** und die **logische Struktur des Ablaufs**, ohne dabei konkrete Implementierungsdetails vorzugeben.

## Zweck

Der Lifecycle sorgt dafür, dass jeder Run:

- strukturiert abläuft
- reproduzierbar ist
- kontrollierbar bleibt
- keine impliziten oder zufälligen Übergänge enthält

## Grundprinzipien

### 1. Fester Ablauf
Ein Run folgt einem klar definierten Ablauf. Keine freien oder spontanen Sprünge.

### 2. Zustandsbasiert
Der Lifecycle basiert auf dem Run State und dessen Übergängen.

### 3. Kontrollierte Übergänge
Jeder Schritt darf nur erreicht werden, wenn die vorherigen Bedingungen erfüllt sind.

### 4. Abbruchfähigkeit
An jeder kritischen Stelle muss ein sauberer Abbruch möglich sein.

## Standardablauf

Ein minimaler Lifecycle sieht wie folgt aus:

```text
request received
  -> normalize request
  -> build run context
  -> load prompts
  -> resolve allowed skills
  -> resolve memory access
  -> execute run
  -> evaluate result
  -> accept | reject | rebuild
  -> return response
