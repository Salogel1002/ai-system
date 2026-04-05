import type { RunContext } from "../types/runContext";

export function writeTrace(context: RunContext, decision: string): string {
  // Minimaler Trace für MVP
  const trace = [
    "REQUEST_RECEIVED",
    "CONTEXT_BUILT",
    "PROMPTS_LOADED",
    "RUN_STARTED",
    "RUN_COMPLETED",
    `DECISION_${decision}`,
  ];

  // Für MVP geben wir nur die trace_id zurück
  // später kann hier Logging / Speicherung erfolgen
  return context.trace.trace_id;
}
