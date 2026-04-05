# Response Object

Das Response Object definiert die strukturierte Rückgabe eines Orchestrator-Runs.

Es ist die formale Schnittstelle zwischen dem Orchestrator und allen aufrufenden Systemen (UI, API, weitere Services).

## Zweck

Dieses Dokument stellt sicher, dass Ergebnisse nicht als unstrukturierter Text zurückgegeben werden, sondern als klar definiertes, maschinenlesbares Objekt.

Ohne Response Object entstehen:
- unklare Rückgaben
- fehlende Auswertbarkeit
- schwierige Integration in andere Systeme
- inkonsistente Fehlerbehandlung

## Grundprinzipien

### 1. Struktur vor Freitext
Jede Antwort ist ein strukturiertes Objekt, kein reiner Text.

### 2. Entscheidung sichtbar machen
Die Result Decision ist Teil der Response.

### 3. Trace referenzieren
Jeder Run ist nachvollziehbar.

### 4. Erweiterbarkeit
Das Objekt kann später erweitert werden, ohne bestehende Felder zu brechen.

## Struktur (kanonisch)

```text
Response
- run_id: string
- result:
    - output: string
- decision:
    - status: string
- trace:
    - trace_id: string
