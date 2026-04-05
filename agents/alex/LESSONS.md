# LESSONS.md — ALEX · Essentials Concept Agenten-OS
**Owner:** ALEX (Governance) | **Karsten:** Systemeigentümer
**Protokoll:** IMPROVEMENT_PROTOCOL.md v4.0
**Format:** AKTIVE LESSONS (Session-Start laden) | ARCHIV (nicht standardmäßig laden)
**Limit aktiver Block:** max. 25 Einträge / 1.500 Wörter · darüber: ALEX komprimiert/archiviert

---

## AKTIVE LESSONS

### L001 — 2026-03-13 — ALEX — VirusTotal-Flag = sofortiger Stopp
Status: active
Valid since: 2026-03-13
Expires: PERMANENT
Type: D (Process Failure)
Scope: all agents
Near Miss or Escape: near_miss
What happened: ClawHub-Skill `elite-longterm-memory` hatte VirusTotal-Flag. Erstes Mal fast installiert.
Why it mattered: Schadcode im System würde alle Daten gefährden.
Root cause: Kein explizites Pre-Check-Gate vor Installation (Policy Gap).
Correct rule going forward: Jeder ClawHub-Skill → VirusTotal prüfen vor Install. Bei Flag: ablehnen, kein `--force`, nie.
Linked rules: RULE-001
Owner: ALEX
Approved by: Karsten

---

### L002 — 2026-03-14 — ALEX — Zu viele Telegram-Bots = ADHD-Falle
Status: active
Valid since: 2026-03-14
Expires: 2026-05-14
Type: D (Process Failure)
Scope: ALEX, system design
Near Miss or Escape: escape (7 Bots wurden registriert bevor Karsten eingriff)
What happened: Aufbau von 7+ Telegram-Bots. Karsten: "Ich verliere mich, ich will nur mit Dir reden."
Why it mattered: Viele Eingangstüren = Wissens-Silos, Kontrollverlust, ADHD-Trigger.
Root cause: Process Design Failure — Jeder Agent = eigener Bot angenommen, kein Gate für UX-Impact.
Correct rule going forward: Max. 2 User-facing Telegram-Bots (ALEX + SOPHIE). Alle anderen = interne Agenten ohne eigene Kanäle.
Linked rules: RULE-002
Owner: ALEX
Approved by: Karsten

---

### L003 — 2026-03-14 — ALEX — Font-Namen in Word ≠ Dateinamen
Status: active
Valid since: 2026-03-14
Expires: 2026-06-14
Type: E (Infrastructure Failure)
Scope: ALEX, DESIGN
Near Miss or Escape: escape (falsche Fonts in mehreren DOCX-Versionen)
What happened: Fieldwork-Font in DOCX mit Dateinamen referenziert → Word-Fehler.
Why it mattered: EC-Dokumente ohne korrekte Schrift = Branding-Fehler.
Root cause: Tool Failure — python-docx verwendet Family-Namen, nicht Dateinamen.
Correct rule going forward: Word-Fonts: `Fieldwork Geo Light` (body), `Fieldwork Geo Bold` (bold). Immer Family-Namen, nie Dateinamen. Theme-Font-Override via XML-Level stripping.
Linked rules: RULE-003
Owner: ALEX
Approved by: ALEX

---

## ARCHIV

*(Abgelaufene oder archivierte Lessons — nicht standardmäßig laden)*
