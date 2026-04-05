# Capability Matrix

Die Capability Matrix definiert, welche Skill-Kategorien von welchen Subagenten, Souls oder Rollen unter welchen Bedingungen genutzt werden dürfen.

Sie ist die verbindliche Zuordnung zwischen:
- vorhandenen Skills
- erlaubten Fähigkeitsräumen
- konkreten Nutzungskontexten

## Zweck

Dieses Dokument stellt sicher, dass nicht jeder bekannte oder freigegebene Skill automatisch von jedem Unteragenten verwendet werden darf.

Ohne Capability Matrix entstehen:
- Tool-Wildwuchs
- unklare Zuständigkeiten
- inkonsistente Agentenrollen
- zu breite oder gefährliche Handlungsspielräume

## Grundprinzipien

### 1. Existenz ist nicht Berechtigung
Nur weil ein Skill registriert und freigegeben ist, darf er nicht automatisch von allen genutzt werden.

### 2. Rolle vor Fähigkeit
Die Rolle eines Subagents oder Souls bestimmt, welche Skill-Klassen überhaupt in Frage kommen.

### 3. Capability statt Einzelfallchaos
Die Matrix arbeitet primär mit Fähigkeitsräumen und Kategorien, nicht nur mit Einzelskill-Sonderfällen.

### 4. Einschränkungen sind normal
Default ist nicht maximale Freiheit, sondern kontrollierte Befähigung.

## Was die Matrix beantwortet

Die Capability Matrix muss mindestens beantworten:

1. Welche Skill-Kategorien existieren?
2. Welche Subagenten oder Souls gibt es?
3. Welche Kategorien darf welcher Agent nutzen?
4. Unter welchen Bedingungen gilt die Freigabe?
5. Welche Fähigkeiten sind verboten?
6. Welche Fähigkeiten sind read-only, review-only oder eingeschränkt?

## Ebenen der Zuordnung

Eine brauchbare Matrix hat mindestens diese Ebenen:

```text
agent_or_soul
-> capability_category
-> allowed | restricted | denied
-> conditions
