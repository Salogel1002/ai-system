# RULES.md — Active Operating Rules (LEAN v5.0)

**Owner:** ALEX | **Updated:** 2026-03-27
**Scope:** ACTIVE rules only (historical rules in Mem0)

---

## RULE-001 — VirusTotal-Gate vor ClawHub-Install
Status: ACTIVE
Trigger: ClawHub Skill Installation
Required: VirusTotal-Check vor Install. Bei Flag: Ablehnen.
Owner: ALEX

---

## RULE-002 — Max 2 User-facing Telegram Bots
Status: ACTIVE
Trigger: Neue Agenten/Bots
Required: Only ALEX + SOPHIE. Others internal.
Owner: ALEX

---

## RULE-003 — Fieldwork Font in Word Docs
Status: ACTIVE
Trigger: DOCX with Fieldwork
Required: Font-Name korrekt (Fieldwork Geo Light, nicht TTF-Dateiname)
Owner: ALEX

---

## RULE-004 — Anti-Halluzination: Quellenpflicht
Status: ACTIVE
Trigger: Jede Aussage ohne direkten Kontext
Required: Unverifizierbares als "nicht verifiziert" markieren. Nicht raten.
Owner: ALEX

---

## RULE-011 — Max 3 Retries für teure Tasks
Status: ACTIVE
Trigger: Browser-Tasks, API-Calls
Required: Nach 3 Fehlern STOP + Report. Nicht weitermachen ohne Freigabe.
Owner: ALEX
Linked: Cost Control (€1000-week prevention)

---

## RULE-012 — Auto-Reset Sessions bei Context-Overflow
Status: ACTIVE
Trigger: Session >15MB ODER Context-Overflow-Fehler
Required: `/reset` + notify. Verhindert Kosten-Bloat.
Owner: ALEX
Linked: Haiku Context Management (200k limit)

---

*Historische Regeln: Mem0 (query "RULES patterns")*
*Gates + Compliance: memory/STATE.md*
*Improvement Protocol: IMPROVEMENT_PROTOCOL.md*
