---
name: intake
description: handle initial user requests by clarifying the task, identifying the smallest viable path, and avoiding unnecessary scope, memory use, or orchestration. use when a request is new, ambiguous, or needs structured intake before execution.
---

# Intake Skill

## Goal

Handle new requests by reducing ambiguity, defining the task clearly, and choosing the smallest viable next action.

## Rules

- Clarify the concrete task before expanding scope.
- Prefer the smallest executable next step.
- Do not introduce memory, orchestration, or additional tools unless needed.
- Keep intake structured and economical.
- Separate understanding from execution.

## Output

Produce:
- a clear restatement of the task
- the immediate next step
- any critical constraint that must be respected
