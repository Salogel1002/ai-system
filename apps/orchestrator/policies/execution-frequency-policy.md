# Execution Frequency Policy

Die Execution Frequency Policy definiert, wie oft und unter welchen Bedingungen neue Runs, Rebuilds oder systeminterne Prozesse (z. B. Heartbeats oder Subagent-Aufrufe) ausgelöst werden dürfen.

Sie ist ein zentraler Mechanismus zur Vermeidung von Run-Explosionen und unkontrollierten Kosten.

## Zweck

Dieses Dokument stellt sicher, dass das System nicht durch zu häufige oder unnötige Ausführungen instabil oder teuer wird.

Ohne Execution Frequency Policy entstehen:
- exponentielle Run-Kaskaden
- unkontrollierte Heartbeat-Schleifen
- übermäßige Rebuilds
- massive Kostensteigerungen
- schwer kontrollierbares Systemverhalten

## Grundprinzipien

### 1. Kein Run ohne klaren Anlass
Jeder Run braucht einen konkreten Trigger.

### 2. Begrenzung statt Autonomie
Automatische Prozesse dürfen nicht unbegrenzt laufen.

### 3. Frequenz ist budgetrelevant
Jeder zusätzliche Run verursacht Kosten und muss gerechtfertigt sein.

### 4. Kaskaden verhindern
Ein Run darf nicht unkontrolliert weitere Runs erzeugen.

## Typische Run-Typen

```text
USER_TRIGGERED
SYSTEM_TRIGGERED
REBUILD
HEARTBEAT
SUBAGENT_CALL
