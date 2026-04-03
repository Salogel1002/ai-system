# Skill Adapters

Die Skill Adapters beschreiben die technische Integrationsschicht zwischen externen oder heterogenen Skills und dem internen Skill-Modell des Systems.

Sie verhindern, dass externe Skills mit ihren eigenen Formaten, Schnittstellen und Seiteneffekten direkt in den Orchestrator hineinwirken.

## Zweck

Dieses Dokument stellt sicher, dass alle Skills – insbesondere externe und über Clawhub installierte Skills – vor ihrer Runtime-Nutzung auf ein einheitliches internes Modell abgebildet werden.

Ohne Skill Adapters entstehen:
- inkonsistente Schnittstellen
- Sonderlogik pro externem Skill
- schwer kontrollierbare Seiteneffekte
- Kopplung des Orchestrators an Fremdformate
- langfristige Architekturerosion

## Grundprinzipien

### 1. Kein externer Skill spricht direkt mit dem Orchestrator
Zwischen externem Skill und internem Runtime-System liegt immer ein Adapter.

### 2. Einheitliches Innenmodell
Alle Skills werden vor Nutzung auf ein internes, kontrollierbares Ausführungsmodell gemappt.

### 3. I/O-Normalisierung
Inputs und Outputs werden validiert, transformiert und vereinheitlicht.

### 4. Side-Effect-Kontrolle
Mögliche schreibende, externe oder riskante Aktionen müssen explizit sichtbar und begrenzbar sein.

### 5. Fehlerübersetzung
Adapter müssen externe Fehler in interne Failure-Typen überführen können.

## Aufgaben eines Adapters

Ein Skill Adapter ist insbesondere verantwortlich für:

- Normalisierung eingehender Parameter
- Validierung erforderlicher Inputs
- Übersetzung vom externen Skill-Format ins interne Skill-Modell
- Normalisierung der Outputs
- Kennzeichnung möglicher Side Effects
- Fehlerabbildung auf interne Failure-Klassen
- Bereitstellung von Metadaten für Tracing und Policy Checks

## Nicht verantwortlich für

- Freigabe neuer Skills
- Review-Entscheidungen
- Capability-Zuordnung
- Budget-Definitionen
- langfristige Skill-Governance

## Typische Adapter-Funktionen

Ein minimaler Adapter sollte mindestens folgende Funktionen leisten:

```text
external skill input
-> validate
-> normalize
-> map to internal invocation contract
-> execute
-> normalize output
-> map errors
-> return controlled result
