# Policy Checks

Die Policy Checks beschreiben, an welchen Stellen im Runtime-Lifecycle Policies verbindlich geprüft werden. Sie bilden die operative Brücke zwischen Runtime und den einzelnen Policy-Modulen.

## Zweck

Dieses Dokument stellt sicher, dass Policies nicht nur abstrakt definiert sind, sondern an den richtigen Stellen tatsächlich wirksam werden.

Ohne explizite Policy Checks entstehen:
- Policies, die nur dokumentiert, aber nicht erzwungen werden
- implizite Freigaben
- unklare Verantwortlichkeiten zwischen Runtime und Policy-Schicht
- schwer nachvollziehbare Verstöße

## Grundprinzipien

### 1. Policy before action
Vor jeder kostenrelevanten, zustandsrelevanten oder persistenzrelevanten Aktion muss geprüft werden, ob sie erlaubt ist.

### 2. Keine implizite Freigabe
Wenn keine erfolgreiche Policy-Prüfung vorliegt, darf die Aktion nicht stattfinden.

### 3. Runtime prüft, Policies definieren
Die Runtime führt Checks aus.  
Die Policies definieren, was erlaubt oder verboten ist.

### 4. Check-Ergebnisse müssen tracebar sein
Jede relevante Policy-Entscheidung muss im Run Trace sichtbar werden.

## Typische Check-Punkte im Lifecycle

Ein minimaler Satz von Check-Punkten ist:

```text
vor Run-Start
vor Prompt-Zusammenstellung
vor Skill-Freigabe
vor Skill-Aufruf
vor Memory-Read
vor Memory-Write
vor Rebuild
vor finaler Rückgabe bei Grenzfällen
