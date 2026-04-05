# Run Context Schema

Dieses Dokument definiert die formale Struktur des Run Context als Datenmodell.  
Es ist die Grundlage für jede spätere Implementierung (egal ob JSON, TypeScript, Python etc.).

## Zweck

Das Schema stellt sicher, dass der Run Context:

- eindeutig strukturiert ist
- maschinenlesbar ist
- zwischen Modulen konsistent bleibt
- keine impliziten Felder enthält

## Grundprinzipien

### 1. Explizite Felder
Jede Information hat ein klares, benanntes Feld.

### 2. Keine versteckten Zustände
Alles, was relevant ist, steht im Schema.

### 3. Erweiterbarkeit
Neue Felder dürfen ergänzt werden, ohne bestehende Struktur zu brechen.

### 4. Trennung von Kontext und Logik
Das Schema beschreibt Daten, nicht Verhalten.

## Struktur (kanonisch)

```text
RunContext
- run_id: string
- request:
    - input: string
    - task_type: string
- session:
    - session_id: string
    - user_id: string | null
- tenant:
    - tenant_id: string | null
- role:
    - active_role: string
- prompts:
    - system_prompt_id: string
    - task_prompt_id: string
    - evaluator_prompt_id: string
- skills:
    - allowed_skills: string[]
- memory:
    - read_allowed: boolean
    - write_allowed: boolean
    - categories: string[]
- budget:
    - token_budget: number | null
    - cost_budget: number | null
    - time_budget: number | null
    - remaining_tokens: number | null
- execution:
    - run_type: string
    - max_rebuilds: number
    - current_rebuild_count: number
- state:
    - current_state: string
- evaluation:
    - status: string | null
- trace:
    - trace_id: string
