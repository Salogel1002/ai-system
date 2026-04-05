# Rebuild Trigger

Der Rebuild Trigger definiert die Bedingungen, unter denen ein fehlgeschlagener oder unzureichender Run erneut ausgeführt werden darf.

Er ist die Brücke zwischen Failure Classification, Result Decision und Lifecycle.

## Zweck

Dieses Dokument stellt sicher, dass Rebuilds:

- nicht beliebig ausgelöst werden
- nur unter klaren Bedingungen stattfinden
- Kosten und Systemstabilität berücksichtigen

Ohne klare Rebuild-Trigger entstehen:
- Endlosschleifen
- unkontrollierte Kosten
- inkonsistente Ergebnisse
- schwer debugbare Abläufe

## Grundprinzipien

### 1. Kein automatischer Rebuild
Ein Rebuild ist immer eine bewusste Entscheidung, kein Default-Verhalten.

### 2. Abhängig von Failure-Typ
Nicht jeder Failure erlaubt einen Rebuild.

### 3. Budgetgebunden
Ein Rebuild darf nur stattfinden, wenn Budget und Limits dies zulassen.

### 4. Zustandskonsistenz
Ein Rebuild darf nur aus einem gültigen Zustand heraus gestartet werden.

## Typische Trigger-Bedingungen

Ein Rebuild kann ausgelöst werden, wenn:

- `EVALUATION_FAILURE` vorliegt
- das Ergebnis unzureichend, aber grundsätzlich lösbar ist
- Budget noch verfügbar ist
- kein Policy-Verstoß vorliegt
- der Run State `REBUILD_REQUIRED` ist

## Nicht erlaubte Rebuilds

Ein Rebuild darf **nicht** ausgelöst werden bei:

- `POLICY_FAILURE`
- `BUDGET_FAILURE`
- ungültigem oder korruptem Run Context
- strukturellen Fehlern im System
- wiederholtem identischem Failure ohne neue Strategie

## Beziehung zu anderen Modulen

### Failure Classification
Bestimmt, ob ein Failure überhaupt rebuild-fähig ist.

### Result Decision
Setzt den Status `REBUILD_REQUIRED`.

### Lifecycle
Steuert den Übergang:

```text
FAILED -> REBUILD_REQUIRED -> neuer Run
