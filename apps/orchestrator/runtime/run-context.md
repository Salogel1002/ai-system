# Run Context

Der Run Context ist die kanonische Arbeitsgrundlage eines einzelnen Orchestrator-Laufs. Er bündelt alle Informationen, die für Planung, Steuerung, Skill-Freigabe, Memory-Zugriff, Evaluierung und Nachvollziehbarkeit eines Runs benötigt werden.

Er ist **kein** Langzeitspeicher und **kein** Memory Store. Er existiert nur für die Dauer eines Runs.

## Zweck

Der Run Context stellt sicher, dass der gesamte Lauf auf einer gemeinsamen, konsistenten und kontrollierten Datengrundlage arbeitet.

Ohne Run Context entstehen:

- implizite Zustände
- verstreute Entscheidungen
- unklare Verantwortlichkeiten
- schwer debugbare Seiteneffekte

## Funktion im System

Der Run Context wird zu Beginn eines Runs aufgebaut und danach von den Orchestrator-Modulen gelesen oder erweitert.

Er dient als zentrale Referenz für:

- Request-Verarbeitung
- Prompt-Zusammenstellung
- Skill-Freigabe
- Memory-Entscheidungen
- Kostenkontrolle
- Evaluierung
- Tracing

## Grundprinzipien

### 1. Ein Run, ein Context
Jeder Run hat genau einen aktiven Run Context.

### 2. Explizit statt implizit
Alles, was für Entscheidungen relevant ist, gehört explizit in den Context oder in klar referenzierte Policies.

### 3. Laufzeitgebunden
Der Run Context ist transient. Er wird nicht als Memory missverstanden oder dauerhaft fortgeschrieben.

### 4. Keine Fachlogik
Der Context enthält Zustände und Referenzen, aber keine versteckte Business-Logik.

## Verantwortlich für

Der Run Context hält insbesondere:

- Request-Metadaten
- Session- und Tenant-Bezug
- aktives Prompt-Set
- erlaubte Skills
- Memory-Zugriffsstatus
- Budget- und Tokenrahmen
- Run-Status
- Evaluierungsstatus
- Trace-Referenzen

## Nicht verantwortlich für

Der Run Context ist nicht verantwortlich für:

- Persistenz von Memory
- Skill-Implementierung
- Policy-Definition selbst
- langfristige Benutzerhistorie
- Vektorspeicherung oder Retrieval

## Abgrenzung zu Memory

Das ist architektonisch kritisch:

### Run Context
ist der **transiente Laufzeitkontext**

### Memory
ist die **regelgesteuerte, persistente Gedächtnisschicht**

Das bedeutet:

- Der Run Context hält nur, was für den aktuellen Lauf nötig ist.
- Memory hält nur, was nach definierten Regeln dauerhaft relevant ist.
- Der Orchestrator darf diese beiden Ebenen nicht vermischen.

## Abgrenzung zu Qdrant und Mem0

Der Run Context spricht nicht direkt in eigener Logik „Memory-Semantik“.

Stattdessen gilt:

- **Mem0** ist zuständig für Memory-Logik, Auswahl, Kategorisierung und Write-Verhalten
- **Qdrant** ist zuständig für Retrieval und Vektor-Persistenz
- der Run Context hält nur die Information, **ob** und **unter welchen Regeln** darauf im aktuellen Run zugegriffen werden darf

## Mögliche Bestandteile

Ein minimal brauchbarer Run Context könnte später diese Bereiche enthalten:

```text
RunContext
- run_id
- request
- session
- tenant
- prompt_set
- allowed_skills
- memory_access
- budget
- runtime_state
- evaluation_state
- trace
