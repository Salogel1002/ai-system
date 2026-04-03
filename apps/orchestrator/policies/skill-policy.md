# Skill Policy

Die Skill Policy definiert, unter welchen Bedingungen Skills innerhalb eines Orchestrator-Runs verwendet werden dürfen. Sie schützt das System vor unkontrollierter, impliziter oder unnötiger Skill-Nutzung.

## Zweck

Dieses Dokument stellt sicher, dass Skills nur dann verwendet werden, wenn ihre Nutzung fachlich sinnvoll, technisch erlaubt und durch die aktuelle Run-Situation gedeckt ist.

Ohne Skill Policy entstehen:
- unklare Zuständigkeiten
- unnötige Tool-Aufrufe
- schwer kontrollierbare Kosten
- unvorhersehbares Laufzeitverhalten

## Grundprinzipien

### 1. Kein Skill ohne Freigabe
Ein Skill darf nur verwendet werden, wenn er für den aktuellen Run explizit zulässig ist.

### 2. Policy vor Invocation
Vor jedem Skill-Aufruf muss geprüft werden:
- ist der Skill grundsätzlich erlaubt?
- ist der Skill für diesen Run erlaubt?
- ist der Skill in dieser Phase des Lifecycles erlaubt?
- ist die Nutzung budgetär vertretbar?

### 3. Skills sind begrenzte Einheiten
Skills sind keine offene Agentenfreiheit, sondern kontrollierte Funktionsbausteine.

### 4. Nachvollziehbarkeit
Jede Skill-Nutzung muss im Run Trace sichtbar sein.

## Typische Policy-Fragen

Eine Skill Policy muss mindestens beantworten:

1. Welche Skills sind global erlaubt?
2. Welche Skills sind pro Task-Typ erlaubt?
3. Welche Skills sind im aktuellen Run erlaubt?
4. Welche Skills sind verboten?
5. Welche Skills sind nur unter Bedingungen erlaubt?
6. Wie oft darf ein Skill aufgerufen werden?

## Mögliche Policy-Kategorien

Ein minimaler Satz könnte sein:

```text
ALLOW
DENY
ALLOW_WITH_CONDITIONS
LIMITED_USE
