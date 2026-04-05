# Skill Review Policy

Die Skill Review Policy definiert, nach welchen Kriterien ein Skill nach dem Intake bewertet und für das System freigegeben, eingeschränkt oder blockiert wird.

## Zweck

Dieses Dokument stellt sicher, dass die Entscheidung über neue Skills nicht willkürlich, sondern nachvollziehbar, konsistent und risikobewusst erfolgt.

Ohne Skill Review Policy entstehen:
- uneinheitliche Freigaben
- unklare Qualitätsstandards
- zu schnelle Aktivierung externer Skills
- erhöhte Sicherheits-, Kosten- und Architektur-Risiken

## Grundprinzipien

### 1. Review vor Freigabe
Kein neuer Skill wird produktiv nutzbar, bevor ein Review erfolgt ist.

### 2. Quelle beeinflusst Prüftiefe
Interne Skills können anders geprüft werden als externe oder über Clawhub installierte Skills.

### 3. Architekturverträglichkeit vor Nützlichkeit
Ein Skill darf nicht nur deshalb freigegeben werden, weil er „praktisch“ ist.  
Er muss in Zuständigkeiten, Policies und Runtime-Verhalten passen.

### 4. Risiko ist explizit zu bewerten
Jeder Skill muss auf Seiteneffekte, Abhängigkeiten, Kosten und Kontrollierbarkeit geprüft werden.

## Review-Fragen

Ein Skill-Review muss mindestens beantworten:

1. Was ist der präzise Zweck des Skills?
2. Überschneidet er bestehende Skills?
3. Ist die Quelle vertrauenswürdig?
4. Welche Inputs und Outputs hat der Skill?
5. Welche Side Effects sind möglich?
6. Welche Kosten oder Laufzeitrisiken entstehen?
7. Kann der Skill sauber durch Policies begrenzt werden?
8. Passt der Skill in die bestehende Architektur?

## Bewertungsdimensionen

Ein erster sinnvoller Satz ist:

```text
FUNCTIONAL_FIT
ARCHITECTURAL_FIT
RISK_LEVEL
COST_PROFILE
SOURCE_TRUST
SIDE_EFFECT_PROFILE
POLICY_CONTROLLABILITY
