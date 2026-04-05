# Memory Access Policy

Die Memory Access Policy definiert, unter welchen Bedingungen innerhalb eines Orchestrator-Runs auf Memory zugegriffen werden darf. Sie trennt strikt zwischen Lesen und Schreiben und verhindert unkontrollierte Memory-Nutzung.

## Zweck

Dieses Dokument stellt sicher, dass Memory nur dann verwendet wird, wenn der Zugriff fachlich sinnvoll, regelbasiert erlaubt und für den aktuellen Run notwendig ist.

Ohne Memory Access Policy entstehen:
- unklare Schreibpfade
- unkontrolliertes Memory-Wachstum
- Vermischung von Run Context und persistentem Memory
- inkonsistente Retrieval- und Write-Entscheidungen

## Grundprinzipien

### 1. Read und Write getrennt behandeln
Lesen und Schreiben sind unterschiedliche Operationen und brauchen unterschiedliche Regeln.

### 2. Kein Zugriff ohne Freigabe
Memory darf nur verwendet werden, wenn der Zugriff für den aktuellen Run explizit erlaubt ist.

### 3. Orchestrator erzwingt, Memory entscheidet nicht allein
Der Orchestrator prüft die Zugriffsfreigabe.  
Die eigentliche Memory-Logik bleibt in der Memory-Schicht.

### 4. Kein Vermischen von Runtime und Memory
Der Run Context ist transient.  
Memory ist persistent und regelgesteuert.  
Diese beiden Ebenen dürfen nicht zusammenfallen.

## Typische Policy-Fragen

Eine Memory Access Policy muss mindestens beantworten:

1. Darf in diesem Run Memory gelesen werden?
2. Darf in diesem Run Memory geschrieben werden?
3. Welche Kategorien sind lesbar?
4. Welche Kategorien sind schreibbar?
5. Unter welchen Bedingungen ist Schreiben verboten?
6. Wie wird Missbrauch oder Overgrowth verhindert?

## Zugriffstypen

Ein minimaler Satz von Zugriffstypen könnte sein:

```text
READ_ALLOWED
WRITE_ALLOWED
READ_DENIED
WRITE_DENIED
WRITE_RESTRICTED
