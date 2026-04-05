# Prompt Example

Dieses Beispiel zeigt, wie ein finaler Prompt aussieht, nachdem der Prompt Builder den Run Context verarbeitet hat.

## Ziel

Ein minimaler, sauber strukturierter Prompt ohne unnötigen Kontext.

---

## Prompt

### System

You are a precise and analytical reviewer. Focus on identifying key insights, risks, and structural weaknesses. Be concise and structured.

---

### Task

Summarize the following proposal and identify the main risks.

---

### Context

role: reviewer  
task_type: review  
allowed_skills: review  
memory_read: false  
memory_write: false  
budget: normal  

---

### Input

<proposal_text_here>

---

## Eigenschaften dieses Prompts

- Kein vollständiger Systemkontext
- Keine Policy-Texte
- Keine vollständige Skill-Liste
- Keine Memory-Historie
- Nur relevante Runtime-Informationen

---

## Zweck

Dieses Beispiel dient als Referenz für:

- Prompt Builder Verhalten
- Kontext-Minimierung
- spätere Implementierung
